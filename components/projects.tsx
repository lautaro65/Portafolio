import Image from "next/image";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiJavascript,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiFirebase,
  SiFramer,
  SiReact,
  SiReactrouter,
  SiCss3,
  SiNextdotjs,
  SiNextui,
  SiTypescript
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { GrReactjs } from "react-icons/gr";
import Link from "next/link";

const ProjectCard = ({ titulo, texto, botones, linkgithub, link,src }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mt-10 md:ml-5 ">
      <div className="md:col-span-4 flex justify-start">
        <h1 className="text-4xl font-bold mb-4 text-white">{titulo}</h1>
      </div>
      <div className="md:col-span-2 lg:col-span-2  xl:col-span-1 flex  align-middle  ">
        <div>
        <video
        src={src} // Cambia esta ruta a tu video
        width={950}
        height={720}
        className="rounded-3xl w-full h-full"
        autoPlay
        muted
      />
        </div>
      </div>
      <div className="md:col-span-2 ml-10 P-10 flex flex-col justify-center">
        <p className="mb-4 text-white">{texto}</p>
        <div className="flex flex-wrap gap-2">
          {botones.map((boton: any, index: any) => (
            <button
              key={index}
              className="bg-gray-500 text-white border mt-5 border-white p-2 flex items-center rounded-full"
            >
              {boton === "Nextjs" && <SiNextdotjs className="mr-1" />}
              {boton === "NextUI" && <SiNextui className="mr-1" />}
              {boton === "Sass" && <SiSass className="mr-1" />}
              {boton === "MongoDB" && <SiMongodb className="mr-1" />}
              {boton === "Firebase" && <SiFirebase className="mr-1" />}
              {boton === "HTML" && <AiFillHtml5 className="mr-1" />}
              {boton === "CSS" && <SiCss3 className="mr-1" />}
              {boton === "Bootstrap" && <SiBootstrap className="mr-1" />}
              {boton === "FramerMotion" && <SiFramer className="mr-1" />}
              {boton === "Javascript" && <SiJavascript className="mr-1" />}
              {boton === "React" && <SiReact className="mr-1" />}
              {boton === "Tailwilnd" && <RiTailwindCssFill  className="mr-1" />}
              {boton === "typescript" && <SiTypescript  className="mr-1" />}
               
              {boton}
            </button>
          ))}
        </div>

        <div className="flex space-x-4 mt-10">
          <Link aria-label="link para ir al codigo" title="link para ir al codigo" href={linkgithub} target="_blank">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded mb-2 flex items-center">
              <AiOutlineGithub className="mr-2" /> Código
            </button>
          </Link>
          <Link aria-label="link para ir a la pagina" title="link para ir a la pagina"  href={link} target="_blank">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded mb-2 flex items-center">
              <AiOutlineLink className="mr-2 text-white" /> Link
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
