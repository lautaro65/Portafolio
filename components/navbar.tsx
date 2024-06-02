"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed backdrop-blur  top-0 left-0 w-full z-50">
      <hr className="border-t border-white mb-5"></hr>
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-8 justify-center w-full">
          <div className="underline-dad">
            <Link
              href="/"
              className="text-white text-xl hover:text-gray-300"
            >
              Inicio
            </Link>
            <div className="underline" />
          </div>
          <div className="underline-dad">
            <Link
              href="#Skills"
              className="text-white text-xl hover:text-gray-300 "
            >
              Skills
            </Link>
            <div className="underline" />
          </div>
          <div className="underline-dad">
            <Link
              href="#Project"
              className="text-white text-xl hover:text-gray-300 "
            >
              Project
            </Link>
            <div className="underline" />
          </div>
          <div className="underline-dad">
            <Link
              href="#contact"
              className="text-white text-xl hover:text-gray-300 "
            >
              Contacto
            </Link>
            <div className="underline" />
          </div>
        </div>
        <div className="md:hidden ml-auto mr-5">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <Link
                href="#home"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Portafolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-white"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
      <hr className="border-t border-white mt-5"></hr>
    </nav>
  );
};

export default Navbar;
