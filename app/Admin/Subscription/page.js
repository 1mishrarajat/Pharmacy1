"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEdit } from "react-icons/fa"; // Edit icon
import { ToastContainer, toast } from 'react-toastify'; // Importing Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Importing Toastify styles

export default function Subscription() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    is_subscribed: "",
    user_id: "",
    start_date: "",
    expiry_date: "",
  });

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setError("No token found. Please log in.");
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        const response = await axios.get("https://dir.mripub.com/api/active.php", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const handleEditClick = (user) => {
    setSelectedUser(user);

    const startDateFormatted = isValidDate(user.start_date)
      ? new Date(user.start_date).toISOString().split('T')[0]
      : "";
    const expiryDateFormatted = isValidDate(user.expiry_date)
      ? new Date(user.expiry_date).toISOString().split('T')[0]
      : "";

    setFormData({
      is_subscribed: user.is_subscribed,
      user_id: user.user_id,
      start_date: startDateFormatted,
      expiry_date: expiryDateFormatted,
    });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({
      is_subscribed: "",
      user_id: "",
      start_date: "",
      expiry_date: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://dir.mripub.com/api/active.php`,
        {
          is_subscribed: formData.is_subscribed,
          user_id: formData.user_id,
          start_date: formData.start_date,
          expiry_date: formData.expiry_date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      // Show success toast
      toast.success("Data updated successfully!");

      setIsModalOpen(false);
      setData((prevData) =>
        prevData.map((user) =>
          user.user_id === selectedUser.user_id
            ? {
                ...user,
                start_date: formData.start_date,
                expiry_date: formData.expiry_date,
                is_subscribed: formData.is_subscribed,
              }
            : user
        )
      );
    } catch (err) {
      setError("Failed to update user data.");
      toast.error("Failed to update user data."); // Show error toast
    }
  };

  const isValidDate = (date) => {
    const parsedDate = new Date(date);
    return !isNaN(parsedDate.getTime());
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin/Subscriptions</title>
      </Helmet>

      <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
            <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
                Subscription Data
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
                  <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
                    <tr>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">Status</th>
                      <th className="px-2 py-2 sm:px-4 sm:py-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <tr
                          key={item.user_id}
                          className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
                        >
                          <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
                          <td className="px-2 sm:px-4 py-2 border">{item.full_name}</td>
                          <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
                          <td className="px-2 sm:px-4 py-2 border">
                            {new Date(item.start_date).toLocaleDateString()}
                          </td>
                          <td className="px-2 sm:px-4 py-2 border">
                            {new Date(item.expiry_date).toLocaleDateString()}
                          </td>
                          <td className="px-2 sm:px-4 py-2 border justify-center">
                            {parseInt(item.is_subscribed) === 1 ? (
                              <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-500 rounded-full">
                                Active
                              </span>
                            ) : (
                              <span className="inline-block px-3 py-1 text-xs font-semibold text-red-700 bg-red-300 rounded-full">
                                Inactive
                              </span>
                            )}
                          </td>

                          <td className="px-2 sm:px-4 py-2 border text-center">
                            <div className="flex justify-center items-center h-full">
                              <FaEdit
                                className="text-blue-500 cursor-pointer"
                                onClick={() => handleEditClick(item)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-4 py-4 text-center text-gray-500"
                        >
                          No data available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">Edit Subscription</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  User ID
                </label>
                <input
                  type="text"
                  name="user_id"
                  value={formData.user_id}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Subscribe ID
                </label>
                <input
                  type="text"
                  name="is_subscribed"
                  value={formData.is_subscribed}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="date"
                  name="expiry_date"
                  value={formData.expiry_date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </HelmetProvider>
  );
}
