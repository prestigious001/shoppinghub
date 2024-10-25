import React, { useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import logo from '../Assets/logo.png'
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div>
        <p className="bg-red-600 py-2 w-auto text-white font-semibold flex px-2 text-lg">
          <MdLocalShipping size={30} className="mr-2 animate-pulse"/>
           <span>FREE DELIVERY {">  >"}</span> <span className="hidden px-4 md:flex "> CALL OR CHAT TO ORDER: 091 290 36 128</span>

            
           <MdLocalShipping size={30} className="mr-2 hidden md:flex "/>
           <span className="hidden md:flex">FREE DELIVERY {">  >"}</span> <span className="hidden px-4 md:flex "> CALL OR CHAT TO ORDER: 091 290 36 128 | WITHIN JOS</span>
        </p>
      </div>
      <nav className="  text-black">
        <div className="w-auto md:mx-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              {/* <h1 className="text-xl font-bold">MyWebsite</h1> */}
              <img src={logo} alt="shopping hub logo" className="h-10 " />
            </div>
            <div>

            <h1 className=' font-medium  md:text-2xl'>
                        <p style={{ color: 'orange', fontWeight: '' }} >
                        <Typewriter
                            words={[
                              'Get all you want here ', 
                              ' Get all you want here ', 
                              'Get all you want here ', 
                              'Get all you want here ', 
                              'Get all you want here ' ]}
                            loop={0} // loop the animation 5 times, or set it to 0 for infinite
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                        </p>
                </h1> 


            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 font-medium ">
              <a href="/" className="hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md">
               NEW ARRIVALS
              </a>
              <NavLink to="/Newarr"></NavLink>

              {/* <NavLink></NavLink> */}
              <a href="/" className="hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md">
               TOP DEALS
              </a>
              <a href="https://wa.link/kp1lwl" className="hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md">
                SUPPORT
              </a>
              <a href="https://wa.link/kp1lwl" className="hover:bg-gray-100 text-gray-500 px-3 py-2 rounded-md">
               PARTNER WITH US
              </a>
            </div>
           
            {/* Mobile Hamburger */}
            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                className="text-black  focus:outline-none mr-4"
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
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Slide-in */}
        <div
          className={`absolute top-0 left-0 w-full h-full z-50 bg-orange-500 text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full "
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            onClick={toggleMenu}
            className="p-4 focus:outline-none text-white"
          >
            X
          </button>
          <nav className="mt-10 space-y-2">
            <a href="/" className="block px-4 py-2 hover:bg-orange-300 hover:text-black">
              Home
            </a>
            <a href="/" className="block px-4 py-2 hover:bg-orange-300 hover:text-black">
              About
            </a>
            <a href="/" className="block px-4 py-2 hover:bg-orange-300 hover:text-black">
              Services
            </a>
            <a href="/" className="block px-4 py-2 hover:bg-orange-300 hover:text-black">
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
                <a href="https://wa.link/kp1lwl">
                    <span className="text-sm">CALL OR CHAT TO ORDER : 091 290 36 128</span>
                </a>
                           
              </p>
            </div>
      </nav>
    </div>
  );
}
