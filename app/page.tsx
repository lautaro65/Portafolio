"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import Image from "next/image";
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";
import ContactForm from "@/components/form";
import CardSkills from "@/components/Skills";
import Link from "next/link";
import ProjectCard from "@/components/projects";
import {
  FaWhatsapp,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaNodeJs,
  FaServer,
  FaPython,
  FaInstagram,
  FaYarn,
} from "react-icons/fa"; // Iconos Fa
import {
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiPostgresql,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiBootstrap,
  SiJest,
  SiWebpack,
  SiGit,
  SiGithub,
  SiNpm,
  SiVisualstudiocode,
  SiNextui,
  SiInsomnia,
  SiDjango,
} from "react-icons/si"; // Iconos Si
import { IoTerminal } from "react-icons/io5"; // Iconos Io
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
                  <div className="text-container ">
                    <p className=" text-gray-300 text-base mb-1 ">
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
              src="/portadaEcommerce.mp4"
            />
            <ProjectCard
              titulo="Clone Apple Web"
              texto="Este proyecto es un clon de la página oficial de Apple, diseñado para replicar su estética minimalista y funcional, utilizando tecnologías modernas como Next.js y Sass. El sitio incluye una interfaz responsiva y elegante, con un diseño visual limpio y animaciones suaves para brindar una experiencia de usuario fluida."
              botones={lenguajes2}
              link="https://clone-apple-zeta.vercel.app"
              linkgithub="https://github.com/lautaro65/Clone-Apple"
              src="/portadaApple.mp4"

            />
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Contact-------------------------------------------------------------------- */}
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
            {/* Contact Section */}
            <div id="contact" className="mt-20">
              <div className="grid grid-cols-1">
                <div className="flex justify-center">
                  <h2 className="text-white titulo text-2xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[85px] col-span-1">
                    Contact
                  </h2>
                </div>
                <div className="underline mt-2 mb-2" />
              </div>
            </div>
            <ContactForm />
          </motion.div>

          {/* Redes Sociales Section */}
          <div className="flex flex-col items-center mt-10">
            <h3 className="text-white text-2xl mb-4">
              Sígueme en mis redes sociales
            </h3>
            <div className="flex space-x-6">
              <a
                href="www.linkedin.com/in/lautaro-ocatavio-faure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5c0-1.103-.897-2-2-2s-2 .897-2 2v5h-3v-10h3v1.473c.859-1.003 2.124-1.473 3.5-1.473 2.485 0 4.5 2.015 4.5 4.5v5z" />
                </svg>
              </a>
              <a
                href="https://github.com/lautaro65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300"
                aria-label="GitHub"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.757-1.333-1.757-1.087-.743.083-.727.083-.727 1.205.084 1.838 1.24 1.838 1.24 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.467-2.381 1.236-3.221-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.046.138 3.004.404 2.292-1.552 3.299-1.23 3.299-1.23.653 1.649.241 2.872.118 3.176.77.84 1.236 1.911 1.236 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.824 1.102.824 2.222 0 1.605-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.584 8.199-6.081 8.199-11.382 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/tu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.923 2.204-4.923 4.923 0 .386.044.762.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.667 1.577-.667 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.946 4.828-.413.112-.849.171-1.296.171-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.177-.069 2.18 1.397 4.768 2.212 7.548 2.212 9.054 0 14-7.5 14-14 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.46-2.549z" />
                </svg>
              </a>
              <a
                href="https://x.com/Developer_faure"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition duration-300"
                aria-label="Twitter"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
            </div>
          </div>
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
