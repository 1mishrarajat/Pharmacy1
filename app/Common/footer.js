// components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-2 py-4 mt-6">
      <div className="container sticky mx-auto flex justify-between items-center">
        <a href="https://mripub.com/" target="_blank" rel="noopener noreferrer">
          <p className="cursor-pointer hover:text-white text-white">
            &copy; 2024 MRI Publication
          </p>
        </a>

        <div className="flex space-x-2">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook p-2 text-white hover:text-blue-500 transition-colors duration-300"></i>
          </a>

          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter p-2 text-white hover:text-blue-400 transition-colors duration-300"></i>
          </a>

          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Plus"
          >
            <i className="fa-brands fa-google-plus-g p-2 text-white hover:text-red-500 transition-colors duration-300"></i>
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fa-brands fa-youtube p-2 text-white hover:text-red-600 transition-colors duration-300"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
