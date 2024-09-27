"use client"; // Asegúrate de que esto esté en la primera línea del archivo
import React, { useState } from "react";
import { useRef } from "react";

import { IconType } from 'react-icons';

interface Language {
  name: string;
  icon: IconType; // Ahora icon es directamente el componente de React
}

interface LanguageCardProps {
  title: string;
  languagesList: Language[];
}


const CardSkills: React.FC<LanguageCardProps> = ({ title, languagesList }: any) => {


  const highlightRef: any = useRef(null);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Coordenada X relativa
    const y = e.clientY - rect.top; // Coordenada Y relativa

    if (highlightRef.current) {
      highlightRef.current.style.left = `${x - 300}px`; // Ajusta el offset según el tamaño
      highlightRef.current.style.top = `${y - 300}px`; // Ajusta el offset según el tamaño
      highlightRef.current.style.opacity = 1; // Mostrar el highlight
    }
  };

  const handleMouseLeave = () => {
    if (highlightRef.current) {
      highlightRef.current.style.opacity = 0; // Ocultar el highlight al salir
    }
  };

  return (
    <div
      className="relative w-full rounded-lg border border-[#0F172A] border-opacity-100 bg-[#FFFFFF0D] overflow-hidden min-h-[376px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-4 w-full">
        <h2 className="text-2xl font-bold text-[#b361ac] w-min mx-auto">
          {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-4">
        {languagesList.map((language:any) => {
          const Icon = language.icon; // Usa directamente el icono
          return (
            <div key={language.name} className="flex flex-col items-center">
              <Icon className="w-16 h-16" style={{ color: language.color }} /> {/* Cambia el color aquí */}
              <span className="text-gray-300 text-sm mt-1">{language.name}</span>
            </div>
          );
        })}
      </div>
      </div>
      <div
        ref={highlightRef}
        className="highlight absolute rounded-full transition-all pointer-events-none"
        style={{
          width: "600px", // Tamaño del efecto de iluminación
          height: "600px", // Tamaño del efecto de iluminación
          background:
            "radial-gradient(circle, rgba(141, 99, 141, 0.5), rgba(255, 182, 255, 0) 70%)", // Degradado con transparencia en los bordes
          opacity: 0, // Inicialmente oculto
          transition: "opacity 0.2s ease", // Transición suave
          transform: "scale(1.2)", // Escala para dar un efecto de iluminación
        }}
      />
    </div>
  );
};

export default CardSkills;
