import React from "react";
import Navbar from "@/components/navbar";
export default function CurriculumPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="mb-5 w-full grid grid-cols-2">
        <div className=" col-span-1">
          <button className="text-white bg-transparent border w-fit border-white rounded-lg shadow-lg p-2 transition duration-500 ease-in-out hover:bg-white hover:text-black ">
            <a href="/cv.pdf" download={"/cv.pdf"}>
              Descargar Curriculum
            </a>
          </button>
        </div>
        <div className=" col-span-1">
          <div className="flex justify-end">
            <button className="text-white bg-transparent border w-fit border-white rounded-lg shadow-lg p-2 transition duration-500 ease-in-out hover:bg-white hover:text-black ">
              <a href="/">Volver</a>
            </button>
          </div>
        </div>
      </div>
      <embed
        src="/cv.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ height: "85vh" }}
      />
    </div>
  );
}
