
// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar"; // Adjust path if needed
// import Header from "../Header"; // Adjust path if needed
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
// import Swal from 'sweetalert2'; // Import SweetAlert2
// import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

// export default function Customers() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editMode, setEditMode] = useState(false); // Track whether we are in edit mode
//   const [formData, setFormData] = useState({
//     id: '',
//     first_name: '',
//     last_name: '',
//     username: '',
//     phone: '',
//     country: '',
//     address: '',
//     city: '',
//     state: '',
//     institute: '',
//     pin: '',
//     ip_address: ''
//   });

//   // Check if token is available in localStorage on component mount
//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken); // Set token state if available
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   // Fetch data only if token is available
//   useEffect(() => {
//     if (!token) return; // Skip fetch if token is not present

//     const fetchData = async () => {
//       try {
//         // Ensure the token is sent in the Authorization header
//         const response = await axios.get(
//           "https://dir.mripub.com/api/Customers.php",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`, // Attach the token to the Authorization header
//             },
//           }
//         );
//         setData(response.data.customers); // Update state with the fetched data
//         setIsLoading(false); // Turn off loading state
//       } catch (err) {
//         setError("Failed to fetch data. Please try again."); // Set error state in case of failure
//         setIsLoading(false); // Turn off loading state
//       }
//     };

//     fetchData(); // Trigger the fetch request
//   }, [token]);

//   const handleView = (customer) => {
//     setSelectedCustomer(customer);
//     setIsModalOpen(true);
//     setEditMode(false); // Set view mode
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "Do you want to delete this customer?",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//     }).then(async (result) => {
//         if (result.isConfirmed) {
//             try {
//                 // Sending DELETE request with the customer ID in the URL query string
//                 const response = await axios.delete(`https://dir.mripub.com/api/Customers.php?id=${id}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`, // Add the token for authorization
//                     },
//                 });

//                 if (response.status === 200) {
//                     toast.success('Customer deleted successfully!');
//                     setData(data.filter((item) => item.id !== id)); // Remove the deleted customer from the state
//                 } else {
//                     throw new Error('Failed to delete customer.');
//                 }
//             } catch (error) {
//                 toast.error('Error deleting customer. Please try again.');
//             }
//         }
//     });
// };


//   const handleEdit = (customer) => {
//     setFormData({
//       id: customer.id,
//       first_name: customer.first_name,
//       last_name: customer.last_name,
//       username: customer.username,
//       phone: customer.phone,
//       country: customer.country,
//       address: customer.address,
//       city: customer.city,
//       state: customer.state,
//       institute: customer.institute,
//       pin: customer.pin,
//       ip_address: customer.ip_address,
//     });
//     setEditMode(true); // Set edit mode
//     setIsModalOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleUpdate = async () => {
//     try {
//       // Sending update request with authorization header
//       const response = await axios.put(
//         "https://dir.mripub.com/api/Customers.php", // API endpoint for updating customer
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include token in request header
//           },
//         }
//       );
      
//       if (response.status === 200) {
//         toast.success('Customer updated successfully!');
//         setData(data.map(item => (item.id === formData.id ? formData : item))); // Update customer in the state
//         setIsModalOpen(false); // Close the modal
//         setFormData({}); // Reset form data
//       }
//     } catch (error) {
//       toast.error('Error updating customer. Please try again.');
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedCustomer(null);
//     setFormData({}); // Reset form data
//   };

//   // Handling loading state
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

