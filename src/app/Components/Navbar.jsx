"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white ">
        <div className="container mx-auto sm:ml-[10px] px-4 flex justify-between  md:justify-around  sm:justify-around items-center">
          <div>
            <Image src="/logo.png" alt="Logo" width={207} height={41} />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Это мы
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Это мы
            </a>

            <a href="#" className="text-gray-600 hover:text-gray-800">
              Почему мы?
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              А вот поэтому
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Заказать звонок
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-800"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white">
            <a href="#" className="block text-gray-600 hover:text-gray-800 p-4">
              Это мы
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 p-4">
              Это мы
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 p-4">
              Почему мы?
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-800 p-4">
              А вот поэтому
            </a>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-2">
              Заказать звонок
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
