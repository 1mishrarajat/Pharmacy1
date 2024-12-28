

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           "https://dir.mripub.com/api/activeusers.php",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-red-600">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <HelmetProvider>
//            <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>Admin/Subscriptions</title>

//             </Helmet>
//     <>

//     <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//       <Sidebar />
//       <div className="flex-1 flex flex-col">
//         <Header />
//         <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//           <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//               Subscription Data
//             </h2>


//             <div className="overflow-x-auto">
//               <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                 <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                   <tr>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">First Name</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Last Name</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Email</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Phone</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Country</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Address</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">City</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">State</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">IP Address</th>
//                     <th className="px-2 py-2 sm:px-4 sm:py-3 border">Pin</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.length > 0 ? (
//                     data.map((item, index) => (
//                       <tr
//                         key={item.id}
//                         className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                       >
//                         <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.first_name}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.last_name}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.username}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.phone}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.country}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.address}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.city}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.state}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.ip_address}</td>
//                         <td className="px-2 sm:px-4 py-2 border">{item.pin}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td
//                         colSpan="12"
//                         className="px-4 py-4 text-center text-gray-500"
//                       >
//                         No data available
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//     </HelmetProvider>
//   );
// }
// "use client"; 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";

// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           "https://dir.mripub.com/api/active.php",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

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
//         <title>Admin/Subscriptions</title>
//       </Helmet>

//       <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//             <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//                 Subscription Data
//               </h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                     <tr>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
                    
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.user_id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                         >
//                           <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {item.full_name}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
                        
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.start_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.expiry_date).toLocaleDateString()}
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 text-center text-gray-500"
//                         >
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
//     </HelmetProvider>
//   );
// }
// "use client"; 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { AiOutlineEdit } from "react-icons/ai"; // Import the edit icon from react-icons

// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     username: "",
//     phone: "",
//     country: "",
//     address: "",
//     city: "",
//     state: "",
//     institute: "",
//   });

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.post(
//           "https://dir.mripub.com/api/active.php",
//           {},
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       first_name: user.first_name,
//       last_name: user.last_name,
//       username: user.username,
//       phone: user.phone,
//       country: user.country,
//       address: user.address,
//       city: user.city,
//       state: user.state,
//       institute: user.institute,
//     });
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//     setFormData({
//       first_name: "",
//       last_name: "",
//       username: "",
//       phone: "",
//       country: "",
//       address: "",
//       city: "",
//       state: "",
//       institute: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `https://dir.mripub.com/api/updateUser.php`, // Endpoint for updating user data
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setIsModalOpen(false);
//       setData((prevData) =>
//         prevData.map((user) =>
//           user.user_id === selectedUser.user_id ? { ...user, ...formData } : user
//         )
//       );
//     } catch (err) {
//       setError("Failed to update user data.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

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
//         <title>Admin/Subscriptions</title>
//       </Helmet>

//       <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//             <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//                 Subscription Data
//               </h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                     <tr>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">User ID</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.user_id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                         >
//                           <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {item.full_name}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.user_id}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.start_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.expiry_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             <AiOutlineEdit
//                               className="text-blue-500 cursor-pointer"
//                               onClick={() => handleEditClick(item)}
//                             />
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="7"
//                           className="px-4 py-4 text-center text-gray-500"
//                         >
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

//       {/* Modal for Editing User */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-bold mb-4">Edit User</h3>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               {/* Add additional fields for phone, country, address, etc. */}
//               <div className="flex justify-end mt-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
//                   onClick={handleModalClose}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </HelmetProvider>
//   );
// }
// "use client"; 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { AiOutlineEdit } from "react-icons/ai"; // Import the edit icon from react-icons

// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     username: "",
//     phone: "",
//     country: "",
//     address: "",
//     city: "",
//     state: "",
//     institute: "",
//   });

//   // Fetch token from localStorage
//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   // Fetch subscription data when the token is available
//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://dir.mripub.com/api/active.php", // Change POST to GET
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   // Handle edit button click
//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       first_name: user.first_name,
//       last_name: user.last_name,
//       username: user.username,
//       phone: user.phone,
//       country: user.country,
//       address: user.address,
//       city: user.city,
//       state: user.state,
//       institute: user.institute,
//     });
//     setIsModalOpen(true);
//   };

//   // Close modal
//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//     setFormData({
//       first_name: "",
//       last_name: "",
//       username: "",
//       phone: "",
//       country: "",
//       address: "",
//       city: "",
//       state: "",
//       institute: "",
//     });
//   };

//   // Handle form input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `https://dir.mripub.com/api/updateUser.php`, // Endpoint for updating user data
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setIsModalOpen(false);
//       setData((prevData) =>
//         prevData.map((user) =>
//           user.user_id === selectedUser.user_id ? { ...user, ...formData } : user
//         )
//       );
//     } catch (err) {
//       setError("Failed to update user data.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

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
//         <title>Admin/Subscriptions</title>
//       </Helmet>

//       <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//             <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//                 Subscription Data
//               </h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                     <tr>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
                      
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.user_id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                         >
//                           <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {item.full_name}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
                         
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.start_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.expiry_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             <AiOutlineEdit
//                               className="text-blue-500 cursor-pointer"
//                               onClick={() => handleEditClick(item)}
//                             />
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="7"
//                           className="px-4 py-4 text-center text-gray-500"
//                         >
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

//       {/* Modal for Editing User */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-bold mb-4">Edit User</h3>
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Institute</label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               {/* Add additional fields for phone, country, address, etc. */}
//               <div className="flex justify-end mt-4">
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
//                   onClick={handleModalClose}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-md"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </HelmetProvider>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { FaEdit } from "react-icons/fa";  // Replace edit icon with info icon

// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     full_name: "",
//     institute: "",
//     expiry_date: "",
//     start_date: "",
//   });

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://dir.mripub.com/api/active.php", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       full_name: user.full_name,
//       institute: user.institute,
//       expiry_date: user.expiry_date,
//       start_date: user.start_date,
//     });
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//     setFormData({
//       full_name: "",
//       institute: "",
//       expiry_date: "",
//       start_date: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `https://dir.mripub.com/api/active.php`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setIsModalOpen(false);
//       setData((prevData) =>
//         prevData.map((user) =>
//           user.user_id === selectedUser.user_id ? { ...user, ...formData } : user
//         )
//       );
//     } catch (err) {
//       setError("Failed to update user data.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

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
//         <title>Admin/Subscriptions</title>
//       </Helmet>

//       <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//             <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//                 Subscription Data
//               </h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                     <tr>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.user_id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                         >
//                           <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.full_name}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.start_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.expiry_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border text-center">
//   <div className="flex justify-center items-center h-full">
//     <FaEdit
//       className="text-blue-500 cursor-pointer"
//       onClick={() => handleEditClick(item)}
//     />
//   </div>
// </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 text-center text-gray-500"
//                         >
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
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-bold mb-4">Edit User</h3>
//             <form onSubmit={handleFormSubmit}>
              // <div className="mb-4">
              //   <label className="block text-sm font-medium text-gray-700">
              //     Full Name
              //   </label>
              //   <input
              //     type="text"
              //     name="full_name"
              //     value={formData.full_name}
              //     onChange={handleInputChange}
              //     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              //   />
              // </div>
              // <div className="mb-4">
              //   <label className="block text-sm font-medium text-gray-700">
              //     Institute
              //   </label>
              //   <input
              //     type="text"
              //     name="institute"
              //     value={formData.institute}
              //     onChange={handleInputChange}
              //     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              //   />
              // </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="start_date"
//                   value={formData.start_date}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Expiry Date
//                 </label>
//                 <input
//                   type="date"
//                   name="expiry_date"
//                   value={formData.expiry_date}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                   <button

//                     className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
//                   >
//                     Cancel
//                   </button>
//                   <button
       
//                     className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
//                   >
//                     Save
//                   </button>
//                 </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </HelmetProvider>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { FaEdit } from "react-icons/fa"; // Replace edit icon with info icon

// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     full_name: "",
//     institute: "",
//     expiry_date: "",
//     start_date: "",
//   });

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://dir.mripub.com/api/active.php", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     setFormData({
//       full_name: user.full_name,
//       institute: user.institute,
//       expiry_date: user.expiry_date,
//       start_date: user.start_date,
//     });
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//     setFormData({
//       full_name: "",
//       institute: "",
//       expiry_date: "",
//       start_date: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `https://dir.mripub.com/api/active.php`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setIsModalOpen(false);
//       setData((prevData) =>
//         prevData.map((user) =>
//           user.user_id === selectedUser.user_id ? { ...user, ...formData } : user
//         )
//       );
//       // Optional: You can show a success message or some other action here
//     } catch (err) {
//       setError("Failed to update user data.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

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
//         <title>Admin/Subscriptions</title>
//       </Helmet>

//       <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//             <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//                 Subscription Data
//               </h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                     <tr>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.user_id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                         >
//                           <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.full_name}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.start_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.expiry_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border text-center">
//                             <div className="flex justify-center items-center h-full">
//                               <FaEdit
//                                 className="text-blue-500 cursor-pointer"
//                                 onClick={() => handleEditClick(item)}
//                               />
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 text-center text-gray-500"
//                         >
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
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-bold mb-4">Edit Subscription</h3>
//             <form onSubmit={handleFormSubmit}>
//             <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="full_name"
//                   value={formData.full_name}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Institute
//                 </label>
//                 <input
//                   type="text"
//                   name="institute"
//                   value={formData.institute}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Start Date
//                 </label>
//                 <input
//                   type="date"
//                   name="start_date"
//                   value={formData.start_date}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Expiry Date
//                 </label>
//                 <input
//                   type="date"
//                   name="expiry_date"
//                   value={formData.expiry_date}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   onClick={handleModalClose}
//                   className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </HelmetProvider>
//   );
// }
// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "../Sidebar";
// import Header from "../Header";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { FaEdit } from "react-icons/fa"; // Edit icon

// export default function Subscription() {
//   const [data, setData] = useState([]);
//   const [token, setToken] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [formData, setFormData] = useState({
//     "is_subscribed":"",
//     user_id:"",
//     start_date: "",
//     expiry_date: "",
//   });

//   useEffect(() => {
//     const storedToken = localStorage.getItem("authToken");
//     if (storedToken) {
//       setToken(storedToken);
//     } else {
//       setError("No token found. Please log in.");
//     }
//   }, []);

//   useEffect(() => {
//     if (!token) return;

//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://dir.mripub.com/api/active.php", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setData(response.data);
//         setIsLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data. Please try again.");
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [token]);

