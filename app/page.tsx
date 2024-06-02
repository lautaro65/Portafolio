"use client"; // Asegúrate de que esto esté en la primera línea del archivo

import Image from "next/image";
import Navbar from "@/components/navbar";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GrBriefcase } from "react-icons/gr";
import CardProjects from "@/components/SwiperProject";
import { motion } from "framer-motion";
import ContactForm from "@/components/form";
import CardSkills from "@/components/Skills";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-between p-10">
        {/* --------------------------------------------------------------------Home-------------------------------------------------------------------- */}
        <div className=" min-h-screen">
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <div className="w-fit h-10/12 grid grid-cols-2 border lg:w-11/12 xs:w-10/12 2 rounded   border-white p-10">
              <div className=" col-span-2 sm:col-span-2  md:col-span-2  lg:col-span-2 xl:col-span-1  w-full h-auto justify-center underline-dad grid grid-cols-1 mb-5 items-center">
                <div className="">
                  <div>
                    <div className="w-full  ">
                      <h2 className="text-white titulo  text-xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[85px] ">
                        WEB
                      </h2>
                      <h2 className="text-white titulo  text-xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[85px] ">
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
              <div className=" col-span-2 sm:col-span-2  md:col-span-2  lg:col-span-2 xl:col-span-1 grid grid-cols-3 gap-10">
                <div className="w-full  col-span-3 sm:col-span-3  md:col-span-2  lg:col-span-2 xl:col-span-2 flex justify-center xl:justify-end">
                  <Image
                    src="/yo.webp"
                    title="Foto de Lautaro Octavio Faure"
                    alt="Foto de Lautaro Octavio Faure"
                    layout="responsive"
                    width={400}
                    height={400}
                    className="w-full sm:w-full md:w-11/12 lg:w-11/12 xl:w-11/12 h-auto"
                  />
                </div>
                <div className="col-span-3 sm:col-span-3  md:col-span-1  lg:col-span-1 xl:col-span-1 grid grid-cols-6  border rounded border-white p-5">
                  <div className="  col-span-6  underline-dad ">
                    <h3 className=" text-white  text-xl sm:text-4xl ">Redes</h3>
                    <div className="underline mb-5 " />
                  </div>
                  <div className=" relative   col-span-6 sm:col-span-6  md:col-span-6  lg:col-span-6 xl:col-span-6 mb-3 border ml-auto mr-auto h-min w-min p-2 rounded  border-white ">
                    <Link
                      aria-label="Ir a ver el curriculum"
                      title="curriculum"
                      target="_blank"
                      href="curriculum"
                    >
                      <GrBriefcase color="white" fontSize={"45px"} />
                    </Link>
                    <div className="absolute z-10  top-[-35px] right-[-60px] pointer-events-none  p-2 bg-white text-white  opacity-0 rounded-md text-sm   transition-opacity duration-300">
                      <p className="text-black">Curriculum</p>
                    </div>
                  </div>
                  <div className="relative col-span-6 sm:col-span-6  md:col-span-6  lg:col-span-6 xl:col-span-6 mb-3 border ml-auto mr-auto h-min w-min p-2 rounded border-white ">
                    <Link
                      aria-label="Ir a ver enviar un gmail"
                      title="contact"
                      href="#contact"
                    >
                      <FiMail color="white" fontSize={"45px"} />
                    </Link>
                    <div className="absolute z-10  top-[-35px] right-[-40px] pointer-events-none  p-2 bg-white text-white  opacity-0 rounded-md text-sm   transition-opacity duration-300">
                      <p className="text-black">Mail</p>
                    </div>
                  </div>
                  <div className="relative col-span-6 sm:col-span-6  md:col-span-6  lg:col-span-6 xl:col-span-6 mb-3 border ml-auto mr-auto h-min w-min p-2 rounded border-white ">
                    <Link
                      aria-label="Ir a un perfil de linkedin"
                      title="linkedin"
                      target="_blank"
                      href="https://www.linkedin.com/in/lautaro-ocatavio-faure/"
                    >
                      <FaLinkedin color="white" fontSize={"45px"} />
                    </Link>
                    <div className="absolute z-10  top-[-35px] right-[-60px] pointer-events-none  p-2 bg-white text-white  opacity-0 rounded-md text-sm   transition-opacity duration-300">
                      <p className="text-black">Linkedin</p>
                    </div>
                  </div>
                  <div className="relative col-span-6 sm:col-span-6  md:col-span-6  lg:col-span-6 xl:col-span-6 mb-3 border ml-auto mr-auto h-min w-min p-2 rounded border-white ">
                    <Link
                      aria-label="Ir a un contacto de Whatsapp"
                      title="Whatsapp"
                      target="_blank"
                      href="https://wa.me/3541335850"
                    >
                      <FaWhatsapp color="white" fontSize={"45px"} />
                    </Link>
                    <div className="absolute z-10  top-[-35px] right-[-60px] pointer-events-none  p-2 bg-white text-white  opacity-0 rounded-md text-sm   transition-opacity duration-300">
                      <p className="text-black">whatsapp</p>
                    </div>
                  </div>
                  <div className="relative col-span-6 sm:col-span-6  md:col-span-6  lg:col-span-6 xl:col-span-6 mb-3 border ml-auto mr-auto h-min w-min p-2 rounded border-white ">
                    <Link
                      aria-label="Ir a un perfil de Instagram"
                      title="Instagram"
                      target="_blank"
                      href="https://www.instagram.com/faurelautaro/"
                    >
                      <FaInstagram color="white" fontSize={"45px"} />
                    </Link>
                    <div className="absolute z-10  top-[-35px] right-[-60px] pointer-events-none  p-2 bg-white text-white  opacity-0 rounded-md text-sm   transition-opacity duration-300">
                      <p className="text-black">Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Skills-------------------------------------------------------------------- */}
        <div className=" min-h-screen">
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
            <div className="w-full grid   p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10 gap-6">
                <CardSkills
                  Titulo="CSS"
                  texto1="Al mismo tiempo que aprendía HTML, también me sumergí en los estilos y diseños web con CSS. Desde entonces, he estado refinando mis habilidades para crear interfaces atractivas y responsivas"
                  texto2="CSS (Cascading Style Sheets)
                  CSS es un lenguaje utilizado para estilizar el aspecto de las páginas web. Permite definir el diseño, los colores, las fuentes y otros aspectos visuales de una página web."
                ></CardSkills>
                <CardSkills
                  Titulo="HTML"
                  texto1="Hace dos años, comencé a explorar el mundo del desarrollo web y aprendí HTML como mi primera incursión en la creación de contenido web estático."
                  texto2="HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para crear páginas web. Consiste en una serie de elementos que rodean el contenido para darle estructura y significado. HTML utiliza etiquetas para definir diferentes partes del contenido, como encabezados, párrafos, enlaces, imágenes, etc."
                ></CardSkills>
                <CardSkills
                  Titulo="Next.js"
                  texto1="Descubrí Next.js hace aproximadamente un año y desde entonces ha sido mi elección principal para desarrollar aplicaciones web React. Su enfoque en la eficiencia y la escalabilidad ha mejorado significativamente mi flujo de trabajo."
                  texto2=" Next.js es un framework de React que facilita la creación de aplicaciones web escalables y de rendimiento óptimo. Proporciona características como el renderizado del lado del servidor, el enrutamiento automático y la pre-renderización, lo que ayuda a mejorar la velocidad y la eficiencia de las aplicaciones web."
                ></CardSkills>
                <CardSkills
                  Titulo="Next UI"
                  texto1="Mi experiencia con Next UI ha mejorado aún más mi flujo de trabajo al proporcionarme una amplia gama de componentes reutilizables y herramientas de diseño que aceleran el desarrollo de interfaces de usuario modernas y estéticamente atractivas."
                  texto2="Next UI es una biblioteca de componentes para Next.js que ofrece una experiencia de desarrollo más rápida. Proporciona una variedad de componentes reutilizables y personalizables que pueden ser fácilmente integrados en aplicaciones web desarrolladas con Next.js."
                ></CardSkills>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <CardSkills
                  Titulo="Tailwind CSS"
                  texto1="Recientemente, he estado adoptando Tailwind CSS como mi herramienta preferida para la creación de interfaces de usuario. La combinación de su enfoque utilitario y su flexibilidad me ha permitido desarrollar interfaces más rápidamente sin sacrificar la personalización."
                  texto2="Tailwind CSS es un framework CSS que facilita la creación de interfaces de usuario personalizadas y responsivas. En lugar de utilizar clases predefinidas, Tailwind CSS permite construir estilos de forma modular utilizando clases utilitarias que se aplican directamente en el HTML."
                ></CardSkills>
                <CardSkills
                  Titulo="MockAPI"
                  texto1="Recientemente, empecé a utilizar MockAPI como una solución rápida y eficiente para simular servicios RESTful en el desarrollo de prototipos de aplicaciones. Su simplicidad y facilidad de uso han sido invaluable para mí en la fase de desarrollo inicial de proyectos."
                  texto2="MockAPI es una herramienta que permite simular una API para desarrollar y probar aplicaciones sin una backend real. Permite definir endpoints personalizados y generar datos ficticios que pueden ser utilizados durante el desarrollo y la prueba de aplicaciones web."
                ></CardSkills>
                <CardSkills
                  Titulo="MongoDB"
                  texto1="Hace un año, comencé a explorar bases de datos NoSQL y me enamoré de la flexibilidad y la escalabilidad de MongoDB. He utilizado MongoDB en varios proyectos para almacenar datos de forma eficiente y escalable."
                  texto2="MongoDB es una base de datos NoSQL flexible y escalable, ampliamente utilizada en el desarrollo de aplicaciones web modernas. Utiliza un modelo de documentos para almacenar datos en lugar de tablas, lo que facilita la escalabilidad y la flexibilidad de los datos."
                ></CardSkills>
                <CardSkills
                  Titulo="Firebase"
                  texto1="Desde que descubrí Firebase hace seis meses, he estado impresionado por su conjunto completo de herramientas para el desarrollo de aplicaciones móviles y web. He utilizado Firebase para implementar autenticación de usuarios, almacenamiento de datos en tiempo real y notificaciones push en varios proyectos."
                  texto2="Firebase es una plataforma de desarrollo de aplicaciones que proporciona una variedad de servicios backend, incluyendo autenticación de usuarios, almacenamiento en la nube y bases de datos en tiempo real. Permite a los desarrolladores crear aplicaciones web y móviles de alta calidad de forma rápida y sencilla utilizando servicios backend listos para usar."
                ></CardSkills>
              </div>
            </div>
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Project-------------------------------------------------------------------- */}
        <div className=" min-h-screen">
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
            <div className="w-full grid   grid-cols-2  ">
              <div className="rounded-lg border border-white shadow-lg overflow-hidden mt-20 w-full sm:w-full  md:w-full lg:w-10/12 xl:w-10/12 mr-auto ml-auto relative col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xs:col-span-1 ">
                <div className=" text-white p-4 text-center font-bold text-xl">
                  <h1>DivGeeks</h1>
                </div>
                <div className="underline " />
                <div className="h-0.5 bg-gray-300"></div>
                <Image
                  title="foto del proyecto"
                  src="/project.png"
                  alt="Imagen del Proyecto"
                  layout="responsive"
                  width={1920}
                  height={1080} // O ajusta estas dimensiones según el tamaño real de tu imagen
                  className="w-full h-auto min-h-full"
                />
                <div className="absolute bottom-0 z-2 w-full filter bg-transparent  p-2 text-center">
                  <div className="flex align-middle ">
                    <CardProjects
                      nextjs="true"
                      nextui="true"
                      bootstrap="true"
                      sass="true"
                      mongodb="true"
                      firebase="true"
                      html="true"
                      css="true"
                      framerMotion="true"
                      reactNative="true"
                      javascript="true"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white shadow-lg overflow-hidden mt-20 w-full sm:w-full  md:w-full lg:w-10/12 xl:w-10/12 mr-auto ml-auto relative col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xs:col-span-1   ">
                <div className=" text-white p-4 text-center font-bold text-xl">
                  <h1>DivGeeks</h1>
                </div>
                <div className="underline " />
                <div className="h-0.5 bg-gray-300"></div>
                <Image
                  title="foto del proyecto"
                  src="/project.png"
                  alt="Imagen del Proyecto"
                  layout="responsive"
                  width={1920}
                  height={1080} // O ajusta estas dimensiones según el tamaño real de tu imagen
                  className="w-full h-auto min-h-full"
                />
                <div className="absolute bottom-0 z-2 w-full filter bg-transparent  p-2 text-center">
                  <div className="flex align-middle ">
                    <CardProjects
                      nextjs="true"
                      nextui="true"
                      bootstrap="true"
                      sass="true"
                      mongodb="true"
                      firebase="true"
                      html="true"
                      css="true"
                      framerMotion="true"
                      reactNative="true"
                      javascript="true"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white shadow-lg overflow-hidden mt-20 w-full sm:w-full  md:w-full lg:w-10/12 xl:w-10/12   mr-auto ml-auto relative col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xs:col-span-1  ">
                <div className=" text-white p-4 text-center font-bold text-xl">
                  <h1>DivGeeks</h1>
                </div>
                <div className="underline " />
                <div className="h-0.5 bg-gray-300"></div>
                <Image
                  title="foto del proyecto"
                  src="/project.png"
                  alt="Imagen del Proyecto"
                  layout="responsive"
                  width={1920}
                  height={1080} // O ajusta estas dimensiones según el tamaño real de tu imagen
                  className="w-full h-auto min-h-full"
                />
                <div className="absolute bottom-0 z-2 w-full filter bg-transparent  p-2 text-center">
                  <div className="flex align-middle ">
                    <CardProjects
                      nextjs="true"
                      nextui="true"
                      bootstrap="true"
                      sass="true"
                      mongodb="true"
                      firebase="true"
                      html="true"
                      css="true"
                      framerMotion="true"
                      reactNative="true"
                      javascript="true"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-white shadow-lg overflow-hidden mt-20 w-full sm:w-full  md:w-full lg:w-10/12 xl:w-10/12   mr-auto ml-auto relative col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xs:col-span-1  ">
                <div className=" text-white p-4 text-center font-bold text-xl">
                  <h1>DivGeeks</h1>
                </div>
                <div className="underline " />
                <div className="h-0.5 bg-gray-300"></div>
                <Image
                  title="foto del proyecto"
                  src="/project.png"
                  alt="Imagen del Proyecto"
                  layout="responsive"
                  width={1920}
                  height={1080} // O ajusta estas dimensiones según el tamaño real de tu imagen
                  className="w-full h-auto min-h-full"
                />
                <div className="absolute bottom-0 z-2 w-full filter bg-transparent  p-2 text-center">
                  <div className="flex align-middle ">
                    <CardProjects
                      nextjs="true"
                      nextui="true"
                      bootstrap="true"
                      sass="true"
                      mongodb="true"
                      firebase="true"
                      html="true"
                      css="true"
                      framerMotion="true"
                      reactNative="true"
                      javascript="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* --------------------------------------------------------------------Contact-------------------------------------------------------------------- */}
        <div className=" w-full min-h-screen">
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
      <footer className="bg-trasparent text-white py-8">
        <div className="underline mb-5"></div>
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
        <hr className="border-t border-white mt-8"></hr>
        <div className="container mx-auto mt-4 text-center">
          <p>Derechos de autor © 2024. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
