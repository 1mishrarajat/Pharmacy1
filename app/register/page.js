'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    state: "",
    password: "",
    institute: "",
    ip_address: "196.169.0.1", // Default IP address set to 196.169.0.1
    pin: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    if (!ipRegex.test(formData.ip_address)) {
      toast.error("Invalid IP address format.");
      return false;
    }

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        toast.error(`${key.replace(/([A-Z])/g, " $1")} is required.`);
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      try {
        const response = await fetch('https://dir.mripub.com/api/Regristration.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Store the username in localStorage
          localStorage.setItem("username", formData.username);
          localStorage.setItem("institute", formData.institute);
          // Show success toast without onClose redirection
          toast.success("Registration successful!");
          
          // Redirect immediately after showing the toast
          router.push("/subscription");
        } else {
          toast.error("Failed to register. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred while registering. Please try again.");
      }
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Registers</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-[url('/bg-10.png')] bg-no-repeat bg-coverz bg-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
          <div className="flex justify-center">
            <img
              src="./Pharmanetlogo.png"
              alt="Logo"
              width={128}
              height={128}
              className="w-32 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register Now</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["first_name", "last_name", "username", "password", "institute", "phone", "country", "state", "city", "pin", "address"].map((field, idx) => (
              <div key={idx}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                  {field.replace(/_/g, " ").toUpperCase()}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === "password" ? "password" : "text"}
                  placeholder={`Enter your ${field.replace(/_/g, " ")}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
                  required
                />
              </div>
            ))}
            <div key={7}>
              <label htmlFor="ip_address" className="block text-sm font-medium text-gray-700">
                IP ADDRESS
              </label>
              <input
                id="ip_address"
                name="ip_address"
                type="text"
                value="196.169.0.1"  // Static IP address
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
                required
                disabled  // Disable the input field
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm"
              >
                Register Now
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-500 text-center mt-4">
            Already have an account?{" "}
            <a href="/Login" className="text-blue-500 cursor-pointer hover:underline">Log in</a>
          </p>
        </div>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </HelmetProvider>
  );
}
