"use client";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SettingsPage = () => {
  const [profileImage, setProfileImage] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    institute: "",
    password: "",
    confirm_password: "",
  });

  const [adminName, setAdminName] = useState("");  // State to hold the admin's name
  const router = useRouter();

  // Fetch the current user data
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Authorization Required",
          text: "Please log in to access your profile.",
        });
        router.push("/Login");
        return;
      }

      try {
        const response = await fetch("https://dir.mripub.com/api/setting.php", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const result = await response.json();

        if (result.success) {
          setAdminName(result.data.first_name);  // Set the admin's name here
          setFormData({
            first_name: result.data.first_name || "",
            last_name: result.data.last_name || "",
            username: result.data.username || "",
            institute: result.data.institute || "",
            password: "",  // Keep the password fields empty initially
            confirm_password: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: result.message || "Unable to fetch user data.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "An unexpected error occurred.",
        });
      }
    };

    fetchUserData();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const {
      first_name,
      last_name,
      username,
      institute,
      password,
      confirm_password,
    } = formData;

    // Validate non-password fields
    if (!first_name || !last_name || !username || !institute) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill all the fields.",
      });
      return;
    }

    // If passwords are provided, check that they match
    if (password && password !== confirm_password) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password must match.",
      });
      return;
    }

    try {
      const token = localStorage.getItem("authToken");

      // Request data based on whether password fields are provided
      const data = {
        first_name,
        last_name,
        username,
        institute,
      };

      // Only add password fields if the user is changing the password
      if (password) {
        data.password = password;
      }

      const response = await fetch("https://dir.mripub.com/api/setting.php", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update settings");
      }

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: result.message || "Your profile has been updated successfully.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: result.message || "An error occurred while updating your profile.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "An unexpected error occurred.",
      });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin/Settings</title>
      </Helmet>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4 sm:p-8 space-y-6">
            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-br from-white via-gray-100 to-gray-200 p-4 sm:p-8 rounded-3xl shadow-lg">
              <div className="relative inline-block mb-4 sm:mb-0">
                <img
                  src={profileImage}
                  alt=""
                  onClick={() => document.getElementById("image-upload").click()}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-teal-500 shadow-lg transform transition-transform hover:scale-110 mx-auto cursor-pointer"
                  title="Click to change profile picture"
                />
                <label
                  htmlFor="image-upload"
                  className="absolute bottom-2 right-2 bg-teal-600 text-white p-2 rounded-full shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  title="Change Profile Picture"
                >
                  <i className="fas fa-camera"></i>
                </label>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
                  Welcome, {adminName || ""}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Keep your profile updated for better account security.
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 sm:p-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Edit Profile</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    placeholder="Enter the First Name"
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 w-full border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    placeholder="Enter the Last Name"
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 w-full border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="username"
                    value={formData.username}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 w-full border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Institution</label>
                  <input
                    type="text"
                    name="institute"
                    value={formData.institute}
                    placeholder="Enter your Institution"
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 w-full border rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter a new password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 w-full border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm your password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    className="mt-1 px-4 py-2 w-full border rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-6 text-right">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default SettingsPage;

