"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed backdrop-blur bg-[#FFFFFF0D]     top-0 left-0 w-full z-50">
      <hr className="border-t border-[#FFFFFF33] mb-5"></hr>
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden md:flex space-x-8 justify-center w-full">
          <div className="underline-dad">
            <Link
              aria-label="Ir al principio de la pagina"
              title="inicio"
              href="/"
              className="text-white text-xl hover:text-gray-300"
            >
              Inicio
            </Link>
            <div className="underline" />
          </div>
          <div className="underline-dad">
            <Link
              aria-label="Ir a la seccion de las skills"
              title="Skills"
              href="#Skills"
              className="text-white text-xl hover:text-gray-300 "
            >
              Skills
            </Link>
            <div className="underline" />
          </div>
          <div className="underline-dad">
            <Link
              aria-label="Ir al seccion de los Projectos"
              title="Projectos"
              href="#Project"
              className="text-white text-xl hover:text-gray-300 "
            >
              Project
            </Link>
            <div className="underline" />
          </div>
          <div className="underline-dad">
            <Link
              aria-label="Ir al seccion para mandar gmail"
              title="Contacto"
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
            aria-label="toggleMenu"
            title="toggleMenu"
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
                aria-label="Ir al principio de la pagina"
                title="inicio"
                href="#home"
                className="text-white text-xl hover:text-gray-300 "
                onClick={toggleMenu}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                aria-label="Ir a la seccion de las skills"
                title="Skills"
                href="#Skills"
                className="text-white text-xl hover:text-gray-300 "
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                aria-label="Ir a la seccion de las Proyectos"
                title="Project"
                href="#Project"
                className="text-white text-xl hover:text-gray-300 "
                onClick={toggleMenu}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                aria-label="Ir a la seccion para mandar gmail"
                title="Contact"
                href="#Contact"
                className="text-white text-xl hover:text-gray-300 "
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
      <hr className="border-t border-[#FFFFFF33] mt-5"></hr>
    </nav>
  );
};

export default Navbar;
