"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CardSkills = ({ Titulo, texto1, texto2 }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{ duration: 1 }}
      style={{ perspective: 1000 }}
      className=" bg-transparent border border-white p-5 rounded-lg shadow-lg "
    >
      <div>
        <div className=" flex justify-center   ">
          <div>
            {!isFlipped ? (
              <h2 className="text-white text-3xl font-semibold   ">
                {Titulo}
              </h2>
            ) : (
              <h2
                style={{ transform: "rotateY(180deg)" }}
                className="text-white text-3xl font-semibold   "
              >
                {Titulo}
              </h2>
            )}
            <div className="underline mb-5" />
          </div>
        </div>
        {!isFlipped ? (
          <p className="text-white mb-5">{texto1}</p>
        ) : (
          <p
            style={{ transform: "rotateY(180deg)" }}
            className="text-white mb-5 "
          >
            {texto2}
          </p>
        )}
        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="text-white bg-transparent border w-10/12 border-white rounded-lg shadow-lg p-2 transition duration-500 ease-in-out hover:bg-white hover:text-black "
          >
            {!isFlipped ? (
              <p>Mas informacion de {Titulo}</p>
            ) : (
              <p style={{ transform: "rotateY(180deg)" }}>Mi experiencia con {Titulo} </p>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardSkills;
