import React, { useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from '../Assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="top overflow-x-hidden">
        <p className="bg-red-600 py-2 text-white font-semibold flex px-2 text-lg">
          <MdLocalShipping size={30} className="mr-2"/>
           <span>FREE DELIVERY {"> > >"}</span> <span className="hidden px-4 md:flex "> CALL OR CHAT TO ORDER: 09150536370</span>

            
           <MdLocalShipping size={30} className="mr-2 hidden md:flex"/>
           <span className="hidden md:flex">FREE DELIVERY {"> > >"}</span> <span className="hidden px-4 md:flex "> CALL OR CHAT TO ORDER: 09150536370 | WITHIN JOS BUKURU</span>
        </p>
      </div>
      <nav className="  text-black">
        <div className="max-w-8xl md:mx-auto ">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              {/* <h1 className="text-xl font-bold">MyWebsite</h1> */}
              <img src={logo} alt="shopping hub logo" className="h-10" />
            </div>
            <div>
              <input type="text" placeholder="Search for products, brands, categories . . ."
              className="border-2 py-2 px-24 hidden md:flex"
              />
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Home
              </a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                About
              </a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Services
              </a>
              <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded-md">
                Contact
              </a>
            </div>
           
            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black hover:bg-gray-700 focus:outline-none mr-24"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Slide-in */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={toggleMenu}
            className="p-4 focus:outline-none text-white"
          >
            X
          </button>
          <nav className="mt-10 space-y-2">
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Home
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              About
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Services
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">
              Contact
            </a>
          </nav>
        </div>
            <div className="">
              <p className="px-2 bg-orange-500 text-white justify-evenly font- tracking-wider hidden md:flex">
                <span>Computers and Assecceries</span>
                <span>Phones and Tablet</span>
                <span>Electronics</span>
                <span>Beauty and Fashion</span>
                <span>Supermarket</span>
                <span>Home and Kitchen</span>
                <span>Home and Kitchen</span>
                <span>Home and Kitchen</span>
              </p>
            </div>

            <div className="">
              <p className="px-2 bg-black text-white justify-evenly font- tracking-wider md:hidden">
                <span>CALL TO ORDER: 09150536370</span>               
              </p>
            </div>
      </nav>
    </div>
  );
}