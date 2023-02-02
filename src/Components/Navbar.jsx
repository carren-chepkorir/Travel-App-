import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-8 flex items:center flex justify-between m-12 ">
      <p className="flex-1 body-font font-poppins">TRVLS</p>
      <nav className="flex-1">
        <ul className="flex justify-between">
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700  hover:underline hover:underline-offset-8"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8"
              to="/discover"
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
