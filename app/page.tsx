"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import Image from "next/image";
import Navbar from "@/components/navbar";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GrBriefcase } from "react-icons/gr";
import { motion } from "framer-motion";
import ContactForm from "@/components/form";
import CardSkills from "@/components/Skills";
import Link from "next/link";
import ProjectCard from "@/components/projects";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa"; // Agrega FaJs
import { SiTailwindcss, SiSass, SiFigma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa"; // Icono de Node.js
import { SiMongodb } from "react-icons/si"; // Icono de MongoDB
import { SiFirebase } from "react-icons/si"; // Icono de Firebase
import { FaServer } from "react-icons/fa"; // Icono de servidor
import { FaPython } from "react-icons/fa"; // Icono de Python
import { SiExpress } from "react-icons/si"; // Icono de Express.js
import { SiPostgresql } from "react-icons/si"; // Icono de PostgreSQL
import { SiAngular } from "react-icons/si"; // Icono de Angular
import { SiVuedotjs } from "react-icons/si"; // Icono de Vue.js
import { SiTypescript } from "react-icons/si"; // Icono de TypeScript
import { SiBootstrap } from "react-icons/si"; // Icono de Bootstrap
import { SiJest } from "react-icons/si"; // Icono de Jest
import { SiWebpack } from "react-icons/si"; // Icono de Webpack
import { SiGit } from "react-icons/si"; // Icono de Git
import { SiGithub } from "react-icons/si"; // Icono de GitHub
import { SiNpm } from "react-icons/si"; // Icono de NPM
import { SiVisualstudiocode } from "react-icons/si"; // Icono de VSCode
import { IoTerminal } from "react-icons/io5";
import { SiNextui } from "react-icons/si";
import { FaYarn } from "react-icons/fa";
import { SiInsomnia } from "react-icons/si";
import { SiDjango } from "react-icons/si";

export default function Home() {
  const lenguajes1 = [
    "Nextjs",
    "MongoDB",
    "FramerMotion",
    "Tailwilnd",
    "typescript",
  ];

  const lenguajes2 = [
    "Nextjs",
    "Sass",
    "FramerMotion",
    "Tailwilnd",
    "typescript",
  ];
  const languagesList = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" }, // Color HTML
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" }, // Color CSS
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }, // Color JavaScript
    { name: "React", icon: FaReact, color: "#61DAFB" }, // Color React
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, // Color Tailwind
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }, // Color Figma
    { name: "TypeScript", icon: SiTypescript, color: "#007ACC" }, // Color TypeScript
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" }, // Color Bootstrap
    { name: "Next.UI", icon: SiNextui, color: "#000000" }, // Color Next.js
  ];
  const backendLanguagesList = [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // Color MongoDB
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }, // Color Firebase
    { name: "Next.js", icon: FaServer, color: "#000000" }, // Color Next.js
    { name: "Python", icon: FaPython, color: "#3776AB" }, // Color Python
    { name: "Django", icon: SiDjango, color: "#1d7a5e" }, // Color NPM
  ];
  const learningLanguagesList = [
    { name: "Angular", icon: SiAngular, color: "#DD0031" }, // Color Angular
    { name: "Vue.js", icon: SiVuedotjs, color: "#42b883" }, // Color Vue.js
  ];
  const toolsList = [
    { name: "Git", icon: SiGit, color: "#F05032" }, // Color Git
    { name: "GitHub", icon: SiGithub, color: "#333532" }, // Color GitHub
    { name: "Terminal", icon: IoTerminal, color: "#333532" }, // Color Terminal
    { name: "VSCode", icon: SiVisualstudiocode, color: "#007ACC" }, // Color VSCode
    { name: "NPM", icon: SiNpm, color: "#CB3837" }, // Color NPM
    { name: "Yarn", icon: FaYarn, color: "#2e2a65" }, // Color NPM
    { name: "Insomia", icon: SiInsomnia, color: "#5b00d1" }, // Color NPM
  ];

  return (
    <main className="bg-slate-950 overflow-x-hidden">
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between  ">
        {/* --------------------------------------------------------------------Home-------------------------------------------------------------------- */}
        <div className=" relative h-full w-full bg-slate-950 p-3  md:p-10 ">
          {/* Primer degradado radial */}
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          {/* Segundo degradado radial */}
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <div className="w-fit h-10/12 grid grid-cols-3 border lg:w-11/12 xs:w-10/12 2 rounded bg-[#FFFFFF0D]   border-[#FFFFFF33] py-10 px-5">
              <div className=" col-span-3 sm:col-span-3 md:col-span-3  lg:col-span-2 xl:col-span-2  w-full h-auto justify-center underline-dad grid grid-cols-1 mb-5 items-center">
                <div className="">
                  <div>
                    <div className="w-full  ">
                      <h2 className="text-white titulo  text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] ">
                        WEB
                      </h2>
                      <h2 className="text-white titulo  text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[85px] ">
                        DEVELOPER
                      </h2>
                    </div>
                    <div className="underline mb-5" />
                  </div>
                  <div className="text-container">
                    <p className=" text-gray-300 text-base mb-1">
                      ¡Hola soy Lautaro! un apasionado programador web argentino
                      de 18 años, con un enfoque especializado en el desarrollo
                      front end. Durante más de 2 años, he estado inmerso en el
                      emocionante mundo del desarrollo web como freelancer,
                      trabajando con una amplia gama de frameworks y lenguajes
                      de programación. Estoy aquí para crear experiencias
                      digitales excepcionales y llevar tus proyectos al
                      siguiente nivel. ¡Vamos a hacer cosas increíbles juntos!
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-span-3 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 lg:w-10/12 xl:w-10/12 w-8/12  mx-auto ">
                <Image
                  src="/yo.webp"
                  title="Foto de Lautaro Octavio Faure"
                  alt="Foto de Lautaro Octavio Faure"
                  layout="responsive"
                  width={782}
                  height={1043}
                  className=""
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Skills-------------------------------------------------------------------- */}
        <div className=" relative w-full bg-slate-950 p-10 ">
          {/* Primer degradado radial */}
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          {/* Segundo degradado radial */}
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2, repeat: 0 }}
            viewport={{ once: true }}
          >
            <div id="Skills" className="mt-10 ">
              <div className=" gird grid-cols-1  ">
                <div className="flex justify-center">
                  <h2 className="text-white titulo text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[85px] col-span-1 ">
                    Skills
                  </h2>
                </div>
                <div className="underline mt-2 mb-2" />
              </div>
            </div>
            <div className="w-full max-w-7xl pt-10 mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6 place-items-center w-full">
                <CardSkills title="Frontend" languagesList={languagesList} />
                <CardSkills
                  title="Backend"
                  languagesList={backendLanguagesList}
                />
                <CardSkills
                  title="Aprendiendo"
                  languagesList={learningLanguagesList}
                />
                <CardSkills title="Herramientas" languagesList={toolsList} />
              </div>
            </div>
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Project-------------------------------------------------------------------- */}
        <div className=" relative min-h-screen w-full bg-slate-950 p-10 ">
          {/* Primer degradado radial */}
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          {/* Segundo degradado radial */}
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2, repeat: 0 }}
            viewport={{ once: true }}
          >
            <div id="Project" className="mt-20 ">
              <div className=" gird grid-cols-1  ">
                <div className="flex justify-center">
                  <h2 className="text-white titulo text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[85px] col-span-1 ">
                    Project
                  </h2>
                </div>
                <div className="underline mt-2 mb-2" />
              </div>
            </div>
            <ProjectCard
              titulo="Ecommerce Project"
              texto="Este proyecto es un e-commerce de ropa desarrollado como prueba de concepto, que incluye todas las funciones esenciales de un sitio de comercio electrónico. El objetivo es ofrecer una plataforma fluida y atractiva para la venta de prendas de vestir, diseñada con una arquitectura moderna y completamente funcional."
              botones={lenguajes1}
              link="https://ecommerce-de-prueba.vercel.app"
              linkgithub="https://github.com/lautaro65/Ecommerce-de-prueba"
            />
            <ProjectCard
              titulo="Clone Apple Web"
              texto="Este proyecto es un clon de la página oficial de Apple, diseñado para replicar su estética minimalista y funcional, utilizando tecnologías modernas como Next.js y Sass. El sitio incluye una interfaz responsiva y elegante, con un diseño visual limpio y animaciones suaves para brindar una experiencia de usuario fluida."
              botones={lenguajes2}
              link="https://clone-apple-zeta.vercel.app"
              linkgithub="https://github.com/lautaro65/Clone-Apple"
            />
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Contact-------------------------------------------------------------------- */}
        <div className=" relative min-h-screen w-full bg-slate-950 p-10 ">
          {/* Primer degradado radial */}
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          {/* Segundo degradado radial */}
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2, repeat: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div id="contact" className="mt-20 ">
              <div className=" gird grid-cols-1  ">
                <div className="flex justify-center">
                  <h2 className="text-white titulo text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[85px] col-span-1 ">
                    Contact
                  </h2>
                </div>
                <div className="underline mt-2 mb-2" />
              </div>
            </div>
            <ContactForm></ContactForm>
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Footer-------------------------------------------------------------------- */}
      </div>
      <footer className=" border bg-[#FFFFFF0D]   border-[#FFFFFF33] text-white py-8">
        <div className=" border w-full border-[#FFFFFF33]  mb-5"></div>
        <div className="container mx-auto px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-8">
            <div>
              <h3 className="text-xl font-bold">Enlaces</h3>
              <ul className="mt-4">
                <li>
                  <Link
                    aria-label="Ir al inicio de la pagina"
                    title="Home"
                    href="/"
                    className="hover:text-gray-300"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Ir a la seccion de las skills"
                    title="Skills"
                    href="#Skills"
                    className="hover:text-gray-300"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Ir a la seccion de las Proyectos"
                    title="Proyectos"
                    href="#Project"
                    className="hover:text-gray-300"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Ir a la seccion para mandar gmail"
                    title="Contacto"
                    href="#contact"
                    className="hover:text-gray-300"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Sobre mí</h3>
              <p className="mt-4">
                Soy Lautaro, un apasionado programador web argentino de 18 años,
                especializado en el desarrollo front end.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Contacto</h3>
              <ul className="mt-4">
                <li>Email: Lautarofnewells@gmail.com</li>
                <li>Teléfono: 3541 33-5850</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-t  w-full border-[#FFFFFF33]  mt-8"></hr>
        <div className="container mx-auto mt-4 text-center">
          <p>Derechos de autor © 2024. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
