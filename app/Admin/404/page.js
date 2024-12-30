
import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Uh-oh! Seems like you're lost.!
      </p>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <img
          // Replace with your 404 animation GIF URL
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTkydnlia2dnOWRlN2lqd2VjM2tkbXg4dG05MTVueGNqOHIxbDlvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BweKhXaocjST6cnWMH/giphy.gif"  // Example of a 404 animation GIF
          alt="404 Error Animation"
          className="w-96 h-96 object-cover rounded-md"  // Adjust width and height as needed
        />
      </div>
      <Link href="/" legacyBehavior>
        <a className="text-blue-500 hover:underline text-lg">
          🏠 Go Back to Home
        </a>
      </Link>
    </div>
  );
}

