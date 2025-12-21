// components/desktop.tsxactual
"use client";

import { useRef, useState, useEffect } from "react";
import { VSCodeWindow } from "@/components/vscode-window";
import NotepadWindow from "./NotepadWindow";
import {
  File,
  Search,
  Folder,
  Settings,
  Wifi,
  Volume2,
  Battery,
  User,
  FileText,
  X,
  Calculator,
  Minus,
} from "lucide-react";
import React from "react";
import { CalculatorContent } from "./Calculator";

// Fondos de pantalla y colores sólidos
const wallpapers = [
  {
    name: "Pradera verde",
    url: "/wallpapers/5.jpg",
    type: "image",
  },
  {
    name: "Playa del naufragio",
    url: "/wallpapers/6.jpg",
    type: "image",
  },
  {
    name: "Arco marino",
    url: "/wallpapers/7.jpg",
    type: "image",
  },
  {
    name: "Árbol solitario",
    url: "/wallpapers/8.jpg",
    type: "image",
  },
  {
    name: "Lago Braies",
    url: "/wallpapers/9.jpg",
    type: "image",
  },
  {
    name: "Ventana de luz",
    url: "/wallpapers/11.jpg",
    type: "image",
  },
];

const solidColors = [
  { name: "Azul Windows", color: "#0078d4" },
  { name: "Negro", color: "#232323" },
  { name: "Gris", color: "#444444" },
  { name: "Verde", color: "#228B22" },
  { name: "Rojo", color: "#B22222" },
  { name: "Blanco", color: "#f5f5f5" },
];

function isColorLight(hex: string) {
  // Simple luminancia para saber si el color es claro
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  // Fórmula de luminancia
  return 0.299 * r + 0.587 * g + 0.114 * b > 200;
}