//   // Handling errors
//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-red-600">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <HelmetProvider>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Admin/Customers</title>
//       </Helmet>
//       <div className="flex flex-col md:flex-row h-screen bg-gray-50 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 bg-gray-50">
//             <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
//               <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
//                 Customers Data
//               </h2>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-xs sm:text-sm font-semibold">
//                     <tr>
//                       <th className="px-2 py-3 border">S.No.</th>
//                       <th className="px-2 py-3 border">First Name</th>
//                       <th className="px-2 py-3 border">Last Name</th>
//                       <th className="px-2 py-3 border">Username (Email)</th>
//                       <th className="px-2 py-3 border">Phone</th>
//                       <th className="px-2 py-3 border">Institute</th>
//                       <th className="px-2 py-3 border">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200"
//                         >
//                           <td className="px-2 py-3 border">{item.id}</td>
//                           <td className="px-2 py-3 truncate border">{item.first_name}</td>
//                           <td className="px-2 py-3 truncate border">{item.last_name}</td>
//                           <td className="px-2 py-3 truncate border">{item.username}</td>
//                           <td className="px-2 py-3 border">{item.phone}</td>
//                           <td className="px-2 py-3 border">{item.institute}</td>
//                           <td className="px-2 py-3 border flex space-x-3">
//                             <button
//                               className="text-blue-600 hover:text-blue-800"
//                               onClick={() => handleView(item)}
//                             >
//                               <FaEye />
//                             </button>
//                             <button
//                               className="text-green-600 hover:text-green-800"
//                               onClick={() => handleEdit(item)}
//                             >
//                               <FaEdit />
//                             </button>
//                             <button
//                               className="text-red-600 hover:text-red-800"
//                               onClick={() => handleDelete(item.id)}
//                             >
//                               <FaTrashAlt />
//                             </button>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
//                           No data available
//                         </td>
//                       </tr>
//                     )}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h3 className="text-xl font-bold mb-4">{editMode ? "Edit Customer" : "Customer Details"}</h3>
//             {editMode ? (
//               <div>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="First Name"
//                 />
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Last Name"
//                 />
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Email"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Phone"
//                 />
//                 <input
//                   type="text"
//                   name="institute"
//                   value={formData.institute}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Institute"
//                 />
//                 <input
//                   type="text"
//                   name="country"
//                   value={formData.country}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Country"
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Address"
//                 />
//                 <input
//                   type="text"
//                   name="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="City"
//                 />
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="State"
//                 />
//                 <input
//                   type="text"
//                   name="pin"
//                   value={formData.pin}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="Pin Code"
//                 />
//                 <input
//                   type="text"
//                   name="ip_address"
//                   value={formData.ip_address}
//                   onChange={handleInputChange}
//                   className="mb-2 p-2 w-full border border-gray-300 rounded"
//                   placeholder="IP Address"
//                 />
               
//                 <div className="flex justify-end space-x-2">
//                   <button
//                     onClick={closeModal}
//                     className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={handleUpdate}
//                     className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
//                   >
//                     Save
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div>
//                 {/* Display customer details */}
//                 <p>
//                   <strong>First Name:</strong> {selectedCustomer.first_name}
//                 </p>
//                 <p>
//                   <strong>Last Name:</strong> {selectedCustomer.last_name}
//                 </p>
//                 <p>
//                   <strong>Email:</strong> {selectedCustomer.username}
//                 </p>
//                 <p>
//                   <strong>Phone:</strong> {selectedCustomer.phone}
//                 </p>
//                 <p>
//                   <strong>Institute:</strong> {selectedCustomer.institute}
//                 </p>
//                 <p>
//                   <strong>Address:</strong> {selectedCustomer.address}
//                 </p>
//                 <p>
//                   <strong>City:</strong> {selectedCustomer.city}
//                 </p>
//                 <p>
//                   <strong>State:</strong> {selectedCustomer.state}
//                 </p>
//                 <p>
//                   <strong>Country:</strong> {selectedCustomer.country}
//                 </p>
//                 <p>
//                   <strong>Pin:</strong> {selectedCustomer.pin}
//                 </p>
//                 <p>
//                   <strong>IP Address:</strong> {selectedCustomer.ip_address}
//                 </p>
//                 <div className="flex justify-end space-x-2">
//                   <button
//                     onClick={closeModal}
//                     className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}

