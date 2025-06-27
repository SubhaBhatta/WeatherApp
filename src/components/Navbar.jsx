import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-300">
          WeatherApp
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `inline-block px-4 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                isActive
                  ? "bg-blue-800 font-semibold text-blue-300"
                  : "hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `inline-block px-4 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                isActive
                  ? "bg-blue-800 font-semibold text-blue-300"
                  : "hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `inline-block px-4 py-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                isActive
                  ? "bg-blue-800 font-semibold text-blue-300"
                  : "hover:bg-blue-600 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