export function Desktop() {
  // Estados de la ventana y VS Code
  const [windowState, setWindowState] = useState("open");
  const [maximized, setMaximized] = useState(true);
  const [showVsCodeMsg, setShowVsCodeMsg] = useState(false);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [wallpaper, setWallpaper] = useState(wallpapers[5].url);
  const [wallpaperType, setWallpaperType] = useState<"image" | "color">(
    "image"
  );
  const [solidColor, setSolidColor] = useState(solidColors[0].color);
  const [customColor, setCustomColor] = useState<string | null>(null);
  const [showWallpaperMenu, setShowWallpaperMenu] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const [notepadMaximized, setNotepadMaximized] = useState(false);
  const [notepadMinimized, setNotepadMinimized] = useState(false);
  const [activeWindow, setActiveWindow] = useState<
    "vscode" | "notepad" | "cv" | "calculator" | null
  >(null);
  const [showNotepadMsg, setShowNotepadMsg] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showCVMsg, setShowCVMsg] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorMinimized, setCalculatorMinimized] = useState(false);
  const [showCalculatorMsg, setShowCalculatorMsg] = useState(false);

  // Ejemplo de contenido
  const notepadContent = `¿Por qué contratarme?

• Experiencia profesional en desarrollo web con React, Next.js y TypeScript.
• Capacidad para trabajar en equipo y comunicar ideas de forma clara.
• Proactividad y aprendizaje constante de nuevas tecnologías.
• Compromiso con la calidad y los plazos de entrega.
• Pasión por crear productos digitales útiles y atractivos.

Si buscas alguien responsable, creativo y con ganas de aportar valor, ¡soy tu mejor opción!

---
💡 Por si no te diste cuenta, podés cambiar el fondo haciendo clic en el botón de usuario abajo a la izquierda. `;

  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  useEffect(() => {
    setInitialX(window.innerWidth / 2 - 0.3 * window.innerWidth);
    setInitialY(window.innerHeight * 0.15);
  }, []);
  const windowPositionRef = useRef({ x: initialX, y: initialY });
  const windowRef = useRef<HTMLDivElement>(null);

  // Control de drag
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  // Actualiza la hora cada minuto
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Mover ventana
  const handleDragStart = (e: React.MouseEvent) => {
    if (maximized) return;
    dragging.current = true;
    dragOffset.current = {
      x: e.clientX - windowPositionRef.current.x,
      y: e.clientY - windowPositionRef.current.y,
    };
    document.body.style.cursor = "move";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging.current && !maximized && windowRef.current) {
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;
        windowPositionRef.current = {
          x: Math.max(0, Math.min(window.innerWidth - 700, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 100, newY)),
        };
        windowRef.current.style.transform = `translate3d(${windowPositionRef.current.x}px, ${windowPositionRef.current.y}px, 0)`;
      }
    };
    const handleMouseUp = () => {
      dragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [maximized]);

  // Reset transform al maximizar
  useEffect(() => {
    if (maximized && windowRef.current) {
      windowRef.current.style.transform = "";
    }
  }, [maximized]);
  // Agrega este useEffect después de los otros useEffect en desktop.tsx
  // (alrededor de la línea donde están los otros useEffect para drag)

  useEffect(() => {
    const handleNotepadMouseMove = (e: MouseEvent) => {
      if (notepadDragging.current && !notepadMaximized && notepadRef.current) {
        const newX = e.clientX - notepadDragOffset.current.x;
        const newY = e.clientY - notepadDragOffset.current.y;
        notepadPositionRef.current = {
          x: Math.max(0, Math.min(window.innerWidth - 400, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 120, newY)),
        };
        notepadRef.current.style.transform = `translate3d(${notepadPositionRef.current.x}px, ${notepadPositionRef.current.y}px, 0)`;
      }
    };

    const handleNotepadMouseUp = () => {
      notepadDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", handleNotepadMouseMove);
    window.addEventListener("mouseup", handleNotepadMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleNotepadMouseMove);
      window.removeEventListener("mouseup", handleNotepadMouseUp);
    };
  }, [notepadMaximized]); // Dependencia para que se actualice cuando cambie notepadMaximized

  // También agrega este useEffect para resetear la transformación cuando se maximiza
  useEffect(() => {
    if (notepadMaximized && notepadRef.current) {
      notepadRef.current.style.transform = "";
    }
  }, [notepadMaximized]);
  const handleMinimize = () => setWindowState("minimized");
  const handleMaximize = () => setMaximized((prev) => !prev);
  const handleClose = () => {
    setWindowState("closed");
    setMaximized(false);
  };
  const handleOpenVSCode = () => {
    if (windowState === "open") {
      setShowVsCodeMsg(true);
      setTimeout(() => setShowVsCodeMsg(false), 2000);
    } else {
      setWindowState("open");
      setShowVsCodeMsg(false);
      bringToFront("vscode"); // Siempre traer al frente al abrir
    }
    setMaximized(false);
  };

  // Handler para abrir Bloc de Notas desde el escritorio
  const handleOpenNotepad = () => {
    if (showNotepad && !notepadMinimized) {
      setShowNotepadMsg(true);
      setTimeout(() => setShowNotepadMsg(false), 2000);
    } else {
      setShowNotepad(true);
      setNotepadMinimized(false);
      setNotepadMaximized(false);
      setShowNotepadMsg(false);
      bringToFront("notepad"); // Siempre traer al frente al abrir
    }
  };

  // Handler para abrir CV desde el escritorio
  const handleOpenCV = () => {
    if (showCV) {
      setShowCVMsg(true);
      setTimeout(() => setShowCVMsg(false), 2000);
    } else {
      setShowCV(true);
      setActiveWindow("cv");
      setShowCVMsg(false);
    }
  };

  // Handler para cerrar CV
  const handleCloseCV = () => setShowCV(false);

  // Handler para abrir la calculadora desde el escritorio
  const handleOpenCalculator = () => {
    if (showCalculator && !calculatorMinimized) {
      setShowCalculatorMsg(true);
      setTimeout(() => setShowCalculatorMsg(false), 2000);
    } else {
      setShowCalculator(true);
      setCalculatorMinimized(false);
      bringToFront("calculator");
    }
  };

  // Handler para minimizar la calculadora
  const handleCalculatorMinimize = () => setCalculatorMinimized(true);

  // Handler para cerrar la calculadora
  const handleCalculatorClose = () => {
    setShowCalculator(false);
    setCalculatorMinimized(false);
  };
  // Refs para mover Bloc de Notas
  const notepadDragging = useRef(false);
  const notepadDragOffset = useRef({ x: 0, y: 0 });

  // Z-index dinámico para CV
  // Z-index dinámico para ventanas
  const vscodeZ = activeWindow === "vscode" ? 60 : 50;
  const notepadZ = activeWindow === "notepad" ? 60 : 50;
  const calculatorZ = activeWindow === "calculator" ? 60 : 50;

  // Estados y refs para la ventana CV
  const [cvMaximized, setCVMaximized] = useState(false);
  const cvInitialX =
    typeof window !== "undefined" ? window.innerWidth / 2 + 320 : 400;
  const cvInitialY =
    typeof window !== "undefined" ? window.innerHeight * 0.22 : 100;
  const cvPositionRef = useRef({ x: cvInitialX, y: cvInitialY });
  const cvRef = useRef<HTMLDivElement>(null);
  const cvDragging = useRef(false);
  const cvDragOffset = useRef({ x: 0, y: 0 });

  const handleCVDragStart = (e: React.MouseEvent) => {
    if (cvMaximized) return;
    cvDragging.current = true;
    cvDragOffset.current = {
      x: e.clientX - cvPositionRef.current.x,
      y: e.clientY - cvPositionRef.current.y,
    };
    document.body.style.cursor = "move";
    document.body.style.userSelect = "none";
  };
  const centerTime = currentTime.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const centerDate = currentTime.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cvDragging.current && !cvMaximized && cvRef.current) {
        const newX = e.clientX - cvDragOffset.current.x;
        const newY = e.clientY - cvDragOffset.current.y;
        cvPositionRef.current = {
          x: Math.max(0, Math.min(window.innerWidth - 520, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 120, newY)),
        };
        cvRef.current.style.transform = `translate3d(${cvPositionRef.current.x}px, ${cvPositionRef.current.y}px, 0)`;
      }
    };
    const handleMouseUp = () => {
      cvDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cvMaximized]);

  useEffect(() => {
    if (cvMaximized && cvRef.current) {
      cvRef.current.style.transform = "";
    }
  }, [cvMaximized]);

  // Handler para descargar CV
  const handleDownloadCV = () => {
    window.open("/CV.pdf", "_blank");
  };

  // 1. actualColor
  const actualColor = customColor ?? solidColor;

  // 2. portfolioTextColor
  const portfolioTextColor = isColorLight(actualColor) ? "#232323" : "#f5f5f5";

  // 3. notepadRef y notepadPositionRef
  const notepadRef = useRef<HTMLDivElement>(null);
  const notepadInitialX =
    typeof window !== "undefined" ? window.innerWidth / 2 - 200 : 100;
  const notepadInitialY =
    typeof window !== "undefined" ? window.innerHeight * 0.22 : 100;
  const notepadPositionRef = useRef({ x: notepadInitialX, y: notepadInitialY });

  // 4. handleNotepadDragStart
  const handleNotepadDragStart = (e: React.MouseEvent) => {
    if (notepadMaximized) return;
    notepadDragging.current = true;
    notepadDragOffset.current = {
      x: e.clientX - notepadPositionRef.current.x,
      y: e.clientY - notepadPositionRef.current.y,
    };
    document.body.style.cursor = "move";
    document.body.style.userSelect = "none";
  };

  // 5. handleNotepadClose, handleNotepadMinimize, handleNotepadMaximize
  const handleNotepadClose = () => {
    setShowNotepad(false);
    setNotepadMinimized(false);
    setNotepadMaximized(false);
  };
  const handleNotepadMinimize = () => setNotepadMinimized(true);
  const handleNotepadMaximize = () => setNotepadMaximized((prev) => !prev);

  // 6. toggleStartMenu
  const toggleStartMenu = () => setShowStartMenu((prev) => !prev);

  // --- Calculadora movible y minimizable ---
  const calculatorRef = useRef<HTMLDivElement>(null);
  const calculatorInitialX =
    typeof window !== "undefined" ? window.innerWidth / 2 - 160 : 100;
  const calculatorInitialY =
    typeof window !== "undefined" ? window.innerHeight * 0.25 : 100;
  const calculatorPositionRef = useRef({
    x: calculatorInitialX,
    y: calculatorInitialY,
  });
  const calculatorDragging = useRef(false);
  const calculatorDragOffset = useRef({ x: 0, y: 0 });

  const handleCalculatorDragStart = (e: React.MouseEvent) => {
    calculatorDragging.current = true;
    calculatorDragOffset.current = {
      x: e.clientX - calculatorPositionRef.current.x,
      y: e.clientY - calculatorPositionRef.current.y,
    };
    document.body.style.cursor = "move";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (calculatorDragging.current && calculatorRef.current) {
        const newX = e.clientX - calculatorDragOffset.current.x;
        const newY = e.clientY - calculatorDragOffset.current.y;
        calculatorPositionRef.current = {
          x: Math.max(0, Math.min(window.innerWidth - 320, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 60, newY)), // Permite mover arriba y a los costados
        };
        calculatorRef.current.style.transform = `translate3d(${calculatorPositionRef.current.x}px, ${calculatorPositionRef.current.y}px, 0)`;
      }
    };
    const handleMouseUp = () => {
      calculatorDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (calculatorRef.current && calculatorMinimized === false) {
      calculatorRef.current.style.transform = `translate3d(${calculatorPositionRef.current.x}px, ${calculatorPositionRef.current.y}px, 0)`;
    }
  }, [calculatorMinimized]);

  // 1. Modifica el estado de ventanas activas
  const [windowOrder, setWindowOrder] = useState<string[]>([]);

  // 2. Función para obtener z-index basado en la posición en el array
  const getZIndex = (windowId: string) => {
    const index = windowOrder.indexOf(windowId);
    if (index === -1) return 50; // Base z-index para ventanas no en el array
    return 51 + index; // Incrementa z-index por posición (51, 52, 53...)
  };

  // 3. Función para activar una ventana
  const bringToFront = (windowId: string) => {
    setWindowOrder((prev) => {
      const newOrder = prev.filter((id) => id !== windowId);
      return [...newOrder, windowId];
    });
  };

  // 4. Modifica los handlers de las ventanas
  const handleVSCodeOpen = () => {
    if (windowState === "open") {
      setShowVsCodeMsg(true);
      setTimeout(() => setShowVsCodeMsg(false), 2000);
    } else {
      setWindowState("open");
      setShowVsCodeMsg(false);
      bringToFront("vscode"); // Siempre traer al frente al abrir
    }
  };

  const handleNotepadOpen = () => {
    if (showNotepad && !notepadMinimized) {
      setShowNotepadMsg(true);
      setTimeout(() => setShowNotepadMsg(false), 2000);
    } else {
      setShowNotepad(true);
      setNotepadMinimized(false);
      bringToFront("notepad"); // Siempre traer al frente al abrir
    }
  };

  const handleCalculatorOpen = () => {
    setShowCalculator(true);
    setCalculatorMinimized(false);
    bringToFront("calculator"); // Traer al frente al restaurar
  };

  // 1. Ajustar las ventanas para pantallas pequeñas
  const getWindowDimensions = () => {
    const isMobile = window.innerWidth < 768;
    return {
      vscode: {
        width: isMobile ? "100%" : "100vh",
        height: isMobile ? "100%" : "40vh",
        minWidth: isMobile ? "100%" : "350px",
        minHeight: isMobile ? "100%" : "400px",
      },
      notepad: {
        width: isMobile ? "100%" : "400px",
        height: isMobile ? "100%" : "auto",
      },
      calculator: {
        width: isMobile ? "100%" : "320px",
        height: isMobile ? "100%" : "420px",
      },
    };
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Add resize listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Estado para búsqueda
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<
    { label: string; action: () => void }[]
  >([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  // 2. Opciones de búsqueda
  const searchOptions = [
    {
      label: "Portafolio",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleOpenVSCode();
      },
    },
    {
      label: "¿Por qué contratarme?",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleOpenNotepad();
      },
    },
    {
      label: "Descargar CV",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleDownloadCV();
      },
    },
    {
      label: "Calculadora",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleOpenCalculator();
      },
    },
  ];
  const searchMenuRef = useRef<HTMLDivElement>(null);

  // 3. Filtrar resultados al escribir
  useEffect(() => {
    console.log("Buscando:", searchText);
    console.log(showSearchResults);
    if (searchText.trim() === "") {
      setSearchResults([]);
      // No ocultes el menú aquí, deja que el blur lo oculte
      return;
    }
    const filtered = searchOptions.filter((opt) =>
      opt.label.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(filtered);
    // No cambies showSearchResults aquí
  }, [searchText]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={
        wallpaperType === "image"
          ? {
              backgroundImage: `url(${wallpaper})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "background-image 0.4s",
            }
          : {
              background: actualColor,
              transition: "background 0.4s",
            }
      }
    >
      {/* Fondo con textura */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      {/* Iconos de escritorio responsive y con espacio uniforme */}
      <div className="absolute top-8 left-0 w-full flex flex-row flex-wrap justify-start gap-8 md:gap-16 px-8 z-10">
        {/* VSCode */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleOpenVSCode}
          style={{ minWidth: 90 }}
        >
          <div className="bg-[#232323cc] rounded-lg p-3 shadow-lg hover:scale-105 transition">
            <img src="./vscode.svg" alt="VSCode" className="w-12 h-12 mb-1" />
          </div>
          <span
            className="text-sm mt-2 font-semibold drop-shadow"
            style={{ color: portfolioTextColor }}
          >
            Portafolio
          </span>
        </div>
        {/* Bloc de Notas */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleOpenNotepad}
          style={{ minWidth: 90 }}
        >
          <div className="bg-[#f5f5f5cc] rounded-lg p-3 shadow-lg hover:scale-105 transition flex items-center justify-center">
            <FileText className="w-12 h-12 text-[#0078d4]" />
          </div>
          <span
            className="text-sm mt-2 font-semibold drop-shadow"
            style={{ color: portfolioTextColor }}
          >
            ¿Por qué contratarme?
          </span>
        </div>
        {/* Descargar CV */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleDownloadCV}
          style={{ minWidth: 90 }}
        >
          <div className="bg-[#f5f5f5cc] rounded-lg p-3 shadow-lg hover:scale-105 transition flex items-center justify-center">
            <File className="w-12 h-12 text-[#0078d4]" />
          </div>
          <span
            className="text-sm mt-2 font-semibold drop-shadow"
            style={{ color: portfolioTextColor }}
          >
            Descargar CV
          </span>
        </div>
        {/* Calculadora */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleOpenCalculator}
          style={{ minWidth: 90 }}
        >
          <div className="bg-[#f5f5f5cc] rounded-lg p-3 shadow-lg hover:scale-105 transition flex items-center justify-center">
            <Calculator className="w-12 h-12 text-[#0078d4]" />
          </div>
          <span
            className="text-sm mt-2 font-semibold drop-shadow"
            style={{ color: portfolioTextColor }}
          >
            Calculadora
          </span>
        </div>
      </div>
      {/* Notificación tipo Windows para VSCode */}
      {showVsCodeMsg && (
        <div className="fixed bottom-8 right-8 z-70 flex items-center gap-3 bg-[#232323] border border-[#444] shadow-xl rounded-lg px-6 py-4 animate-slide-in">
          <img src="./vscode.svg" alt="VSCode" className="w-8 h-8" />
          <div>
            <div className="text-white font-semibold mb-1">Portafolio</div>
            <div className="text-[#cccccc] text-sm">
              No puede abrir 2 VS Code al mismo tiempo
            </div>
          </div>
        </div>
      )}

      {/* Notificación tipo Windows para Bloc de Notas */}
      {showNotepadMsg && (
        <div className="fixed bottom-8 right-8 z-70 flex items-center gap-3 bg-[#232323] border border-[#444] shadow-xl rounded-lg px-6 py-4 animate-slide-in">
          <FileText className="w-8 h-8 text-[#0078d4]" />
          <div>
            <div className="text-white font-semibold mb-1">Bloc de notas</div>
            <div className="text-[#cccccc] text-sm">
              No puede abrir 2 blocs de notas al mismo tiempo
            </div>
          </div>
        </div>
      )}

      {/* Notificación tipo Windows para CV */}
      {showCVMsg && (
        <div className="fixed bottom-8 right-8 z-70 flex items-center gap-3 bg-[#232323] border border-[#444] shadow-xl rounded-lg px-6 py-4 animate-slide-in">
          <File className="w-8 h-8 text-[#0078d4]" />
          <div>
            <div className="text-white font-semibold mb-1">Curriculum</div>
            <div className="text-[#cccccc] text-sm">
              No puede abrir 2 curriculums al mismo tiempo
            </div>
          </div>
        </div>
      )}

      {/* Notificación tipo Windows para Calculadora */}
      {showCalculatorMsg && (
        <div className="fixed bottom-8 right-8 z-70 flex items-center gap-3 bg-[#232323] border border-[#444] shadow-xl rounded-lg px-6 py-4 animate-slide-in">
          <Calculator className="w-8 h-8 text-[#0078d4]" />
          <div>
            <div className="text-white font-semibold mb-1">Calculadora</div>
            <div className="text-[#cccccc] text-sm">
              No puede abrir 2 calculadoras al mismo tiempo
            </div>
          </div>
        </div>
      )}

      {/* Menú Inicio - Solo mostrar cuando NO esté maximizada */}
      {showStartMenu && !maximized && (
        <div className="absolute bottom-12 left-0 w-full md:w-80 h-auto bg-[#1f1f1f] backdrop-blur-xl border border-[#333] rounded-tr-lg shadow-2xl z-30">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/profile.jpg"
                alt="Lautaro"
                className="w-8 h-8 rounded-full object-cover border-2 border-[#0078d4]"
              />
              <span className="text-white text-sm font-semibold">Lautaro</span>
            </div>
            <div className="space-y-2">
              <div
                className="flex items-center gap-3 p-2 hover:bg-[#333] rounded cursor-pointer"
                onClick={() => setShowWallpaperMenu(true)}
              >
                <Folder className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  Cambiar fondo de pantalla
                </span>
              </div>

              <div className="flex items-center gap-3 p-2 hover:bg-[#333] rounded cursor-pointer">
                <User className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">Usuario: Lautaro</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Selector de fondo de pantalla y color sólido */}
      {showWallpaperMenu && (
        <div className="fixed inset-0 bg-black/40 z-[100] p-4 md:p-0">
          <div className="bg-[#232323] rounded-xl shadow-2xl p-4 md:p-8 w-full md:w-[340px]">
            <h2 className="text-white text-lg font-semibold mb-4">
              Elige un fondo de pantalla
            </h2>
            <div className="mb-4">
              <span className="text-xs text-[#9cdcfe] font-semibold">
                Imágenes
              </span>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {wallpapers.map((wp) => (
                  <button
                    key={wp.name}
                    className={`rounded-lg overflow-hidden border-2 transition-all ${
                      wallpaperType === "image" && wallpaper === wp.url
                        ? "border-[#0078d4]"
                        : "border-[#444]"
                    }`}
                    onClick={() => {
                      setWallpaper(wp.url);
                      setWallpaperType("image");
                      setShowWallpaperMenu(false);
                      setCustomColor(null);
                    }}
                  >
                    <img
                      src={wp.url}
                      alt={wp.name}
                      className="w-full h-20 object-cover"
                    />
                    <div className="bg-[#232323] text-white text-xs py-1 text-center">
                      {wp.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-2 mt-6">
              <span className="text-xs text-[#9cdcfe] font-semibold">
                Colores sólidos
              </span>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {solidColors.map((sc) => (
                  <button
                    key={sc.name}
                    className={`rounded-lg border-2 h-12 w-full flex items-center justify-center transition-all ${
                      wallpaperType === "color" && actualColor === sc.color
                        ? "border-[#0078d4]"
                        : "border-[#444]"
                    }`}
                    style={{ background: sc.color }}
                    onClick={() => {
                      setSolidColor(sc.color);
                      setWallpaperType("color");
                      setCustomColor(null);
                      setShowWallpaperMenu(false);
                    }}
                  >
                    <span
                      className={`text-xs font-semibold ${
                        sc.color === "#f5f5f5" ? "text-[#232323]" : "text-white"
                      }`}
                    >
                      {sc.name}
                    </span>
                  </button>
                ))}
              </div>
              {/* Paleta de color personalizada */}
              <div className="mt-4 flex items-center gap-2">
                <input
                  type="color"
                  value={customColor ?? solidColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    setWallpaperType("color");
                  }}
                  className="w-10 h-10 rounded border border-[#444] cursor-pointer"
                  title="Color personalizado"
                />
                <span className="text-xs text-white">Color personalizado</span>
              </div>
            </div>
            <button
              className="mt-6 w-full py-2 bg-[#0078d4] text-white rounded hover:bg-[#005fa3] transition"
              onClick={() => setShowWallpaperMenu(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Ventana VSCode */}
      {windowState === "open" && (
        <div
          ref={windowRef}
          className={`fixed ${
            maximized || window.innerWidth < 768
              ? "top-0 left-0 w-full h-full transition-all duration-200"
              : "top-0 left-0 rounded-xl shadow-2xl border border-[#444]"
          }`}
          style={{
            ...(maximized || window.innerWidth < 768
              ? {}
              : {
                  width: getWindowDimensions().vscode.width,
                  height: getWindowDimensions().vscode.height,
                  minWidth: getWindowDimensions().vscode.minWidth,
                  minHeight: getWindowDimensions().vscode.minHeight,
                  transform: `translate3d(${windowPositionRef.current.x}px, ${windowPositionRef.current.y}px, 0)`,
                  transition: "none",
                }),
            zIndex: getZIndex("vscode"), // <-- z-index dinámico aquí
          }}
          onMouseDown={() => bringToFront("vscode")}
        >
          <VSCodeWindow
            onMinimize={handleMinimize}
            onMaximize={handleMaximize}
            onClose={handleClose}
            maximized={maximized}
            onDragStart={handleDragStart}
          />
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center select-none pointer-events-none">
        <div className="text-6xl font-bold text-white drop-shadow-lg">
          {centerTime}
        </div>
        <div className="text-xl text-gray-200 mt-2 drop-shadow">
          {centerDate.charAt(0).toUpperCase() + centerDate.slice(1)}
        </div>
      </div>

      {/* Ventana Bloc de Notas */}
      {showNotepad && !notepadMinimized && (
        <div
          ref={notepadRef}
          className={`fixed ${
            notepadMaximized || isMobile
              ? "top-0 left-0 w-full h-[calc(100%-3rem)]" // Altura ajustada para móvil
              : "w-[400px]"
          } rounded-xl shadow-2xl border border-[#ccc] bg-white`}
          style={{
            ...(notepadMaximized || isMobile
              ? {}
              : {
                  minWidth: "320px",
                  minHeight: "200px",
                  transform: `translate3d(${notepadPositionRef.current.x}px, ${notepadPositionRef.current.y}px, 0)`,
                  transition: "none",
                }),
            zIndex: getZIndex("notepad"),
          }}
          onMouseDown={() => bringToFront("notepad")}
        >
          <NotepadWindow
            onClose={handleNotepadClose}
            onMinimize={handleNotepadMinimize}
            onMaximize={handleNotepadMaximize}
            maximized={notepadMaximized}
            content={notepadContent}
            onDragStart={handleNotepadDragStart}
          />
        </div>
      )}

      {/* Ventana Calculadora */}
      {showCalculator && !calculatorMinimized && (
        <div
          ref={calculatorRef}
          className={`fixed top-0 left-0 ${
            isMobile
              ? "w-full h-[calc(100vh-4rem)]" // Pantalla completa en móvil menos la barra de tareas
              : "w-[320px] h-[420px]" // Tamaño normal en desktop
          } rounded-xl shadow-2xl border border-[#ccc] bg-white flex flex-col`}
          style={{
            zIndex: getZIndex("calculator"),
            minWidth: isMobile ? "100%" : "320px",
            minHeight: isMobile ? "100%" : "200px",
            transform: !isMobile
              ? `translate3d(${calculatorPositionRef.current.x}px, ${calculatorPositionRef.current.y}px, 0)`
              : "none",
            transition: "none",
          }}
          onMouseDown={() => bringToFront("calculator")}
        >
          {/* Barra superior para mover */}
          <div
            className="absolute top-0 left-0 w-[calc(100%-96px)] h-8 cursor-move z-30"
            style={{ right: "96px" }}
            onMouseDown={handleCalculatorDragStart}
          />
          <div className="flex items-center justify-between px-4 py-2 bg-[#f5f5f5] border-b border-[#ccc] rounded-t-xl">
            <span className="font-semibold text-[#232323]">Calculadora</span>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleCalculatorMinimize}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
                title="Minimizar"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                onClick={handleCalculatorClose}
                className="w-8 h-8 flex items-center justify-center rounded hover:bg-[#ff6b35]/30 transition"
                title="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center text-gray-400 text-lg">
            <CalculatorContent />
          </div>
        </div>
      )}

      {/* Barra de tareas estilo Windows - Mostrar cuando NO esté maximizada O esté miniminada */}
      {(!maximized || windowState === "minimized") && (
        <>
          <div
            className={`
            absolute bottom-0 left-0 w-full 
            ${
              window.innerWidth < 768
                ? "h-16 flex-wrap justify-center gap-2"
                : "h-12"
            } 
            bg-[rgba(0,0,0,0.6)] backdrop-blur-lg border-t border-[rgba(255,255,255,0.1)] 
            flex items-center z-20 shadow-[0_-2px_20px_rgba(0,0,0,0.3)]
          `}
          >
            {/* Botón de inicio con logo de Windows */}
            <button
              className="h-full w-12 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors relative group"
              onClick={toggleStartMenu}
              aria-label="Inicio"
            >
              {/* Logo de Windows */}
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <rect x="2" y="6" width="12" height="9" />
                <rect x="2" y="17" width="12" height="9" />
                <rect x="16" y="4" width="14" height="11" />
                <rect x="16" y="17" width="14" height="11" />
              </svg>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Inicio
              </div>
            </button>

            {/* Barra de búsqueda */}
            <div className="hidden md:flex items-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1.5 ml-2 w-64 transition-colors relative">
              <Search className="w-4 h-4 text-gray-300 mr-2" />
              <input
                type="text"
                placeholder="Escriba aquí para buscar"
                className="bg-transparent text-white text-sm placeholder-gray-400 outline-none flex-1"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSearchResults(true); // Mostrar resultados al escribir
                }}
                onFocus={() => {
                  if (searchText.trim() !== "") setShowSearchResults(true);
                }}
                onBlur={() =>
                  setTimeout(() => setShowSearchResults(false), 150)
                }
                autoComplete="off"
              />
              {/* Menú de resultados */}
              {showSearchResults && (
                <div className="absolute left-0 top-full mt-1 w-full bg-[#232323] border border-[#444] rounded-lg shadow-xl z-50">
                  {searchResults.map((result, idx) => (
                    <button
                      key={result.label}
                      className="w-full text-left px-4 py-2 text-white hover:bg-[#0078d4] hover:text-white transition rounded"
                      onClick={result.action}
                    >
                      {result.label}
                    </button>
                  ))}
                  {searchResults.length === 0 && (
                    <div className="px-4 py-2 text-gray-400">
                      Sin resultados
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Vista de tareas */}
            <button className="h-full w-12 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] transition-colors ml-2 group relative">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 9h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zm0 4h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z" />
              </svg>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#0078d4]" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Vista de tareas
              </div>
            </button>

            {/* Separador */}
            <div className="h-6 w-[1px] bg-[rgba(255,255,255,0.2)] mx-2" />

            {/* Aplicaciones ancladas */}
            <div className="flex items-center gap-1">
              {/* VSCode */}
              <button
                className={`flex items-center justify-center h-10 w-10 rounded-sm transition-all relative group ${
                  windowState === "open" || windowState === "minimized"
                    ? "bg-[rgba(255,255,255,0.15)] border-b-2 border-[#0078d4]"
                    : "hover:bg-[rgba(255,255,255,0.1)]"
                }`}
                onClick={() => {
                  setActiveWindow("vscode");
                  if (windowState === "open") {
                    setWindowState("minimized");
                  } else {
                    setWindowState("open");
                    setMaximized(false);
                    setShowVsCodeMsg(false);
                    bringToFront("vscode"); // Siempre traer al frente al abrir
                  }
                }}
              >
                <img src="./vscode.svg" alt="VSCode" className="h-5 w-5" />
                {windowState === "open" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#0078d4]" />
                )}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Portafolio
                </div>
              </button>

              {/* Bloc de Notas */}
              <button
                className={`flex items-center justify-center h-10 w-10 rounded-sm transition-all relative group ${
                  showNotepad && (!notepadMinimized || notepadMinimized)
                    ? "bg-[rgba(255,255,255,0.15)] border-b-2 border-[#0078d4]"
                    : "hover:bg-[rgba(255,255,255,0.1)]"
                }`}
                onClick={() => {
                  setActiveWindow("notepad");
                  if (showNotepad && !notepadMinimized) {
                    setNotepadMinimized(true);
                  } else {
                    setShowNotepad(true);
                    setNotepadMinimized(false);
                    bringToFront("notepad"); // Traer al frente al restaurar
                  }
                }}
              >
                <FileText className="h-5 w-5 text-[#0078d4]" />
                {showNotepad && !notepadMinimized && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#0078d4]" />
                )}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ¿Por qué contratarme?
                </div>
              </button>

              {/* Calculadora en barra de tareas */}
              <button
                className={`flex items-center justify-center h-10 w-10 rounded-sm transition-all relative group ${
                  showCalculator &&
                  (!calculatorMinimized || calculatorMinimized)
                    ? "bg-[rgba(255,255,255,0.15)] border-b-2 border-[#0078d4]"
                    : "hover:bg-[rgba(255,255,255,0.1)]"
                }`}
                onClick={() => {
                  setActiveWindow("calculator");
                  if (showCalculator && !calculatorMinimized) {
                    setCalculatorMinimized(true);
                  } else {
                    setShowCalculator(true);
                    setCalculatorMinimized(false);
                    bringToFront("calculator"); // Traer al frente al restaurar
                  }
                }}
              >
                <Calculator className="h-5 w-5 text-[#0078d4]" />
                {showCalculator && !calculatorMinimized && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#0078d4]" />
                )}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Calculadora
                </div>
              </button>
              {/* ...otros botones... */}
            </div>

            {/* Espaciador flexible */}
            <div className="flex-1" />

            {/* Área de notificaciones */}
            <div className="flex items-center gap-2 px-3">
              {/* Iconos del sistema */}
              <button className="p-1 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors">
                <Wifi className="w-4 h-4 text-white" />
              </button>
              <button className="p-1 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors">
                <Volume2 className="w-4 h-4 text-white" />
              </button>
              <button className="p-1 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors">
                <Battery className="w-4 h-4 text-white" />
              </button>

              {/* Separador */}
              <div className="h-6 w-[1px] bg-[rgba(255,255,255,0.2)] mx-1" />

              {/* Reloj y fecha */}
              <button className="flex flex-col items-end text-white hover:bg-[rgba(255,255,255,0.1)] px-2 py-1 rounded transition-colors">
                <div className="text-xs font-medium leading-tight">
                  {currentTime.toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div className="text-xs text-gray-300 leading-tight">
                  {currentTime.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </div>
              </button>

              {/* Botón de notificaciones */}
              <button className="h-10 w-8 flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors">
                <div className="w-4 h-4 border border-white rounded-sm relative">
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ff6b35] rounded-full -translate-y-0.5 translate-x-0.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Overlay para cerrar el menú inicio */}
          {showStartMenu && (
            <div
              className="fixed inset-0 z-25"
              onClick={() => setShowStartMenu(false)}
            />
          )}
        </>
      )}

      {/* Animación para la notificación */}
      <style>{`
        .animate-slide-in {
          animation: slideInNotif 0.3s cubic-bezier(.4,0,.2,1);
        }
        @keyframes slideInNotif {
          from { opacity: 0; transform: translateY(40px) scale(0.95);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
      `}</style>
    </div>
  );
}
