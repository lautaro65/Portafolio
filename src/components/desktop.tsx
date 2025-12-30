// components/desktop.tsxactual
"use client";

import { useRef, useState, useEffect } from "react";
import { VSCodeWindow } from "@/components/vscode-window";
import NotepadWindow from "./NotepadWindow";
import {
  File,
  Search,
  Folder,
  Wifi,
  Volume2,
  User,
  FileText,
  X,
  Calculator,
  Minus,
} from "lucide-react";
import type React from "react";
import { CalculatorContent } from "./Calculator";
import Image from "next/image";
import { CertificacionesWindow } from "./CertificacionesWindow";

const wallpapers = [
  { key: "meadow", url: "/wallpapers/5.jpg", type: "image" },
  { key: "shipwreckBeach", url: "/wallpapers/6.jpg", type: "image" },
  { key: "seaArch", url: "/wallpapers/7.jpg", type: "image" },
  { key: "loneTree", url: "/wallpapers/8.jpg", type: "image" },
  { key: "braiesLake", url: "/wallpapers/9.jpg", type: "image" },
  { key: "windowOfLight", url: "/wallpapers/11.jpg", type: "image" },
];

const solidColors = [
  { key: "windowsBlue", color: "#0078d4" },
  { key: "black", color: "#232323" },
  { key: "gray", color: "#444444" },
  { key: "green", color: "#228B22" },
  { key: "red", color: "#B22222" },
  { key: "white", color: "#f5f5f5" },
];

