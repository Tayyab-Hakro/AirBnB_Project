import React, { useState } from 'react';
import ArbLogo from "../assets/ArbninIcon.png";
import { FaHome, FaSearch, FaGlobe, FaBars } from "react-icons/fa";
import { TbAirBalloon } from "react-icons/tb";
import { Menu, MenuButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Navbar() {
  const [OpenDDown, SetOpenDD] = useState(false);

  const HandleDropDown = () => {
    SetOpenDD(!OpenDDown);
  };

  return (
    <nav className="w-full border-b border-gray-200 pb-6 pt-4 px-10 ">
      {/* Mobile Search Bar */}
<div className="md:hidden px-4 mt-4 flex-col-reverse pb-8">
  <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-3 shadow-sm">
    
    <FaSearch className="text-gray-500" size={16} />

    <input
      type="text"
      placeholder="Search destinations"
      className="flex-1 outline-none bg-transparent text-sm text-gray-700"
    />
  </div>
</div>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex-1 sm:hidden md:flex">
          <img className="w-28 hidden md:flex" src={ArbLogo} alt="Airbnb Logo" />
        </div>

        {/* Center Nav */}
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center cursor-pointer">
            <div className="  flex  items-center gap-2 font-semibold text-gray-800">
              <FaHome className='' size={20} /> Homes
            </div>
            <div className="h-[2px] w-full bg-black mt-2"></div>
          </div>

          <div className="flex flex-col items-center cursor-pointer relative text-gray-500 hover:text-gray-800">
            <span className="absolute -top-3 -right-4 bg-blue-900 text-[10px] text-white px-1 rounded font-bold">
              NEW
            </span>
            <div className="flex items-center gap-2 font-medium">
              <TbAirBalloon size={20} /> Experiences
            </div>
          </div>

          <div className="flex flex-col items-center cursor-pointer relative text-gray-500 hover:text-gray-800">
            <span className="absolute -top-3 -right-4 bg-blue-900 text-[10px] text-white px-1 rounded font-bold">
              NEW
            </span>
            <div className="font-medium">Services</div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex  justify-end items-center gap-4">
          <div className=" font-semibold hidden md:flex text-sm py-2 px-4 hover:bg-gray-100 rounded-full cursor-pointer">
            Become a host
          </div>

          <div className="p-3 hidden md:flex hover:bg-gray-100 rounded-full cursor-pointer">
            <FaGlobe size={16} />
          </div>

          <div className="relative hidden md:flex items-center gap-3 border border-gray-300 p-2 rounded-full hover:shadow-md cursor-pointer">
            <FaBars onClick={HandleDropDown} />

            {OpenDDown && (
  <div className="absolute right-0 top-12 z-50 w-72 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">

    {/* Help Center */}
    <div className="px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
      <span className="text-lg">❓</span>
      <span className="font-semibold text-gray-800">Help Center</span>
    </div>

    <hr />

    {/* Become a host */}
    <div className="px-4    py-4 md:flex justify-between items-center hover:bg-gray-100 cursor-pointer">
      <div className="">
        <p className="font-semibold  text-gray-800">Become a host</p>
        <p className="text-sm text-gray-500">
          It's easy to start hosting and earn extra income.
        </p>
      </div>
      <img
        src="https://a0.muscache.com/pictures/airbnb-platform-assets/Airbnb-Icons/Host.png"
        alt=""
        className="w-10 h-10"
      />
    </div>

    <hr />

    {/* Links */}
    <div className="px-4 py-3 space-y-3 text-gray-800">
      <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Refer a Host</p>
      <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Find a co-host</p>
      <p className="hover:bg-gray-100 p-2 rounded cursor-pointer">Gift cards</p>
    </div>

    <hr />

    {/* Auth */}
    <div className="px-4 py-3 font-semibold hover:bg-gray-100 cursor-pointer">
      Log in or sign up
    </div>
  </div>
)}

          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <div className=" hidden md:flex items-center border border-gray-300 shadow-sm hover:shadow-md rounded-full py-2 px-4 max-w-4xl w-full divide-x">
          <div className="   flex-col px-6 flex-grow">
            <span className="text-[12px] font-bold">Where</span>
            <input
              type="text"
              placeholder="Search destinations"
              className="text-sm bg-transparent outline-none text-gray-600"
            />
          </div>

          <div className="flex flex-col px-6 flex-grow">
            <span className="text-[12px] font-bold">When</span>
            <span className="text-sm text-gray-400">Add dates</span>
          </div>

          <div className="flex px-6 flex-grow items-center justify-between">
            <div>
              <span className="text-[12px] font-bold">Who</span>
              <span className="text-sm text-gray-400 block">Add guests</span>
            </div>
            <div className="bg-[#FF385C] p-3 rounded-full text-white">
              <FaSearch size={14} />
            </div>
          </div>
        </div>
      </div>
      


    </nav>
  );
}

export default Navbar;
