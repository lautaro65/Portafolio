import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Moon,
  Sun,
  Building2,
  User,
  Briefcase,
  Download,
  ArrowRight,
  CheckCircle2,
  Mail,
  Linkedin,
  Send,
} from "lucide-react";

interface WorkWithMeProps {
  maximized: boolean;
  dict: any;
}

const WorkWithMe = ({ maximized, dict }: WorkWithMeProps) => {
  const [view, setView] = useState("empresa");
  const [darkMode, setDarkMode] = useState(true); // Por defecto dark para lucir el estilo

  // Responsive igual que GoogleWindow
  const getIsMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 || maximized === false;
    }
    return maximized === false;
  };
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsMobile(getIsMobile());
    setMobileMenuOpen(false); // close menu on maximize change
  }, [maximized]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
      setMobileMenuOpen(false); // close menu on resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maximized]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-700 ${darkMode ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"} font-sans selection:bg-blue-500/30`}
    >
      {/* BACKGROUND DECORATION (Solo en Dark Mode) */}
      {darkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
        </div>
      )}

      {/* NAVBAR ESTILO GLASSMORPHISM */}
      <nav
        className={`sticky top-0 w-full z-50 px-6 py-4 border-b transition-all ${darkMode ? "border-white/5 bg-black/40" : "border-black/5 bg-white/40"} backdrop-blur-xl`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
              LF
            </div>
            <span className="font-bold tracking-tighter text-xl hidden sm:block">
              lautaro.faure
            </span>
          </div>

          {/* Desktop nav */}
          {!isMobile ? (
            <div
              className={`flex p-1 rounded-2xl border transition-all ${darkMode ? "bg-zinc-900/50 border-white/10" : "bg-gray-200 border-gray-300"}`}
            >
              <button
                onClick={() => setView("empresa")}
                className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${view === "empresa" ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-gray-300"}`}
              >
                {dict.google.Company || "Empresa"}
              </button>
              <button
                onClick={() => setView("particular")}
                className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${view === "particular" ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-gray-300"}`}
              >
                {dict.google.Freelance || "Freelance"}
              </button>
              <button
                onClick={() => setView("contacto")}
                className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${view === "contacto" ? "bg-white text-black shadow-xl" : "text-gray-500 hover:text-gray-300"}`}
              >
                {dict.google.Contact || "Contacto"}
              </button>
            </div>
          ) : (
            <>
              <button
                aria-label="Abrir menú"
                onClick={() => setMobileMenuOpen((v) => !v)}
                className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${darkMode ? "bg-zinc-900 border-white/10 hover:border-white/30" : "bg-white border-black/10 hover:bg-gray-100 shadow-sm"}`}
              >
                {/* Hamburger icon */}
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </svg>
              </button>
            </>
          )}

          {/* Dark mode toggle always visible */}
          {!isMobile && (
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${darkMode ? "bg-zinc-900 border-white/10 hover:border-white/30" : "bg-white border-black/10 hover:bg-gray-100 shadow-sm"}`}
            >
              {darkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>
          )}
        </div>
        {/* Mobile menu dropdown */}
        {isMobile && mobileMenuOpen && (
          <div
            className={`mt-4 flex flex-col gap-2 p-4 rounded-2xl border shadow-lg transition-all animate-fade-in-down ${darkMode ? "bg-zinc-900/90 border-white/10" : "bg-white/95 border-black/10"}`}
          >
            <button
              onClick={() => {
                setView("empresa");
                setMobileMenuOpen(false);
              }}
              className={`w-full px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all text-left ${view === "empresa" ? "bg-blue-600 text-white shadow-xl" : "text-gray-700 hover:bg-blue-50"}`}
            >
              {dict.google.Company || "Empresa"}
            </button>
            <button
              onClick={() => {
                setView("particular");
                setMobileMenuOpen(false);
              }}
              className={`w-full px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all text-left ${view === "particular" ? "bg-blue-600 text-white shadow-xl" : "text-gray-700 hover:bg-blue-50"}`}
            >
              {dict.google.Freelance || "Freelance"}
            </button>
            <button
              onClick={() => {
                setView("contacto");
                setMobileMenuOpen(false);
              }}
              className={`w-full px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all text-left ${view === "contacto" ? "bg-blue-600 text-white shadow-xl" : "text-gray-700 hover:bg-blue-50"}`}
            >
              {dict.google.Contact || "Contacto"}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-full mt-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${darkMode ? "bg-zinc-800 text-yellow-400" : "bg-gray-100 text-blue-600"}`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />} Modo{" "}
              {darkMode ? "Claro" : "Oscuro"}
            </button>
          </div>
        )}
      </nav>

      <main className="relative pt-20 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {view === "contacto" ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Lado Izquierdo: Texto y RRSS */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <div>
                    <h1
                      className={`text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.8] ${darkMode ? "text-white" : "text-black"}`}
                    >
                      {dict.google.Contact || "Hablemos"} <br />
                      <span className="text-blue-500">
                        {dict.google.Idea || "de tu idea."}
                      </span>
                    </h1>
                    <p
                      className={`text-lg md:text-xl max-w-md leading-relaxed ${darkMode ? "text-zinc-400" : "text-gray-600"}`}
                    >
                      {dict.google.ContactText ||
                        "¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy aquí para ayudarte a llevar tu visión al siguiente nivel. Completa el formulario y me pondré en contacto contigo lo antes posible."}
                    </p>
                  </div>

                  {/* Tarjetas de Contacto Directo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a
                      href="mailto:lautaroofaure@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-6 rounded-3xl border transition-all flex flex-col gap-3 group ${darkMode ? "bg-zinc-900/40 border-white/5 hover:bg-zinc-800/60" : "bg-white border-black/5 hover:shadow-md"}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <span className="font-bold">
                        {dict.google.Email || "Email"}
                      </span>
                      <span className="text-xs text-zinc-500 break-all">
                        lautaroofaure@gmail.com
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/lautaro-ocatavio-faure/"
                      target="_blank"
                      className={`p-6 rounded-3xl border transition-all flex flex-col gap-3 group ${darkMode ? "bg-zinc-900/40 border-white/5 hover:bg-zinc-800/60" : "bg-white border-black/5 hover:shadow-md"}`}
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Linkedin size={20} />
                      </div>
                      <span className="font-bold">LinkedIn</span>
                      <span className="text-xs text-zinc-500">
                        /in/lautaro-ocatavio-faure
                      </span>
                    </a>
                  </div>

                  <div
                    className={`p-8 rounded-[2.5rem] border ${darkMode ? "bg-blue-500/5 border-blue-500/10" : "bg-blue-50 border-blue-100"}`}
                  >
                    <p
                      className={`text-sm italic leading-relaxed ${darkMode ? "text-blue-200/60" : "text-blue-700/70"}`}
                    >
                      {dict.google.ThankYou ||
                        "Más allá de si concretamos un trabajo o no, muchas gracias de antemano por tomarte el tiempo de visitar mi perfil y considerar mi trabajo. Valoro mucho la oportunidad de conectar con gente con nuevas ideas."}
                    </p>
                  </div>
                </motion.div>

                {/* Lado Derecho: Formulario Estilizado */}
                <motion.div
                  variants={itemVariants}
                  className={`p-8 md:p-10 rounded-[3rem] border shadow-2xl ${darkMode ? "bg-zinc-900/50 border-white/5" : "bg-white border-black/5 shadow-lg"}`}
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                      {dict.google.SendDirectMessage ||
                        "Enviar un mensaje directo"}
                    </span>
                  </div>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase ml-1 opacity-50">
                          {dict.google.Name || "Nombre"}
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all ${darkMode ? "bg-black/30 border-white/10 focus:border-blue-500/50" : "bg-gray-50 border-gray-200 focus:border-blue-500"}`}
                          placeholder={
                            dict.google.NamePlaceholder || "Tu nombre..."
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase ml-1 opacity-50">
                          {dict.google.Email || "Email"}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all ${darkMode ? "bg-black/30 border-white/10 focus:border-blue-500/50" : "bg-gray-50 border-gray-200 focus:border-blue-500"}`}
                          placeholder={
                            dict.google.EmailPlaceholder || "tu@email.com"
                          }
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase ml-1 opacity-50">
                        {dict.google.Message || "Mensaje"}
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all resize-none ${darkMode ? "bg-black/30 border-white/10 focus:border-blue-500/50" : "bg-gray-50 border-gray-200 focus:border-blue-500"}`}
                        placeholder={
                          dict.google.MessagePlaceholder ||
                          "¿En qué puedo ayudarte?"
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-3 group"
                    >
                      {status === "sending"
                        ? dict.google.Sending || "Enviando..."
                        : dict.google.SendProposal || "ENVIAR PROPUESTA"}
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </button>
                    {status === "sent" && (
                      <div className="text-green-500 text-center mt-2 font-bold">
                        {dict.google.MessageSent ||
                          "¡Mensaje enviado correctamente!"}
                      </div>
                    )}
                    {status === "error" && (
                      <div className="text-red-500 text-center mt-2 font-bold">
                        {dict.google.MessageError ||
                          "Hubo un error al enviar. Intenta de nuevo."}
                      </div>
                    )}
                  </form>
                </motion.div>
              </div>
            ) : (
              <div className="mb-20 text-center md:text-left">
                <motion.h1
                  className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] ${darkMode ? "text-white" : "text-black"}`}
                >
                  {view === "empresa" ? (
                    <>
                      {dict.google.Building || "Building"}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">
                        {dict.google.Future || "Future"}
                      </span>
                      {dict.google.Teams || "Teams"}
                    </>
                  ) : (
                    <>
                      {dict.google.Design || "Design"}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                        {dict.google.Pixel || "Pixel"}
                      </span>
                      {dict.google.Perfect || "Perfect."}
                    </>
                  )}
                </motion.h1>
                <p
                  className={`text-lg md:text-2xl max-w-3xl leading-relaxed ${darkMode ? "text-zinc-400" : "text-gray-600"}`}
                >
                  {view === "empresa"
                    ? dict.google.IntegrateTeam ||
                      "Me integro a tu equipo para escalar productos con código de alta calidad, mentalidad proactiva y una comunicación transparente."
                    : dict.google.CustomSoftware ||
                      "Soluciones de software personalizadas con un enfoque en diseño inmersivo y performance técnica excepcional."}
                </p>
              </div>
            )}

            {view !== "contacto" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                {/* Card principal (Información Extra / Servicios) */}
                <motion.div
                  variants={itemVariants}
                  className={`md:col-span-8 rounded-[2.5rem] p-8 md:p-12 border relative overflow-hidden group ${darkMode ? "bg-zinc-900/30 border-white/5 shadow-2xl" : "bg-white border-black/5 shadow-sm"}`}
                >
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 ${darkMode ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-blue-100 text-blue-600"}`}
                    >
                      {view === "empresa"
                        ? dict.google.Collaboration || "Collaboration"
                        : dict.google.CoreServices || "Core Services"}
                    </div>

                    {view === "empresa" ? (
                      <div className="space-y-8">
                        <h2 className="text-3xl font-bold italic tracking-tight">
                          {dict.google.ValueFromFirstCommit ||
                            "I bring value from the first commit."}
                        </h2>
                        <div className="flex flex-wrap gap-4">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                              dict.google.CVLink ||
                              "/Curriculum-Vitae-Lautaro-Faure.pdf"
                            }
                            className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/30"
                          >
                            <Download size={20} />{" "}
                            {dict.google.DownloadCV || "Download CV"}
                          </motion.a>
                          <div className="flex items-center gap-2 text-sm text-zinc-500 italic">
                            <span>
                              {dict.google.ReviewFullPath ||
                                "Review my full path and technical skills."}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div>
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />{" "}
                            {dict.google.FullstackDev || "Fullstack Dev"}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${darkMode ? "text-zinc-500" : "text-gray-500"}`}
                          >
                            {dict.google.ScalableArchitectures ||
                              "Scalable architectures using the T3 stack: Next.js, TypeScript, and modern databases."}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />{" "}
                            {dict.google.PremiumUIUX || "Premium UI/UX"}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed ${darkMode ? "text-zinc-500" : "text-gray-500"}`}
                          >
                            {dict.google.InterfacesThatCaptivate ||
                              "Interfaces that not only work but captivate. Focus on smooth animations and micro-interactions."}
                            s{" "}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Glow decorativo interno */}
                  <div
                    className={`absolute -bottom-10 -left-10 w-40 h-40 blur-[80px] rounded-full transition-opacity group-hover:opacity-100 opacity-50 ${view === "empresa" ? "bg-blue-600/20" : "bg-purple-600/20"}`}
                  />
                </motion.div>

                {/* Card Modalidad (Bento Pequeña) */}
                <motion.div
                  variants={itemVariants}
                  className={`md:col-span-4 rounded-[2.5rem] p-8 border flex flex-col justify-center ${darkMode ? "bg-zinc-900/30 border-white/5" : "bg-white border-black/5 shadow-sm"}`}
                >
                  <div className="mb-4 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-sm uppercase tracking-widest text-zinc-500 font-bold mb-2">
                    {dict.google.Modalidad || "Modalidad"}
                  </h3>
                  <p className="text-3xl font-bold mb-2 leading-none">
                    {view === "empresa"
                      ? dict.google.RemotoGlobal || "Remoto / Global"
                      : dict.google.FixedPrice || "Fixed Price"}
                  </p>
                  <p className="text-xs text-zinc-500 font-mono italic leading-relaxed">
                    {view === "empresa"
                      ? dict.google.RelocationAvailable ||
                        "// Disponible para relocalización bajo propuesta interesante."
                      : dict.google.FixedPriceInfo ||
                        "// Presupuestos cerrados basados en objetivos claros."}
                  </p>
                </motion.div>

                {/* Card Beneficios / ¿Por qué yo? (Bento Larga) */}
                <motion.div
                  variants={itemVariants}
                  className={`md:col-span-12 rounded-[2.5rem] p-8 md:p-12 border ${darkMode ? "bg-zinc-900/30 border-white/5" : "bg-white border-black/5 shadow-sm"}`}
                >
                  <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
                    {view === "empresa"
                      ? dict.google.SoftSkillsTechMindset ||
                        "Soft Skills & Tech Mindset"
                      : dict.google.MyCreativeWorkflow ||
                        "My Creative Workflow"}
                    <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent ml-4" />
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {(view === "empresa"
                      ? [
                          {
                            title:
                              dict.google.CleanCodeDocs || "Clean Code & Docs",
                            desc:
                              dict.google.CleanCodeDocsDesc ||
                              "Código limpio, bien documentado y fácil de mantener.",
                          },
                          {
                            title:
                              dict.google.TeamCollaboration ||
                              "Team Collaboration",
                            desc:
                              dict.google.TeamCollaborationDesc ||
                              "Trabajo colaborativo, comunicación clara y apoyo al equipo.",
                          },
                          {
                            title:
                              dict.google.ProactiveThinking ||
                              "Proactive Thinking",
                            desc:
                              dict.google.ProactiveThinkingDesc ||
                              "Anticipo problemas y propongo soluciones antes de que ocurran.",
                          },
                          {
                            title:
                              dict.google.ContinuousLearning ||
                              "Continuous Learning",
                            desc:
                              dict.google.ContinuousLearningDesc ||
                              "Aprendizaje constante de nuevas tecnologías y metodologías.",
                          },
                          {
                            title:
                              dict.google.Responsability || "Responsability",
                            desc:
                              dict.google.ResponsabilityDesc ||
                              "Compromiso total con la calidad y los plazos de entrega.",
                          },
                        ]
                      : [
                          {
                            title: dict.google.UXResearch || "UX Research",
                            desc:
                              dict.google.UXResearchDesc ||
                              "Investigación profunda para entender a los usuarios y sus necesidades.",
                          },
                          {
                            title: dict.google.Wireframing || "Wireframing",
                            desc:
                              dict.google.WireframingDesc ||
                              "Creación de wireframes claros para definir la estructura y funcionalidad.",
                          },
                          {
                            title: dict.google.VisualDesign || "Visual Design",
                            desc:
                              dict.google.VisualDesignDesc ||
                              "Diseños atractivos y coherentes con la identidad de la marca.",
                          },
                          {
                            title: dict.google.Prototyping || "Prototyping",
                            desc:
                              dict.google.PrototypingDesc ||
                              "Prototipos interactivos para validar ideas antes del desarrollo.",
                          },
                          {
                            title: dict.google.UserTesting || "User Testing",
                            desc:
                              dict.google.UserTestingDesc ||
                              "Pruebas con usuarios reales para obtener feedback valioso.",
                          },
                        ]
                    ).map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="mt-1 text-blue-500 group-hover:scale-125 transition-transform">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-tighter">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA FINAL ESTILO NEON */}
                <motion.div
                  variants={itemVariants}
                  className="md:col-span-12 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden group"
                >
                  <div className="relative z-10 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter italic">
                      {dict.google.ReadyToStart || "Ready to start?"}
                    </h2>
                    <p className="text-blue-100 text-lg opacity-80">
                      {dict.google.AvailableForNew ||
                        "Estoy disponible para nuevas"}
                      {view === "empresa"
                        ? dict.google.CorporateOpportunities ||
                          "oportunidades corporativas"
                        : dict.google.CreativeCollaborations ||
                          "colaboraciones creativas"}
                      .
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 md:mt-0 relative z-10 bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-black/20 flex items-center gap-3 group/btn transition-all"
                    onClick={() => setView("contacto")}
                  >
                    {dict.google.ContactNow || "Contactar ahora"}
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                  </motion.button>

                  {/* Decoración abstracta de fondo */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] -mr-40 -mt-40 rounded-full" />
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER MINIMALISTA */}
      <footer className="py-20 border-t border-white/5 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-50 hover:opacity-100 transition-opacity">
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/lautaro-ocatavio-faure/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest hover:text-blue-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lautaro65"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest hover:text-blue-500"
          >
            GitHub
          </a>
        </div>
        <p className="text-[10px] font-mono tracking-widest uppercase">
          © 2026 Developed by Lautaro Faure
        </p>
      </footer>
    </div>
  );
};

export default WorkWithMe;