function isColorLight(hex: string) {
  hex = hex.replace("#", "");
  const r = Number.parseInt(hex.substring(0, 2), 16);
  const g = Number.parseInt(hex.substring(2, 4), 16);
  const b = Number.parseInt(hex.substring(4, 6), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 200;
}

type DesktopProps = {
  dict: any;
  lang: string;
};

export function Desktop({ dict, lang }: DesktopProps) {
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
    "vscode" | "notepad" | "cv" | "calculator" | "certificaciones" | null
  >(null);
  const [showNotepadMsg, setShowNotepadMsg] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [showCVMsg, setShowCVMsg] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorMinimized, setCalculatorMinimized] = useState(false);
  const [showCalculatorMsg, setShowCalculatorMsg] = useState(false);

  const [volume, setVolume] = useState(50);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [showWifiMenu, setShowWifiMenu] = useState(false);

  const notepadContent = dict.desktop.notepadContent;

  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  useEffect(() => {
    setInitialX(window.innerWidth / 2 - 0.3 * window.innerWidth);
    setInitialY(window.innerHeight * 0.15);
  }, []);
  const windowPositionRef = useRef({ x: initialX, y: initialY });
  const windowRef = useRef<HTMLDivElement>(null);

  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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

  useEffect(() => {
    if (maximized && windowRef.current) {
      windowRef.current.style.transform = "";
    }
  }, [maximized]);

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
  }, [notepadMaximized]);

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
      bringToFront("vscode");
    }
    setMaximized(false);
  };

  const handleOpenNotepad = () => {
    if (showNotepad && !notepadMinimized) {
      setShowNotepadMsg(true);
      setTimeout(() => setShowNotepadMsg(false), 2000);
    } else {
      setShowNotepad(true);
      setNotepadMinimized(false);
      setNotepadMaximized(false);
      setShowNotepadMsg(false);
      bringToFront("notepad");
    }
  };

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

  const handleCloseCV = () => setShowCV(false);

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

  const handleCalculatorMinimize = () => setCalculatorMinimized(true);

  const handleCalculatorClose = () => {
    setShowCalculator(false);
    setCalculatorMinimized(false);
  };

  const notepadDragging = useRef(false);
  const notepadDragOffset = useRef({ x: 0, y: 0 });

  const vscodeZ = activeWindow === "vscode" ? 60 : 50;
  const notepadZ = activeWindow === "notepad" ? 60 : 50;
  const calculatorZ = activeWindow === "calculator" ? 60 : 50;

  // Agrega el estado para maximizar/minimizar la ventana de certificaciones
  const [certificacionesMaximized, setCertificacionesMaximized] =
    useState(true);
  const [certificacionesMinimized, setCertificacionesMinimized] =
    useState(false);

  // Referencias y lógica para mover la ventana (opcional, puedes mejorarla)
  const certificacionesRef = useRef<HTMLDivElement>(null);
  const certificacionesInitialX =
    typeof window !== "undefined" ? window.innerWidth / 2 - 250 : 100;
  const certificacionesInitialY =
    typeof window !== "undefined" ? window.innerHeight * 0.18 : 100;
  const certificacionesPositionRef = useRef({
    x: certificacionesInitialX,
    y: certificacionesInitialY,
  });
  const certificacionesDragging = useRef(false);
  const certificacionesDragOffset = useRef({ x: 0, y: 0 });

  const handleCertificacionesDragStart = (e: React.MouseEvent) => {
    if (certificacionesMaximized) return;
    certificacionesDragging.current = true;
    certificacionesDragOffset.current = {
      x: e.clientX - certificacionesPositionRef.current.x,
      y: e.clientY - certificacionesPositionRef.current.y,
    };
    document.body.style.cursor = "move";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (
        certificacionesDragging.current &&
        !certificacionesMaximized &&
        certificacionesRef.current
      ) {
        const newX = e.clientX - certificacionesDragOffset.current.x;
        const newY = e.clientY - certificacionesDragOffset.current.y;
        certificacionesPositionRef.current = {
          x: Math.max(0, Math.min(window.innerWidth - 600, newX)),
          y: Math.max(0, Math.min(window.innerHeight - 120, newY)),
        };
        certificacionesRef.current.style.transform = `translate3d(${certificacionesPositionRef.current.x}px, ${certificacionesPositionRef.current.y}px, 0)`;
      }
    };
    const handleMouseUp = () => {
      certificacionesDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [certificacionesMaximized]);

  useEffect(() => {
    if (certificacionesMaximized && certificacionesRef.current) {
      certificacionesRef.current.style.transform = "";
    }
  }, [certificacionesMaximized]);

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
  const locale = lang === "en" ? "en-US" : "es-ES";

  const centerTime = currentTime.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const centerDate = currentTime.toLocaleDateString(locale, {
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

  const handleDownloadCV = () => {
    if (lang === "en") {
      window.open("/Curriculum-Vitae-Lautaro-Faure-English.pdf", "_blank");
    } else {
      window.open("/Curriculum-Vitae-Lautaro-Faure.pdf", "_blank");
    }
  };

  const actualColor = customColor ?? solidColor;
  const portfolioTextColor = isColorLight(actualColor) ? "#232323" : "#f5f5f5";
  const notepadRef = useRef<HTMLDivElement>(null);
  const notepadInitialX =
    typeof window !== "undefined" ? window.innerWidth / 2 - 200 : 100;
  const notepadInitialY =
    typeof window !== "undefined" ? window.innerHeight * 0.22 : 100;
  const notepadPositionRef = useRef({ x: notepadInitialX, y: notepadInitialY });

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

  const handleNotepadClose = () => {
    setShowNotepad(false);
    setNotepadMinimized(false);
    setNotepadMaximized(false);
  };
  const handleNotepadMinimize = () => setNotepadMinimized(true);
  const handleNotepadMaximize = () => setNotepadMaximized((prev) => !prev);

  const toggleStartMenu = () => setShowStartMenu((prev) => !prev);

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
          y: Math.max(0, Math.min(window.innerHeight - 60, newY)),
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

  const [windowOrder, setWindowOrder] = useState<string[]>([]);

  const getZIndex = (windowId: string) => {
    const index = windowOrder.indexOf(windowId);
    if (index === -1) return 50;
    return 51 + index;
  };

  const bringToFront = (windowId: string) => {
    setWindowOrder((prev) => {
      const newOrder = prev.filter((id) => id !== windowId);
      return [...newOrder, windowId];
    });
  };

  const handleVSCodeOpen = () => {
    if (windowState === "open") {
      setShowVsCodeMsg(true);
      setTimeout(() => setShowVsCodeMsg(false), 2000);
    } else {
      setWindowState("open");
      setShowVsCodeMsg(false);
      bringToFront("vscode");
    }
  };

  const handleNotepadOpen = () => {
    if (showNotepad && !notepadMinimized) {
      setShowNotepadMsg(true);
      setTimeout(() => setShowNotepadMsg(false), 2000);
    } else {
      setShowNotepad(true);
      setNotepadMinimized(false);
      bringToFront("notepad");
    }
  };

  const handleCalculatorOpen = () => {
    setShowCalculator(true);
    setCalculatorMinimized(false);
    bringToFront("calculator");
  };

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
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<
    { label: string; action: () => void }[]
  >([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchOptions = [
    {
      label: dict.desktop.vscode || "Portafolio",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleOpenVSCode();
      },
    },
    {
      label: dict.desktop.notepad || "Bloc de notas",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleOpenNotepad();
      },
    },
    {
      label: dict.desktop.downloadCV || "Descargar CV",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleDownloadCV();
      },
    },
    {
      label: dict.desktop.calculator || "Calculadora",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        handleOpenCalculator();
      },
    },
    {
      label: dict.desktop.certifications || "Certificaciones",
      action: () => {
        setShowSearchResults(false);
        setSearchText("");
        setActiveWindow("certificaciones");
        setCertificacionesMinimized(false);
        bringToFront("certificaciones");
      },
    },
  ];
  const searchMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchResults(searchOptions);
    } else {
      const filtered = searchOptions.filter((option) =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filtered);
    }
  }, [searchText]);

  return (
    <div
      className="h-screen w-full overflow-hidden relative"
      style={{
        backgroundImage:
          wallpaperType === "image" ? `url(${wallpaper})` : "none",
        backgroundColor:
          wallpaperType === "color" ? actualColor : "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => {
        if (showStartMenu) setShowStartMenu(false);
        if (showWallpaperMenu) setShowWallpaperMenu(false);
        if (showVolumeControl) setShowVolumeControl(false);
        if (showWifiMenu) setShowWifiMenu(false);
      }}
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
            <Image
              src="./vscode.svg"
              alt="Ícono de VSCode - Portafolio"
              title="Abrir Portafolio"
              width={48}
              height={48}
              className="w-12 h-12 mb-1"
            />
          </div>
          <span
            className="text-sm mt-2 font-semibold drop-shadow"
            style={{ color: portfolioTextColor }}
          >
            {dict.desktop.vscode || "Portafolio"}
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
            {dict.desktop.notepad || "¿Por qué contratarme?"}
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
            {dict.desktop.downloadCV || "Descargar CV"}
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
            {dict.desktop.calculator || "Calculadora"}
          </span>
        </div>
        {/* Certificaciones */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            if (
              activeWindow === "certificaciones" &&
              !certificacionesMinimized
            ) {
              setActiveWindow(null);
            } else {
              setActiveWindow("certificaciones");
              setCertificacionesMinimized(false);
              bringToFront("certificaciones");
            }
          }}
          style={{ minWidth: 90 }}
        >
          <div className="rounded-lg p-3 hover:scale-105 transition flex items-center justify-center bg-transparent">
            {/* SVG de carpeta estilo Windows, fondo transparente, más grande y cambia si está abierta */}
            {activeWindow === "certificaciones" ? (
              // Carpeta abierta
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <linearGradient
                  id="openFolder1"
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
                  fill="url(#openFolder1)"
                  d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7H5C3.895,7,3,7.895,3,9v30	c0,1.105,0.895,2,2,2h38c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2H25.828C25.298,11,24.789,10.789,24.414,10.414z"
                ></path>
                <linearGradient
                  id="openFolder2"
                  x1="24.066"
                  x2="24.066"
                  y1="19.228"
                  y2="33.821"
                  gradientTransform="matrix(-1 0 0 1 48 0)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffd869"></stop>
                  <stop offset="1" stopColor="#fec52b"></stop>
                </linearGradient>
                <path
                  fill="url(#openFolder2)"
                  d="M24,23l3.854-3.854C27.947,19.053,28.074,19,28.207,19H44.81c1.176,0,2.098,1.01,1.992,2.181	l-1.636,18C45.072,40.211,44.208,41,43.174,41H4.79c-1.019,0-1.875-0.766-1.988-1.779L1.062,23.555C1.029,23.259,1.261,23,1.559,23	H24z"
                ></path>
              </svg>
            ) : (
              // Carpeta cerrada (igual que antes pero más grande)
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Cuerpo principal de la carpeta */}
                <path
                  d="M4 38V10.5C4 9.11929 5.11929 8 6.5 8H18.5C19.3284 8 20.0784 8.50001 20.4142 9.24264L22.0858 12.7574C22.4216 13.5 23.1716 14 24 14H41.5C42.8807 14 44 15.1193 44 16.5V38C44 39.3807 42.8807 40.5 41.5 40.5H6.5C5.11929 40.5 4 39.3807 4 38Z"
                  fill="#F3D19C"
                  stroke="#C2A14A"
                  strokeWidth="1.5"
                />
                {/* Detalle de la solapa */}
                <path
                  d="M4 14H20.5L22.5 17.5H44"
                  stroke="#C2A14A"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Sombra interior */}
                <path
                  d="M6 18H42V38C42 39.1046 41.1046 40 40 40H8C6.89543 40 6 39.1046 6 38V18Z"
                  fill="#E6C87A"
                  opacity="0.6"
                />
              </svg>
            )}
          </div>
          <span
            className="text-sm mt-2 font-semibold drop-shadow"
            style={{ color: portfolioTextColor }}
          >
            Certificaciones
          </span>
        </div>
      </div>
      {/* Notificación tipo Windows para VSCode */}
      {showVsCodeMsg && (
        <div className="fixed bottom-8 right-8 z-70 flex items-center gap-3 bg-[#232323] border border-[#444] shadow-xl rounded-lg px-6 py-4 animate-slide-in">
          <Image
            src="./vscode.svg"
            alt="Ícono de VSCode - Portafolio"
            title="Portafolio"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <div>
            <div className="text-white font-semibold mb-1">
              {dict.desktop.vscode || "Portafolio"}
            </div>
            <div className="text-[#cccccc] text-sm">
              {dict.desktop.vscodeOpenMsg ||
                "No puede abrir 2 portafolios al mismo tiempo"}
            </div>
          </div>
        </div>
      )}

      {/* Notificación tipo Windows para Bloc de Notas */}
      {showNotepadMsg && (
        <div className="fixed bottom-8 right-8 z-70 flex items-center gap-3 bg-[#232323] border border-[#444] shadow-xl rounded-lg px-6 py-4 animate-slide-in">
          <FileText className="w-8 h-8 text-[#0078d4]" />
          <div>
            <div className="text-white font-semibold mb-1">
              {dict.desktop.notepad || "Bloc de notas"}
            </div>
            <div className="text-[#cccccc] text-sm">
              {dict.desktop.notepadOpenMsg ||
                "No puede abrir 2 blocs de notas al mismo tiempo"}
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
            <div className="text-white font-semibold mb-1">
              {dict.desktop.calculator || "Calculadora"}
            </div>
            <div className="text-[#cccccc] text-sm">
              {dict.desktop.calculatorOpenMsg ||
                "No puede abrir 2 calculadoras al mismo tiempo"}
            </div>
          </div>
        </div>
      )}

      {/* Menú Inicio  */}
      {showStartMenu && (
        <div className="absolute bottom-12 left-0 w-full md:w-80 h-auto bg-[#1f1f1f] backdrop-blur-xl border border-[#333] rounded-tr-lg shadow-2xl z-30">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/profile.webp"
                alt="Foto de Lautaro Faure"
                title="Lautaro Faure"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover border-2 border-[#0078d4]"
                priority
              />
              <span className="text-white text-sm font-semibold">Lautaro</span>
              {isMobile && (
                <span className="text-xs ml-auto text-gray-300 ">
                  {currentTime.toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  <br />
                  {currentTime.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <div
                className="flex items-center gap-3 p-2 hover:bg-[#333] rounded cursor-pointer"
                onClick={() => setShowWallpaperMenu(true)}
              >
                <Folder className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  {dict.startMenu.changeWallpaper ||
                    "Cambiar fondo de pantalla"}
                </span>
              </div>

              <div className="flex items-center gap-3 p-2 hover:bg-[#333] rounded cursor-pointer">
                <User className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 text-sm">
                  {dict.startMenu.user || "Usuario: Lautaro"}
                </span>
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
              {dict.wallpaperMenu.title || "Seleccionar fondo de pantalla"}
            </h2>
            <div className="mb-4">
              <span className="text-xs text-[#9cdcfe] font-semibold">
                {dict.wallpaperMenu.predefinedWallpapers ||
                  "Fondos de pantalla predefinidos"}
              </span>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {wallpapers.map((wp) => (
                  <button
                    key={wp.key} // <-- usa wp.key aquí
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
                    <Image
                      src={wp.url || "/placeholder.svg"}
                      alt={`Fondo de pantalla: ${dict.wallpapers[wp.key]}`}
                      title={dict.wallpapers[wp.key]}
                      width={160}
                      height={80}
                      className="w-full h-20 object-cover"
                    />
                    <div className="bg-[#232323] text-white text-xs py-1 text-center">
                      {dict.wallpapers[wp.key]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-2 mt-6">
              <span className="text-xs text-[#9cdcfe] font-semibold">
                {dict.wallpaperMenu.solidColors || "Colores sólidos"}
              </span>
              <div className="grid grid-cols-3 gap-3 mt-2">
                {solidColors.map((sc) => (
                  <button
                    key={sc.key}
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
                      {dict.colors[sc.key]}
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
                <span className="text-xs text-white">
                  {dict.wallpaperMenu.customColor || "Color personalizado"}
                </span>
              </div>
            </div>
            <button
              className="mt-6 w-full py-2 bg-[#0078d4] text-white rounded hover:bg-[#005fa3] transition"
              onClick={() => setShowWallpaperMenu(false)}
            >
              {dict.wallpaperMenu.cancel || "Cancelar"}
            </button>
          </div>
        </div>
      )}

      {activeWindow === "certificaciones" && !certificacionesMinimized && (
        <div
          ref={certificacionesRef}
          className={`fixed ${
            certificacionesMaximized || isMobile
              ? "top-0 left-0 w-full h-full"
              : "w-[600px] h-[480px] rounded-xl shadow-2xl border border-[#ccc]"
          }`}
          style={{
            ...(certificacionesMaximized || isMobile
              ? {}
              : {
                  minWidth: "400px",
                  minHeight: "320px",
                  transform: `translate3d(${certificacionesPositionRef.current.x}px, ${certificacionesPositionRef.current.y}px, 0)`,
                  transition: "none",
                }),
            zIndex: getZIndex("certificaciones"),
          }}
          onMouseDown={() => bringToFront("certificaciones")}
        >
          <CertificacionesWindow
            onClose={() => {
              setActiveWindow(null);
              setCertificacionesMinimized(false);
              setCertificacionesMaximized(true);
            }}
            onMinimize={() => setCertificacionesMinimized(true)}
            onMaximize={() => setCertificacionesMaximized((prev) => !prev)}
            maximized={certificacionesMaximized}
            onDragStart={handleCertificacionesDragStart}
            dict={dict}
            lang={lang}
          />
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
            dict={dict}
            lang={lang}
          />
        </div>
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  flex-col items-center select-none pointer-events-none hidden md:flex">
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
            dict={dict}
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
            <span className="font-semibold text-[#232323]">
              {dict.calculator.calculator || "Calculator"}
            </span>
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
            <CalculatorContent dict={dict} />
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
                {dict.startMenu.start || "Inicio"}
              </div>
            </button>

            {/* Barra de búsqueda */}
            <div className="hidden md:flex items-center bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.1)] rounded-full px-3 py-1.5 ml-2 w-64 transition-colors relative">
              <Search className="w-4 h-4 text-gray-300 mr-2" />
              <input
                type="text"
                placeholder={dict.desktop.searchPlaceholder || "Buscar..."}
                className="bg-transparent text-white text-sm placeholder-gray-400 outline-none flex-1"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                onBlur={() =>
                  setTimeout(() => setShowSearchResults(false), 200)
                }
                autoComplete="off"
              />
              {showSearchResults && (
                <div className="absolute left-0 bottom-full mb-2 w-[320px] bg-[rgba(30,30,30,0.98)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] rounded-lg shadow-2xl z-50 overflow-hidden">
                  <div className="p-3 border-b border-[rgba(255,255,255,0.1)]">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      {dict.desktop.bestMatches || "Mejores coincidencias"}
                    </p>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {searchResults.map((result) => (
                      <button
                        key={result.label}
                        className="w-full text-left px-4 py-3 text-white hover:bg-[rgba(255,255,255,0.1)] transition flex items-center gap-3"
                        onClick={result.action}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        <div className="w-8 h-8 bg-[rgba(0,120,212,0.2)] rounded flex items-center justify-center">
                          <Search className="w-4 h-4 text-[#0078d4]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">
                            {result.label}
                          </div>
                        </div>
                      </button>
                    ))}
                    {searchResults.length === 0 && (
                      <div className="px-4 py-8 text-center">
                        <Search className="w-12 h-12 text-gray-600 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">
                          {dict.desktop.noResults ||
                            "No se encontraron resultados"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

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
                <Image
                  src="./vscode.svg"
                  alt="VSCode"
                  title="Portafolio"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                {windowState === "open" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#0078d4]" />
                )}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {dict.desktop.vscode || "Portafolio"}
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
                  {dict.desktop.notepad || "Bloc de notas"}
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
                  {dict.desktop.calculator || "Calculadora"}
                </div>
              </button>

              {/* Certificaciones en barra de tareas */}
              <button
                className={`flex items-center justify-center h-10 w-10 rounded-sm transition-all relative group ${
                  activeWindow === "certificaciones"
                    ? "bg-[rgba(255,255,255,0.15)] border-b-2 border-[#0078d4]"
                    : "hover:bg-[rgba(255,255,255,0.1)]"
                }`}
                onClick={() => {
                  if (
                    activeWindow === "certificaciones" &&
                    !certificacionesMinimized
                  ) {
                    setActiveWindow(null);
                  } else {
                    setActiveWindow("certificaciones");
                    setCertificacionesMinimized(false);
                    bringToFront("certificaciones");
                  }
                }}
              >
                {/* SVG de carpeta estilo Windows, igual que en el escritorio */}
                {activeWindow === "certificaciones" ? (
                  // Carpeta abierta
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="openFolder1-taskbar"
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
                      fill="url(#openFolder1-taskbar)"
                      d="M24.414,10.414l-2.536-2.536C21.316,7.316,20.553,7,19.757,7H5C3.895,7,3,7.895,3,9v30	c0,1.105,0.895,2,2,2h38c1.105,0,2-0.895,2-2V13c0-1.105-0.895-2-2-2H25.828C25.298,11,24.789,10.789,24.414,10.414z"
                    ></path>
                    <linearGradient
                      id="openFolder2-taskbar"
                      x1="24.066"
                      x2="24.066"
                      y1="19.228"
                      y2="33.821"
                      gradientTransform="matrix(-1 0 0 1 48 0)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ffd869"></stop>
                      <stop offset="1" stopColor="#fec52b"></stop>
                    </linearGradient>
                    <path
                      fill="url(#openFolder2-taskbar)"
                      d="M24,23l3.854-3.854C27.947,19.053,28.074,19,28.207,19H44.81c1.176,0,2.098,1.01,1.992,2.181	l-1.636,18C45.072,40.211,44.208,41,43.174,41H4.79c-1.019,0-1.875-0.766-1.988-1.779L1.062,23.555C1.029,23.259,1.261,23,1.559,23	H24z"
                    ></path>
                  </svg>
                ) : (
                  // Carpeta cerrada
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 38V10.5C4 9.11929 5.11929 8 6.5 8H18.5C19.3284 8 20.0784 8.50001 20.4142 9.24264L22.0858 12.7574C22.4216 13.5 23.1716 14 24 14H41.5C42.8807 14 44 15.1193 44 16.5V38C44 39.3807 42.8807 40.5 41.5 40.5H6.5C5.11929 40.5 4 39.3807 4 38Z"
                      fill="#F3D19C"
                      stroke="#C2A14A"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M4 14H20.5L22.5 17.5H44"
                      stroke="#C2A14A"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M6 18H42V38C42 39.1046 41.1046 40 40 40H8C6.89543 40 6 39.1046 6 38V18Z"
                      fill="#E6C87A"
                      opacity="0.6"
                    />
                  </svg>
                )}
                {activeWindow === "certificaciones" && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#0078d4]" />
                )}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {dict.desktop.certifications || "Certificaciones"}
                </div>
              </button>
            </div>

            {/* Espaciador flexible */}
            <div className="flex-1" />

            <div className="flex items-center gap-1 px-3">
              {/* Control de WiFi */}
              <div className="relative">
                <button
                  className="p-1.5 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors relative group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowWifiMenu(!showWifiMenu);
                    setShowVolumeControl(false);
                  }}
                >
                  <Wifi className="w-4 h-4 text-white" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {dict.desktop.network || "Red"}
                  </div>
                </button>

                {/* Menú de WiFi estilo Windows */}
                {showWifiMenu && (
                  <div
                    className="absolute bottom-full right-0 mb-2 w-[320px] bg-[rgba(30,30,30,0.98)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] rounded-lg shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-4 border-b border-[rgba(255,255,255,0.1)]">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-white font-medium flex items-center gap-2">
                          <Wifi className="w-5 h-5" />
                          {dict.desktop.wifiNetworks || "Redes WiFi"}
                        </h3>
                      </div>
                    </div>
                    <div className="max-h-[280px] overflow-y-auto p-2">
                      {[
                        {
                          name: dict.desktop.homeWifi || "WiFi Casa",
                          signal: 4,
                          secured: true,
                        },
                        {
                          name: dict.desktop.neighborWifi || "WiFi Vecino",
                          signal: 3,
                          secured: true,
                        },
                        {
                          name: dict.desktop.publicWifi || "Red Pública",
                          signal: 2,
                          secured: false,
                        },
                        {
                          name: dict.desktop.officeWifi || "WiFi Oficina",
                          signal: 1,
                          secured: true,
                        },
                      ].map((network, idx) => (
                        <button
                          key={idx}
                          className="w-full p-3 hover:bg-[rgba(255,255,255,0.1)] rounded-lg transition flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Wifi
                                className={`w-5 h-5 ${
                                  idx === 0 ? "text-[#0078d4]" : "text-gray-400"
                                }`}
                              />
                              {idx === 0 && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-[#1e1e1e]" />
                              )}
                            </div>
                            <div className="text-left">
                              <div
                                className={`text-sm ${
                                  idx === 0
                                    ? "text-white font-medium"
                                    : "text-gray-300"
                                }`}
                              >
                                {network.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {network.secured ? "Segura" : "Abierta"}
                                {idx === 0 && " • Conectado"}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(4)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-1 ${
                                  i === 0
                                    ? "h-2"
                                    : i === 1
                                    ? "h-3"
                                    : i === 2
                                    ? "h-4"
                                    : "h-5"
                                } rounded-sm ${
                                  i < network.signal
                                    ? idx === 0
                                      ? "bg-[#0078d4]"
                                      : "bg-gray-400"
                                    : "bg-gray-700"
                                }`}
                              />
                            ))}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Control de Volumen */}
              <div className="relative">
                <button
                  className="p-1.5 hover:bg-[rgba(255,255,255,0.1)] rounded transition-colors relative group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowVolumeControl(!showVolumeControl);
                    setShowWifiMenu(false);
                  }}
                >
                  <Volume2 className="w-4 h-4 text-white" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-[#333] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {dict.desktop.volume || "Volumen"}: {volume}%
                  </div>
                </button>

                {/* Panel de control de volumen */}
                {showVolumeControl && (
                  <div
                    className="absolute bottom-full right-0 mb-2 w-[280px] bg-[rgba(30,30,30,0.98)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] rounded-lg shadow-2xl p-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium flex items-center gap-2">
                        <Volume2 className="w-5 h-5" />
                        {dict.desktop.volume || "Volumen"}
                      </h3>
                      <span className="text-[#0078d4] text-sm font-medium">
                        {volume}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-gray-400" />
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(Number(e.target.value))}
                        className="flex-1 h-1.5 bg-[rgba(255,255,255,0.1)] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0078d4] [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-[#005a9e] [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#0078d4] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer hover:[&::-moz-range-thumb]:bg-[#005a9e]"
                      />
                      <span className="text-white text-xs w-8 text-right">
                        {volume}
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[rgba(255,255,255,0.1)]">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setVolume(0)}
                          className="flex-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)] rounded transition"
                        >
                          {dict.desktop.mute || "Silencio"}
                        </button>
                        <button
                          onClick={() => setVolume(50)}
                          className="flex-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)] rounded transition"
                        >
                          50%
                        </button>
                        <button
                          onClick={() => setVolume(100)}
                          className="flex-1 px-3 py-1.5 text-xs text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.1)] rounded transition"
                        >
                          {dict.desktop.max || "Máximo"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
