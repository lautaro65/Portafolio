import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Layers,
  X,
  Eye,
  Palette,
  Sun,
  Moon,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function GlassSwitchDemo() {
  const [isDark, setIsDark] = React.useState(false);
  return (
    <button
      className="p-2 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-md w-12 h-12 flex items-center justify-center transition-colors overflow-hidden"
      onClick={() => setIsDark((v) => !v)}
      aria-label="Toggle theme visual"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.35, type: "spring" }}
            className="absolute"
          >
            <Moon size={22} className="text-blue-400" />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.35, type: "spring" }}
            className="absolute"
          >
            <Sun size={22} className="text-yellow-400" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

interface EstilosDeDisenoProps {
  darkMode?: boolean;
  maximized: boolean;
  dict: any;
}

type DemoStyle = {
  type: string;
  description: string;
  preview: React.ReactNode;
};

type DemoComponent = {
  id: number;
  name: string;
  category: string;
  styles: DemoStyle[];
};

type ModalCompState = {
  comp: DemoComponent;
  styleIdx: number;
} | null;

const EstilosDeDiseno = ({
  darkMode = true,
  maximized,
  dict,
}: EstilosDeDisenoProps) => {
  const demoComponents = [
    {
      id: 4,
      name: dict.google.InteractiveActions || "Interactive Actions",
      category: "Button",
      styles: [
        {
          type: dict.google.TwitterLike || "Twitter Like",
          description:
            dict.google.TwitterLikeDesc ||
            "Botón de interacción con micro-animación de partículas y cambio de estado cromático.",
          preview: (
            <button className="group flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-500 transition-all hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current group-hover:scale-125 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="font-black text-xs uppercase tracking-tighter">
                {dict.google.Like || "Like"}
              </span>
            </button>
          ),
        },
        {
          type: dict.google.GlassToggle || "Glass Toggle",
          description:
            dict.google.GlassToggleDesc ||
            "Switch de tema minimalista con efecto de desenfoque y traslación suave de iconos.",
          preview: <GlassSwitchDemo />,
        },
      ],
    },
    {
      id: 1,
      name: dict.google.ProductShowcase || "Product Showcase Card",
      category: "Card",
      styles: [
        {
          type: dict.google.Glassmorphism || "Glassmorphism",
          description:
            dict.google.GlassmorphismDesc ||
            "Efecto traslúcido con jerarquía visual mediante desenfoque. Ideal para e-commerce de lujo.",
          preview: (
            <div className="relative w-full rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4 overflow-hidden group/card">
              <div className="h-32 w-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-4 flex items-center justify-center">
                <Palette
                  className="text-white/50 group-hover/card:scale-110 transition-transform"
                  size={40}
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-bold text-sm">
                    Vision Pro Max
                  </h4>
                  <span className="text-blue-400 font-mono text-[10px]">
                    $2,999
                  </span>
                </div>
                <button className="w-full py-2 bg-white text-black rounded-xl text-[10px] font-black uppercase hover:bg-blue-500 hover:text-white transition-colors">
                  {dict.products.cart || "Add to Cart"}
                </button>
              </div>
            </div>
          ),
        },
        {
          type: dict.google.MinimalistLight || "Minimalist Light",
          description:
            dict.google.MinimalistLightDesc ||
            "Enfoque en espacios negativos y tipografía. Perfecto para catálogos modernos.",
          preview: (
            <div className="w-full rounded-[2rem] bg-white p-5 shadow-sm border border-black/5 text-left group/card">
              <div className="aspect-video w-full rounded-xl bg-zinc-100 mb-4 overflow-hidden">
                <div className="w-full h-full bg-zinc-200 group-hover/card:scale-105 transition-transform" />
              </div>
              <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">
                Premium Series
              </span>
              <h4 className="text-zinc-900 font-bold text-md mt-1 italic">
                Lunar Desk Lamp
              </h4>
            </div>
          ),
        },
      ],
    },
    {
      id: 7,
      name: dict.google.StatusIndicators || "Status & Indicators",
      category: "Badge",
      styles: [
        {
          type: dict.google.LivePulse || "Live Pulse",
          description:
            dict.google.LivePulseDesc ||
            "Indicador de estado en tiempo real con animación de pulso infinito. Perfecto para streams o servidores.",
          preview: (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                Live System
              </span>
            </div>
          ),
        },
        {
          type: dict.google.NeonOutline || "Neon Outline",
          description:
            dict.google.NeonOutlineDesc ||
            "Estilo ciberpunk con resplandor exterior. Ideal para resaltar categorías importantes.",
          preview: (
            <div className="px-4 py-1 rounded-md bg-blue-500/5 border border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              <span className="text-blue-400 text-[9px] font-mono font-bold uppercase tracking-[0.2em]">
                Priority_01
              </span>
            </div>
          ),
        },
      ],
    },
    {
      id: 2,
      name: dict.google.CriticalActionCard || "Critical Action Card",
      category: "Card",
      styles: [
        {
          type: dict.google.NeoBrutalism || "Neo-Brutalism",
          description:
            dict.google.NeoBrutalismDesc ||
            "Estilo de alto contraste para acciones irreversibles. Imposible de ignorar.",
          preview: (
            <div className="w-full bg-white border-4 border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left">
              <h4 className="text-black font-black text-lg leading-none mb-2">
                DELETE PROJECT?
              </h4>
              <p className="text-black/60 text-[10px] font-bold mb-4 uppercase">
                This action is permanent and cannot be undone.
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-[#FF5F5F] border-2 border-black font-black text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[1px]">
                  DELETE
                </button>
                <button className="flex-1 py-2 bg-white border-2 text-black border-black font-black text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  CANCEL
                </button>
              </div>
            </div>
          ),
        },
        {
          type: dict.google.SoftDanger || "Soft Danger",
          description:
            dict.google.SoftDangerDesc ||
            "Alerta destructiva pero integrada al sistema. Usa transparencias y colores de advertencia.",
          preview: (
            <div className="w-full rounded-3xl bg-red-500/5 border border-red-500/20 p-5 text-center">
              <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <X className="text-red-500" size={18} />
              </div>
              <h4 className="text-red-100 font-bold text-sm">
                Discard Changes
              </h4>
              <p className="text-red-500/50 text-[9px] mt-1 mb-4">
                You have unsaved edits in this section.
              </p>
              <button className="text-red-500 text-[10px] font-black uppercase tracking-widest hover:underline">
                Confirm Discard
              </button>
            </div>
          ),
        },
      ],
    },
    {
      id: 10,
      name: dict.google.SearchDiscovery || "Search & Discovery",
      category: "Input",
      styles: [
        {
          type: dict.google.GlassSearch || "Glass Search",
          description:
            dict.google.GlassSearchDesc ||
            "Buscador con efecto de desenfoque y borde iluminado al hacer foco. Ideal para navegación principal.",
          preview: (
            <div className="relative w-full group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors"
                size={16}
              />
              <input
                type="text"
                placeholder={
                  dict.desktop.searchPlaceholder || "Search assets..."
                }
                className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl py-3 pl-12 pr-4 text-xs outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all text-white"
              />
            </div>
          ),
        },
        {
          type: dict.google.MinimalUnderline || "Minimal Underline",
          description:
            dict.google.MinimalUnderlineDesc ||
            "Estilo ultra-limpio enfocado en la tipografía, con una línea de progreso animada.",
          preview: (
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Type something..."
                className="w-full bg-transparent border-b-2 border-zinc-800 py-2 text-sm outline-none focus:border-blue-500 transition-colors text-white placeholder:text-zinc-600"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-focus-within:w-full" />
            </div>
          ),
        },
      ],
    },
    {
      id: 5,
      name: dict.google.PremiumCTA || "Premium Call to Action",
      category: "Button",
      styles: [
        {
          type: dict.google.MagneticDark || "Magnetic Dark",
          description:
            dict.google.MagneticDarkDesc ||
            "Botón de alto impacto con bordes animados y tipografía agresiva.",
          preview: (
            <button className="relative group px-10 py-4 bg-black rounded-2xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-3">
                <span className="text-white font-black italic uppercase tracking-tighter text-sm">
                  {dict.google.GetStarted || "Get Started"}
                </span>
                <ArrowRight
                  size={16}
                  className="text-white group-hover:translate-x-2 transition-transform"
                />
              </div>
            </button>
          ),
        },
        {
          type: dict.google.RetroShine || "Retro Shine",
          description:
            dict.google.RetroShineDesc ||
            "Inspirado en interfaces vintage con un brillo metálico dinámico al pasar el mouse.",
          preview: (
            <button className="px-8 py-3 bg-[#e0e0e0] border-b-4 border-zinc-400 rounded-lg text-zinc-800 font-bold uppercase tracking-widest text-[10px] active:border-b-0 active:translate-y-[2px] transition-all hover:bg-white shadow-lg">
              {dict.google.DeployNow || "Deploy Now"}
            </button>
          ),
        },
      ],
    },
    {
      id: 8,
      name: dict.google.UserRoleTags || "User & Role Tags",
      category: "Badge",
      styles: [
        {
          type: dict.google.PremiumGold || "Premium Gold",
          description:
            dict.google.PremiumGoldDesc ||
            "Efecto metálico elegante para membresías o usuarios verificados de alto nivel.",
          preview: (
            <div className="px-3 py-1 rounded-lg bg-gradient-to-tr from-amber-600/20 to-yellow-400/20 border border-yellow-500/30 flex items-center gap-2">
              <Palette size={10} className="text-yellow-500" />
              <span className="text-yellow-200 text-[10px] font-bold italic uppercase tracking-tighter">
                Pro Member
              </span>
            </div>
          ),
        },
        {
          type: dict.google.GlassTag || "Glass Tag",
          description:
            dict.google.GlassTagDesc ||
            "Etiqueta minimalista que se adapta a cualquier fondo mediante transparencia activa.",
          preview: (
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-white/60 text-[10px] font-medium">
                Developer
              </span>
            </div>
          ),
        },
      ],
    },
    {
      id: 3,
      name: dict.google.AnalyticsMetric || "Analytics Metric",
      category: "Card",
      styles: [
        {
          type: dict.google.CyberStats || "Cyber Stats",
          description:
            dict.google.CyberStatsDesc ||
            "Visualización de datos técnica. Ideal para dashboards de monitoreo o trading.",
          preview: (
            <div className="w-full rounded-2xl bg-black border border-blue-500/30 p-4 relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Layers size={14} className="text-blue-500" />
                </div>
                <span className="text-emerald-400 text-[10px] font-mono">
                  +12.4%
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-500 text-[9px] uppercase font-mono tracking-tighter">
                  Network_Throughput
                </p>
                <h4 className="text-white text-2xl font-black font-mono">
                  142.8 <span className="text-xs text-zinc-600">mb/s</span>
                </h4>
              </div>
              <div className="mt-4 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 12,
      name: dict.google.SelectionControls || "Selection Controls",
      category: "Input",
      styles: [
        {
          type: dict.google.CyberCheckbox || "Cyber Checkbox",
          description:
            dict.google.CyberCheckboxDesc ||
            "Control de selección con estética técnica y feedback visual de estado activo.",
          preview: (
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-5 h-5 border-2 border-zinc-700 rounded group-hover:border-blue-500 transition-colors flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 translate-y-full group-has-[:checked]:translate-y-0 transition-transform" />
                <CheckCircle2
                  size={12}
                  className="relative z-10 text-white opacity-0 group-has-[:checked]:opacity-100 transition-opacity"
                />
                <input type="checkbox" className="hidden" defaultChecked />
              </div>
              <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                Confirm Transaction
              </span>
            </label>
          ),
        },
      ],
    },
    {
      id: 6,
      name: dict.google.UtilityFeedback || "Utility & Feedback",
      category: "Button",
      styles: [
        {
          type: dict.google.CopySuccess || "Copy Success",
          description:
            dict.google.CopySuccessDesc ||
            "Botón de utilidad con cambio de estado visual para confirmar acciones rápidas.",
          preview: (
            <button className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 group">
              <CheckCircle2
                size={16}
                className="group-hover:rotate-[360deg] transition-transform duration-500"
              />
              <span className="font-bold text-[11px] uppercase tracking-widest">
                Code Copied
              </span>
            </button>
          ),
        },
      ],
    },
    {
      id: 13,
      name: dict.google.InteractiveDatePickers || "Interactive Date Pickers",
      category: "Calendar",
      styles: [
        {
          type: dict.google.GlassFloatingPicker || "Glass Floating Picker",
          description:
            dict.google.GlassFloatingPickerDesc ||
            "Selector con efecto de cristal esmerilado, desenfoque de fondo y resaltado en gradiente azul.",
          preview: (
            <div className="relative w-full p-4 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden group">
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="text-white font-black text-xs tracking-tighter uppercase">
                  January 2026
                </span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
                    {"<"}
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
                    {">"}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["D", "L", "M", "X", "J", "V", "S"].map((d) => (
                  <span
                    key={d}
                    className="text-[8px] font-bold text-blue-400 opacity-50"
                  >
                    {d}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square flex items-center justify-center rounded-xl text-[10px] cursor-pointer transition-all
                    ${i + 1 === 20 ? "bg-blue-600 text-white font-black shadow-lg shadow-blue-500/40" : "text-white/60 hover:bg-white/10"}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 blur-[50px] rounded-full pointer-events-none" />
            </div>
          ),
        },
        {
          type: dict.google.CyberTerminalPicker || "Cyber Terminal Picker",
          description:
            dict.google.CyberTerminalPickerDesc ||
            "Estilo técnico con bordes neón, fuentes monoespaciadas y rejilla de alta precisión.",
          preview: (
            <div className="w-full p-4 bg-black border border-emerald-500/30 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <div className="flex justify-between items-center mb-4 border-b border-emerald-500/20 pb-2">
                <span className="font-mono text-[10px] text-emerald-500 tracking-[0.2em]">
                  DAT_SELECT_v.01
                </span>
                <span className="font-mono text-[10px] text-emerald-200 uppercase">
                  Jan // 26
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-7 border flex items-center justify-center font-mono text-[9px] cursor-pointer transition-all
                    ${
                      i + 1 === 20
                        ? "bg-emerald-500 text-black border-emerald-500 font-black"
                        : "border-white/5 text-zinc-500 hover:border-emerald-500/50 hover:text-emerald-400"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          ),
        },
      ],
    },
    {
      id: 9,
      name: dict.google.NotificationPill || "Notification Pill",
      category: "Badge",
      styles: [
        {
          type: dict.google.ModernAlert || "Modern Alert",
          description:
            dict.google.ModernAlertDesc ||
            "Diseño compacto para conteo de notificaciones o alertas rápidas.",
          preview: (
            <div className="relative inline-flex items-center justify-center px-2 py-1 text-[10px] font-black leading-none text-white bg-red-600 rounded-full shadow-lg shadow-red-600/20">
              99+
            </div>
          ),
        },
        {
          type: dict.google.TechVersion || "Tech Version",
          description:
            dict.google.TechVersionDesc ||
            "Badge de estilo técnico para versiones de software o ramas de Git.",
          preview: (
            <div className="flex items-center overflow-hidden rounded-md border border-zinc-700 font-mono text-[9px]">
              <span className="bg-zinc-800 px-2 py-1 text-zinc-400 border-r border-zinc-700">
                v
              </span>
              <span className="bg-black px-2 py-1 text-blue-400 uppercase">
                2.4.0-stable
              </span>
            </div>
          ),
        },
      ],
    },
    {
      id: 11,
      name: dict.google.FormFields || "Form Fields",
      category: "Input",
      styles: [
        {
          type: dict.google.NeumorphicDark || "Neumorphic Dark",
          description:
            dict.google.NeumorphicDarkDesc ||
            "Efecto de profundidad invertida mediante sombras internas, dando una sensación táctil premium.",
          preview: (
            <div className="w-full space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black ml-1">
                User ID
              </label>
              <input
                type="text"
                className="w-full bg-[#0a0a0a] border border-zinc-900 rounded-xl py-3 px-4 text-xs shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] focus:border-blue-500/30 outline-none transition-all text-blue-400 font-mono"
                placeholder="USR-9920-X"
              />
            </div>
          ),
        },
        {
          type: dict.google.GlowingBorder || "Glowing Border",
          description:
            dict.google.GlowingBorderDesc ||
            "Input con un gradiente animado en el borde que reacciona a la interacción del usuario.",
          preview: (
            <div className="p-[1px] rounded-xl bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-800 focus-within:from-blue-500 focus-within:via-purple-500 focus-within:to-blue-500 transition-all duration-500">
              <input
                type="email"
                placeholder="hello@vault.com"
                className="w-full bg-zinc-900 rounded-[11px] py-3 px-4 text-xs outline-none text-white"
              />
            </div>
          ),
        },
      ],
    },
  ];

  const [catOpen, setCatOpen] = useState(false);
  const handleCatSelect = (cat: string) => {
    setCategoryFilter(cat);
    setCatOpen(false);
  };
  const [modalComp, setModalComp] = useState<ModalCompState>(null);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [styleFilter] = useState("");
  const [selectedStyles, setSelectedStyles] = useState<Record<number, number>>(
    () => {
      const obj: Record<number, number> = {};
      demoComponents.forEach((comp) => {
        obj[comp.id] = 0;
      });
      return obj;
    },
  );

  // Detectar mobile layout: si pantalla es chica o maximized es false
  const getIsMobile = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      // Considera mobile si es menor a 768px (tailwind md) o maximized es false
      return width < 768 || maximized === false;
    }
    // SSR fallback
    return maximized === false;
  };
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    setIsMobile(getIsMobile());
  }, [maximized]);

  // El useEffect de resize ya lo tienes, así que mantenerlo:
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maximized]); // También agregar maximized como dependencia aquí

  // Paginación
  const ITEMS_PER_PAGE = 9;
  const [page, setPage] = React.useState(1);

  const filtered = demoComponents.filter((comp) => {
    const matchesName = comp.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "Todas" ? true : comp.category === categoryFilter;
    const matchesStyle = styleFilter
      ? comp.styles.some((s) => s.type === styleFilter)
      : true;
    return matchesName && matchesCategory && matchesStyle;
  });

  // Calcular páginas
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  React.useEffect(() => {
    setPage(1);
  }, [search, categoryFilter, styleFilter]);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );
  const categories = [
    dict.google.CategoriesValue || "Todas",
    "Card",
    "Button",
    "Badge",
    "Input",
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${darkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"} p-4 md:p-8`}
    >
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={
            isMobile
              ? "flex flex-col gap-4"
              : "flex flex-col md:flex-row md:items-end justify-between gap-6"
          }
        >
          {/* Fila 1: Título y descripción */}
          <div className={isMobile ? "w-full mb-2" : "flex-1"}>
            <div className="flex items-center gap-2 text-blue-500 mb-2 font-mono text-sm tracking-widest uppercase">
              <Palette size={16} />{" "}
              {dict.google.DesignSystems || "Design Systems"}
            </div>
            <h1
              className={
                isMobile
                  ? "text-3xl font-black mb-2"
                  : "text-5xl md:text-7xl font-black tracking-tighter italic uppercase"
              }
            >
              {dict.google.the || "The"}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
                {dict.google.Vault || "Vault"}
              </span>
            </h1>
            <p
              className={
                isMobile
                  ? "text-zinc-400 text-base font-medium mt-2"
                  : "text-zinc-400 text-sm md:text-lg font-medium mb-2"
              }
            >
              {dict.google.ExploreComponents ||
                "Explora componentes, estilos y patrones reutilizables."}
            </p>
          </div>
          <div
            className={
              isMobile ? "w-full flex flex-col gap-2" : "flex items-end gap-4"
            }
          >
            <div
              className={`flex items-center px-4 py-2 rounded-2xl border ${darkMode ? "bg-zinc-900/50 border-white/10" : "bg-white border-black/10 shadow-sm"}`}
            >
              <Search size={18} className="text-zinc-500 mr-2" />
              <input
                type="text"
                placeholder={
                  dict.google.SearchComponent || "Buscar componente..."
                }
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-none outline-none text-sm w-40"
              />
            </div>
            {/* Select de categoría */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCatOpen((v) => !v)}
                className={`flex items-center gap-2 px-4 py-2 rounded-2xl border text-sm font-bold tracking-wide shadow-lg transition-all ${darkMode ? "bg-zinc-900/70 border-white/10 hover:border-blue-500/50" : "bg-white border-black/10 hover:border-blue-500/20"}`}
                style={{ minWidth: 140 }}
              >
                <Layers size={16} className="text-blue-500" />
                {categoryFilter
                  ? categoryFilter
                  : dict.google.Categories || "Categorías"}
                <span
                  className={`ml-2 transition-transform ${catOpen ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {catOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute left-0 mt-2 w-full z-20 rounded-2xl shadow-xl border ${darkMode ? "bg-zinc-900/90 border-white/10" : "bg-white border-black/10"}`}
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className={`w-full text-left px-5 py-3 rounded-2xl font-bold transition-all ${categoryFilter === cat ? "bg-blue-600 text-white" : darkMode ? "bg-zinc-900 text-white hover:bg-blue-600/20" : "bg-white text-blue-600 hover:bg-blue-100"}`}
                        onClick={() => handleCatSelect(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* GRID DE COMPONENTES + PAGINACIÓN */}
      <div className="max-w-7xl mx-auto min-h-[600px]">
        <motion.div
          className={
            isMobile
              ? "grid grid-cols-1 gap-6"
              : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          }
          initial="hide"
          animate="show"
          variants={{
            show: {
              transition: {
                staggerChildren: 0.05, // Aparecen uno tras otro rápidamente
              },
            },
            hide: {},
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {paginated.map((comp: DemoComponent) => {
              let styleIdx = selectedStyles[comp.id] ?? 0;
              if (styleFilter) {
                const idx = comp.styles.findIndex(
                  (s) => s.type === styleFilter,
                );
                styleIdx = idx !== -1 ? idx : styleIdx;
              }
              const style = comp.styles[styleIdx];

              if (!style) return null;

              return (
                <motion.div
                  key={comp.id}
                  layout
                  initial={{ opacity: 0, y: 20, scaleX: 0.7, scaleY: 0.92 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    transition: { type: "spring", stiffness: 60, damping: 18 },
                  }}
                  exit={{
                    opacity: 0,
                    y: 40,
                    scaleX: 0.7,
                    scaleY: 0.92,
                    transition: { duration: 0.18 },
                  }}
                  transition={{ duration: 0.32 }}
                  style={{ transformOrigin: "top center" }}
                  className={`group relative rounded-[2.5rem] p-8 border transition-all duration-500 ${darkMode ? "bg-zinc-900/20 border-white/5 hover:bg-zinc-900/40" : "bg-white border-black/5 hover:shadow-2xl hover:shadow-blue-500/10"}`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-black tracking-tight">
                        {comp.name}
                      </h2>
                      <span className="text-xs font-mono uppercase text-blue-500 tracking-widest">
                        {comp.category}
                      </span>
                    </div>
                    {!isMobile && (
                      <button
                        onClick={() => setModalComp({ comp, styleIdx })}
                        className={`p-3 rounded-full transition-all ${darkMode ? "bg-white/5 text-white hover:bg-blue-600" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-900 hover:text-white"}`}
                      >
                        <Eye size={18} />
                      </button>
                    )}
                  </div>

                  {/* AREA DE PREVIEW */}
                  <div
                    className={`h-56 rounded-[2rem] flex items-center justify-center relative overflow-hidden  mb-6 border transition-all ${darkMode ? "bg-black/40 border-white/5" : "bg-zinc-100/50 border-black/5"}`}
                  >
                    <div className="w-full h-full p-6 flex items-center justify-center ">
                      <div className="w-full max-w-[200px] transform group-hover:scale-105 transition-transform duration-500">
                        {style.preview}
                      </div>
                    </div>
                    {/* Decoración de fondo */}
                    <div
                      className={`absolute inset-0 opacity-10 blur-3xl ${darkMode ? "bg-blue-600" : "bg-blue-400"}`}
                    />
                  </div>

                  {/* SELECTOR DE ESTILOS ESTILO CAPSULA */}
                  <div className="flex flex-wrap gap-2">
                    {comp.styles.map((s: DemoStyle, idx: number) => (
                      <button
                        key={idx}
                        onClick={() =>
                          setSelectedStyles((prev) => ({
                            ...prev,
                            [comp.id]: idx,
                          }))
                        }
                        className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border transition-all ${idx === styleIdx ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30" : darkMode ? "bg-zinc-800/50 border-white/10 text-zinc-400 hover:text-white" : "bg-zinc-100 border-black/5 text-zinc-600"}`}
                      >
                        {s.type}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CONTROLES DE PAGINACIÓN */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`px-3 py-2 rounded-lg font-bold text-sm transition-all border ${page === 1 ? "bg-zinc-800/30 text-zinc-500 border-zinc-700 cursor-not-allowed" : "bg-zinc-900 text-white border-zinc-700 hover:bg-blue-600 hover:text-white"}`}
          >
            {dict.google.previous || "Anterior"}
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-2 rounded-lg font-bold text-sm border transition-all ${page === i + 1 ? "bg-blue-600 text-white border-blue-600" : "bg-zinc-900 text-white border-zinc-700 hover:bg-blue-600 hover:text-white"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`px-3 py-2 rounded-lg font-bold text-sm transition-all border ${page === totalPages ? "bg-zinc-800/30 text-zinc-500 border-zinc-700 cursor-not-allowed" : "bg-zinc-900 text-white border-zinc-700 hover:bg-blue-600 hover:text-white"}`}
          >
            {dict.google.next || "Siguiente"}
          </button>
        </div>
      )}

      {/* MODAL REDISEÑADO */}
      <AnimatePresence>
        {modalComp && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalComp(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`relative w-full max-w-2xl rounded-[3rem] p-10 shadow-2xl overflow-hidden ${darkMode ? "bg-[#111] border border-white/10 text-white" : "bg-white text-black"}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-8 right-8 text-zinc-500 hover:text-white transition-colors"
                onClick={() => setModalComp(null)}
              >
                <X />
              </button>

              <div className="flex flex-col items-center text-center">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">
                  {modalComp.comp.category}
                </span>
                <h2 className="text-4xl font-black mb-10 tracking-tighter uppercase">
                  {modalComp.comp.name}
                </h2>

                <div className="w-full min-h-[280px] rounded-[2.5rem] bg-black/40 border border-white/5 flex items-center justify-center mb-10 relative overflow-hidden p-8">
                  <div className="z-10 w-full max-w-[300px] scale-110 md:scale-125">
                    {modalComp.comp.styles[modalComp.styleIdx]?.preview}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
                </div>

                <div className="max-w-md">
                  <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-widest text-sm">
                    {modalComp.comp.styles[modalComp.styleIdx]?.type}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                    {modalComp.comp.styles[modalComp.styleIdx]?.description}
                  </p>

                  <div className="flex gap-2 flex-wrap justify-center">
                    {modalComp.comp.styles.map((s, idx) => (
                      <button
                        key={idx}
                        className={`px-6 py-2 rounded-2xl text-xs font-bold transition-all ${idx === modalComp.styleIdx ? "bg-white text-black" : "bg-zinc-900 border border-white/10 text-zinc-500 hover:text-white"}`}
                        onClick={() =>
                          setModalComp({ comp: modalComp.comp, styleIdx: idx })
                        }
                      >
                        {s.type}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EstilosDeDiseno;
