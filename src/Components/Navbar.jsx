import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex space-x-8 items:center  justify-between  bg-[#145365] p-10 text-white ">
      <p className="flex-1 body-font font-poppins text-xl">CREATIFY</p>
      <img src="" />
      <nav className="flex-1">
        <ul className="flex justify-between">
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8 text-xl"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700  hover:underline hover:underline-offset-8 text-xl"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8 text-xl"
              to="/discover"
            >
              Discover
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8 text-xl"
              to="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-700 hover:underline hover:underline-offset-8 text-xl"
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
