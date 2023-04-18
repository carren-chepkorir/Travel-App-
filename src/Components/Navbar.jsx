import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div className=" md:flex flex-wrap  space-x-8 items:center  bg-[#145365] p-10 text-white ">
      <div className="flex-1 flex-wrap">
        <img className="h-[100px] w-[100px] rounded-full mt-0 " src={logo} />
      </div>
      <nav className="flex-1 flex-wrap">
        <ul className="flex justify-between sd: flex-wrap ">
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
