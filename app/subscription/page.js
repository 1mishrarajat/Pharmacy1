
'use client';

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const SubscriptionPage = () => {
  const qrCodeImage = "https://images.all-free-download.com/images/graphiclarge/qr_scan_poster_elegant_leaves_decor_6854091.jpg";
  const backgroundImage = "https://media.gettyimages.com/id/1370717155/video/4k-video-footage-of-a-unrecognizable-woman-using-a-tablet-in-a-cafe.jpg?s=640x640&k=20&c=Grj9wqe2DHw2naFFpjWr0unGa9fD2QeNNMT-kJv7y_s=";

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const storedUsername = localStorage.getItem("registeredUsername");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubscribe = async () => {
    if (!username.trim()) {
      // Show SweetAlert for missing username
      Swal.fire({
        title: "Error",
        text: "Username is required. Please enter a valid username.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setIsLoading(true); // Show loading state
    try {
      const response = await fetch('https://dir.mripub.com/api/subscriptions.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      if (data.username) {
        // Show SweetAlert for success and redirect after 3 seconds
        Swal.fire({
          title: "Subscription Successful!",
          text: "Your subscription has been successfully completed. Redirecting to login...",
          icon: "success",
          timer: 1000, // 3 seconds
          showConfirmButton: false,
        });

        setTimeout(() => {
          window.location.href = '/Login'; // Redirect to login
        }, 1000);
      } 
      else {
        // Show SweetAlert for API failure
        Swal.fire({
          title: "Error",
          text: data.message || "Subscription fa. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      // Show SweetAlert for unexpected errors
      Swal.fire({
        title: "Error",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  const handleSkip = () => {
    window.location.href = '/register';
  };

  const handleLogin = () => {
    window.location.href = '/Login';
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90"></div>

      <div
        className={`relative z-10 bg-white rounded-2xl shadow-lg p-8 max-w-4xl w-full transform transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <img
              src={qrCodeImage}
              alt="QR Code"
              className="w-64 h-64 object-contain rounded-xl shadow-lg"
            />
            <p className="mt-4 text-gray-600 text-sm">Scan the QR code to subscribe.</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe now</h2>
            <p className="text-gray-600 mb-6">
              Subscribe now and unlock exclusive benefits. Enter your username below to proceed.
            </p>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-transform duration-300 transform hover:scale-105 shadow-lg flex-1"
                onClick={handleSubscribe}
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
              <button
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-transform duration-300 transform hover:scale-105 shadow-lg flex-1"
                onClick={handleSkip}
              >
                Skip
              </button>
              <button
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105 shadow-lg flex-1"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
