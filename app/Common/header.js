"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [institution, setInstitution] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAuthenticated(true);
        setInstitution(decoded.institution || "Not Available");
      } catch (error) {
        console.error("Invalid token:", error);
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    router.push("/Login");
  };

  if (isLoading) return null;

  return (
    <header className="top-0 z-50 bg-white shadow-md">
      <div className="bg-gray-200 text-gray-600 p-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <p>Emergency Help!</p>
          <div>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook cursor-pointer p-1 text-[#1301DB]"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fa-brands fa-twitter cursor-pointer p-1 text-[#14C9D3]"></i>
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Plus">
              <i className="fa-brands fa-google-plus-g cursor-pointer p-1 text-[#E61C1C]"></i>
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fa-brands fa-youtube cursor-pointer p-1 text-[#FA0C0C]"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 p-2">
        <div className="p-3 md:mb-0 cursor-pointer" onClick={() => router.push("/")}>
          <img
            src="./Pharmanetlogo.png"
            alt="Logo"
            width={128}
            height={128}
            className="w-32 object-contain"
          />
        </div>

      {isAuthenticated && (
          <div className="text-center md:text-left">
            <p className="text-red-500 px-2">
              Institution: <span>{institution || "Not Available"}</span>
            </p>
            <p className="text-blue-900  ">(Pharmanet Membership number: IM-3250)</p>
          </div>
        )}

        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <>
              <img
                onClick={() => router.push("/settings")}
                src="profile.png"
                className="h-16 w-16 rounded-full cursor-pointer"
                alt="User Profile"
              />
              <button
                onClick={handleLogout}
                className="text-white bg-blue-900 px-5 py-2 rounded-full"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => router.push("/Login")}
                className="text-white bg-blue-900 px-5 py-2 rounded-full"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/register")}
                className="text-white bg-green-600 px-5 py-2 rounded-full"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
