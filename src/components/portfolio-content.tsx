"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, Mail, MapPin, Phone, User } from "lucide-react";
import { motion } from "framer-motion";

interface PortfolioContentProps {
  activeFile: string;
  theme?: {
    bg: string;
    titleBar: string;
    activityBar: string;
    sidebar: string;
    editor: string;
    border: string;
    text: string;
    accent: string;
  };
}

export default function PortfolioContent({
  activeFile,
  theme,
}: PortfolioContentProps) {
  if (activeFile === "proyectos.js") return <ProjectsPage theme={theme} />;
  if (activeFile === "contacto.md") return <ContactPage theme={theme} />;
  if (activeFile === "habilidades.md") return <SkillsPage theme={theme} />;
  if (activeFile === "proceso.md") return <ProcessPage theme={theme} />;
  return <AboutPage theme={theme} />;
}

function AboutPage({ theme }: { theme?: any }) {
  return (
    <div
      className="p-2 md:p-8 min-h-full w-full overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#232323] [&::-webkit-scrollbar-thumb]:bg-[#444] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#555]"
      style={{
        background: theme?.bg,
        color: theme?.text,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-12 py-4 md:py-8">
        <div className="flex-1 flex flex-col items-start">
          <span
            className="uppercase text-xs tracking-widest mb-2"
            style={{ color: theme?.accent }}
          >
            PORTAFOLIO / 2025
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
            style={{ color: theme?.text }}
          >
            Lautaro
          </h1>
          <h2
            className="text-4xl md:text-5xl font-light mb-6 leading-tight"
            style={{ color: theme?.text, opacity: 0.8 }}
          >
            Dev
          </h2>
          <p
            className="text-lg mb-6 max-w-md"
            style={{ color: theme?.text, opacity: 0.85 }}
          >
            Full Stack Developer creando experiencias digitales en la
            intersección de{" "}
            <span style={{ fontWeight: 600, color: theme?.text }}>
              tecnología
            </span>
            ,{" "}
            <span style={{ fontWeight: 600, color: theme?.text }}>diseño</span>{" "}
            y{" "}
            <span style={{ fontWeight: 600, color: theme?.text }}>
              usabilidad
            </span>
            .
          </p>
          <div className="flex items-center gap-3 mb-8">
            <span
              className="flex items-center gap-2 text-green-400 text-sm"
              style={{ color: "#22c55e" }}
            >
              <span className="inline-block w-2 h-2 rounded-full bg-green-400" />{" "}
              Disponible para trabajar
            </span>
            <span
              className="text-sm"
              style={{ color: theme?.text, opacity: 0.7 }}
            >
              Argentina
            </span>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="https://github.com/lautaro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded transition flex items-center gap-2 text-sm font-medium"
              style={{
                background: theme?.sidebar,
                border: `1px solid ${theme?.border}`,
                color: theme?.text,
              }}
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/lautaro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded transition flex items-center gap-2 text-sm font-medium"
              style={{
                background: theme?.sidebar,
                border: `1px solid ${theme?.border}`,
                color: theme?.text,
              }}
            >
              <ExternalLink className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="mailto:lautaro@gmail.com"
              className="px-4 py-2 rounded transition flex items-center gap-2 text-sm font-medium"
              style={{
                background: theme?.sidebar,
                border: `1px solid ${theme?.border}`,
                color: theme?.text,
              }}
            >
              <Mail className="h-4 w-4" /> Gmail
            </a>
            <a
              href="/cv-lautaro.pdf"
              download
              className="px-4 py-2 rounded transition flex items-center gap-2 text-sm font-medium"
              style={{
                background: theme?.accent,
                border: `1px solid ${theme?.accent}`,
                color: "#fff",
              }}
            >
              <User className="h-4 w-4" /> Descargar CV
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end">
          <Image
            src="/profile.webp"
            alt="Lautaro Dev"
            title="Lautaro Dev"
            width={160}
            height={160}
            className="w-40 h-40 rounded-full object-cover mb-6 shadow-lg"
            style={{
              border: `4px solid ${theme?.accent}`,
            }}
            priority
          />
          <div className="w-full max-w-xs">
            <div className="mb-6">
              <span
                className="uppercase text-xs tracking-widest"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Actualmente
              </span>
              <div className="mt-2">
                <span
                  className="font-semibold text-base"
                  style={{ color: theme?.text }}
                >
                  Full Stack Developer
                </span>
                <span
                  className="block text-sm"
                  style={{ color: theme?.accent }}
                >
                  @ Mi Empresa
                </span>
                <span
                  className="block text-xs"
                  style={{ color: theme?.text, opacity: 0.7 }}
                >
                  2023 — Presente
                </span>
              </div>
            </div>
            <div>
              <span
                className="uppercase text-xs tracking-widest"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Focus
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React", "TypeScript", "Node.js", "UI/UX", "MongoDB"].map(
                  (focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: theme?.sidebar,
                        color: theme?.text,
                      }}
                    >
                      {focus}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage({ theme }: { theme?: any }) {
  const projects = [
    {
      title: "Apple Landing Page Demo",
      description:
        "Clon interactivo de la landing page de Apple, replicando animaciones, diseño responsivo y experiencia visual premium.",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/lautaro65/Clone-Apple",
      demo: "https://clone-apple-zeta.vercel.app",
      status: "Completado",
    },
    {
      title: "Controllity Demo",
      description:
        "Demo de la plataforma Controllity: gestión de tareas, tableros Kanban y colaboración en tiempo real.\n\n⚠️ Esta es una demo de prueba, por eso no está optimizada ni tiene un estilo estandarizado. En una misma página pueden verse componentes similares con diseños distintos, ya que el foco fue mostrar funcionalidades y no la UI final.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: null,
      demo: "https://controllity.vercel.app",
      status: "En desarrollo",
    },
  ];

  function formatProject(project: (typeof projects)[0]) {
    return `{
  title: "${project.title}",
  description: \`${project.description}\`,
  technologies: [${project.technologies.map((t) => `"${t}"`).join(", ")}],
  github: ${project.github ? `"${project.github}"` : "null"},
  demo: ${project.demo ? `"${project.demo}"` : "null"},
  status: "${project.status}"
}`;
  }

  return (
    <div className="p-2 md:p-4 min-h-full w-full overflow-x-hidden overflow-y-auto">
      <div className="w-full max-w-5xl mx-auto py-4 md:py-8">
        <span
          className="uppercase text-xs tracking-widest"
          style={{ color: theme?.accent || "#9cdcfe" }}
        >
          PROYECTOS / 2025
        </span>
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 leading-tight"
          style={{ color: theme?.text || "#fff" }}
        >
          Proyectos Destacados
        </h1>
        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-lg overflow-hidden transition-colors"
              style={{
                background: theme?.bg || "#181a20",
                border: `1px solid ${theme?.border || "#444"}`,
                color: theme?.text || "#a6e22e",
              }}
            >
              <div
                className="px-3 sm:px-4 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                style={{
                  background: theme?.sidebar || "#232323",
                  borderBottom: `1px solid ${theme?.border || "#444"}`,
                }}
              >
                <span
                  className="font-mono text-base break-all"
                  style={{ color: theme?.accent || "#4fc1ff" }}
                >
                  {project.title.replace(/\s/g, "_").toLowerCase()}.config.js
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold mt-2 sm:mt-0"
                  style={{
                    background:
                      project.status === "Completado"
                        ? theme?.accent || "#007acc"
                        : theme?.activityBar || "#3c3c3c",
                    color:
                      project.status === "Completado"
                        ? "#fff"
                        : theme?.text || "#cccccc",
                  }}
                >
                  {project.status}
                </span>
              </div>
              <pre
                className="text-sm md:text-base font-mono bg-transparent px-3 sm:px-4 py-4 whitespace-pre-wrap break-words"
                style={{ color: theme?.text || "#a6e22e" }}
              >
                {formatProject(project)}
              </pre>
              {project.title === "Controllity Demo" && (
                <div className="px-3 sm:px-4 pb-2 flex flex-col gap-2">
                  <div
                    className="text-sm rounded"
                    style={{
                      color: theme?.accent,
                      background: theme?.sidebar,
                    }}
                  >
                    <strong>Nota:</strong> El repositorio es privado y la demo
                    no está optimizada ni estandarizada visualmente, ya que es
                    una prueba funcional. En una misma página pueden verse
                    componentes similares con diseños distintos, porque el foco
                    fue mostrar funcionalidades y no la UI final.
                  </div>
                  <div
                    className="text-sm rounded px-3 py-2 mt-1"
                    style={{
                      background: theme?.activityBar,
                      color: theme?.text,
                      border: `1px solid ${theme?.border}`,
                    }}
                  >
                    <strong>⚠️ Recomendación:</strong> Para probar la demo,
                    puedes usar la siguiente cuenta de prueba:
                    <br />
                    <span style={{ color: theme?.accent }}>
                      <b>Mail:</b> DEMO@gmail.com
                      <br />
                      <b>Contraseña:</b> DEMO123
                    </span>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-2 px-3 sm:px-4 pb-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded transition flex items-center gap-2 text-sm font-medium justify-center"
                    style={{
                      background: theme?.accent || "#007acc",
                      color: "#fff",
                    }}
                  >
                    <Github className="h-4 w-4" /> Código
                  </a>
                ) : (
                  <button
                    disabled
                    className="px-3 py-1.5 rounded flex items-center gap-2 text-sm font-medium justify-center opacity-60 cursor-not-allowed border"
                    style={{
                      background: theme?.sidebar || "#232323",
                      color: theme?.text || "#cccccc",
                      border: `1px solid ${theme?.border || "#444"}`,
                    }}
                  >
                    <Github className="h-4 w-4" /> Código privado
                  </button>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border hover:opacity-80 px-3 py-1.5 rounded transition flex items-center gap-2 text-sm font-medium justify-center"
                    style={{
                      background: theme?.sidebar || "#232323",
                      border: `1px solid ${theme?.border || "#444"}`,
                      color: theme?.text || "#cccccc",
                    }}
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactPage({ theme }: { theme?: any }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="p-2 md:p-8 min-h-full w-full overflow-x-hidden overflow-y-auto flex items-center justify-center"
      style={{
        background: theme?.bg || "#181a20",
        color: theme?.text || "#fff",
      }}
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        <span
          className="uppercase text-xs tracking-widest mb-1"
          style={{ color: theme?.accent || "#9cdcfe" }}
        >
          CONTACTO / 2025
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold w-full mb-2 leading-tight"
          style={{
            color: theme?.text || "#fff",
          }}
        >
          Contacto
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-4 px-0 md:px-2 py-0">
            <p
              className="text-lg mb-2"
              style={{ color: theme?.text || "#cccccc" }}
            >
              ¿Te gustaría trabajar conmigo o tienes alguna consulta?
              <br />
              Puedes contactarme directamente por email o a través de mis redes.
            </p>
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <a
                href="mailto:lautaro@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition border"
                style={{
                  background: theme?.sidebar || "#232323",
                  borderColor: theme?.border || "#444",
                  color: theme?.accent || "#9cdcfe",
                }}
              >
                <Mail className="h-5 w-5" /> lautaro@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/lautaro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition border"
                style={{
                  background: theme?.sidebar || "#232323",
                  borderColor: theme?.border || "#444",
                  color: theme?.accent || "#9cdcfe",
                }}
              >
                <ExternalLink className="h-5 w-5" /> LinkedIn
              </a>
              <a
                href="https://github.com/lautaro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition border"
                style={{
                  background: theme?.sidebar || "#232323",
                  borderColor: theme?.border || "#444",
                  color: theme?.accent || "#9cdcfe",
                }}
              >
                <Github className="h-5 w-5" /> GitHub
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <MapPin
                className="h-5 w-5"
                style={{ color: theme?.accent || "#007acc" }}
              />
              <span style={{ color: theme?.text || "#cccccc" }}>Argentina</span>
            </div>
          </div>
          <div
            className="flex-1 flex flex-col items-center justify-center rounded-2xl border shadow-lg px-4 md:px-6 py-6"
            style={{
              background: theme?.bg || "#181a20",
              borderColor: theme?.border || "#444",
            }}
          >
            <h2
              className="text-xl font-semibold mb-4 w-full text-center"
              style={{ color: theme?.accent || "#4fc1ff" }}
            >
              Envíame un mensaje
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Tu nombre"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-sm md:text-base transition"
                style={{
                  background: theme?.editor || "#232323",
                  border: `1px solid ${theme?.border || "#444"}`,
                  color: theme?.text || "#cccccc",
                }}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-sm md:text-base transition"
                style={{
                  background: theme?.editor || "#232323",
                  border: `1px solid ${theme?.border || "#444"}`,
                  color: theme?.text || "#cccccc",
                }}
              />
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tu mensaje..."
                value={form.message}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 resize-none text-sm md:text-base transition"
                style={{
                  background: theme?.editor || "#232323",
                  border: `1px solid ${theme?.border || "#444"}`,
                  color: theme?.text || "#cccccc",
                }}
              />
              <Button
                type="submit"
                className="w-full text-sm md:text-base py-2 font-semibold"
                style={{
                  background: theme?.accent || "#007acc",
                  color: "#fff",
                  borderRadius: "0.75rem",
                }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando..." : "Enviar"}
              </Button>
              {status === "sent" && (
                <div className="text-green-500 text-center mt-2">
                  ¡Mensaje enviado correctamente!
                </div>
              )}
              {status === "error" && (
                <div className="text-red-500 text-center mt-2">
                  Ocurrió un error. Intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillsPage({ theme }: { theme?: any }) {
  const skills = [
    { name: "React", type: "Frontend" },
    { name: "TypeScript", type: "Frontend" },
    { name: "Next.js", type: "Frontend" },
    { name: "CSS/SCSS", type: "Frontend" },
    { name: "Tailwind CSS", type: "Frontend" },
    { name: "Node.js", type: "Backend" },
    { name: "Express.js", type: "Backend" },
    { name: "Python", type: "Backend" },
    { name: "FastAPI", type: "Backend" },
    { name: "GraphQL", type: "Backend" },
    { name: "REST APIs", type: "Backend" },
    { name: "PostgreSQL", type: "Database" },
    { name: "MongoDB", type: "Database" },
    { name: "Redis", type: "Database" },
    { name: "Prisma", type: "Database" },
    { name: "Git", type: "Tools" },
    { name: "Docker", type: "Tools" },
    { name: "AWS", type: "Tools" },
    { name: "Jest", type: "Tools" },
  ];

  const categories = [
    { label: "Frontend", color: "#4fc1ff" },
    { label: "Backend", color: "#ffcc66" },
    { label: "Database", color: "#a6e22e" },
    { label: "Tools", color: "#bd93f9" },
  ];

  return (
    <div
      className="p-4 md:p-8 min-h-full w-full overflow-y-auto"
      style={{
        background: theme?.bg,
        color: theme?.text,
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 py-8">
        <div className="flex-shrink-0 w-full md:w-[45%] flex flex-col items-start">
          <span
            className="uppercase text-xs tracking-widest mb-2"
            style={{ color: theme?.accent }}
          >
            HABILIDADES / 2025
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
            style={{ color: theme?.text }}
          >
            Stack & Skills
          </h1>
          <h2
            className="text-2xl md:text-3xl font-light mb-6 leading-tight"
            style={{ color: theme?.text, opacity: 0.8 }}
          >
            Tecnologías y herramientas que domino
          </h2>
          <p
            className="text-lg mb-6 max-w-md"
            style={{ color: theme?.text, opacity: 0.85 }}
          >
            Experiencia sólida en desarrollo web moderno, backend escalable y
            bases de datos.
            <br />
            Siempre aprendiendo y mejorando mis habilidades técnicas y de
            colaboración.
          </p>
          <div className="flex flex-wrap gap-3 mt-2">
            {categories.map((cat) => (
              <span
                key={cat.label}
                className="px-4 py-2 rounded-full text-xs font-semibold"
                style={{
                  background: theme?.sidebar,
                  color: cat.color,
                  border: `1px solid ${cat.color}`,
                }}
              >
                {cat.label}
              </span>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[55%] flex flex-col">
          <div className="w-full">
            <div className="mb-12">
              <span
                className="uppercase text-xs tracking-widest block mb-6"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Tecnologías principales
              </span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-4 py-2 rounded-full text-sm border"
                    style={{
                      background: theme?.sidebar,
                      color: theme?.text,
                      borderColor:
                        categories.find((c) => c.label === skill.type)?.color ||
                        theme?.border,
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span
                className="uppercase text-xs tracking-widest block mb-6"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Herramientas y extras
              </span>
              <div className="flex flex-wrap gap-3">
                {["Git", "Docker", "AWS", "Jest"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs border"
                    style={{
                      background: theme?.sidebar,
                      color: theme?.text,
                      borderColor: "#bd93f9",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessPage({ theme }: { theme?: any }) {
  return (
    <div
      className="p-2 md:p-8 min-h-full w-full overflow-x-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#232323] [&::-webkit-scrollbar-thumb]:bg-[#444] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#555]"
      style={{
        background: theme?.bg,
        color: theme?.text,
      }}
    >
      <div className="w-full max-w-3xl mx-auto py-4 md:py-10 flex flex-col gap-6">
        <span
          className="uppercase text-xs tracking-widest mb-2 block"
          style={{ color: theme?.accent || "#9cdcfe" }}
        >
          PROCESO / 2025
        </span>
        <h1
          className="text-4xl md:text-5xl font-bold mb-2 leading-tight flex items-center gap-2"
          style={{ color: theme?.text }}
        >
          🚀 Por Qué Invertir en Mi Contratación
        </h1>
        <h2
          className="text-2xl font-light mb-4 leading-tight"
          style={{ color: theme?.text, opacity: 0.8 }}
        >
          Full Stack Developer | Valor Comprobado en Equipos de Alto Rendimiento
        </h2>
        <p
          className="text-lg mb-4 max-w-2xl"
          style={{ color: theme?.text, opacity: 0.85 }}
        >
          Mi foco va más allá del código: me integro rápidamente, aporto
          soluciones end-to-end y garantizo la calidad, escalabilidad y
          mantenibilidad de los productos que construimos.
        </p>
        <div
          className="rounded-xl shadow-lg p-4 md:p-8 flex flex-col gap-4 transition-colors"
          style={
            theme
              ? {
                  background: theme.bg,
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                }
              : {}
          }
        >
          <h3
            className="text-lg md:text-2xl font-bold mb-2 flex items-center gap-2"
            style={{ color: theme?.accent || "#4fc1ff" }}
          >
            I. 🎯 Mis Ejes de Contribución Clave
          </h3>
          <p
            className="text-base mb-2"
            style={{ color: theme?.text, opacity: 0.85 }}
          >
            Esta sección debe destacar tu impacto directo en el negocio y el
            equipo:
          </p>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <span className="font-semibold" style={{ color: theme?.text }}>
                🌉 Dominio End-to-End (Full Stack):
              </span>
              <br />
              <span
                className="text-sm"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Valor: Reduzco la fricción y los handoffs entre equipos. Mi
                dominio desde la DB (PostgreSQL/MongoDB) hasta el Pixel
                (React/Next.js) garantiza que la solución sea coherente, rápida
                y eficiente en ambas capas.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: theme?.text }}>
                📈 Mentalidad de Escalabilidad:
              </span>
              <br />
              <span
                className="text-sm"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Valor: No solo escribo código que funciona, sino código que
                escala. Implemento arquitecturas robustas (Node.js,
                Microservicios, Docker) que soportan el crecimiento del negocio
                y reducen la deuda técnica a largo plazo.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: theme?.text }}>
                🤝 Integración y Colaboración Ágil:
              </span>
              <br />
              <span
                className="text-sm"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Valor: Soy proactivo en ceremonias ágiles (sprints, reviews,
                retros). Uso Git y CI/CD como herramientas de colaboración
                esenciales, asegurando que mis contribuciones se integren de
                forma segura y fluida con el trabajo del equipo.
              </span>
            </li>
            <li>
              <span className="font-semibold" style={{ color: theme?.text }}>
                🧪 Compromiso con la Calidad (QA/Testing):
              </span>
              <br />
              <span
                className="text-sm"
                style={{ color: theme?.text, opacity: 0.7 }}
              >
                Valor: La calidad es una responsabilidad, no un paso opcional.
                Implemento rigurosamente pruebas unitarias (Jest) y me adhiero a
                estándares de TypeScript y clean code para minimizar bugs en
                producción.
              </span>
            </li>
          </ol>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
          <div className="flex-1">
            <h3
              className="text-lg font-bold mb-2"
              style={{ color: theme?.accent || "#4fc1ff" }}
            >
              III. ✉️ Siguiente Paso
            </h3>
            <p
              className="text-base mb-2"
              style={{ color: theme?.text, opacity: 0.85 }}
            >
              Estoy listo para aportar valor desde el Día 1.
            </p>
          </div>
          <div>
            <a
              href="mailto:lautaroofaure@gmail.com"
              className="mb-2 px-6 py-2 rounded text-base font-semibold shadow-md transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: theme?.accent || "#22c55e",
                color: "#fff",
              }}
            >
              Contactar Mail
            </a>
            <a
              href="https://linkedin.com/in/lautaro"
              className="mt-2 px-6 py-2 rounded text-base font-semibold shadow-md transition flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: theme?.activityBar || "#007acc",
                color: "#fff",
              }}
            >
              Contactar LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
