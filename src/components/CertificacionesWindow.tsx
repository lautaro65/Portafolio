import React from "react";
import { categorias as categoriasEs } from "@/data/certificacionesData";
import { categorias as categoriasEn } from "@/data/certificacionesDataEnglish";

export function CertificacionesWindow({
  onClose,
  onMinimize,
  onMaximize,
  maximized,
  onDragStart,
  dict,
  lang,
}: {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  maximized: boolean;
  onDragStart: (e: React.MouseEvent) => void;
  dict: any;
  lang: string;
}) {
  const categorias = lang === "en" ? categoriasEn : categoriasEs;

  const [openFolders, setOpenFolders] = React.useState<{
    [key: string]: boolean;
  }>({
    Certificaciones: true,
  });
  const [selectedCurso, setSelectedCurso] = React.useState<{
    categoria: string;
    nombre: string;
    info?: any;
    tecnologias?: string[];
    certificado?: string;
    github?: string;
  } | null>(null);
  const [selectedInfo, setSelectedInfo] = React.useState(false);
  const [openConcepts, setOpenConcepts] = React.useState<{
    [key: number]: boolean;
  }>({});
  const [showSidebar, setShowSidebar] = React.useState(false);

  const toggleFolder = (nombre: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  function toggleConcept(idx: number) {
    setOpenConcepts((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }

  const FolderIcon = ({ open = false, size = 18 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className="drop-shadow"
      role="img"
      aria-label="Carpeta abierta"
    >
      <linearGradient
        id={`folder${open ? "Open" : "Closed"}`}
        x1="24"
        x2="24"
        y1="6.955"
        y2="23.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#eba600"></stop>
        <stop offset="1" stopColor="#c28200"></stop>
      </linearGradient>
      <path
        fill={`url(#folder${open ? "Open" : "Closed"})`}
        d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7H5C3.895,7,3,7.895,3,9v30	c0,1.105,0.895,2,2,2h38c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2H25.828C25.298,11,24.789,10.789,24.414,10.414z"
      ></path>
    </svg>
  );

  const ArrowIcon = ({ open = false }) =>
    open ? (
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        className="transition-transform duration-200"
      >
        <polyline
          points="5,8 10,13 15,8"
          fill="none"
          stroke="#666"
          strokeWidth="2"
        />
      </svg>
    ) : (
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        className="transition-transform duration-200"
      >
        <polyline
          points="8,5 13,10 8,15"
          fill="none"
          stroke="#666"
          strokeWidth="2"
        />
      </svg>
    );

  const NotepadIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6b7280"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );

  function truncateText(text: string, maxLength: number) {
    return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
  }

  const courseTabs = [
    "Conceptos clave",
    "Qué aprendí",
    "Problemas comunes",
    "Buenas prácticas",
    "Ejemplos",
    "Errores frecuentes",
    "Tips rápidos",
  ];
  const courseTabsDict = [
    dict.certifications.tabs.keyConcepts,
    dict.certifications.tabs.whatILearned,
    dict.certifications.tabs.commonProblems,
    dict.certifications.tabs.bestPractices,
    dict.certifications.tabs.examples,
    dict.certifications.tabs.frequentErrors,
    dict.certifications.tabs.quickTips,
  ];

  const [activeTab, setActiveTab] = React.useState(courseTabs[0]);

  const [isMobileLayout, setIsMobileLayout] = React.useState(false);

  function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = React.useState(
      typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    );
    React.useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < breakpoint);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);
    return isMobile;
  }

  const isMobile = useIsMobile();

  React.useEffect(() => {
    setIsMobileLayout(!maximized || isMobile);
    console.log("isMobileLayout updated:", !maximized || isMobile);
  }, [maximized, isMobile]);

  return (
    <div
      className={`w-full h-full flex flex-col bg-[#f5f6fa] shadow-2xl border border-[#ccc] ${
        maximized ? "" : "rounded-xl"
      }`}
    >
      {/* Barra superior */}
      <div
        className={`flex items-center justify-between px-3 md:px-4 py-2 bg-[#e4e6eb] border-b border-[#ccc] ${
          maximized ? "" : "rounded-t-xl"
        } cursor-move select-none`}
        onMouseDown={onDragStart}
      >
        <div className="flex items-center gap-2">
          {isMobileLayout && (
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
              title="Menú"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#232323"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          )}
          <FolderIcon open={true} size={isMobileLayout ? 18 : 22} />
          <span className="font-semibold text-[#232323] text-sm md:text-base">
            {dict.certifications.title || "Certificaciones"}
          </span>
        </div>
        <div className="flex gap-1 md:gap-2">
          <button
            onClick={onMinimize}
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
            title="Minimizar"
          >
            <span className="w-3 md:w-4 h-0.5 bg-[#232323] block" />
          </button>
          {!isMobile && (
            <button
              onClick={onMaximize}
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
              title="Maximizar"
            >
              <span className="w-2.5 h-2.5 md:w-3 md:h-3 border border-[#232323] block" />
            </button>
          )}
          <button
            onClick={onClose}
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded hover:bg-[#e81123]/30 transition"
            title="Cerrar"
          >
            <svg width="10" height="10" viewBox="0 0 10 10">
              <line
                x1="2"
                y1="2"
                x2="8"
                y2="8"
                stroke="#232323"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <line
                x1="8"
                y1="2"
                x2="2"
                y2="8"
                stroke="#232323"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Contenido */}
      <div className="flex flex-1 min-h-0 relative">
        {/* Overlay for mobile */}
        {isMobileLayout && showSidebar && (
          <div
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setShowSidebar(false)}
          />
        )}

        {/* Barra lateral tipo árbol estilo Windows */}
        <aside
          className={`
         ${
           isMobileLayout
             ? `fixed inset-y-0 left-0 z-20 w-64 transform transition-transform duration-300
           ${
             showSidebar
               ? "translate-x-0 opacity-100 pointer-events-auto"
               : "-translate-x-full opacity-0 pointer-events-none"
           }`
             : "relative w-64"
         }
         h-full bg-[#f8fafc] border-r border-[#ddd] p-2 overflow-y-auto
         `}
        >
          <div className="flex items-center justify-between mb-2 px-2">
            <div className="font-semibold text-[#0078d4] text-sm md:text-base">
              {dict.certifications.explorer}
            </div>
            {isMobileLayout && (
              <button
                onClick={() => setShowSidebar(false)}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#e0e0e0]"
                style={{ zIndex: 30 }}
              >
                <svg width="12" height="12" viewBox="0 0 10 10">
                  <line
                    x1="2"
                    y1="2"
                    x2="8"
                    y2="8"
                    stroke="#232323"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="2"
                    y2="8"
                    stroke="#232323"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="border-b border-[#d1d5db] mb-2 mx-2" />
          <ul className="space-y-1 text-sm md:text-[15px]">
            {/* Carpeta principal */}
            <li>
              <button
                type="button"
                className={`w-full text-left flex items-center gap-2 px-2 py-1 rounded-lg font-bold hover:bg-[#e4e6eb] transition`}
                onClick={() => toggleFolder("Certificaciones")}
                style={{ userSelect: "none" }}
              >
                <span className="pointer-events-none flex">
                  <ArrowIcon open={!!openFolders["Certificaciones"]} />
                  <FolderIcon open={!!openFolders["Certificaciones"]} />
                </span>
                {dict.certifications.mainFolder}
              </button>
              {openFolders["Certificaciones"] && (
                <ul className="ml-4 md:ml-6 mt-1 space-y-1">
                  <li>
                    <button
                      type="button"
                      className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#e4e6eb] transition cursor-pointer w-full text-left"
                      onClick={() => {
                        setSelectedCurso(null);
                        setSelectedInfo(true);
                        if (isMobileLayout) setShowSidebar(false);
                      }}
                    >
                      <NotepadIcon />
                      <span>{dict.certifications.info}</span>
                    </button>
                  </li>
                  {categorias.map((cat) => (
                    <li key={cat.nombre}>
                      <button
                        type="button"
                        className={`w-full text-left flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-[#e4e6eb] font-medium transition`}
                        onClick={() => toggleFolder(cat.nombre)}
                        style={{ userSelect: "none" }}
                      >
                        <span className="pointer-events-none">
                          <ArrowIcon open={!!openFolders[cat.nombre]} />
                        </span>
                        <FolderIcon open={!!openFolders[cat.nombre]} />
                        <span className="ml-1">{cat.nombre}</span>
                      </button>
                      {openFolders[cat.nombre] && (
                        <ul className="ml-4 md:ml-6 mt-1 space-y-1">
                          {cat.cursos.map((curso, idx) => (
                            <li key={curso.nombre + idx}>
                              <button
                                type="button"
                                className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#f3f3f3] transition cursor-pointer w-full text-left"
                                onClick={() => {
                                  setSelectedCurso({
                                    ...curso,
                                    categoria: cat.nombre,
                                  });
                                  setSelectedInfo(false);
                                  if (isMobileLayout) setShowSidebar(false);
                                }}
                                title={curso.nombre}
                              >
                                <span className="flex items-center justify-center w-5 h-5">
                                  <NotepadIcon />
                                </span>
                                <span className="truncate whitespace-nowrap block max-w-[120px] md:max-w-[140px]">
                                  {curso.nombre}
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </aside>
        {/* Área principal */}
        <main className="flex-1 p-3 md:p-6 overflow-auto">
          {/* Solo mostrar el título general si NO hay curso ni info */}
          {!selectedCurso && !selectedInfo && (
            <div className="text-base md:text-lg font-semibold mb-4">
              {dict.certifications.myCertifications || "Mis certificaciones"}
            </div>
          )}
          {selectedInfo ? (
            <div className="bg-gradient-to-br from-white via-[#f8fafc] to-[#e4e6eb] rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-[#d1d5db] p-3 md:p-8 mb-4 md:mb-6 relative overflow-hidden max-w-full">
              <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-[#0078d4]/5 to-transparent rounded-full blur-3xl -mr-16 md:-mr-32 -mt-16 md:-mt-32" />
              <div className="relative">
                <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-gradient-to-br from-[#0078d4] to-[#005fa3] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                    <svg
                      width={isMobileLayout ? "24" : "32"}
                      height={isMobileLayout ? "24" : "32"}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-black text-[#232323] mb-2 tracking-tight leading-tight break-words text-2xl sm:text-3xl md:text-4xl">
                      {dict.certifications.infoTitle}
                    </h2>
                    <p className="text-[#6b7280] text-sm md:text-base lg:text-lg font-medium break-words">
                      {dict.certifications.infoSubtitle}
                    </p>
                  </div>
                </div>
                <div className="space-y-4 md:space-y-6">
                  <div className="group bg-gradient-to-br from-white to-[#f8fafc] rounded-xl md:rounded-2xl border-2 border-[#e5e7eb] shadow-lg hover:shadow-2xl hover:border-[#0078d4] transition-all duration-300">
                    <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
                      <div className="bg-gradient-to-br from-[#0078d4] to-[#005fa3] p-2 rounded-lg md:rounded-xl shadow-lg">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 4" />
                        </svg>
                      </div>
                      <span className="font-black text-[#232323] text-base md:text-xl">
                        {dict.certifications.infoBlock1Title}
                      </span>
                    </div>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#374151] text-xs md:text-base leading-relaxed">
                      <ul className="list-disc list-inside text-gray-600 mt-1 mb-2">
                        <li>{dict.certifications.infoBlock1Item1}</li>
                        <li>{dict.certifications.infoBlock1Item2}</li>
                        <li>{dict.certifications.infoBlock1Item3}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-gradient-to-br from-[#ecfdf5] via-white to-[#f0fdf4] rounded-xl md:rounded-2xl border-2 border-[#86efac] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                    <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
                      <div className="bg-gradient-to-br from-[#22c55e] to-[#16a34a] p-2 rounded-lg md:rounded-xl shadow-lg">
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 12l4 4 8-8" />
                        </svg>
                      </div>
                      <span className="font-black text-[#166534] text-base md:text-xl">
                        {dict.certifications.infoBlock2Title}
                      </span>
                    </div>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#15803d] text-xs md:text-base leading-relaxed">
                      <ul className="list-disc list-inside mt-1">
                        <li>{dict.certifications.infoBlock2Item1}</li>
                        <li>{dict.certifications.infoBlock2Item2}</li>
                        <li>{dict.certifications.infoBlock2Item3}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="group bg-gradient-to-br from-[#fef3c7] via-white to-[#fef9e7] rounded-xl md:rounded-2xl border-2 border-[#fcd34d] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                    <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-5">
                      <div className="bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] p-2 rounded-lg md:rounded-xl shadow-lg">
                        <svg
                          width="22"
                          height="22"
                          fill="none"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10 2v2M10 16v2M5.64 5.64l-1.41-1.41M14.77 14.77l1.41 1.41M2 10h2M16 10h2M5.64 12.36l-1.41 1.41M14.77 4.23l1.41-1.41" />
                        </svg>
                      </div>
                      <span className="font-black text-[#92400e] text-base md:text-xl">
                        {dict.certifications.infoBlock3Title}
                      </span>
                    </div>
                    <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#78350f] text-xs md:text-base leading-relaxed">
                      <ul className="list-disc list-inside mt-1">
                        <li>{dict.certifications.infoBlock3Item1}</li>
                        <li>{dict.certifications.infoBlock3Item2}</li>
                        <li>{dict.certifications.infoBlock3Item3}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-4">
                    <span className="text-xs md:text-sm text-gray-500">
                      <span className="font-bold text-[#0078d4]">
                        {dict.certifications.lastUpdateLabel}
                      </span>{" "}
                      {dict.certifications.lastUpdateDate}
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-400">
                      {dict.certifications.infoFooter}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : selectedCurso ? (
            <div className="w-full mx-auto">
              <div className="bg-gradient-to-br from-white via-[#f8fafc] to-[#e4e6eb] rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-[#d1d5db] p-3 md:p-8 mb-4 md:mb-6 relative overflow-hidden max-w-full">
                {/* Decoración de fondo sutil */}
                <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-[#0078d4]/5 to-transparent rounded-full blur-3xl -mr-16 md:-mr-32 -mt-16 md:-mt-32" />

                <div className="relative">
                  {/* Header del curso */}
                  <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-3 md:gap-4 mb-4 md:mb-6">
                    {maximized && (
                      <div className="bg-gradient-to-br from-[#0078d4] to-[#005fa3] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg flex-shrink-0">
                        <svg
                          width={isMobileLayout ? "24" : "32"}
                          height={isMobileLayout ? "24" : "32"}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <h2
                        className={`font-black text-[#232323] mb-2 tracking-tight leading-tight break-words ${
                          maximized
                            ? "text-2xl sm:text-3xl md:text-4xl"
                            : "text-lg sm:text-xl md:text-2xl"
                        }`}
                      >
                        {selectedCurso.nombre}
                      </h2>
                      <p className="text-[#6b7280] text-sm md:text-base lg:text-lg font-medium break-words">
                        {dict.certifications.completed} •{" "}
                        {selectedCurso.categoria}
                      </p>
                    </div>
                  </div>

                  {/* Tecnologías */}
                  {selectedCurso &&
                    Array.isArray(selectedCurso.tecnologias) && (
                      <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                        {selectedCurso.tecnologias.map(
                          (tech: string, idx: number) => (
                            <span
                              key={idx}
                              className="group relative flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-white to-[#f8fafc] border-2 border-[#e5e7eb] shadow-md px-2 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-sm font-bold text-[#374151] hover:border-[#0078d4] hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-br from-[#0078d4] to-[#005fa3] shadow-lg group-hover:animate-pulse" />
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    )}

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-2 md:gap-3 mb-4 md:mb-8 w-full">
                    {selectedCurso.certificado &&
                      selectedCurso.certificado.trim() !== "" && (
                        <a
                          href={selectedCurso.certificado}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver Certificado"
                          className="group flex-1 min-w-[140px] md:min-w-[180px] flex items-center justify-center gap-1.5 md:gap-2 bg-gradient-to-r from-[#0078d4] to-[#0086f0] text-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-bold border-2 border-[#0078d4]/20 relative overflow-hidden text-xs md:text-base"
                        >
                          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                          <svg
                            width={isMobileLayout ? "16" : "20"}
                            height={isMobileLayout ? "16" : "20"}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="relative z-10"
                          >
                            <path d="M12 15l-3-3m0 0l3-3m-3 3h12" />
                            <path d="M3 12c0 9 3 12 9 12s9-3 9-12-3-12-9-12S3 3 3 12z" />
                          </svg>
                          <span className="relative z-10">
                            {dict.certifications.viewCertificate}
                          </span>
                        </a>
                      )}
                    {selectedCurso.github &&
                      selectedCurso.github.trim() !== "" && (
                        <a
                          href={selectedCurso.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Código en GitHub"
                          className="group flex-1 min-w-[140px] md:min-w-[180px] flex items-center justify-center gap-1.5 md:gap-2 bg-gradient-to-r from-[#1f2937] to-[#374151] text-white px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 font-bold border-2 border-[#1f2937]/20 relative overflow-hidden text-xs md:text-base"
                        >
                          <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                          <svg
                            width={isMobileLayout ? "16" : "20"}
                            height={isMobileLayout ? "16" : "20"}
                            viewBox="0 0 24 24"
                            fill="white"
                            className="relative z-10"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span className="relative z-10 hidden sm:inline">
                            Código en GitHub
                          </span>
                          <span className="relative z-10 sm:hidden">
                            GitHub
                          </span>
                        </a>
                      )}
                  </div>

                  <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent mb-4 md:mb-8">
                    <div className="flex gap-1.5 md:gap-2 p-2 bg-white/50 rounded-xl md:rounded-2xl border border-[#e5e7eb] shadow-sm min-w-max md:min-w-0 md:flex-wrap">
                      {courseTabs.map((tab, idx) => (
                        <button
                          key={tab}
                          className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-sm transition-all duration-300 relative overflow-hidden whitespace-nowrap
                        ${
                          activeTab === tab
                            ? "bg-gradient-to-r from-[#0078d4] to-[#0086f0] text-white shadow-lg scale-[1.02]"
                            : "bg-white text-[#6b7280] hover:bg-[#f8fafc] hover:text-[#232323] shadow-sm border border-[#e5e7eb]"
                        }
                      `}
                          onClick={() => setActiveTab(tab)}
                        >
                          {/* Icono decorativo para cada tab */}
                          <span
                            className={activeTab === tab ? "animate-pulse" : ""}
                          >
                            {idx === 0 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#0078d4"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="9" cy="9" r="7" />
                                <path d="M9 5v4l3 3" />
                              </svg>
                            )}
                            {idx === 1 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#10b981"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M4 12l4 4 8-8" />
                              </svg>
                            )}
                            {idx === 2 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#f59e0b"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="9" cy="9" r="7" />
                                <path d="M9 6v3" />
                                <circle
                                  cx="9"
                                  cy="12"
                                  r="0.5"
                                  fill={activeTab === tab ? "white" : "#f59e0b"}
                                />
                              </svg>
                            )}
                            {idx === 3 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#22c55e"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 6l-6 6M6 6l6 6" />
                                <path d="M3 9h12M3 13h12" />
                              </svg>
                            )}
                            {idx === 4 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#8b5cf6"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  x="4"
                                  y="4"
                                  width="10"
                                  height="10"
                                  rx="2"
                                />
                                <path d="M8 8h2v2H8z" />
                              </svg>
                            )}
                            {idx === 5 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#ef4444"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 9l5-5M9 9l-5 5M9 9l5 5M9 9l-5-5" />
                              </svg>
                            )}
                            {idx === 6 && (
                              <svg
                                width={isMobileLayout ? "14" : "18"}
                                height={isMobileLayout ? "14" : "18"}
                                fill="none"
                                stroke={activeTab === tab ? "white" : "#fbbf24"}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M9 2v2M9 14v2M5.64 5.64l-1.41-1.41M13.77 13.77l1.41 1.41M2 10h2M14 10h2M5.64 12.36l-1.41 1.41M13.77 4.23l1.41-1.41" />
                              </svg>
                            )}
                          </span>
                          <span>{courseTabsDict[idx]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="w-full">
                    {activeTab === "Conceptos clave" &&
                      Array.isArray(
                        selectedCurso.info?.["Conceptos clave"]
                      ) && (
                        <div className="space-y-3 md:space-y-4">
                          {selectedCurso.info?.["Conceptos clave"].map(
                            (
                              concept: {
                                titulo: string;
                                descripcion: string;
                                importancia?: string[];
                                tips?: string[];
                              },
                              idx: number
                            ) => (
                              <div
                                key={idx}
                                className="group bg-gradient-to-br from-white to-[#f8fafc] rounded-xl md:rounded-2xl border-2 border-[#e5e7eb] shadow-lg hover:shadow-2xl hover:border-[#0078d4] transition-all duration-300"
                              >
                                <button
                                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 md:py-5 text-left rounded-2xl transition-all"
                                  onClick={() => toggleConcept(idx)}
                                >
                                  <span className="flex items-center gap-3 md:gap-4">
                                    <div className="bg-gradient-to-br from-[#0078d4] to-[#005fa3] p-2 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "20" : "24"}
                                        height={isMobileLayout ? "20" : "24"}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 4" />
                                      </svg>
                                    </div>
                                    <span className="font-black text-[#232323] text-sm md:text-xl group-hover:text-[#0078d4] transition-colors">
                                      {concept.titulo}
                                    </span>
                                  </span>
                                  <span
                                    className="transition-transform duration-300 flex-shrink-0"
                                    style={{
                                      transform: openConcepts[idx]
                                        ? "rotate(90deg)"
                                        : "rotate(0deg)",
                                    }}
                                  >
                                    <svg
                                      width={isMobileLayout ? "20" : "24"}
                                      height={isMobileLayout ? "20" : "24"}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      stroke="#0078d4"
                                      strokeWidth="2.5"
                                      strokeLinecap="round"
                                    >
                                      <polyline points="8,6 12,10 8,14" />
                                    </svg>
                                  </span>
                                </button>

                                {openConcepts[idx] && (
                                  <div className="px-4 md:px-6 pb-4 md:pb-6 text-[#374151] text-xs md:text-base leading-relaxed animate-fade-in">
                                    {/* Descripción section */}
                                    <div className="bg-[#f8fafc] rounded-lg md:rounded-xl p-3 md:p-5 border-l-4 border-[#0078d4] shadow-sm mb-3 md:mb-4">
                                      <div className="font-bold text-[#0078d4] mb-2 text-sm md:text-lg flex items-center gap-2">
                                        <svg
                                          width={isMobileLayout ? "16" : "20"}
                                          height={isMobileLayout ? "16" : "20"}
                                          fill="none"
                                          stroke="#0078d4"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        >
                                          <path d="M12 2l-2 7h8l-6 11 2-8H6z" />
                                        </svg>
                                        {dict.certifications.description}
                                      </div>
                                      <p className="text-[#1f2937] leading-relaxed text-xs md:text-base">
                                        {concept.descripcion}
                                      </p>
                                    </div>

                                    <div className="space-y-3 md:space-y-4">
                                      {/* ¿Por qué es importante? section */}
                                      {concept.importancia &&
                                        concept.importancia.length > 0 && (
                                          <div className="bg-gradient-to-r from-[#dbeafe] to-[#f0f9ff] rounded-lg md:rounded-xl p-3 md:p-5 border border-[#93c5fd]">
                                            <div className="font-black text-[#1e40af] mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                                              <svg
                                                width={
                                                  isMobileLayout ? "16" : "20"
                                                }
                                                height={
                                                  isMobileLayout ? "16" : "20"
                                                }
                                                fill="none"
                                                stroke="#1e40af"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              >
                                                <circle cx="10" cy="10" r="8" />
                                                <path d="M10 6v4" />
                                                <circle
                                                  cx="10"
                                                  cy="14"
                                                  r="0.5"
                                                  fill="#1e40af"
                                                />
                                              </svg>
                                              {dict.certifications.whyImportant}
                                            </div>
                                            <ul className="space-y-1.5 md:space-y-2 text-[#1e40af] text-xs md:text-base">
                                              {concept.importancia.map(
                                                (item, i) => (
                                                  <li
                                                    key={i}
                                                    className="flex items-start gap-2"
                                                  >
                                                    <span className="text-[#3b82f6] font-bold mt-0.5 md:mt-1">
                                                      •
                                                    </span>
                                                    <span>{item}</span>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        )}

                                      {/* Tips section */}
                                      {concept.tips &&
                                        concept.tips.length > 0 && (
                                          <div className="bg-gradient-to-r from-[#fef3c7] to-[#fef9e7] rounded-lg md:rounded-xl p-3 md:p-5 border border-[#fcd34d]">
                                            <div className="font-black text-[#92400e] mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                                              <svg
                                                width={
                                                  isMobileLayout ? "16" : "20"
                                                }
                                                height={
                                                  isMobileLayout ? "16" : "20"
                                                }
                                                fill="none"
                                                stroke="#92400e"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                              >
                                                <path d="M10 2v2M10 16v2M5.64 5.64l-1.41-1.41M14.77 14.77l1.41 1.41M2 10h2M16 10h2M5.64 12.36l-1.41 1.41M14.77 4.23l1.41-1.41" />
                                              </svg>
                                              Tips
                                            </div>
                                            <ul className="space-y-1.5 md:space-y-2 text-[#92400e] text-xs md:text-base">
                                              {concept.tips.map((tip, i) => (
                                                <li
                                                  key={i}
                                                  className="flex items-start gap-2"
                                                >
                                                  <span className="text-[#f59e0b] font-bold mt-0.5 md:mt-1">
                                                    •
                                                  </span>
                                                  <span>{tip}</span>
                                                </li>
                                              ))}
                                            </ul>
                                          </div>
                                        )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )}

                    {activeTab === "Qué aprendí" && (
                      <div className="space-y-3 md:space-y-4">
                        {Array.isArray(selectedCurso.info?.["Qué aprendí"]) &&
                          selectedCurso.info?.["Qué aprendí"].map(
                            (
                              item: { titulo: string; descripcion: string },
                              idx: number
                            ) => (
                              <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-[#ecfdf5] via-white to-[#f0fdf4] rounded-xl md:rounded-2xl border-2 border-[#86efac] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#22c55e]/10 to-transparent rounded-bl-full" />
                                <div className="relative p-4 md:p-6">
                                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                                    <div className="flex-shrink-0 bg-gradient-to-br from-[#22c55e] to-[#16a34a] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "20" : "24"}
                                        height={isMobileLayout ? "20" : "24"}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M4 12l4 4 8-8" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="text-[#166534] text-base md:text-xl font-black mb-1 md:mb-2 leading-tight">
                                        {item.titulo}
                                      </h3>
                                      <p className="text-[#15803d] text-xs md:text-base leading-relaxed">
                                        {item.descripcion}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        {!Array.isArray(
                          selectedCurso.info?.["Qué aprendí"]
                        ) && (
                          <div className="bg-gradient-to-br from-[#ecfdf5] to-white rounded-xl md:rounded-2xl border-2 border-[#86efac] p-6 md:p-8 text-center">
                            <p className="text-[#6b7280] text-sm md:text-lg">
                              {dict.certifications.noInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "Problemas comunes" && (
                      <div className="space-y-3 md:space-y-4">
                        {Array.isArray(
                          selectedCurso.info?.["Problemas comunes"]
                        ) &&
                          selectedCurso.info?.["Problemas comunes"].map(
                            (
                              item: { titulo: string; descripcion: string },
                              idx: number
                            ) => (
                              <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-[#fef3c7] via-white to-[#fef9e7] rounded-xl md:rounded-2xl border-2 border-[#fcd34d] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-bl-full" />
                                <div className="relative p-4 md:p-6">
                                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                                    <div className="flex-shrink-0 bg-gradient-to-br from-[#f59e0b] to-[#d97706] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "20" : "24"}
                                        height={isMobileLayout ? "20" : "24"}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 8v4" />
                                        <circle
                                          cx="12"
                                          cy="16"
                                          r="0.5"
                                          fill="white"
                                        />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="text-[#92400e] text-base md:text-xl font-black mb-1 md:mb-2 leading-tight">
                                        {item.titulo}
                                      </h3>
                                      <p className="text-[#b45309] text-xs md:text-base leading-relaxed">
                                        {item.descripcion}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        {!Array.isArray(
                          selectedCurso.info?.["Problemas comunes"]
                        ) && (
                          <div className="bg-gradient-to-br from-[#fef3c7] to-white rounded-xl md:rounded-2xl border-2 border-[#fcd34d] p-6 md:p-8 text-center">
                            <p className="text-[#6b7280] text-sm md:text-lg">
                              {dict.certifications.noInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "Buenas prácticas" && (
                      <div className="space-y-3 md:space-y-4">
                        {Array.isArray(
                          selectedCurso.info?.["Buenas prácticas"]
                        ) &&
                          selectedCurso.info?.["Buenas prácticas"].map(
                            (
                              item: { titulo: string; descripcion: string },
                              idx: number
                            ) => (
                              <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-[#dcfce7] via-white to-[#f0fdf4] rounded-xl md:rounded-2xl border-2 border-[#86efac] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#22c55e]/10 to-transparent rounded-bl-full" />
                                <div className="relative p-4 md:p-6">
                                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                                    <div className="flex-shrink-0 bg-gradient-to-br from-[#22c55e] to-[#16a34a] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "20" : "24"}
                                        height={isMobileLayout ? "20" : "24"}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M12 6l-6 6M6 6l6 6" />
                                        <path d="M3 9h12M3 13h12" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="text-[#166534] text-base md:text-xl font-black mb-1 md:mb-2 leading-tight">
                                        {item.titulo}
                                      </h3>
                                      <p className="text-[#15803d] text-xs md:text-base leading-relaxed">
                                        {item.descripcion}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        {!Array.isArray(
                          selectedCurso.info?.["Buenas prácticas"]
                        ) && (
                          <div className="bg-gradient-to-br from-[#dcfce7] to-white rounded-xl md:rounded-2xl border-2 border-[#86efac] p-6 md:p-8 text-center">
                            <p className="text-[#6b7280] text-sm md:text-lg">
                              {dict.certifications.noInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "Ejemplos" && (
                      <div className="space-y-3 md:space-y-4">
                        {Array.isArray(selectedCurso.info?.["Ejemplos"]) &&
                          selectedCurso.info?.["Ejemplos"].map(
                            (item: string, idx: number) => (
                              <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-[#f3e8ff] via-white to-[#faf5ff] rounded-xl md:rounded-2xl border-2 border-[#d8b4fe] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#8b5cf6]/10 to-transparent rounded-bl-full" />
                                <div className="relative p-4 md:p-6">
                                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                                    <div className="flex-shrink-0 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "20" : "24"}
                                        height={isMobileLayout ? "20" : "24"}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          x="4"
                                          y="4"
                                          width="16"
                                          height="16"
                                          rx="2"
                                        />
                                        <path d="M8 8h4v4H8z" />
                                      </svg>
                                    </div>
                                    <span className="inline-block bg-[#8b5cf6] text-white px-2 md:px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold">
                                      {courseTabsDict[4]} #{idx + 1}
                                    </span>
                                  </div>
                                  <pre className="bg-[#1e293b] text-[#e2e8f0] p-3 md:p-4 rounded-lg md:rounded-xl overflow-x-auto text-[10px] md:text-sm font-mono border border-[#334155]">
                                    <code>{item}</code>
                                  </pre>
                                </div>
                              </div>
                            )
                          )}
                        {!Array.isArray(selectedCurso.info?.["Ejemplos"]) && (
                          <div className="bg-gradient-to-br from-[#f3e8ff] to-white rounded-xl md:rounded-2xl border-2 border-[#d8b4fe] p-6 md:p-8 text-center">
                            <p className="text-[#6b7280] text-sm md:text-lg">
                              {dict.certifications.noInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "Errores frecuentes" && (
                      <div className="space-y-3 md:space-y-4">
                        {Array.isArray(
                          selectedCurso.info?.["Errores frecuentes"]
                        ) &&
                          selectedCurso.info?.["Errores frecuentes"].map(
                            (
                              item: { titulo: string; descripcion: string },
                              idx: number
                            ) => (
                              <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-[#fee2e2] via-white to-[#fef2f2] rounded-xl md:rounded-2xl border-2 border-[#fca5a5] shadow-lg hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#ef4444]/10 to-transparent rounded-bl-full" />
                                <div className="relative p-4 md:p-6">
                                  <div className="flex items-start gap-3 md:gap-4 mb-2 md:mb-3">
                                    <div className="flex-shrink-0 bg-gradient-to-br from-[#ef4444] to-[#dc2626] p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "20" : "24"}
                                        height={isMobileLayout ? "20" : "24"}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M9 9l5-5M9 9l-5 5M9 9l5 5M9 9l-5-5" />
                                      </svg>
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="text-[#991b1b] text-base md:text-xl font-black mb-1 md:mb-2 leading-tight">
                                        {item.titulo}
                                      </h3>
                                      <p className="text-[#b91c1c] text-xs md:text-base leading-relaxed">
                                        {item.descripcion}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        {!Array.isArray(
                          selectedCurso.info?.["Errores frecuentes"]
                        ) && (
                          <div className="bg-gradient-to-br from-[#fee2e2] to-white rounded-xl md:rounded-2xl border-2 border-[#fca5a5] p-6 md:p-8 text-center">
                            <p className="text-[#6b7280] text-sm md:text-lg">
                              {dict.certifications.noInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "Tips rápidos" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {Array.isArray(selectedCurso.info?.["Tips rápidos"]) &&
                          selectedCurso.info?.["Tips rápidos"].map(
                            (item: string, idx: number) => (
                              <div
                                key={idx}
                                className="group relative bg-gradient-to-br from-[#fef3c7] via-white to-[#fef9e7] rounded-xl md:rounded-2xl border-2 border-[#fde68a] shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                              >
                                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#fbbf24]/10 to-transparent rounded-bl-full" />
                                <div className="relative p-4 md:p-5">
                                  <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                                    <div className="flex-shrink-0 bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] p-1.5 md:p-2 rounded-md md:rounded-lg shadow-md group-hover:scale-110 transition-transform">
                                      <svg
                                        width={isMobileLayout ? "16" : "20"}
                                        height={isMobileLayout ? "16" : "20"}
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <path d="M10 2v2M10 16v2M5.64 5.64l-1.41-1.41M14.77 14.77l1.41 1.41M2 10h2M16 10h2M5.64 12.36l-1.41 1.41M14.77 4.23l1.41-1.41" />
                                      </svg>
                                    </div>
                                    <span className="inline-block bg-[#fbbf24] text-white px-2 md:px-3 py-0.5 md:py-1 rounded-md md:rounded-lg text-[10px] md:text-xs font-bold">
                                      {courseTabsDict[6]} #{idx + 1}
                                    </span>
                                  </div>
                                  <p className="text-[#78350f] text-xs md:text-base leading-relaxed font-semibold">
                                    {item}
                                  </p>
                                </div>
                              </div>
                            )
                          )}
                        {!Array.isArray(
                          selectedCurso.info?.["Tips rápidos"]
                        ) && (
                          <div className="col-span-full bg-gradient-to-br from-[#fef3c7] to-white rounded-xl md:rounded-2xl border-2 border-[#fde68a] p-6 md:p-8 text-center">
                            <p className="text-[#6b7280] text-sm md:text-lg">
                              {dict.certifications.noInfo}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-4 md:p-6 border border-[#eee] flex flex-col items-center justify-center text-center">
              <NotepadIcon />
              <p className="text-[#6b7280] mt-3 text-sm md:text-base">
                {dict.certifications.selectCourse}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
