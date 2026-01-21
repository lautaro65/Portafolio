"use client";

import React, { useState, useEffect } from "react";
import PortfolioContent from "./portfolio-content";
import {
  Minus,
  X,
  Maximize2,
  Minimize2,
  ChevronRight,
  ChevronDown,
  Folder,
  File,
  TerminalIcon,
  ChevronUp,
  FolderOpen as Files,
  Settings,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface VSCodeWindowProps {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  maximized: boolean;
  onDragStart?: (e: React.MouseEvent) => void;
  dict: any;
  lang: string;
}

export function VSCodeWindow({
  onMinimize,
  onMaximize,
  onClose,
  maximized,
  onDragStart,
  dict,
  lang,
}: VSCodeWindowProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(true);
  const [terminalCollapsed, setTerminalCollapsed] = useState(true);
  const [activeFile, setActiveFile] = useState("about.md");
  const [openFiles, setOpenFiles] = useState<string[]>(["about.md"]);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [activePanel, setActivePanel] = useState("explorer");
  const [currentTheme, setCurrentTheme] = useState("Dark+");
  const [terminalHeight, setTerminalHeight] = useState(220);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [isSidebarResizing, setIsSidebarResizing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExplorerOpen, setMobileExplorerOpen] = useState(true);
  const isMobile = useIsMobile();

  const themes = {
    "Dark+": {
      bg: "#1e1e1e",
      titleBar: "#323233",
      activityBar: "#2d2d2d",
      sidebar: "#252526",
      editor: "#1e1e1e",
      border: "#444444",
      text: "#cccccc",
      accent: "#007acc",
    },
    Monokai: {
      bg: "#272822",
      titleBar: "#3e3d32",
      activityBar: "#3e3d32",
      sidebar: "#2f3129",
      editor: "#272822",
      border: "#49483e",
      text: "#f8f8f2",
      accent: "#a6e22e",
    },
    "Solarized Light": {
      bg: "#fdf6e3",
      titleBar: "#eee8d5",
      activityBar: "#ebe3c6",
      sidebar: "#f7f1e0",
      editor: "#fdf6e3",
      border: "#d3af86",
      text: "#586e75",
      accent: "#268bd2",
    },
    "GitHub Dark": {
      bg: "#0d1117",
      titleBar: "#161b22",
      activityBar: "#161b22",
      sidebar: "#161b22",
      editor: "#0d1117",
      border: "#30363d",
      text: "#c9d1d9",
      accent: "#238636",
    },
    Dracula: {
      bg: "#282a36",
      titleBar: "#44475a",
      activityBar: "#44475a",
      sidebar: "#343746",
      editor: "#282a36",
      border: "#6272a4",
      text: "#f8f8f2",
      accent: "#bd93f9",
    },
    "One Dark Pro": {
      bg: "#282c34",
      titleBar: "#21252b",
      activityBar: "#21252b",
      sidebar: "#21252b",
      editor: "#282c34",
      border: "#3a3f4b",
      text: "#abb2bf",
      accent: "#61afef",
    },
    Nord: {
      bg: "#2e3440",
      titleBar: "#3b4252",
      activityBar: "#3b4252",
      sidebar: "#434c5e",
      editor: "#2e3440",
      border: "#4c566a",
      text: "#d8dee9",
      accent: "#88c0d0",
    },
    "Ayu Mirage": {
      bg: "#1f2430",
      titleBar: "#232834",
      activityBar: "#232834",
      sidebar: "#232834",
      editor: "#1f2430",
      border: "#5c6773",
      text: "#cbccc6",
      accent: "#ffcc66",
    },
  };

  const theme = themes[currentTheme as keyof typeof themes];

  const fileStructure = [
    {
      name: "src",
      type: "folder",
      expanded: true,
      children: [
        { name: "about.md", type: "file" },
        { name: "habilidades.md", type: "file" },
        { name: "proceso.md", type: "file" },
      ],
    },
    {
      name: "proyectos",
      type: "folder",
      expanded: true,
      children: [{ name: "proyectos.js", type: "file" }],
    },
    {
      name: "contacto",
      type: "folder",
      expanded: true,
      children: [{ name: "contacto.md", type: "file" }],
    },
  ];

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName);
    setShowThemeMenu(false);
  };

  const handleOpenFile = (file: string) => {
    setActiveFile(file);
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
  };

  const handleCloseFile = (file: string) => {
    const filtered = openFiles.filter((f) => f !== file);
    setOpenFiles(filtered);
    if (activeFile === file) {
      setActiveFile(filtered.length ? filtered[filtered.length - 1] : "");
    }
  };

  const handleMouseDown = () => {
    setIsResizing(true);
    document.body.style.cursor = "ns-resize";
  };

  const handleSidebarMouseDown = () => {
    setIsSidebarResizing(true);
    document.body.style.cursor = "ew-resize";
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      const windowHeight = window.innerHeight;
      const newHeight = Math.max(100, Math.min(400, windowHeight - e.clientY));
      setTerminalHeight(newHeight);
      document.body.style.userSelect = "none";
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    if (isResizing) {
      document.body.style.cursor = "ns-resize";
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  useEffect(() => {
    const handleSidebarMouseMove = (e: MouseEvent) => {
      if (!isSidebarResizing) return;
      setSidebarWidth((prev) =>
        Math.max(180, Math.min(400, prev + e.movementX))
      );
      document.body.style.userSelect = "none";
    };
    const handleSidebarMouseUp = () => {
      setIsSidebarResizing(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
      window.removeEventListener("mousemove", handleSidebarMouseMove);
      window.removeEventListener("mouseup", handleSidebarMouseUp);
    };
    if (isSidebarResizing) {
      window.addEventListener("mousemove", handleSidebarMouseMove);
      window.addEventListener("mouseup", handleSidebarMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleSidebarMouseMove);
      window.removeEventListener("mouseup", handleSidebarMouseUp);
    };
  }, [isSidebarResizing]);

  return (
    <div
      className={`w-full font-mono flex flex-col transition-colors duration-200 ${
        maximized ? "h-screen" : "h-auto max-h-[90vh]"
      }`}
      style={{ backgroundColor: theme.bg, color: theme.text }}
    >
      {/* Title Bar */}
      <div
        className="border-b h-8 flex items-center justify-between px-4 select-none cursor-move"
        style={{ backgroundColor: theme.titleBar, borderColor: theme.border }}
        onMouseDown={onDragStart}
      >
        <div className="flex items-center space-x-2">
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          )}
          <div className="text-sm font-medium truncate">
            {isMobile ? dict.vscode.windowTitleMobile : dict.vscode.windowTitle}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            aria-label={dict.vscode.minimize}
            title={dict.vscode.minimize}
            onClick={onMinimize}
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0"
            style={{ transition: "background 0.15s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#232323";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme.text;
            }}
          >
            <Minus className="h-3 w-3" />
          </Button>
          {/* Solo mostrar maximizar en desktop */}
          {!isMobile && (
            <Button
              aria-label={
                maximized ? dict.vscode.restore : dict.vscode.maximize
              }
              title={maximized ? dict.vscode.restore : dict.vscode.maximize}
              onClick={onMaximize}
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              style={{ transition: "background 0.15s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = theme.border)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {maximized ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </Button>
          )}
          <Button
            aria-label={dict.vscode.close}
            title={dict.vscode.close}
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 transition"
            style={{ transition: "background 0.15s, color 0.15s" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ff6b35";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "";
            }}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div
            className="absolute top-7 left-0 right-0 z-50 border-b"
            style={{
              backgroundColor: theme.sidebar,
              borderColor: theme.border,
            }}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase">
                    {dict.vscode.explorer}
                  </span>
                  <button
                    className="ml-1 p-1 rounded transition"
                    style={{
                      background: theme.activityBar + "22",
                    }}
                    onClick={() => {
                      setMobileExplorerOpen((v) => !v);
                      setShowThemeMenu(false);
                    }}
                    aria-label={dict.vscode.explorer}
                    type="button"
                  >
                    {mobileExplorerOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {/* Botón de Settings para mobile */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => {
                    setShowThemeMenu(!showThemeMenu);
                    setMobileExplorerOpen(false);
                  }}
                >
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
              {/* Explorador de archivos solo si está abierto y no se muestra el menú de temas */}
              {mobileExplorerOpen && !showThemeMenu && (
                <div className="space-y-1">
                  {fileStructure.map((item) => (
                    <div key={item.name}>
                      {/* Folder */}
                      {item.type === "folder" && (
                        <div
                          className="py-2 px-3  rounded cursor-pointer"
                          style={{
                            background: theme.activityBar + "22",
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            item.expanded = !item.expanded;
                          }}
                        >
                          <div className="flex items-center">
                            <Folder className="h-4 w-4 mr-2 text-[#dcb67a]" />
                            <span>{item.name}</span>
                          </div>
                        </div>
                      )}

                      {/* Show files if folder is expanded */}
                      {item.type === "folder" &&
                        item.expanded &&
                        item.children && (
                          <div className="ml-4">
                            {item.children.map((child: any) => (
                              <div
                                key={child.name}
                                className="py-2 px-3  rounded cursor-pointer"
                                style={{
                                  background: theme.activityBar + "22",
                                }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleOpenFile(child.name);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                <div className="flex items-center">
                                  <File className="h-4 w-4 mr-2 text-[#519aba]" />
                                  <span>{child.name}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                      {/* File */}
                      {item.type === "file" && (
                        <div
                          className="py-2 px-3 hover:bg-[#2a2d2e] rounded cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenFile(item.name);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <div className="flex items-center">
                            <File className="h-4 w-4 mr-2 text-[#519aba]" />
                            <span>{item.name}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Menú de temas solo si showThemeMenu está activo */}
              {showThemeMenu && (
                <div
                  className="mt-2 z-50 min-w-[180px] border rounded-lg shadow-xl p-3 flex flex-col gap-2"
                  style={{
                    background: theme.sidebar,
                    borderColor: theme.border,
                  }}
                >
                  <div
                    className="pb-2 text-xs font-semibold border-b"
                    style={{ color: theme.text, borderColor: theme.border }}
                  >
                    {dict.vscode.themeMenu}
                  </div>
                  {Object.keys(themes).map((themeName) => (
                    <div
                      key={themeName}
                      className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-all ${
                        currentTheme === themeName
                          ? "border"
                          : "hover:opacity-80"
                      }`}
                      style={{
                        borderColor:
                          currentTheme === themeName
                            ? theme.accent
                            : "transparent",
                        background:
                          currentTheme === themeName
                            ? theme.editor
                            : "transparent",
                        color: theme.text,
                      }}
                      onClick={() => {
                        handleThemeChange(themeName);
                        setShowThemeMenu(false);
                        setMobileExplorerOpen(true);
                      }}
                    >
                      {/* Íconos personalizados por tema */}
                      {themeName === "Dark+" && (
                        <span className=" w-5 h-5 rounded bg-[#1e1e1e] flex items-center justify-center border border-[#007acc]">
                          <svg width="16" height="16">
                            <circle cx="8" cy="8" r="6" fill="#007acc" />
                          </svg>
                        </span>
                      )}
                      {themeName === "Monokai" && (
                        <span className=" w-5 h-5 rounded bg-[#272822] flex items-center justify-center border border-[#a6e22e]">
                          <svg width="16" height="16">
                            <rect
                              x="3"
                              y="3"
                              width="10"
                              height="10"
                              fill="#a6e22e"
                            />
                          </svg>
                        </span>
                      )}
                      {themeName === "Solarized Light" && (
                        <span className=" w-5 h-5 rounded bg-[#fdf6e3] flex items-center justify-center border border-[#268bd2]">
                          <svg width="16" height="16">
                            <circle cx="8" cy="8" r="6" fill="#268bd2" />
                          </svg>
                        </span>
                      )}
                      {themeName === "GitHub Dark" && (
                        <span className=" w-5 h-5 rounded bg-[#0d1117] flex items-center justify-center border border-[#238636]">
                          <svg width="16" height="16">
                            <rect
                              x="2"
                              y="2"
                              width="12"
                              height="12"
                              fill="#238636"
                            />
                          </svg>
                        </span>
                      )}
                      {themeName === "Dracula" && (
                        <span className=" w-5 h-5 rounded bg-[#282a36] flex items-center justify-center border border-[#bd93f9]">
                          <svg width="16" height="16">
                            <ellipse
                              cx="8"
                              cy="8"
                              rx="6"
                              ry="5"
                              fill="#bd93f9"
                            />
                          </svg>
                        </span>
                      )}
                      {themeName === "One Dark Pro" && (
                        <span className=" w-5 h-5 rounded bg-[#282c34] flex items-center justify-center border border-[#61afef]">
                          <svg width="16" height="16">
                            <rect
                              x="4"
                              y="4"
                              width="8"
                              height="8"
                              fill="#61afef"
                            />
                          </svg>
                        </span>
                      )}
                      {themeName === "Nord" && (
                        <span className=" w-5 h-5 rounded bg-[#2e3440] flex items-center justify-center border border-[#88c0d0]">
                          <svg width="16" height="16">
                            <circle cx="8" cy="8" r="6" fill="#88c0d0" />
                          </svg>
                        </span>
                      )}
                      {themeName === "Ayu Mirage" && (
                        <span className=" w-5 h-5 rounded bg-[#1f2430] flex items-center justify-center border border-[#ffcc66]">
                          <svg width="16" height="16">
                            <rect
                              x="2"
                              y="7"
                              width="12"
                              height="2"
                              fill="#ffcc66"
                            />
                          </svg>
                        </span>
                      )}
                      <span className="flex-1">{themeName}</span>
                      {currentTheme === themeName && (
                        <span
                          style={{ color: theme.accent, fontWeight: "bold" }}
                        >
                          ✓
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Desktop Sidebar - Solo mostrar en desktop */}
        {!isMobile && (
          <>
            {/* Activity Bar */}
            <div
              className="border-r w-12 flex flex-col items-center py-2 space-y-2 relative"
              style={{
                backgroundColor: theme.activityBar,
                borderColor: theme.border,
              }}
            >
              <Button
                variant="ghost"
                size="sm"
                aria-label={dict.vscode.explorer}
                title={dict.vscode.explorer}
                className={`h-10 w-10 p-0 border-l-2`}
                style={{
                  background:
                    sidebarOpen && activePanel === "explorer"
                      ? "#232323"
                      : theme.activityBar + "22",
                  color:
                    sidebarOpen && activePanel === "explorer"
                      ? "#fff"
                      : theme.text,
                  borderLeftColor:
                    sidebarOpen && activePanel === "explorer"
                      ? theme.accent
                      : "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#232323";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    sidebarOpen && activePanel === "explorer"
                      ? "#232323"
                      : theme.activityBar + "22";
                  e.currentTarget.style.color =
                    sidebarOpen && activePanel === "explorer"
                      ? "#fff"
                      : theme.text;
                }}
                onClick={() => {
                  if (sidebarOpen && activePanel === "explorer") {
                    setSidebarOpen(false);
                  } else {
                    setSidebarOpen(true);
                    setActivePanel("explorer");
                  }
                }}
              >
                <Files className="h-5 w-5" />
              </Button>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 p-0 "
                  aria-label={dict.vscode.changeTheme}
                  title={dict.vscode.changeTheme}
                  style={{
                    background: theme.activityBar + "22",
                  }}
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                >
                  <Settings className="h-5 w-5" />
                </Button>
                {showThemeMenu && (
                  <div
                    className="absolute left-12 top-0 z-50 min-w-[180px] border rounded-lg shadow-xl p-3 flex flex-col gap-2"
                    style={{
                      background: "#232323",
                      borderColor: theme.border,
                      color: "#fff",
                    }}
                  >
                    <div
                      className="pb-2 text-xs font-semibold border-b"
                      style={{ color: theme.text, borderColor: theme.border }}
                    >
                      {dict.vscode.themeMenu}
                    </div>
                    {Object.keys(themes).map((themeName) => (
                      <div
                        key={themeName}
                        className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-all ${
                          currentTheme === themeName
                            ? "border"
                            : "hover:opacity-80"
                        }`}
                        style={{
                          borderColor:
                            currentTheme === themeName
                              ? theme.accent
                              : "transparent",
                          background:
                            currentTheme === themeName
                              ? theme.editor
                              : "transparent",
                          color: theme.text,
                        }}
                        onClick={() => handleThemeChange(themeName)}
                      >
                        {/* Íconos personalizados por tema */}
                        {themeName === "Dark+" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#1e1e1e",
                              borderColor: "#007acc",
                            }}
                          >
                            <svg width="16" height="16">
                              <circle cx="8" cy="8" r="6" fill="#007acc" />
                            </svg>
                          </span>
                        )}
                        {themeName === "Monokai" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#272822",
                              borderColor: "#a6e22e",
                            }}
                          >
                            <svg width="16" height="16">
                              <rect
                                x="3"
                                y="3"
                                width="10"
                                height="10"
                                fill="#a6e22e"
                              />
                            </svg>
                          </span>
                        )}
                        {themeName === "Solarized Light" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#fdf6e3",
                              borderColor: "#268bd2",
                            }}
                          >
                            <svg width="16" height="16">
                              <circle cx="8" cy="8" r="6" fill="#268bd2" />
                            </svg>
                          </span>
                        )}
                        {themeName === "GitHub Dark" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#0d1117",
                              borderColor: "#238636",
                            }}
                          >
                            <svg width="16" height="16">
                              <rect
                                x="2"
                                y="2"
                                width="12"
                                height="12"
                                fill="#238636"
                              />
                            </svg>
                          </span>
                        )}
                        {themeName === "Dracula" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#282a36",
                              borderColor: "#bd93f9",
                            }}
                          >
                            <svg width="16" height="16">
                              <ellipse
                                cx="8"
                                cy="8"
                                rx="6"
                                ry="5"
                                fill="#bd93f9"
                              />
                            </svg>
                          </span>
                        )}
                        {themeName === "One Dark Pro" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#282c34",
                              borderColor: "#61afef",
                            }}
                          >
                            <svg width="16" height="16">
                              <rect
                                x="4"
                                y="4"
                                width="8"
                                height="8"
                                fill="#61afef"
                              />
                            </svg>
                          </span>
                        )}
                        {themeName === "Nord" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#2e3440",
                              borderColor: "#88c0d0",
                            }}
                          >
                            <svg width="16" height="16">
                              <circle cx="8" cy="8" r="6" fill="#88c0d0" />
                            </svg>
                          </span>
                        )}
                        {themeName === "Ayu Mirage" && (
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center border"
                            style={{
                              background: "#1f2430",
                              borderColor: "#ffcc66",
                            }}
                          >
                            <svg width="16" height="16">
                              <rect
                                x="2"
                                y="7"
                                width="12"
                                height="2"
                                fill="#ffcc66"
                              />
                            </svg>
                          </span>
                        )}
                        <span className="flex-1">{themeName}</span>
                        {currentTheme === themeName && (
                          <span
                            style={{ color: theme.accent, fontWeight: "bold" }}
                          >
                            ✓
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            {sidebarOpen && (
              <div
                className="border-r flex flex-col relative"
                style={{
                  backgroundColor: theme.sidebar,
                  borderColor: theme.border,
                  width: sidebarWidth,
                  minWidth: 180,
                  maxWidth: 400,
                  transition: "width 0.1s",
                }}
              >
                {activePanel === "explorer" && (
                  <>
                    <div
                      className="p-2 text-xs font-semibold uppercase tracking-wide"
                      style={{ color: theme.text }}
                    >
                      {dict.vscode.explorer}
                    </div>
                    <div className="flex-1 px-2">
                      {fileStructure.map((item, index) => (
                        <FileTreeItem
                          key={index}
                          item={item}
                          level={0}
                          activeFile={activeFile}
                          onFileSelect={handleOpenFile}
                          theme={theme}
                        />
                      ))}
                    </div>
                  </>
                )}
                {/* Sidebar Resizer */}
                <div
                  className="absolute top-0 right-0 h-full w-2 cursor-ew-resize flex items-center justify-center"
                  style={{ background: theme.border }}
                  onMouseDown={handleSidebarMouseDown}
                >
                  <div className="w-1 h-8 rounded bg-[#888]" />
                </div>
              </div>
            )}
          </>
        )}

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar */}
          <div
            className="border-b h-9 flex items-center px-2 space-x-1"
            style={{
              backgroundColor: theme.activityBar,
              borderColor: theme.border,
            }}
          >
            {openFiles.map((file) => (
              <div
                key={file}
                className="border border-b-0 px-3 py-1 text-sm flex items-center space-x-2 cursor-pointer"
                style={{
                  backgroundColor:
                    activeFile === file ? theme.editor : theme.activityBar,
                  borderColor: theme.border,
                  color: theme.text,
                  transition: "background 0.15s",
                }}
                onClick={() => setActiveFile(file)}
                onMouseEnter={(e) => {
                  if (activeFile !== file)
                    e.currentTarget.style.background = theme.sidebar;
                }}
                onMouseLeave={(e) => {
                  if (activeFile !== file)
                    e.currentTarget.style.background = theme.activityBar;
                }}
              >
                <File className="h-3 w-3" />
                <span>{file}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label={dict.vscode.closeTab}
                  title={dict.vscode.closeTab}
                  className="h-4 w-4 p-0 hover:bg-[#404040]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseFile(file);
                  }}
                >
                  <X className="h-2 w-2" />
                </Button>
              </div>
            ))}
          </div>

          {/* Editor Content */}
          <div
            className="flex-1 overflow-auto"
            style={{ backgroundColor: theme.editor }}
          >
            <PortfolioContent dict={dict} activeFile={activeFile} theme={theme} />
          </div>

          {/* Terminal Resizer */}
          {!terminalCollapsed && terminalOpen && (
            <div
              className="w-full h-2 cursor-ns-resize flex items-center justify-center"
              style={{ background: theme.border }}
              onMouseDown={handleMouseDown}
            >
              <div className="w-8 h-1 rounded bg-[#888]" />
            </div>
          )}

          {/* Terminal */}
          {terminalOpen && (
            <div
              className="border-t flex flex-col"
              style={{
                backgroundColor: theme.editor,
                borderColor: theme.border,
                height: terminalCollapsed ? "32px" : `${terminalHeight}px`,
                minHeight: "32px",
                maxHeight: "400px",
                overflow: "hidden",
                transition: "height 0.1s",
              }}
            >
              <div
                className="h-8 flex items-center justify-between px-3 border-b cursor-pointer"
                style={{
                  backgroundColor: theme.activityBar,
                  borderColor: theme.border,
                }}
                onClick={() => setTerminalCollapsed(!terminalCollapsed)}
              >
                <div className="flex items-center space-x-2">
                  <TerminalIcon className="h-4 w-4" />
                  <span className="text-sm">{dict.vscode.terminal}</span>
                  {terminalCollapsed ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3" />
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label={dict.vscode.close}
                  title={dict.vscode.close}
                  className="h-6 w-6 p-0 hover:bg-[#404040]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTerminalOpen(false);
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              {!terminalCollapsed && (
                <TerminalContent theme={theme} dict={dict} lang={lang} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div
        className="h-6 flex items-center justify-between px-3 text-xs"
        style={{ backgroundColor: theme.accent }}
      >
        <div className="flex items-center space-x-4">
          <span>{dict.vscode.online}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="h-4 text-xs p-1 text-white"
            style={{ backgroundColor: "transparent" }}
            onClick={() => {
              setTerminalOpen(!terminalOpen);
              if (!terminalOpen) setTerminalCollapsed(false);
            }}
          >
            {dict.vscode.terminalBtn}
          </Button>
          <a
            href="https://www.linkedin.com/in/lautaro-ocatavio-faure"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
            title={dict.vscode.linkedin}
          >
            {dict.vscode.linkedin}
          </a>
          <a
            href="https://github.com/lautaro65"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-white"
            title={dict.vscode.github}
          >
            {dict.vscode.github}
          </a>
        </div>
      </div>
    </div>
  );
}

interface FileTreeItemProps {
  item: any;
  level: number;
  activeFile: string;
  onFileSelect: (file: string) => void;
  theme: any;
}

function FileTreeItem({
  item,
  level,
  activeFile,
  onFileSelect,
  theme,
}: FileTreeItemProps) {
  const [expanded, setExpanded] = useState(item.expanded || false);

  const hoverBg = theme.activityBar + "22";
  const activeBg = theme.editor;

  if (item.type === "folder") {
    return (
      <div>
        <div
          className="flex items-center py-1 px-2 cursor-pointer text-sm"
          style={{
            paddingLeft: `${level * 16 + 8}px`,
            color: theme.text,
            background: expanded ? hoverBg : "transparent",
            transition: "background 0.15s",
          }}
          onClick={() => setExpanded(!expanded)}
          onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = expanded
              ? hoverBg
              : "transparent")
          }
        >
          {expanded ? (
            <ChevronDown className="h-3 w-3 mr-1" />
          ) : (
            <ChevronRight className="h-3 w-3 mr-1" />
          )}
          <Folder className="h-4 w-4 mr-2 text-[#dcb67a]" />
          <span>{item.name}</span>
        </div>
        {expanded && item.children && (
          <div>
            {item.children.map((child: any, index: number) => (
              <FileTreeItem
                key={index}
                item={child}
                level={level + 1}
                activeFile={activeFile}
                onFileSelect={onFileSelect}
                theme={theme}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="flex items-center py-1 px-2 cursor-pointer text-sm"
      style={{
        paddingLeft: `${level * 16 + 24}px`,
        color: theme.text,
        background: activeFile === item.name ? activeBg : "transparent",
        transition: "background 0.15s",
      }}
      onClick={() => onFileSelect(item.name)}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.background =
          activeFile === item.name ? activeBg : "transparent")
      }
    >
      <File className="h-4 w-4 mr-2 text-[#519aba]" />
      <span>{item.name}</span>
    </div>
  );
}

function TerminalContent({
  theme,
  dict,
  lang,
}: {
  theme: any;
  dict: any;
  lang: string;
}) {
  const [step, setStep] = useState<
    "welcome" | "help" | "perfil" | "contacto" | "status" | "download"
  >("welcome");

  return (
    <div
      className="px-3 py-2 font-mono text-sm w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#444] scrollbar-track-[#222]"
      style={{
        backgroundColor: theme.editor,
        color: theme.text,
        userSelect: "text",
        transition: "background 0.2s",
        scrollbarColor: "#444 #222",
        scrollbarWidth: "thin",
      }}
    >
      {step === "welcome" && (
        <>
          <div>
            <span style={{ color: theme.accent }}>{dict.terminal.welcome}</span>
          </div>
          <div className="mt-1">
            <span>{dict.terminal.pressHelp.split("{help}")[0]}</span>
            <button
              className="text-[#4fc1ff] underline px-1 py-0 bg-transparent border-none cursor-pointer"
              style={{ fontSize: "inherit" }}
              onClick={() => setStep("help")}
            >
              help
            </button>
            <span>{dict.terminal.pressHelp.split("{help}")[1]}</span>
          </div>
          <div className="mt-4 flex items-center">
            <span className="mr-2" style={{ color: theme.accent }}>
              $
            </span>
            <span className="animate-pulse">_</span>
          </div>
        </>
      )}
      {step === "help" && (
        <>
          <div>
            <span style={{ color: theme.text }}>user@portfolio:~$ </span>
            <span style={{ color: theme.accent }}>
              {dict.terminal.helpCommand}
            </span>
          </div>
          <div className="mt-2" style={{ color: theme.text }}>
            {dict.terminal.availableCommands}:
          </div>
          <div className="mt-1 flex flex-row flex-wrap gap-x-4 gap-y-2">
            <TerminalCmd
              label="perfil"
              onClick={() => setStep("perfil")}
              theme={theme}
            />
            <TerminalCmd
              label="contacto"
              onClick={() => setStep("contacto")}
              theme={theme}
            />
            <TerminalCmd
              label="status"
              onClick={() => setStep("status")}
              theme={theme}
            />
            <TerminalCmd
              label="download cv"
              onClick={() => setStep("download")}
              theme={theme}
            />
            <TerminalCmd
              label={dict.terminal.clear}
              onClick={() => setStep("welcome")}
              theme={theme}
            />
          </div>
          <div className="mt-4 flex items-center">
            <span className="mr-2" style={{ color: theme.accent }}>
              $
            </span>
            <span className="animate-pulse">_</span>
          </div>
        </>
      )}
      {step === "perfil" && (
        <>
          <div>
            <span style={{ color: theme.text }}>user@portfolio:~$ </span>
            <span style={{ color: theme.accent }}>perfil</span>
          </div>
          <div className="mt-2" style={{ color: theme.text }}>
            <b>{dict.terminal.name}:</b> Lautaro Octavio Faure
            <br />
            <b>{dict.terminal.age}:</b> 19
            <br />
            <b>{dict.terminal.location}:</b> Argentina, Cordoba
            <br />
            <b>{dict.terminal.description}:</b>
            {dict.terminal.profileDescription}
          </div>
          <div className="mt-3 flex flex-row flex-wrap gap-x-4 gap-y-2">
            <TerminalCmd
              label="help"
              onClick={() => setStep("help")}
              theme={theme}
            />
            <TerminalCmd
              label={dict.terminal.clear}
              onClick={() => setStep("welcome")}
              theme={theme}
            />
          </div>
        </>
      )}
      {step === "contacto" && (
        <>
          <div>
            <span style={{ color: theme.text }}>user@portfolio:~$ </span>
            <span style={{ color: theme.accent }}>contacto</span>
          </div>
          <div className="mt-2" style={{ color: theme.text }}>
            <b>{dict.terminal.email}:</b> lautaroofaure@gmail.com
            <br />
            <b>{dict.terminal.linkedin}:</b>{" "}
            <a
              href="https://www.linkedin.com/in/lautaro-ocatavio-faure"
              target="_blank"
              className="text-[#4fc1ff] underline"
            >
              {dict.terminal.linkedin}.com
            </a>
            <br />
            <b>{dict.terminal.github}:</b>{" "}
            <a
              href="https://github.com/lautaro65"
              target="_blank"
              className="text-[#4fc1ff] underline"
            >
              {dict.terminal.github}.com
            </a>
          </div>
          <div className="mt-3 flex flex-row flex-wrap gap-x-4 gap-y-2">
            <TerminalCmd
              label="help"
              onClick={() => setStep("help")}
              theme={theme}
            />
            <TerminalCmd
              label={dict.terminal.clear}
              onClick={() => setStep("welcome")}
              theme={theme}
            />
          </div>
        </>
      )}
      {step === "status" && (
        <>
          <div>
            <span style={{ color: theme.text }}>user@portfolio:~$ </span>
            <span style={{ color: theme.accent }}>{dict.terminal.status}</span>
          </div>
          <div className="mt-2" style={{ color: theme.text }}>
            <b>{dict.terminal.currentStatus}:</b> {dict.terminal.available}
            <br />
          </div>
          <div className="mt-3 flex flex-row flex-wrap gap-x-4 gap-y-2">
            <TerminalCmd
              label="help"
              onClick={() => setStep("help")}
              theme={theme}
            />
            <TerminalCmd
              label={dict.terminal.clear}
              onClick={() => setStep("welcome")}
              theme={theme}
            />
          </div>
        </>
      )}
      {step === "download" && (
        <>
          <div>
            <span style={{ color: theme.text }}>user@portfolio:~$ </span>
            <span style={{ color: theme.accent }}>
              {dict.terminal.downloadCV}
            </span>
          </div>
          <div className="mt-2" style={{ color: theme.text }}>
            <a
              href={
                lang === "en"
                  ? "./Curriculum-Vitae-Lautaro-Faure-English.pdf"
                  : "./Curriculum-Vitae-Lautaro-Faure.pdf"
              }
              download={
                lang === "en"
                  ? "lautaro_faure_cv_en.pdf"
                  : "lautaro_faure_cv.pdf"
              }
              className="text-[#4fc1ff] underline"
            >
              {dict.terminal.downloadLink}
            </a>
          </div>
          <div className="mt-3 flex flex-row flex-wrap gap-x-4 gap-y-2">
            <TerminalCmd
              label="help"
              onClick={() => setStep("help")}
              theme={theme}
            />
            <TerminalCmd
              label={dict.terminal.clear}
              onClick={() => setStep("welcome")}
              theme={theme}
            />
          </div>
        </>
      )}
    </div>
  );
}

function TerminalCmd({
  label,
  onClick,
  theme,
}: {
  label: string;
  onClick: () => void;
  theme: any;
}) { 
  return (
    <button
      className="text-[#4fc1ff] underline px-0 py-0 bg-transparent border-none text-left cursor-pointer"
      style={{ fontSize: "inherit", width: "fit-content" }}
      onClick={onClick}
      type="button"
    > 
      {">"} {label}
    </button>
  );
}

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};