//       <ToastContainer />
//     </HelmetProvider>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Customers() {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
    institute: "",
    pin: "",
    ip_address: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setError("No token found. Please log in.");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        const response = await axios.get("https://dir.mripub.com/api/Customers.php", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.customers);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [token]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleView = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
    setEditMode(false);
  };

  const handleEdit = (customer) => {
    setFormData({ ...customer });
    setEditMode(true);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this customer?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`https://dir.mripub.com/api/Customers.php?id=${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.status === 200) {
            toast.success("Customer deleted successfully!");
            setData(data.filter((item) => item.id !== id));
            if ((currentPage - 1) * itemsPerPage >= data.length - 1) {
              setCurrentPage(currentPage - 1);
            }
          } else {
            throw new Error("Failed to delete customer.");
          }
        } catch (error) {
          toast.error("Error deleting customer. Please try again.");
        }
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put("https://dir.mripub.com/api/Customers.php", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("Customer updated successfully!");
        setData(data.map((item) => (item.id === formData.id ? formData : item)));
        closeModal();
      }
    } catch (error) {
      toast.error("Error updating customer. Please try again.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
    setFormData({});
  };

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
        <title>Admin/Customers</title>
      </Helmet>
      <div className="flex flex-col md:flex-row h-screen bg-gray-50 text-gray-800">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 bg-gray-50">
            <div className="max-w-full mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-gray-800 mb-4">
                Customers Data
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left border-collapse border border-gray-300">
                  <thead className="bg-gray-700 text-white text-xs sm:text-sm font-semibold">
                    <tr>
                      <th className="px-2 py-3 border">S.No.</th>
                      <th className="px-2 py-3 border">First Name</th>
                      <th className="px-2 py-3 border">Last Name</th>
                      <th className="px-2 py-3 border">Username (Email)</th>
                      <th className="px-2 py-3 border">Phone</th>
                      <th className="px-2 py-3 border">Institute</th>
                      <th className="px-2 py-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                      // Skeleton rows
                      Array.from({ length: itemsPerPage }).map((_, idx) => (
                        <tr key={idx} className="animate-pulse bg-white hover:bg-white">
                          <td className="border px-2 py-3">
                            <div className="h-4 bg-gray-300 rounded w-6"></div>
                          </td>
                          <td className="border px-2 py-3">
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                          </td>
                          <td className="border px-2 py-3">
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                          </td>
                          <td className="border px-2 py-3">
                            <div className="h-4 bg-gray-300 rounded w-32"></div>
                          </td>
                          <td className="border px-2 py-3">
                            <div className="h-4 bg-gray-300 rounded w-20"></div>
                          </td>
                          <td className="border px-2 py-3">
                            <div className="h-4 bg-gray-300 rounded w-24"></div>
                          </td>
                          <td className="border px-2 py-3">
                            <div className="flex space-x-2">
                              <div className="h-4 w-4 bg-gray-300 rounded"></div>
                              <div className="h-4 w-4 bg-gray-300 rounded"></div>
                              <div className="h-4 w-4 bg-gray-300 rounded"></div>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : currentItems.length > 0 ? (
                      currentItems.map((item, index) => (
                        <tr
                          key={item.id}
                          className="bg-white hover:bg-gray-100 transition-colors duration-200"
                        >
                          <td className="px-2 py-3 border">{indexOfFirstItem + index + 1}</td>
                          <td className="px-2 py-3 border">{item.first_name}</td>
                          <td className="px-2 py-3 border">{item.last_name}</td>
                          <td className="px-2 py-3 border">{item.username}</td>
                          <td className="px-2 py-3 border">{item.phone}</td>
                          <td className="px-2 py-3 border">{item.institute}</td>
                          <td className="px-2 py-3 border flex space-x-3">
                            <button
                              className="text-blue-600 hover:text-blue-800"
                              onClick={() => handleView(item)}
                            >
                              <FaEye />
                            </button>
                            <button
                              className="text-green-600 hover:text-green-800"
                              onClick={() => handleEdit(item)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="text-red-600 hover:text-red-800"
                              onClick={() => handleDelete(item.id)}
                            >
                              <FaTrashAlt />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-4 text-gray-500">
                          No data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex flex-wrap justify-between items-center gap-2 mt-6">
                <button
                  className="bg-gray-400 text-white py-2 px-4 rounded-md disabled:bg-gray-600 w-full sm:w-auto"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1 || isLoading}
                >
                  Previous
                </button>
                <span className="text-center w-full sm:w-auto">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  className="bg-gray-400 text-white py-2 px-4 rounded-md disabled:bg-gray-600 w-full sm:w-auto"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages || isLoading}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Toast notifications */}
        <ToastContainer position="top-center" />

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">
                {editMode ? "Edit Customer" : "Customer Details"}
              </h3>

              {editMode ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleUpdate();
                  }}
                >
                  {Object.entries(formData).map(([key, value]) =>
                    key === "id" ? (
                      <input key={key} type="hidden" name={key} value={value} />
                    ) : (
                      <div key={key} className="mb-3">
                        <label className="block mb-1 capitalize" htmlFor={key}>
                          {key.replace(/_/g, " ")}
                        </label>
                        <input
                          id={key}
                          name={key}
                          type="text"
                          value={value || ""}
                          onChange={handleInputChange}
                          className="w-full border rounded px-3 py-2"
                        />
                      </div>
                    )
                  )}
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-2">
                  {Object.entries(selectedCustomer || {}).map(([key, value]) => (
                    <p key={key} className="capitalize">
                      <strong>{key.replace(/_/g, " ")}:</strong> {value}
                    </p>
                  ))}
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      onClick={closeModal}
                      className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setEditMode(true);
                        setFormData({ ...selectedCustomer });
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </HelmetProvider>
  );
}
