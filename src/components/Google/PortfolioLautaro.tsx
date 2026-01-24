import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Code2 } from "lucide-react";

interface PortfolioLautaroProps {
  maximized: boolean;
  dict: any;
}

const PortfolioLautaro = ({ maximized, dict }: PortfolioLautaroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getIsMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 || maximized === false;
    }
    return maximized === false;
  };
  const [isMobile, setIsMobile] = useState(getIsMobile());

  const getIsLgAndMinimized = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768 && maximized === false;
    }
    return false;
  };
  const [isLgAndMinimized, setIsLgAndMinimized] = useState(
    getIsLgAndMinimized(),
  );

  useEffect(() => {
    setIsMobile(getIsMobile());
    setIsLgAndMinimized(getIsLgAndMinimized());
  }, [maximized]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(getIsMobile());
      setIsLgAndMinimized(getIsLgAndMinimized());
      setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maximized]);

  const portfolioDict = dict?.portfolio ?? {};
  const googleDict = dict?.google ?? {};
  const vscodeDict = dict?.vscode ?? {};
  const startMenuDict = dict?.startMenu ?? {};

  const navItems = [
    { id: "inicio", label: startMenuDict.start ?? "Inicio" },
    { id: "sobre-mi", label: vscodeDict.about ?? "Sobre mí" },
    {
      id: "habilidades",
      label: vscodeDict.skills ?? portfolioDict.stackSkills ?? "Habilidades",
    },
    { id: "contacto", label: vscodeDict.contact ?? "Contacto" },
  ];

  const heroTitle = googleDict.LautaroFaurePortfolio ?? "Lautaro Faure";
  const heroRole = portfolioDict.role ?? "Full Stack Developer";
  const heroDescription =
    googleDict.PortfolioProyectosHabilidades ??
    portfolioDict.subtitle ??
    "Apasionado por la tecnología, diseño y usabilidad. Especializado en crear experiencias web modernas con React, TypeScript y Next.js.";
  const locationLabel = portfolioDict.country ?? "Argentina";
  const aboutTitle = vscodeDict.about ?? "Sobre mí";
  const skillsTitle =
    portfolioDict.stackSkills ?? portfolioDict.skills ?? "Habilidades";
  const contactTitle =
    googleDict.Contact ?? portfolioDict.contactTitle ?? "¿Hablamos?";
  const contactDescription =
    googleDict.ContactText ??
    "Estoy disponible para proyectos freelance, colaboraciones y posiciones de tiempo completo. No dudes en contactarme.";
  const aboutIntro =
    googleDict.IntegrateTeam ??
    "Soy Lautaro Faure, desarrollador Full Stack apasionado por la tecnología, el diseño y la usabilidad.";
  const aboutBody =
    googleDict.CustomSoftware ??
    "Me especializo en crear experiencias web modernas y funcionales, combinando código limpio con diseño intuitivo.";
  const aboutOutro =
    portfolioDict.skillsDescription ??
    "Trabajo con tecnologías modernas en frontend y backend para construir aplicaciones escalables y centradas en el usuario.";
  const experienceLabel =
    googleDict.Experience ??
    portfolioDict.experience ??
    "Años de experiencia practica";
  const continuousLearningTitle =
    googleDict.ContinuousLearning ?? "En constante aprendizaje";
  const continuousLearningDesc =
    googleDict.ContinuousLearningDesc ??
    "Siempre explorando nuevas tecnologías y mejores prácticas";
  const cleanCodeTitle = googleDict.CleanCodeDocs ?? "Clean Code";
  const cleanCodeDesc =
    googleDict.CleanCodeDocsDesc ?? "Código mantenible y escalable";
  const performanceTitle = googleDict.Performance ?? "Performance";
  const performanceDesc =
    googleDict.PerformanceDesc ?? "Optimización constante";
  const frontendDesc =
    googleDict.FrontendDesc ??
    "Experto en crear interfaces modernas, responsivas y accesibles con las mejores prácticas de React y ecosistema moderno.";
  const databaseDesc =
    googleDict.DatabaseDesc ??
    "Modelado de datos, queries optimizadas, migrations y administración eficiente de datos.";
  const backendDesc =
    googleDict.BackendDesc ??
    "Desarrollo de servidores robustos, APIs RESTful y GraphQL con Node.js, Express y frameworks modernos. Autenticación y WebSockets.";
  const toolsDesc =
    googleDict.ToolsDesc ??
    "Control de versiones, deployment, testing, CI/CD y herramientas de desarrollo modernas.";

  const headingH1 = isMobile ? "text-5xl" : "text-8xl";
  const headingH2 = isMobile ? "text-5xl" : "text-7xl";
  const subTitle = isMobile ? "text-2xl" : "text-5xl";
  const paragraphText = isMobile ? "text-base" : "text-xl";
  const tagText = isMobile ? "text-xs" : "text-sm";
  const iconSize = isMobile ? "w-4 h-4" : "w-5 h-5";

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });

  const baseRotation = useMotionValue(0);

  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const totalRotation = useMotionValue(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;
      const rotation = (elapsed / 60) * 360;
      baseRotation.set(rotation);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [baseRotation]);

  useEffect(() => {
    const unsubBase = baseRotation.onChange((base) => {
      const scroll = scrollRotation.get();
      totalRotation.set(base + scroll);
    });

    const unsubScroll = scrollRotation.onChange((scroll) => {
      const base = baseRotation.get();
      totalRotation.set(base + scroll);
    });

    return () => {
      unsubBase();
      unsubScroll();
    };
  }, [baseRotation, scrollRotation, totalRotation]);

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Redux Toolkit",
        "Zustand",
        "UI/UX Design",
        "Design Systems",
        "Accessibility",
        "CSS/SCSS",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-cyan-500/30",
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "GraphQL",
        "REST APIs",
        "NextAuth",
        "JWT",
        "WebSockets",
        "SQL",
      ],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      category: "Database",
      items: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Prisma",
        "Migrations",
        "Schema Design",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      category: "Tools",
      items: [
        "Git",
        "Docker",
        "Vercel",
        "CI/CD",
        "GitHub Actions",
        "Playwright",
        "Cypress",
        "Jest",
        "ESLint",
        "Prettier",
        "AWS",
      ],
      color: "from-orange-500/20 to-amber-500/20",
      borderColor: "border-orange-500/30",
    },
  ];

  const defaultSkill = {
    category: "",
    items: [] as string[],
    color: "",
    borderColor: "",
  };

  const frontendSkills = skills[0] ?? defaultSkill;
  const backendSkills = skills[1] ?? defaultSkill;
  const databaseSkills = skills[2] ?? defaultSkill;
  const toolsSkills = skills[3] ?? defaultSkill;

  return (
    <div
      ref={scrollContainerRef}
      className={`w-full ${isLgAndMinimized ? "h-[60vh]" : "h-screen"} overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col`}
    >
      {/* Navigation */}
      <nav
        className={`fixed ${isMobile ? "top-20" : "top-20"} left-1/2 -translate-x-1/2 z-40 backdrop-blur-sm border border-slate-700/30 px-8 py-4 rounded-xl bg-slate-900/75 shadow-md w-[92%]`}
      >
        <div className="w-full flex items-center justify-between gap-8">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
              <span className="text-xs font-bold text-slate-900">LF</span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-base font-semibold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent tracking-tight"
            >
              Lautaro Faure
            </motion.div>
          </div>

          {/* Desktop menu - Centered */}
          {!isMobile && (
            <div className="flex items-center gap-10 flex-1 justify-center">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-base font-light text-slate-300 hover:text-cyan-300 transition-all duration-200 hover:font-normal pb-1 border-b border-b-transparent hover:border-b-cyan-300/50"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <button
              className="text-slate-300 hover:text-cyan-300 transition-colors ml-auto flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && (
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-t border-slate-700/30 px-3 py-3 flex flex-col gap-2 mt-2"
              >
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left text-xs font-light text-slate-300 hover:text-cyan-300 transition-colors py-1.5 hover:font-normal"
                  >
                    {item.label}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </nav>

      {/* Main content */}
      <div className="flex-1 relative">
        {/* Unified Background effects for all sections */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />
          <div className="absolute top-[10%] right-10 w-96 h-96 bg-cyan-500/15 blur-[130px] rounded-full" />
          <div className="absolute top-[30%] left-20 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="absolute top-[50%] right-0 w-80 h-80 bg-cyan-500/15 blur-[120px] rounded-full" />
          <div className="absolute top-[70%] left-10 w-96 h-96 bg-blue-500/15 blur-[110px] rounded-full" />
          <div className="absolute top-[85%] right-20 w-72 h-72 bg-cyan-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        {/* Hero / Inicio */}
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
        >
          {/* Circular rotating text container - Desktop only */}
          {!isMobile && (
            <motion.div
              className="w-[180vh] h-[180vh] mt-[20vh] rounded-full relative"
              style={{ rotate: totalRotation }}
            >
              <svg className="w-full h-full " viewBox="0 0 300 300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                    fill="none"
                  />
                </defs>
                <text
                  className="font-bold fill-slate-400/40 tracking-widest"
                  fontSize="45"
                  letterSpacing="8"
                >
                  <textPath
                    href="#circlePath"
                    startOffset="0%"
                    textAnchor="start"
                  >
                    •NEXT•BACKEND•FRONTEND
                  </textPath>
                </text>
              </svg>
            </motion.div>
          )}

          {/* Centro estático - fuera del contenedor que rota */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <div className="text-center max-w-3xl px-4">
              <h1
                className={`${headingH1} font-black text-white mb-4 ${isMobile ? "" : "mb-6"} leading-none`}
              >
                {heroTitle}
              </h1>
              <p
                className={`${subTitle} text-cyan-300 font-bold ${isMobile ? "mb-6" : "mb-8"}`}
              >
                {heroRole}
              </p>
              <p
                className={`${paragraphText} text-slate-300/90 ${isMobile ? "mb-6" : "mb-8"} leading-relaxed max-w-2xl mx-auto font-light`}
              >
                {heroDescription}
              </p>

              {/* Tags */}
              <div
                className={`flex flex-wrap ${isMobile ? "gap-2" : "gap-3"} justify-center ${isMobile ? "mb-4" : "mb-6"}`}
              >
                <span
                  className={`px-3 py-2 ${tagText} bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium`}
                >
                  React
                </span>
                <span
                  className={`px-3 py-2 ${tagText} bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium`}
                >
                  TypeScript
                </span>
                <span
                  className={`px-3 py-2 ${tagText} bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium`}
                >
                  Next.js
                </span>
                <span
                  className={`px-3 py-2 ${tagText} bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium`}
                >
                  Node.js
                </span>
                <span
                  className={`px-3 py-2 ${tagText} bg-slate-800/50 text-slate-300 rounded-full border border-slate-700`}
                >
                  📍 {locationLabel}
                </span>
              </div>

              {/* Iconos Sociales */}
              <div
                className={`flex items-center justify-center ${isMobile ? "gap-2 mb-6" : "gap-4 mb-12"} pointer-events-auto`}
              >
                <a
                  href="https://github.com/lautaro65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  title={portfolioDict.github ?? "GitHub"}
                >
                  <Github
                    className={`${iconSize} text-slate-300 hover:text-cyan-300`}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/lautaro-ocatavio-faure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  title={portfolioDict.linkedin ?? "LinkedIn"}
                >
                  <Linkedin
                    className={`${iconSize} text-slate-300 hover:text-cyan-300`}
                  />
                </a>
                <a
                  href="mailto:lautaroofaure@gmail.com"
                  className="p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                  title={googleDict.Email ?? "Email"}
                >
                  <Mail
                    className={`${iconSize} text-slate-300 hover:text-cyan-300`}
                  />
                </a>
              </div>
              {/* Scroll Indicator */}
              <motion.div
                className={`flex flex-col items-center ${isMobile ? "gap-1 mb-4" : "gap-2 mb-6"}`}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span
                  className={`${isMobile ? "text-[10px]" : "text-xs"} text-slate-400 uppercase tracking-widest`}
                >
                  {googleDict.Scroll ?? "Scroll"}
                </span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sobre Mí Section */}
        <section
          id="sobre-mi"
          className="min-h-screen py-20 px-4 relative flex items-center justify-center"
        >
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Título centrado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`${headingH2} font-black mb-4`}>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {aboutTitle}
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto" />
            </motion.div>

            {/* Layout tipo Bento Box / Masonry */}
            <div
              className={`grid ${isMobile ? "grid-cols-2" : "grid-cols-4"} gap-4`}
            >
              {/* Card grande de presentación (ocupa 2 columnas en desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-2" : "col-span-2 row-span-2"} rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-8 hover:border-cyan-500/50 transition-all`}
              >
                <div className="space-y-6">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    {aboutIntro}
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {aboutBody}
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {aboutOutro}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {[
                      "React",
                      "TypeScript",
                      "Next.js",
                      "Node.js",
                      "PostgreSQL",
                      "Tailwind CSS",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Foto circular flotante */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-2" : "col-span-2"} flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 p-8 hover:border-cyan-500/50 transition-all relative overflow-hidden`}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 opacity-20"
                >
                  <div className="absolute inset-8 rounded-full border-2 border-dashed border-cyan-400/30" />
                </motion.div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                  <img
                    src="/profile.webp"
                    alt="Lautaro Faure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Stat card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-4xl font-black text-cyan-400 mb-2">5+</div>
                <div className="text-sm text-slate-300">{experienceLabel}</div>
              </motion.div>

              {/* Card de aprendizaje continuo */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
                className={`${isMobile ? "" : "col-span-1"} rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-6 hover:border-cyan-500/50 transition-all`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="mb-4 text-3xl"
                >
                  📚
                </motion.div>
                <div className="text-lg font-bold text-white mb-2">
                  {continuousLearningTitle}
                </div>
                <div className="text-sm text-slate-400">
                  {continuousLearningDesc}
                </div>
              </motion.div>

              {/* Feature card con icono */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className={`${isMobile ? "" : "col-span-1"} rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-6 hover:border-cyan-500/50 transition-all flex flex-col items-center justify-center text-center`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  className="mb-4"
                >
                  <Code2 size={48} className="text-cyan-400" />
                </motion.div>
                <div className="text-lg font-bold text-white mb-2">
                  {cleanCodeTitle}
                </div>
                <div className="text-sm text-slate-400">{cleanCodeDesc}</div>
              </motion.div>

              {/* Feature card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className={`${isMobile ? "" : "col-span-1"} rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-6 hover:border-cyan-500/50 transition-all flex flex-col items-center justify-center text-center`}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4 text-4xl"
                >
                  ⚡
                </motion.div>
                <div className="text-lg font-bold text-white mb-2">
                  {performanceTitle}
                </div>
                <div className="text-sm text-slate-400">{performanceDesc}</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="habilidades"
          className="min-h-screen py-20 px-4 relative flex items-center justify-center overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/15 blur-[140px] rounded-full"
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/15 blur-[140px] rounded-full"
              animate={{ y: [0, -50, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10 w-full">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className={`${headingH2} font-black mb-6`}>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {skillsTitle}
                </span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8" />
              <p
                className={`${paragraphText} text-slate-400 max-w-3xl mx-auto leading-relaxed`}
              >
                {portfolioDict.skillsDescription ??
                  "Stack completo en tecnologías modernas. Especializado en crear soluciones escalables, performantes y centradas en la experiencia del usuario."}
              </p>
            </motion.div>

            {/* Advanced Grid Layout */}
            <div
              className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-12"} gap-6`}
            >
              {/* Frontend - Premium Large Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-1" : "col-span-7"} rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 hover:border-cyan-500/50 transition-all overflow-hidden group`}
              >
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 blur-[100px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border border-cyan-500/50 flex items-center justify-center">
                      <span className="text-xl">⚛️</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {frontendSkills.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        UI Moderno & Interactivo
                      </p>
                    </div>
                  </motion.div>

                  <p className="text-slate-300/80 text-sm mb-6 leading-relaxed">
                    {frontendDesc}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {frontendSkills.items.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.06 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                        className="group/skill"
                      >
                        <span
                          className={`inline-block px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r ${frontendSkills.color} backdrop-blur-sm border ${frontendSkills.borderColor} text-slate-100 hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-default`}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Database Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-1" : "col-span-5 "} rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 hover:border-purple-500/50 transition-all overflow-hidden group`}
              >
                <div className="absolute -top-40 -right-40 w-72 h-72 bg-purple-500/20 blur-[100px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/50 flex items-center justify-center">
                      <span className="text-xl">💾</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {databaseSkills.category}
                    </h3>
                  </motion.div>

                  <p className="text-slate-300/80 text-sm mb-4 leading-relaxed">
                    {databaseDesc}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {databaseSkills.items.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <span
                          className={`inline-block px-3.5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r ${databaseSkills.color} backdrop-blur-sm border ${databaseSkills.borderColor} text-slate-100 hover:shadow-lg hover:shadow-purple-500/20 transition-all`}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Backend - Premium Large Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-1" : "col-span-6"} rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 hover:border-green-500/50 transition-all overflow-hidden group`}
              >
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 blur-[100px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/30 border border-green-500/50 flex items-center justify-center">
                      <span className="text-xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {backendSkills.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        APIs Robustas & Escalables
                      </p>
                    </div>
                  </motion.div>

                  <p className="text-slate-300/80 text-sm mb-6 leading-relaxed">
                    {backendDesc}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {backendSkills.items.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.06 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                        className="group/skill"
                      >
                        <span
                          className={`inline-block px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r ${backendSkills.color} backdrop-blur-sm border ${backendSkills.borderColor} text-slate-100 hover:shadow-lg hover:shadow-green-500/20 transition-all cursor-default`}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tools & DevOps Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-1" : "col-span-6"} rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-8 hover:border-amber-500/50 transition-all overflow-hidden group`}
              >
                <div className="absolute -top-40 -right-40 w-72 h-72 bg-amber-500/20 blur-[100px] rounded-full group-hover:opacity-100 opacity-50 transition-opacity duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="mb-4 flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-amber-500/30 border border-orange-500/50 flex items-center justify-center">
                      <span className="text-xl">⚙️</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                      {toolsSkills.category}
                    </h3>
                  </motion.div>

                  <p className="text-slate-300/80 text-sm mb-4 leading-relaxed">
                    {toolsDesc}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {toolsSkills.items.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.08 }}
                      >
                        <span
                          className={`inline-block px-3.5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r ${toolsSkills.color} backdrop-blur-sm border ${toolsSkills.borderColor} text-slate-100 hover:shadow-lg hover:shadow-orange-500/20 transition-all`}
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Proficiency Summary */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className={`${isMobile ? "col-span-1" : "col-span-12"} rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-slate-700/30 p-8`}
              >
                <div
                  className={`grid ${isMobile ? "grid-cols-2 " : "grid-cols-3"} gap-6`}
                >
                  <div className="text-center mx-auto">
                    <motion.div
                      className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      30+
                    </motion.div>
                    <p className="text-slate-400 font-semibold">
                      Tecnologías Dominadas
                    </p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    >
                      100%
                    </motion.div>
                    <p className="text-slate-400 font-semibold">
                      Full Stack Developer
                    </p>
                  </div>
                  <div
                    className={`w-full text-center mx-auto ${isMobile ? "col-span-2" : ""}`}
                  >
                    <motion.div
                      className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    >
                      100%
                    </motion.div>
                    <p className="text-slate-400 font-semibold">
                      Disponible para trabajar
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section
          id="contacto"
          className=" mb-20 px-4 flex items-center justify-center relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full"
              animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="max-w-4xl mx-auto w-full relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className={`${headingH2} font-black mb-4`}>{contactTitle}</h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto mb-8" />
              <p
                className={`${paragraphText} text-slate-400 max-w-2xl mx-auto leading-relaxed`}
              >
                {contactDescription}
              </p>
            </motion.div>

            {/* Contact Cards Grid */}
            <div
              className={`grid ${isLgAndMinimized ? "grid-cols-2" : isMobile ? "grid-cols-1" : "grid-cols-3"} gap-6 mb-12`}
            >
              {/* Email Card */}
              <motion.a
                href="mailto:lautaroofaure@gmail.com"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-8 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all" />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                  >
                    <Mail className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {googleDict.Email ?? "Email"}
                  </h3>
                  <p className="text-slate-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    lautaroofaure@gmail.com
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    {googleDict.SendDirectMessage ?? "Envíame un mensaje"}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>

              {/* LinkedIn Card */}
              <motion.a
                href="https://www.linkedin.com/in/lautaro-ocatavio-faure"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-8 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all" />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6 border border-blue-500/30 group-hover:border-blue-500/50 transition-all"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                  >
                    <Linkedin className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {portfolioDict.linkedin ??
                      googleDict.LinkedIn ??
                      "LinkedIn"}
                  </h3>
                  <p className="text-slate-400 mb-4 group-hover:text-blue-300 transition-colors">
                    Lautaro Ocatavio Faure
                  </p>
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
                    {googleDict.ContactNow ?? "Conectemos"}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>

              {/* GitHub Card */}
              <motion.a
                href="https://github.com/lautaro65"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`${isLgAndMinimized ? "col-span-2" : ""} group relative rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700 p-8 hover:border-slate-500/50 transition-all cursor-pointer`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-500/0 to-slate-400/0 group-hover:from-slate-500/10 group-hover:to-slate-400/10 transition-all" />
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600/20 to-slate-500/20 flex items-center justify-center mb-6 border border-slate-500/30 group-hover:border-slate-400/50 transition-all"
                    whileHover={{ rotate: 10, scale: 1.05 }}
                  >
                    <Github className="w-8 h-8 text-slate-300" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {portfolioDict.github ?? "GitHub"}
                  </h3>
                  <p className="text-slate-400 mb-4 group-hover:text-slate-200 transition-colors">
                    @lautaro65
                  </p>
                  <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                    {googleDict.ExploreProjects ?? "Ver mis proyectos"}
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioLautaro;
