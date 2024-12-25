import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        Uh-oh! Seems like you're not authorized to access this page. Here's a meme to cheer you up!
      </p>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
        <img
          // Replace with your own meme URL
          src=""  // Example meme image (you can replace this URL)
          alt="Funny Meme"
          className="w-full rounded-md"
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