//   const handleEditClick = (user) => {
//     setSelectedUser(user);
//     // Fetch only start_date and expiry_date fields
//     setFormData({
//       is_subscribed:user.is_subscribed,
//       user_id:user.user_id,
//       start_date: user.start_date,
//       expiry_date: user.expiry_date,
//     });
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setSelectedUser(null);
//     setFormData({
//       is_subscribed:"",
//       user_id:"",
//       start_date: "",
//       expiry_date: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Update only start_date and expiry_date fields
//       await axios.put(
//         `https://dir.mripub.com/api/active.php`,
//         {  
//          is_subscribed:formData.is_subscribed,
//           user_id:formData.user_id,   
//           start_date: formData.start_date,
//           expiry_date: formData.expiry_date,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       setIsModalOpen(false);
//       // Update the subscription in the local state with the new start and expiry dates
//       setData((prevData) =>
//         prevData.map((user) =>
//           user.user_id === selectedUser.user_id
//             ? { ...user, start_date: formData.start_date, expiry_date: formData.expiry_date, user_id: formData.user_id  
//               , is_subscribed:formData.is_subscribed }
//             : user
//         )
//       );
//     } catch (err) {
//       setError("Failed to update user data.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <p className="text-lg font-semibold text-gray-700">Loading...</p>
//       </div>
//     );
//   }

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
//         <title>Admin/Subscriptions</title>
//       </Helmet>

