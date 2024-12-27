
"use client";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SettingsPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    institute: "",
    password: "",
    confirmPassword: "",
  });

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
          setFormData({
            first_name: result.data.first_name || "",
            last_name: result.data.last_name || "",
            username: result.data.username || "",
            institute: result.data.institute || "",
            password: "",
            confirmPassword: "",
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
    const { first_name, last_name, username, institute, password, confirmPassword } = formData;

    if (!first_name || !last_name || !username || !institute) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill  all the fields.",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password must match.",
      });
      return;
    }

    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch("https://dir.mripub.com/api/setting.php", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          first_name,
          last_name,
          username,
          institute,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update settings");
      }

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated",
          text: "Your profile has been updated successfully.",
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

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Settings</title>
      </Helmet>
      <main className="flex-1 max-w-full mx-auto p-6 space-y-8">
        <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <img src="./Pharmanetlogo.png" alt="Logo" className="w-28 object-contain" />
          <button
            onClick={() => {
              Swal.fire({
                title: "Logged Out",
                text: "You have been logged out!",
                icon: "success",
                confirmButtonText: "OK",
              }).then(() => {
                localStorage.removeItem("authToken");
                router.push("/Login");
              });
            }}
            className="px-4 py-2 bg-blue-900 text-white font-medium rounded-lg shadow hover:bg-blue-900"
          >
            Logout
          </button>
        </header>
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="relative">
            <img src="flat.png" alt="Profile" className="w-40 h-40 sm:w-40 sm:h-40" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Welcome, Admin!</h3>
            <p className="text-sm text-gray-500">
              Keep your profile updated for better account security.
            </p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "First Name", name: "first_name", type: "text" },
              { label: "Last Name", name: "last_name", type: "text" },
              { label: "Username", name: "username", type: "email" },
              { label: "Institute", name: "institute", type: "text" },
              { label: "Password", name: "password", type: "password" },
              { label: "Confirm Password", name: "confirmPassword", type: "password" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-600">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  onChange={handleChange}
                  className="mt-1 px-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-teal-400"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 focus:ring-2 focus:ring-teal-400 focus:outline-none"
            >
              Save Profile
            </button>
          </div>
        </div>
      </main>
    </HelmetProvider>
  );
};

export default SettingsPage;
