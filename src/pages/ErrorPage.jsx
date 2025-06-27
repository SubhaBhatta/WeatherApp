import React from "react";
import { Link } from "react-router-dom";
export default function ErrorPage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-red-100 text-red-700 px-6 py-12">
      {" "}
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-md text-center">
        {" "}
        <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>{" "}
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>{" "}
        <p className="text-md text-red-500 mb-6">
          {" "}
          Oops! The page you're looking for doesn't exist.{" "}
        </p>{" "}
        <Link
          to="/"
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300 shadow-sm"
        >
          {" "}
          ⬅ Back to Home{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