//       <div className="flex flex-col md:flex-row h-screen bg-gray-100 text-gray-800">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           <Header />
//           <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">
//             <div className="max-w-full mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
//               <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-6 md:mb-8">
//                 Subscription Data
//               </h2>

//               <div className="overflow-x-auto">
//                 <table className="w-full text-xs sm:text-sm text-left border-collapse border border-gray-300">
//                   <thead className="bg-gray-700 text-white text-sm sm:text-md font-semibold">
//                     <tr>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">S.No.</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Full Name</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Institute</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Start Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Expiry Date</th>
//                       <th className="px-2 py-2 sm:px-4 sm:py-3 border">Actions</th>
//                        <th className="px-2 py-2 sm:px-4 sm:py-3 border">Status</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.length > 0 ? (
//                       data.map((item, index) => (
//                         <tr
//                           key={item.user_id}
//                           className="bg-white hover:bg-gray-100 transition-colors duration-200 border-t"
//                         >
//                           <td className="px-2 sm:px-4 py-2 border">{index + 1}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.full_name}</td>
//                           <td className="px-2 sm:px-4 py-2 border">{item.institute}</td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.start_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {new Date(item.expiry_date).toLocaleDateString()}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border">
//                             {/* Show "active" or "inactive" based on is_subscribed */}
//                             {item.is_subscribed === 1 ? 'Active' : 'Inactive'}
//                           </td>
//                           <td className="px-2 sm:px-4 py-2 border text-center">
//                             <div className="flex justify-center items-center h-full">
//                               <FaEdit
//                                 className="text-blue-500 cursor-pointer"
//                                 onClick={() => handleEditClick(item)}
//                               />
//                             </div>
//                           </td>
//                         </tr>
//                       ))
//                     ) : (
//                       <tr>
//                         <td
//                           colSpan="6"
//                           className="px-4 py-4 text-center text-gray-500"
//                         >
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
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded-lg w-96">
//       <h3 className="text-xl font-bold mb-4">Edit Subscription</h3>
//       <form onSubmit={handleFormSubmit}>
//       <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-700">
//     User ID
//   </label>
//   <input
//     type="text"  // or "number" if it's specifically a number, "text" works as well
//     name="user_id"
//     value={formData.user_id}
//     onChange={handleInputChange}
//     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//     disabled  // This makes the input field read-only and not editable by the user
//   />
// </div>

// <div className="mb-4">
//   <label className="block text-sm font-medium text-gray-700">
//     Subcribe ID
//   </label>
//   <input
//     type="text"  // or "number" if it's specifically a number, "text" works as well
//     name="is_subscribed"
//     value={formData.is_subscribed}
//     onChange={handleInputChange}
//     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//  // This makes the input field read-only and not editable by the user
//   />
// </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Start Date
//           </label>
//           <input
//             type="date"
//             name="start_date"
//             value={formData.start_date}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Expiry Date
//           </label>
//           <input
//             type="date"
//             name="expiry_date"
//             value={formData.expiry_date}
//             onChange={handleInputChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div className="flex justify-end space-x-2">
//           <button
//             type="button"
//             onClick={handleModalClose}
//             className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
       
//       )}
//     </HelmetProvider>
//   );
// }
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEdit } from "react-icons/fa"; // Edit icon

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
    setFormData({
      is_subscribed: user.is_subscribed,
      user_id: user.user_id,
      start_date: user.start_date,
      expiry_date: user.expiry_date,
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
    }
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
              <div className="flex justify-end space-x-2">
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
    </HelmetProvider>
  );
}
