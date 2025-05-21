"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./Common/header";
import Footer from "./Common/footer";
import Aside from "./Common/aside";

export const dynamic = "force-dynamic";

export default function Page() {
  const Router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [token, setToken] = useState(null);
  const [institution, setInstitution] = useState(null);

  const itemsPerPage = 10;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("authToken");
      const storedInstitution = localStorage.getItem("institution");
      setToken(storedToken);
      setInstitution(storedInstitution);
    }
  }, []);

  const fetchData = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dir.mripub.com/api/Pharmacy.php?page=${page}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) throw new Error("Error fetching data.");

      const result = await response.json();
      setData(result);
      setFilteredData(result);
    } catch (err) {
      setError(err.message || "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const page = Number(new URLSearchParams(window.location.search).get("page")) || 1;
    setCurrentPage(page);
    fetchData(page); // Call even without token
  }, [token]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="bg-yellow-300">{part}</span>
      ) : (
        part
      )
    );
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const filtered = data.filter((item) =>
        (item?.category_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item?.journal_name?.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("institution");
    Router.push("/Login");
  };

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Pharmanets</title>
        </Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <Header />
        <Aside />

        <main className="container mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 px-4 md:px-10">
          <div className="col-span-12 md:col-span-9">
            {/* <div className="mb-4 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 px-3 py-2 rounded w-full md:w-1/2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="ml-2 px-4 py-2 bg-blue-900 text-white rounded"
              >
                Search
              </button>
            </div> */}

            <div className="space-y-4">
              {loading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-200 p-4 rounded-lg h-20"></div>
                ))
              ) : error ? (
                <div className="text-center text-red-500">{error}</div>
              ) : (
                currentData.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 shadow-md rounded-lg p-4 h-full"
                 style={{ minHeight: '100px' }}
                  >
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item?.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600"
                          >
                            {highlightText(item?.journal_name || "Unknown", searchTerm)}
                          </a>
                        ) : (
                          highlightText(item?.journal_name || "Unknown", searchTerm)
                        )}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {highlightText(item?.category_name || "No Category", searchTerm)}
                      </p>
                    </div>
                    <div className="text-gray-500 hover:text-blue-600 mt-2 md:mt-0">
                      {item?.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                      ) : (
                        <i className="fa-solid fa-arrow-up-right-from-square opacity-50 cursor-not-allowed"></i>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-blue-900 text-white rounded disabled:bg-gray-300"
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-blue-900 text-white rounded disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>

         <div className="hidden md:block col-span-3">
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSfdDZPcK6sTPGdRZf35KDnKZNKDD47tZTcxi4Xs71-iDFrZOA/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="flex"
  >
    <div className="bg-gray-100 text-black text-center px-6 py-6 rounded-xl shadow-lg cursor-pointer transition duration-300 hover:shadow-2xl w-full">
      <p className="text-lg font-bold leading-snug tracking-wide hover:underline">
        APPLY FOR PIF AFTER<br />INDEXING IN I2OR
      </p>
    </div>
  </a>
</div>

        </main>

        <Footer />
      </>
    </HelmetProvider>
  );
}
