import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WorkWithMe from "./Google/WorkWithMe";
import EstilosDeDiseno from "./Google/EstilosDeDiseno";
import type { CSSProperties } from "react";

// Playground component type
type PlaygroundComponent = {
  name: string;
  type: string;
  description: string;
  demo: string | (() => JSX.Element);
};

interface GoogleWindowProps {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  maximized: boolean;
  onDragStart: (e: React.MouseEvent) => void;
  dict: any;
}

export function GoogleWindow({
  onClose,
  onMinimize,
  onMaximize,
  maximized,
  onDragStart,
  dict,
}: GoogleWindowProps) {
  // Detectar si no es pantalla PC (tablet o mobile)
  const [isNotDesktop, setIsNotDesktop] = useState(false);
  useEffect(() => {
    const check = () => {
      setIsNotDesktop(window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  // Forzar maximized en mobile/tablet
  useEffect(() => {
    if (isNotDesktop && !maximized) {
      onMaximize();
    }
    // eslint-disable-next-line
  }, [isNotDesktop]);
  const [tabs, setTabs] = useState<
    Array<{
      id: number;
      title: string;
      url: string;
      favicon: string;
      searchValue: string;
      searchResult: PlaygroundComponent | null;
      show404: boolean;
      showSuggestions: boolean;
      history: Array<{
        value: string;
        result: PlaygroundComponent | null;
        is404: boolean;
        isInitial?: boolean;
      }>;
      historyIndex: number;
    }>
  >([
    {
      id: 1,
      title: "Google",
      url: "https://www.google.com",
      favicon: "https://www.google.com/favicon.ico",
      searchValue: "",
      searchResult: null,
      show404: false,
      showSuggestions: false,
      history: [{ value: "", result: null, is404: false, isInitial: true }],
      historyIndex: 0,
    },
  ]);
  const [activeTab, setActiveTab] = useState(1);
  const nextTabId = useRef(2);

  // Abrir nueva pestaña (con estado independiente)
  const handleNewTab = () => {
    const id = nextTabId.current++;
    setTabs((prev) => [
      ...prev,
      {
        id,
        title: "Google",
        url: "https://www.google.com",
        favicon: "https://www.google.com/favicon.ico",
        searchValue: "",
        searchResult: null,
        show404: false,
        showSuggestions: false,
        history: [{ value: "", result: null, is404: false, isInitial: true }],
        historyIndex: 0,
      },
    ]);
    setActiveTab(id);
  };

  // Cerrar pestaña
  const handleCloseTab = (id: number) => {
    if (tabs.length === 1) return; // No cerrar la última
    const idx = tabs.findIndex((t) => t.id === id);
    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);
    if (activeTab === id) {
      // Seleccionar tab a la izquierda, o derecha si no hay
      if (idx > 0) setActiveTab(newTabs[idx - 1].id);
      else setActiveTab(newTabs[0].id);
    }
  };

  // Cambiar de pestaña
  const handleSelectTab = (id: number) => setActiveTab(id);

  // Playground components para el datalist y búsqueda
  const playgroundComponents: PlaygroundComponent[] = [
    {
      name: dict.google.EstilosDeDiseno || "Estilos de diseño",
      type: "page",
      description:
        dict.google.MuestraTusSistemasDeDiseno ||
        "Muestra tus sistemas de diseño, paletas, layouts, animaciones y componentes reutilizables.",
      demo: () => <EstilosDeDiseno dict={dict} maximized={maximized} />,
    },
    {
      name: dict.google.ComoContratarme || "Cómo contratarme",
      type: "page",
      description:
        dict.google.ExplicaTuProcesoDeTrabajo ||
        "Explica tu proceso de trabajo, servicios, tarifas y formas de contacto.",
      demo: () => <WorkWithMe dict={dict} maximized={maximized} />,
    },
  ];

  // Input ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Obtener pestaña activa
  const tab = tabs.find((t) => t.id === activeTab)!;

  // Sugerencias filtradas (si el input está vacío, mostrar todas)
  const filteredSuggestions = tab.showSuggestions
    ? tab.searchValue.trim()
      ? playgroundComponents.filter((comp) =>
          comp.name
            .toLowerCase()
            .includes(tab.searchValue.trim().toLowerCase()),
        )
      : playgroundComponents
    : [];

  // Obtener datos de la pestaña activa
  const currentTab = tab;

  // Actualizar barra de dirección según historial de la pestaña activa
  React.useEffect(() => {
    setTabs((prev) =>
      prev.map((t) => {
        if (t.id !== activeTab) return t;
        if (tab.historyIndex === 0) {
          return { ...t, title: "Google", url: "https://www.google.com" };
        } else {
          const h = tab.history[tab.historyIndex];
          return {
            ...t,
            title: ` ${dict.google.ResultsFor || "Resultados de"} \"${h.value}\"`,
            url: ` ${dict.google.ResultsFor || "Resultados de"} ${h.value}`,
          };
        }
      }),
    );
    // eslint-disable-next-line
  }, [tab.historyIndex, activeTab]);

  // Buscar componente exacto y guardar en historial de la pestaña activa
  const handleSearch = (e?: React.FormEvent, valueOverride?: string) => {
    if (e) e.preventDefault();
    const value = (valueOverride ?? tab.searchValue).trim().toLowerCase();
    if (!value) return;
    const found = playgroundComponents.find(
      (comp) => comp.name.toLowerCase() === value,
    );
    setTabs((prev) =>
      prev.map((t) => {
        if (t.id !== activeTab) return t;
        if (found) {
          return {
            ...t,
            searchResult: found,
            show404: false,
            history: [
              ...t.history.slice(0, t.historyIndex + 1),
              {
                value: valueOverride ?? tab.searchValue,
                result: found,
                is404: false,
              },
            ],
            historyIndex: t.historyIndex + 1,
          };
        } else {
          return {
            ...t,
            searchResult: null,
            show404: true,
            history: [
              ...t.history.slice(0, t.historyIndex + 1),
              {
                value: valueOverride ?? tab.searchValue,
                result: null,
                is404: true,
              },
            ],
            historyIndex: t.historyIndex + 1,
          };
        }
      }),
    );
  };

  return (
    <div
      className={`w-full h-full flex flex-col bg-[#f8f9fa] shadow-2xl border border-[#bfc1c5] ${
        maximized ? "" : "rounded-xl"
      }`}
    >
      <div
        className={`flex items-center justify-between px-2 md:px-4 h-8 bg-[#e9eaee] border-b border-[#d3d4d7] ${
          maximized ? "" : "rounded-t-xl cursor-move"
        }  select-none`}
        onMouseDown={onDragStart}
        style={
          { ...(maximized ? {} : { WebkitAppRegion: "drag" }) } as React.CSSProperties
        }
      >
        <div className="flex items-center gap-1 flex-1 min-w-0">
          <div className="flex-1 min-w-0">
            <div
              className="flex items-center gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-[#bbb] scrollbar-track-[#eee]"
              style={{ maxWidth: "calc(100vw - 180px)" }}
            >
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`flex items-center gap-1 px-3 py-1 border border-[#d3d4d7] rounded-t-md shadow-sm bg-white relative cursor-pointer select-none ${
                    tab.id === activeTab ? "z-10" : "opacity-70 bg-[#f3f3f3]"
                  }`}
                  onClick={() => handleSelectTab(tab.id)}
                  style={{ minWidth: 80, maxWidth: 180 }}
                >
                  <img src={tab.favicon} alt="Favicon" className="w-4 h-4" />
                  <span
                    className="text-xs text-[#232323] font-medium truncate"
                    style={{ maxWidth: 90 }}
                  >
                    {tab.title}
                  </span>
                  {tabs.length > 1 && (
                    <button
                      className="ml-1 w-4 h-4 flex items-center justify-center rounded hover:bg-[#eee] transition text-[#888]"
                      style={ { WebkitAppRegion: "no-drag" } as React.CSSProperties }
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCloseTab(tab.id);
                      }}
                      title="Cerrar pestaña"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10">
                        <line
                          x1="2"
                          y1="2"
                          x2="8"
                          y2="8"
                          stroke="#888"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="8"
                          y1="2"
                          x2="2"
                          y2="8"
                          stroke="#888"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
              {/* Botón nueva pestaña */}
              <button
                className="bg-[#e0e0e0] border border-[#d3d4d7] rounded-t-md px-2 py-1 ml-1 text-[#888] text-xs flex items-center justify-center hover:bg-[#dadada] transition"
                style={ { WebkitAppRegion: "no-drag" } as React.CSSProperties }
                onClick={(e) => {
                  e.stopPropagation();
                  handleNewTab();
                }}
                title="Nueva pestaña"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2">
          {/* Window controls */}
          <button
            onClick={onMinimize}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#e0e0e0] transition"
            title="Minimizar"
            style={ { WebkitAppRegion: "no-drag" } as React.CSSProperties }
          >
            <span className="w-3 h-0.5 bg-[#232323] block" />
          </button>
          <button
            onClick={isNotDesktop ? undefined : onMaximize}
            className={`w-7 h-7 flex items-center justify-center rounded transition ${isNotDesktop ? "opacity-40 cursor-not-allowed" : "hover:bg-[#e0e0e0]"}`}
            title="Maximizar"
            style={ { WebkitAppRegion: "no-drag" } as React.CSSProperties }
            disabled={isNotDesktop}
          >
            <span className="w-2.5 h-2.5 border border-[#232323] block" />
          </button>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#e81123]/30 transition"
            title="Cerrar"
            style={ { WebkitAppRegion: "no-drag" } as React.CSSProperties }
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

      {/* Address bar */}
      <div className="flex flex-wrap items-center gap-2 px-2 sm:px-4 py-2 bg-[#f5f5f7] border-b border-[#e0e0e0]">
        {/* Navigation icons */}
        <button
          className={`w-6 h-6 flex items-center justify-center rounded hover:bg-[#ececec] transition ${tab.historyIndex <= 0 ? "opacity-40 cursor-not-allowed" : ""}`}
          title="Atrás"
          disabled={tab.historyIndex <= 0}
          onClick={() => {
            setTabs((prev) =>
              prev.map((t) => {
                if (t.id !== activeTab) return t;
                if (t.historyIndex > 0) {
                  const prevH = t.history[t.historyIndex - 1];
                  return {
                    ...t,
                    searchValue: prevH.value,
                    searchResult: prevH.result,
                    show404: prevH.is404,
                    historyIndex: t.historyIndex - 1,
                  };
                } else {
                  // Volver al estado inicial
                  return {
                    ...t,
                    searchValue: "",
                    searchResult: null,
                    show404: false,
                    historyIndex: 0,
                  };
                }
              }),
            );
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M10 13L5 8l5-5"
              stroke="#888"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className={`w-6 h-6 flex items-center justify-center rounded hover:bg-[#ececec] transition ${tab.historyIndex >= tab.history.length - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
          title="Adelante"
          disabled={tab.historyIndex >= tab.history.length - 1}
          onClick={() => {
            setTabs((prev) =>
              prev.map((t) => {
                if (t.id !== activeTab) return t;
                if (t.historyIndex < t.history.length - 1) {
                  const nextH = t.history[t.historyIndex + 1];
                  return {
                    ...t,
                    searchValue: nextH.value,
                    searchResult: nextH.result,
                    show404: nextH.is404,
                    historyIndex: t.historyIndex + 1,
                  };
                }
                return t;
              }),
            );
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M6 13l5-5-5-5"
              stroke="#888"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#ececec] transition"
          title="Recargar"
          disabled={tab.history.length === 0}
          onClick={() => {
            const current = tab.history[tab.historyIndex];
            // Si está en la página de Google, animar igual y mantener historial
            if (tab.historyIndex === 0) {
              setTabs((prev) =>
                prev.map((t) =>
                  t.id === activeTab
                    ? { ...t, searchResult: null, show404: false }
                    : t,
                ),
              );
              setTimeout(() => {
                setTabs((prev) =>
                  prev.map((t) => (t.id === activeTab ? { ...t } : t)),
                );
              }, 350); // Animación más larga
              return;
            }
            // Animar el contenido al recargar sin modificar historial
            setTabs((prev) =>
              prev.map((t) => {
                if (t.id !== activeTab) return t;
                if (current.result) {
                  return {
                    ...t,
                    searchResult: null,
                  };
                } else if (current.is404) {
                  return {
                    ...t,
                    show404: false,
                  };
                }
                return t;
              }),
            );
            setTimeout(() => {
              // Volver a mostrar el mismo resultado, sin tocar historial
              setTabs((prev) =>
                prev.map((t) => {
                  if (t.id !== activeTab) return t;
                  if (current.result) {
                    return {
                      ...t,
                      searchResult: current.result,
                      show404: false,
                    };
                  } else if (current.is404) {
                    return {
                      ...t,
                      searchResult: null,
                      show404: true,
                    };
                  }
                  return t;
                }),
              );
            }, 350); // Animación más larga
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M8 3v2.5a.5.5 0 0 0 .5.5H11"
              stroke="#888"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M13 8a5 5 0 1 1-4.546-4.977"
              stroke="#888"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {/* Address input (fake) */}
        <div className="flex-1 min-w-[120px] mx-1 sm:mx-2">
          <div className="flex items-center bg-white border border-[#d3d4d7] rounded px-2 sm:px-3 py-1 shadow-inner overflow-x-auto">
            <img
              src={currentTab.favicon}
              alt="Google"
              className="w-4 h-4 mr-2 shrink-0"
            />
            <span className="text-xs text-[#555] select-all break-all">
              {currentTab.url}
            </span>
          </div>
        </div>
        {/* Star/bookmark icon */}
        <button
          className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#ececec] transition"
          title="Favorito"
        >
          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M8 2.5l1.902 3.854 4.098.596-2.99 2.915.706 4.085L8 11.347l-3.716 1.603.706-4.085-2.99-2.915 4.098-.596z"
              stroke="#888"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </button>
        {/* User icon */}
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-[#e0e0e0] ml-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" />
          </svg>
        </button>
      </div>

      {/* Main content placeholder */}
      <div className="flex-1 flex flex-col items-start justify-start text-[#6b7280] text-base sm:text-lg bg-white relative overflow-y-auto">
        <div className="w-full flex flex-col items-start justify-start">
          <AnimatePresence mode="wait">
            {tab.historyIndex === 0 && (
              <motion.div
                key="google"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full flex flex-col items-center px-2 sm:px-0"
              >
                <span
                  className="mb-4 text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-google font-bold tracking-tight"
                  style={{
                    color: "#4285F4",
                    letterSpacing: "-2px",
                    fontFamily: "Product Sans, Arial, Helvetica, sans-serif",
                    textShadow: "0 1px 0 #fff, 0 2px 4px rgba(60,64,67,.15)",
                  }}
                >
                  <span style={{ color: "#4285F4" }}>G</span>
                  <span style={{ color: "#EA4335" }}>o</span>
                  <span style={{ color: "#FBBC05" }}>o</span>
                  <span style={{ color: "#4285F4" }}>g</span>
                  <span style={{ color: "#34A853" }}>l</span>
                  <span style={{ color: "#EA4335" }}>e</span>
                </span>
                <form
                  className="w-full max-w-xl flex flex-col items-center"
                  onSubmit={handleSearch}
                  autoComplete="off"
                >
                  <div
                    className="relative flex w-full items-center bg-white border border-[#dfe1e5] rounded-full px-3 sm:px-5 py-2.5 sm:py-3 shadow-md transition-all duration-200 focus-within:shadow-lg focus-within:border-[#4285f4] hover:shadow-lg group"
                    style={{ boxShadow: "0 1px 6px 0 rgba(32,33,36,.28)" }}
                  >
                    <svg
                      className="w-5 h-5 text-[#9aa0a6] mr-2 sm:mr-3 group-focus-within:text-[#4285f4]"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99c.41.41 1.09.41 1.5 0s.41-1.09 0-1.5l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        fill="currentColor"
                      />
                    </svg>
                    <input
                      ref={inputRef}
                      type="text"
                      className="flex-1 outline-none bg-transparent text-base sm:text-lg text-[#222] placeholder-[#9aa0a6] min-w-0"
                      placeholder={
                        dict.google.SearchComponents ||
                        "Buscar componente de la galería"
                      }
                      value={tab.searchValue}
                      autoComplete="off"
                      onFocus={() =>
                        setTabs((prev) =>
                          prev.map((t) =>
                            t.id === activeTab
                              ? { ...t, showSuggestions: true }
                              : t,
                          ),
                        )
                      }
                      onBlur={() =>
                        setTimeout(
                          () =>
                            setTabs((prev) =>
                              prev.map((t) =>
                                t.id === activeTab
                                  ? { ...t, showSuggestions: false }
                                  : t,
                              ),
                            ),
                          120,
                        )
                      }
                      onChange={(e) => {
                        const value = e.target.value;
                        setTabs((prev) =>
                          prev.map((t) =>
                            t.id === activeTab
                              ? {
                                  ...t,
                                  searchValue: value,
                                  searchResult: null,
                                  show404: false,
                                  showSuggestions: true,
                                }
                              : t,
                          ),
                        );
                      }}
                      style={{ padding: "0.5rem 0" }}
                    />
                    {/* Dropdown personalizado de sugerencias */}
                    {tab.showSuggestions && filteredSuggestions.length > 0 && (
                      <div className="absolute left-0 right-0 top-[105%] z-20 bg-white border border-[#dfe1e5] rounded-b-xl shadow-lg max-h-60 overflow-y-auto text-sm sm:text-base">
                        {filteredSuggestions.map((comp, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className="w-full text-left px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-[#f1f3f4] text-[#222] border-b last:border-b-0 border-[#f3f3f3] focus:bg-[#e8f0fe] focus:outline-none"
                            style={{ fontFamily: "inherit" }}
                            onMouseDown={() => {
                              setTabs((prev) =>
                                prev.map((t) =>
                                  t.id === activeTab
                                    ? {
                                        ...t,
                                        searchValue: comp.name,
                                        showSuggestions: false,
                                      }
                                    : t,
                                ),
                              );
                              setTimeout(() => {
                                if (inputRef.current) inputRef.current.blur();
                              }, 0);
                            }}
                          >
                            {comp.name}
                          </button>
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      className="ml-2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f1f3f4] transition"
                      tabIndex={-1}
                      title="Borrar"
                      style={{ display: tab.searchValue ? "flex" : "none" }}
                      onClick={() => {
                        setTabs((prev) =>
                          prev.map((t) =>
                            t.id === activeTab
                              ? {
                                  ...t,
                                  searchValue: "",
                                  searchResult: null,
                                  show404: false,
                                  showSuggestions: false,
                                }
                              : t,
                          ),
                        );
                        if (inputRef.current) inputRef.current.focus();
                      }}
                    >
                      <svg
                        className="w-4 h-4 text-[#9aa0a6]"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex gap-3 mt-6 sm:mt-8 w-full justify-center">
                    <button
                      type="submit"
                      className="bg-[#f8f9fa] text-[#3c4043] rounded px-4 sm:px-5 py-2 text-sm border border-[#f8f9fa] hover:shadow hover:border-[#dadce0] transition-all duration-150 w-full max-w-[180px]"
                    >
                      {dict.google.GoogleSearch || "Buscar"}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
            {tab.searchResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full  "
              >
                {tab.searchResult &&
                  tab.searchResult.name ===
                    (dict.google.EstilosDeDiseno || "Estilos de diseño") && (
                    <EstilosDeDiseno dict={dict} maximized={maximized} />
                  )}
                {tab.searchResult &&
                  tab.searchResult.name ===
                    (dict.google.ComoContratarme || "Cómo contratarme") && (
                    <WorkWithMe dict={dict} maximized={maximized} />
                  )}
                {/* BOTÓN FLOTANTE VOLVER A GOOGLE */}
                <button
                  onClick={() => {
                    setTabs((prev) =>
                      prev.map((t) =>
                        t.id === activeTab
                          ? {
                              ...t,
                              searchValue: "",
                              searchResult: null,
                              show404: false,
                              historyIndex: 0,
                            }
                          : t,
                      ),
                    );
                  }}
                  className="fixed bottom-8 left-8 z-50 bg-white/90 text-blue-700 font-bold px-6 py-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-2 hover:bg-blue-50 hover:scale-105 transition-all backdrop-blur-lg"
                  style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)" }}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  {window.innerWidth >= 768 &&
                    maximized &&
                    dict.google.BackToGoogle}
                </button>
              </motion.div>
            )}
            {tab.show404 && (
              <motion.div
                key="404"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
                style={{
                  background:
                    "linear-gradient(120deg, #e0e7ff 0%, #f0f4ff 100%)",
                }}
              >
                {/* Fondo decorativo tipo WorkWithMe */}
                <div className="pointer-events-none select-none absolute inset-0 z-0">
                  <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
                  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-500/10 blur-[120px] rounded-full" />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <span className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg mb-6 select-none">
                    404
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 text-zinc-800/90 tracking-tight">
                    {dict.google.ComponentNotFound ||
                      "Componente no encontrado"}
                  </h2>
                  <p className="text-lg md:text-2xl text-zinc-500 mb-8 max-w-2xl mx-auto">
                    {dict.google.ComponentNotFoundMessage ||
                      "No existe ningún componente con ese nombre en tu galería de estilos."}
                    <br />
                    {dict.google.ComponentNotFoundSuggestion ||
                      "¿Quizás escribiste mal el nombre o aún no lo agregaste?"}
                  </p>
                  <button
                    className="mt-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300/30"
                    onClick={() => {
                      setTabs((prev) =>
                        prev.map((t) =>
                          t.id === activeTab
                            ? {
                                ...t,
                                searchValue: "",
                                searchResult: null,
                                show404: false,
                                historyIndex: 0,
                              }
                            : t,
                        ),
                      );
                    }}
                  >
                    {dict.google.BackToSearch || "Volver al buscador"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
