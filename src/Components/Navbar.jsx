import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#145365] p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
        </div>
        <div
          className={`md:flex ${menuOpen ? "block" : "hidden"} mt-4 md:mt-0`}
        >
          <ul className=" md:space-x-10 md:flex md:flex-row  md:text-2xl">
            <li>
              <Link className="hover:text-red-700 text-white block" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-700 text-white block" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-700 text-white block"
                to="/discover"
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-700 text-white block"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-red-700 text-white block"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="menu-icon md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="bar w-6 h-1 bg-white my-1"></div>
          <div className="bar w-6 h-1 bg-white my-1"></div>
          <div className="bar w-6 h-1 bg-white my-1"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
