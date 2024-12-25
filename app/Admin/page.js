
'use client';
import React, {useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from './Header';
import Sidebar from './Sidebar';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function AdminPage() {
  const router = useRouter();
  const [userRole, setUserRole] = useState(null);
  // Simulate getting the user role (replace this with your actual role-check logic)
 // Simulate non-admin user here (change to 'admin' to test the admin route)

  useEffect(() => {
    // Retrieve the role from localStorage (replace with your actual localStorage key)
    const role = localStorage.getItem('role');
    setUserRole(role); // Set the userRole state

    // Redirect to the custom 404 page if the user is not an admin
    if (role !== 'admin') {
      router.push('/Admin/404'); // Redirect to the Custom404 page
    }
  }, [router]); // Dependency array with router ensures this runs when the component mounts

  if (userRole === null) {
    // Optionally, you can render a loading state if the role is not fetched yet
    return <div>Loading...</div>;
  }

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Admin</title>
      </Helmet>
      <>
        <div className="flex h-screen bg-gradient-to-br from-gray-100 to-gray-200">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />

            <main className="flex-1 p-6 sm:p-8 space-y-8">
              <div className="flex items-center justify-center h-64 sm:h-80 bg-gradient-to-br from-blue-200 via-teal-200 to-purple-200 p-4 sm:p-8 rounded-3xl shadow-lg">
                <div className="bg-white bg-opacity-80 rounded-3xl shadow-lg p-6 sm:p-12 text-center max-w-lg mx-auto">
                  <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">Welcome to the Admin Panel</h2>
                  <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
                    Access various management tools to customize and control user data, subscriptions, and settings.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <Link href="/Admin/Journals" legacyBehavior>
                  <a className="bg-gradient-to-br from-teal-100 to-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-teal-700">Journals</h3>
                    <p className="text-gray-600 mt-2">Monitor user trends and engagement.</p>
                  </a>
                </Link>

                <Link href="/Admin/Customers" legacyBehavior>
                  <a className="bg-gradient-to-br from-indigo-100 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-indigo-700">Customers</h3>
                    <p className="text-gray-600 mt-2">Handle user permissions and profiles.</p>
                  </a>
                </Link>

                <Link href="/Admin/Subscription" legacyBehavior>
                  <a className="bg-gradient-to-br from-yellow-100 to-yellow-50 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-yellow-700">Subscription</h3>
                    <p className="text-gray-600 mt-2">Access detailed reports and data summaries.</p>
                  </a>
                </Link>

                <Link href="/Admin/Settings" legacyBehavior>
                  <a className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="text-lg font-medium text-pink-700">Settings</h3>
                    <p className="text-gray-600 mt-2">Customize the admin experience.</p>
                  </a>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </>
    </HelmetProvider>
  );
}


