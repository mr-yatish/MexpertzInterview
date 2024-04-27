import React from 'react';
import { Link } from 'react-router-dom'; // For navigation to a valid route

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-4">
          Oops! The page you're looking for doesn't seem to exist.
        </p>
        <Link
          to="/" // Change to the appropriate valid route
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
