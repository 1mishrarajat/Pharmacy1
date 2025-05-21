import React, { useState } from "react";

export default function Aside() {
 const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleDropdownItemClick = (loc) => {
    setLocation(loc);
    setDropdownOpen(false);
  };

  const handleSearch = () => {
    // Your search logic here, e.g., API call or filter
    alert(`Searching for "${searchTerm}" in "${location}"`);
  };

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-700 rounded-lg">
        <div className="relative flex-grow">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          </span>
          <input
            value={searchTerm}
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Doctors, clinics, hospitals..."
            className="pl-10 p-2 w-full text-sm text-gray-600 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
          />
        </div>

        {/* Location Dropdown */}
        <div
          className="relative flex-grow"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="fa-solid fa-location-dot text-gray-400"></i>
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <i
              className="fa-solid fa-chevron-down text-gray-400 cursor-pointer"
              onClick={toggleDropdown}
            ></i>
          </span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Select your Location"
            className="pl-10 pr-10 p-2 w-full text-sm text-gray-600 bg-white rounded-md outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500"
          />
          {dropdownOpen && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
              <ul>
                <li
                  onClick={() => handleDropdownItemClick("New York")}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  New York
                </li>
                <li
                  onClick={() => handleDropdownItemClick("Los Angeles")}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  Los Angeles
                </li>
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="px-6 py-2 text-sm font-semibold text-white bg-teal-500 rounded-md hover:bg-teal-600"
        >
          Search
        </button>
      </div>
    </div>
  );
}

