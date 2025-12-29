import React from "react";

// --- Ejemplo de estructura extendida para los tabs restantes ---
const categorias = [
  {
    nombre: "Next.js",
    cursos: [
      {
        nombre: "Next.js Learn: Fundamentos y Arquitectura (Vercel – Oficial)",
        categoria: "Next.js",
        tecnologias: [
          "Next.js (App Router)",
          "React (Hooks, JSX)",
          "React Server Components (RSC)",
          "Client Components",
          "File-System Routing",
          "JavaScript (ES6+)",
        ],
        certificado:
          "./Certificaciones/Certificación-NextJs-Learn-React-Foundations.pdf",
        github: "",
        info: {
          Descripción:
            "Estudio práctico y conceptual que comienza con los fundamentos esenciales de React (Componentes, Props, State/Hooks) para luego abordar la arquitectura moderna de Next.js (App Router). El curso se enfoca en la instalación, el enrutamiento basado en archivos y la distinción crítica entre Componentes de Servidor (RSC) y Componentes de Cliente para construir UI optimizadas y con interactividad.",
          "Conceptos clave": [
            {
              titulo: "C1: Next.js (Framework) vs. React (Librería)",
              descripcion:
                "Comprensión de los roles de React (Librería de UI) y Next.js (Framework full-stack). Estudio de los bloques esenciales (Routing, Data Fetching, Rendering, etc.) que Next.js resuelve para la creación de aplicaciones modernas.",
              importancia: [
                "Diferencia Fundamental: Next.js provee el tooling y la estructura (framework), mientras que React es la capa base para la interfaz (librería), permitiendo un desarrollo full-stack más rápido y con menos configuración.",
                "Bloques de Construcción: Identificación de los nueve aspectos cruciales (UI, Routing, Data Fetching, Integrations, etc.) que componen una aplicación web escalable, y cómo Next.js los aborda de forma pre-optimizada.",
              ],
              tips: [
                "Adopción de Convenciones: Utilizar las convenciones y APIs de Next.js (ej. sistema de archivos para Routing) para evitar la reconfiguración y el desarrollo de soluciones propias para requisitos comunes.",
                "Enfoque 'Full-Stack': Aprovechar que Next.js permite desarrollar la lógica del cliente y del servidor dentro del mismo proyecto, mejorando la coherencia y la experiencia del desarrollador.",
              ],
            },
            {
              titulo: "C2: Arquitectura del Navegador: El DOM y la UI",
              descripcion:
                "Análisis de cómo el navegador interpreta el código, desde la recepción del HTML hasta la construcción del Document Object Model (DOM). Entendimiento del DOM como el puente que permite la manipulación de la interfaz por JavaScript.",
              importancia: [
                "Proceso de Renderizado: El navegador lee el archivo HTML y construye el DOM, una representación de objetos en forma de árbol que refleja los elementos de la UI.",
                "Rol del DOM: El DOM es la interfaz esencial entre el código JavaScript y los elementos visuales de la página, lo que permite escuchar eventos y manipular (añadir, actualizar, eliminar) la interfaz.",
              ],
              tips: [
                "La Necesidad de Abstracción: Reconocer que la manipulación directa del DOM es costosa y compleja en aplicaciones grandes, justificando el uso de librerías como React que gestionan el DOM de forma optimizada y declarativa.",
                "Enfoque Declarativo: En un entorno React/Next.js, el foco debe estar en declarar el estado deseado de la UI, dejando que React se encargue de la manipulación del DOM de manera eficiente a través de su abstracción.",
              ],
            },
            {
              titulo:
                "C3: Programación Imperativa vs. Declarativa (La Razón de React)",
              descripcion:
                "Análisis de la manipulación directa del DOM usando métodos de JavaScript ('Imperativa'), destacando su naturaleza verbosa e ineficiente para aplicaciones grandes. Introducción al enfoque 'Declarativo' de React como solución para la actualización eficiente de la UI.",
              importancia: [
                "Naturaleza Imperativa del DOM: Entender que la actualización manual del DOM requiere múltiples pasos y métodos (`getElementById`, `createElement`, `appendChild`) para un simple cambio, lo que es propenso a errores y consume mucho tiempo.",
                "DOM vs. Código Fuente: Distinguir que el HTML representa el contenido inicial de la página, mientras que el DOM representa el contenido actualizado después de la manipulación por JavaScript.",
                "Adopción del Enfoque Declarativo: Reconocer que React permite a los desarrolladores declarar QUÉ quieren mostrar (el estado final), dejando que React decida CÓMO y CUÁNDO actualizar el DOM de la manera más eficiente.",
              ],
              tips: [
                "Escalabilidad y Mantenimiento: Evitar la manipulación directa del DOM en proyectos grandes (imperativo), ya que se vuelve insostenible a medida que crecen los equipos y la complejidad de la aplicación.",
                "Reducción de Código: Utilizar el modelo de componentes de React para reducir la cantidad de código necesaria para gestionar la UI, mejorando la velocidad de desarrollo y la legibilidad.",
              ],
            },
            {
              titulo: "C4: El Fundamento de React: ReactDOM y JSX",
              descripcion:
                "Estudio de la configuración mínima necesaria para iniciar React, incluyendo la API de ReactDOM para enlazar la aplicación al DOM (Root) y la sintaxis JSX, vital para describir la UI de forma declarativa y similar a HTML.",
              importancia: [
                "Creación del Root: Comprender el uso de `ReactDOM.createRoot()` para seleccionar el elemento DOM raíz (`#app`) y establecer el punto de montaje donde se renderizarán los componentes React.",
                "JSX (Sintaxis Declarativa): Reconocer JSX como la extensión de sintaxis que permite escribir código HTML-like dentro de JavaScript, facilitando la descripción visual de la UI de forma concisa.",
                "Compilación (Babel): Entender que JSX no es JavaScript válido para el navegador y requiere un compilador (como Babel) para transformarlo en llamadas a funciones de React que el navegador pueda ejecutar.",
              ],
              tips: [
                "Configuración Oculta: En Next.js, esta configuración inicial (React Scripts, Babel) está totalmente automatizada y oculta, lo que permite al desarrollador enfocarse solo en la lógica de los componentes (el gran valor de usar un framework).",
                "Reducción de Repetición: Valorar cómo JSX elimina la necesidad de escribir las largas instrucciones imperativas de JavaScript, permitiendo al desarrollador centrarse en la composición de componentes.",
                "Dominio de JavaScript: Reconocer la lista de temas esenciales de JavaScript (Funciones, Objetos, Array Methods, Destructuring) que son la base para escribir código React efectivo y moderno.",
              ],
            },
            {
              titulo: "C5: Componentes (El Bloque de Construcción de la UI)",
              descripcion:
                "Estudio del concepto de Componentes como unidades modulares y reutilizables. Comprensión de que los Componentes en React son simplemente funciones de JavaScript que devuelven elementos de UI (JSX) y cómo su composición forma el árbol de la aplicación.",
              importancia: [
                "Unidades Reutilizables: Los componentes permiten dividir la interfaz en bloques pequeños y autocontenidos (como 'LEGO bricks'), lo que hace que el código sea más modular, escalable y mantenible a largo plazo.",
                "Componentes como Funciones: Reconocer que un componente es una función que retorna JSX. La convención clave es capitalizar el nombre de la función (`Header`) para distinguirla de las etiquetas HTML/JavaScript.",
                "Composición de Componentes: Entender cómo se anidan los componentes unos dentro de otros para formar una estructura de árbol de la UI, siendo este el patrón fundamental para construir aplicaciones complejas.",
              ],
              tips: [
                "Renderizado Correcto: Al renderizar un componente raíz, usar la sintaxis de etiqueta HTML (`<HomePage />`) dentro de `root.render()` en lugar de solo pasar la función (`HomePage`) para que React lo trate como un componente.",
                "Modularidad para el Mantenimiento: Siempre que sea posible, encapsular secciones de la UI en nuevos componentes para que cualquier adición o actualización de la UI afecte únicamente a ese bloque modular.",
                "Conceptos Centrales: Recordar que los Componentes, las Props y el State son los tres pilares de React. El conocimiento de los dos últimos será esencial para añadir dinamismo a estos bloques modulares.",
              ],
            },
            {
              titulo: "C6: Props (Propiedades) y Flujo de Datos Unidireccional",
              descripcion:
                "Dominio de las Propiedades (Props) como el mecanismo fundamental para hacer que los componentes sean reutilizables y dinámicos. Comprensión del flujo de datos unidireccional de React (de padres a hijos) y el uso de JSX para integrar lógica de JavaScript.",
              importancia: [
                "Datos Dinámicos: Las `props` permiten pasar datos, funciones u otros componentes desde un componente padre a uno hijo, permitiendo reutilizar la misma estructura con información variable (similar a los atributos HTML).",
                "One-Way Data Flow: Entender que los datos fluyen exclusivamente de arriba hacia abajo en el árbol de componentes, lo que simplifica el seguimiento de la información y la lógica de la aplicación, mejorando la predictibilidad.",
                "Generación de Listas (`array.map()`): Uso del método `map()` de JavaScript dentro de JSX para iterar colecciones de datos (arrays) y generar dinámicamente elementos de UI para cada ítem.",
              ],
              tips: [
                "Uso de Llaves `{}`: Emplear la sintaxis de llaves `{}` en JSX para entrar a 'JavaScript land', lo cual es esencial para incrustar variables, expresiones, ternarios o llamadas a funciones (ej. `{title}`).",
                "Destructuring de Props: Utilizar la destructuring de objetos (`function Componente({ prop1, prop2 })`) en los parámetros de la función para acceder a las propiedades de forma limpia y hacer el código más legible.",
                "La Prop `key` en Listas: Siempre asignar una prop `key` única y estable (preferiblemente un ID de datos y no un índice) a los elementos generados por `map()` para asegurar que React pueda optimizar la actualización del DOM de forma eficiente.",
              ],
            },
            {
              titulo: "C7: Estado (State) y Manejo de Eventos",
              descripcion:
                "Implementación de la interactividad mediante la gestión de eventos del usuario (ej. `onClick`). Introducción al Hook `useState()` para almacenar información dinámica dentro de un componente, logrando que la UI responda a las acciones del usuario.",
              importancia: [
                "Manejo de Eventos: Usar atributos como `onClick` (en camelCase) en JSX para enlazar una función de JavaScript (el *event handler*) que se ejecutará en respuesta a la interacción del usuario.",
                "Estado como Memoria: El state (`useState`) es la herramienta de React para que los componentes 'recuerden' información que cambia con el tiempo y provoque un re-renderizado cuando se actualiza.",
                "Valor y Setter: El Hook `useState()` devuelve un array con dos elementos: el valor actual del estado (`likes`) y una función para actualizar ese valor (`setLikes`), lo que facilita la lectura y actualización.",
              ],
              tips: [
                "Ubicación de la Lógica: Mantener el estado (la lógica de `useState`) y su función de actualización dentro del componente donde se inicia. Si se necesita en un hijo, se pasa como `prop` (función o valor).",
                "Actualización Exclusiva: Siempre utilizar la función setter proporcionada por `useState` para actualizar el valor. Nunca mutar directamente el estado para garantizar que React pueda rastrear los cambios.",
                "Client Component: Cualquier componente que use `useState` o maneje eventos de usuario (interactividad) debe ser marcado con `'use client'` en Next.js, ya que depende de las capacidades del navegador para funcionar.",
              ],
            },
            {
              titulo:
                "C8: Transición: React Manual a Next.js (Necesidad del Framework)",
              descripcion:
                "Síntesis de los tres pilares de React (Componentes, Props y State) y la justificación de migrar de la configuración manual (Scripts, Babel) a Next.js. Reconocimiento de que Next.js maneja la configuración compleja y habilita la arquitectura moderna (Server/Client Components).",
              importancia: [
                "React Foundation Summary: Comprensión consolidada de los tres fundamentos: Componentes (modularidad), Props (flujo de datos de padre a hijo) y State (interactividad y manejo de la memoria del componente).",
                "Problema de la Configuración: Entender que la configuración de React (scripts, ReactDOM, Babel) se vuelve compleja en aplicaciones grandes, lo que justifica el uso de Next.js, que automatiza todo este tooling.",
                "Requisito de Framework: Reconocimiento de que funcionalidades modernas de React, como los Server and Client Components, no pueden ser usadas sin la arquitectura y el bundler avanzado que provee Next.js.",
              ],
              tips: [
                "La Mejor Práctica es Construir: Reafirmar que la mejor manera de dominar React es mediante la construcción práctica, y que Next.js facilita este proceso al reducir el boilerplate y la configuración.",
                "Enfoque de Next.js: A partir de ahora, el enfoque se centra en cómo Next.js aplica estos fundamentos de React y añade optimizaciones como la pre-renderización y el manejo de rutas.",
              ],
            },
            {
              titulo:
                "C9: Configuración y Enrutamiento del App Router de Next.js",
              descripcion:
                "Instalación y configuración inicial de Next.js, destacando la automatización del tooling (eliminación de scripts de Babel y ReactDOM). Introducción al Enrutamiento Basado en el Sistema de Archivos (App Router) y la arquitectura de Componentes de Servidor.",
              importancia: [
                "Eliminación de Tooling Manual: Next.js automatiza la configuración de React, ReactDOM y Babel (compilación de JSX), permitiendo al desarrollador enfocarse inmediatamente en la lógica de la aplicación.",
                "File-System Routing (App Router): La estructura de carpetas y archivos dentro del directorio `app/` define las rutas de la aplicación. Archivos como `page.js` (la UI de una ruta) y `layout.js` (UI compartida) son convenciones clave.",
                "Server Components (Default): El valor por defecto en Next.js es renderizar componentes en el servidor. Esto choca con los Hooks interactivos (`useState`), lo que exige el uso explícito de Client Components para la interactividad.",
              ],
              tips: [
                "Uso del Script `dev`: Utilizar `npm run dev` para iniciar el servidor de desarrollo, lo que maneja la compilación de JSX, la instalación de React y la creación de rutas en tiempo real.",
                "Rol de `layout.js`: Entender que `layout.js` define la estructura HTML principal (`<html>`, `<body>`) y es ideal para elementos de UI que no cambian entre páginas (ej. barra de navegación o footer).",
                "Módulos ES: Reconocer que la importación de Hooks como `import { useState } from 'react';` reemplaza la necesidad de prefijar los métodos de React con `React.` (ej. `React.useState`).",
              ],
            },
            {
              titulo:
                "C10: React Server Components (RSC) vs. Client Components",
              descripcion:
                "Análisis de los dos entornos de ejecución (Server/Client) y la arquitectura de Componentes de Servidor (RSC) y Cliente. Comprensión de la 'Network Boundary' y el uso del `'use client'` directive para habilitar interactividad.",
              importancia: [
                "Server Components (RSC): El valor por defecto de Next.js. Se ejecutan en el servidor, ideal para data fetching, rendimiento inicial y lógica de backend. No soportan hooks de interactividad (`useState`).",
                "Client Components: Componentes marcados con la directiva `'use client'` en la parte superior del archivo. Se ejecutan en el cliente/navegador y son necesarios para manejar el estado (`useState`), eventos (`onClick`) o acceder directamente al DOM.",
                "Network Boundary: Línea conceptual que separa la ejecución del Server y Client. El RSC Payload es el formato de datos eficiente que se envía al cliente, mezclando el HTML renderizado del servidor y los placeholders/referencias de los Client Components.",
              ],
              tips: [
                "Principio de Modularidad: Colocar `'use client'` solo en los componentes que lo necesitan (los más bajos en el árbol que usan hooks/eventos). Esto maximiza la porción de la aplicación renderizada en el servidor, optimizando la performance.",
                "Fast Refresh: Next.js incluye Fast Refresh preconfigurado, una funcionalidad que proporciona retroalimentación instantánea de los cambios sin perder el estado local del componente durante el desarrollo.",
                "Data Fetching en Server: La capacidad de Server Components para ejecutarse en el servidor permite mover la lógica de obtención de datos directamente al componente, lo cual es más rápido y seguro que hacerlo en el cliente.",
              ],
            },
          ],
          "Qué aprendí": [
            {
              titulo: "Dominio de la Lógica Declarativa de React",
              descripcion:
                "Adquirí la capacidad de construir interfaces de usuario complejas de forma declarativa y modular, migrando el enfoque de manipulación imperativa del DOM al modelo eficiente de React.",
              aplicado: [
                "Creación de componentes funcionales con convención de nombres (PascalCase).",
                "Gestión del flujo de datos mediante **Props**, asegurando que la información descienda de padres a hijos.",
                "Implementación de la interactividad básica utilizando el Hook **`useState`** para manejar el estado local del componente y re-renderizar la UI eficientemente.",
              ],
              recomendacion: [
                "Pensar siempre en el diseño de la UI como un árbol de componentes antes de escribir código (Composición).",
                "Asegurar la inmutabilidad del estado utilizando la función *setter* proporcionada por `useState`.",
              ],
            },
            {
              titulo: "Comprensión de la Arquitectura Server/Client de Next.js",
              descripcion:
                "Entendimiento profundo de la arquitectura del App Router, diferenciando los entornos de ejecución para optimizar el rendimiento y habilitar la interactividad de manera estratégica.",
              aplicado: [
                "Configuración de rutas de aplicación mediante el **Sistema de Archivos**.",
                "Distinción crítica entre la ejecución en el **Servidor** (RSC - por defecto) y el **Cliente**.",
                "Uso estratégico de la directiva **`'use client'`** para encapsular la lógica de interactividad (Hooks y Eventos) solo donde es estrictamente necesario, maximizando la porción del renderizado en el servidor.",
              ],
              recomendacion: [
                "Aplicar el principio de **Server-First**: por defecto, un componente debería ser Server Component a menos que necesite explícitamente funcionalidades del navegador (hooks, eventos).",
                "Aprovechar que los Server Components pueden realizar *Data Fetching* de manera eficiente en el servidor, antes de la hidratación de la UI.",
              ],
            },
          ],
          "Problemas comunes": [
            {
              titulo: "Lógica de Cliente en Server Components",
              descripcion:
                "Intentar usar `useState` o `useEffect` en un componente que no está marcado con `'use client'`, resultando en errores de Hydration o fallos en el navegador.",
              solucion: [
                "Mover el componente que contiene el Hook a un archivo separado y agregar la directiva `'use client'` en la parte superior.",
                "Separar la capa de presentación (Server) de la capa de interacción (Client).",
              ],
              recomendacion: [
                "Mantener los Client Components como 'hojas' interactivas en el árbol, minimizando su código y su posición.",
                "Si un componente grande necesita interactividad, hazlo Client y solo importa Server Components como hijos.",
              ],
            },
            {
              titulo: "Fugas de Claves de API Privadas",
              descripcion:
                "Exposición accidental de variables de entorno privadas (que no deberían ir al navegador) en un Client Component.",
              solucion: [
                "Asegurar que las claves secretas se lean **únicamente** dentro de **Server Components** o en archivos que no tienen `'use client'`. Los Server Components eliminan estas variables del bundle de JavaScript del cliente.",
                "Nunca prefijar claves privadas con `NEXT_PUBLIC_`.",
              ],
              recomendacion: [
                "Usar el patrón Server-First para leer las variables de entorno, manteniendo las claves fuera del JavaScript enviado al navegador.",
              ],
            },
          ],
          "Buenas prácticas": [
            {
              titulo: "Diseño con Patrón Server-First",
              descripcion:
                "Priorizar la implementación de la lógica y la obtención de datos en el servidor (RSC) y reservar los Client Components solo para el manejo de eventos, estado y APIs del navegador.",
              ejemplos: [
                "Colocar el `Data Fetching` directamente en Server Components asíncronos (`async function`).",
                "Usar `layout.js` y `page.js` como Server Components por defecto para mejorar el rendimiento de carga.",
                "Utilizar el componente `<Link>` de Next.js, que hace prefetch de las rutas automáticamente.",
              ],
              recomendacion: [
                "Maximizar la porción de la aplicación renderizada en el servidor para minimizar la cantidad de JavaScript enviada al cliente (menor TTI - Time to Interactive).",
                "Reducir el número de archivos que requieren la directiva `'use client'`.",
              ],
            },
          ],
          Ejemplos: [
            "// Server Component (Default)\nconst Home = () => { return <div>Home Page</div>; }\nexport default Home",
            "// Server Component con Data Fetching\nexport default async function Page() {\n \t// Se ejecuta solo en el servidor\n \tconst data = await fetch('https://api.example.com')\n \treturn <div>{data.title}</div>\n}",
            "// Client Component (Interactividad)\n'use client'\nimport { useState } from 'react'\n\nexport default function Counter() {\n \tconst [count, setCount] = useState(0)\n \treturn <button onClick={() => setCount(count + 1)}>{count}</button>\n}",
          ],
          "Errores frecuentes": [
            {
              titulo: "No exportar páginas/componentes",
              descripcion:
                "Olvidar el `export default` en los archivos de página (`page.js` o `layout.js`) o no exportar un componente funcional.",
              solucion: [
                "Verifica que cada archivo de ruta tenga un `export default` para la función de página/layout.",
                "Asegúrate de exportar cualquier componente reutilizable que se importe en otro archivo.",
              ],
              recomendacion: [
                "Mantener la convención: `export default function Page() { ... }` para las páginas principales.",
              ],
            },
            {
              titulo: "Problemas con la Prop `key` en Listas",
              descripcion:
                "Olvidar la prop `key` o usar el índice del array como clave al renderizar listas (`array.map()`), causando errores en el DOM y fallos en el re-renderizado.",
              solucion: [
                "Asigna una prop `key` única y estable (preferiblemente un ID de datos) a cada elemento JSX que sea hijo directo de un `map()`.",
                "Si usas el índice, asegúrate de que la lista no cambiará de orden ni se añadirán/eliminarán elementos.",
              ],
              recomendacion: [
                "Utiliza `React DevTools` para identificar rápidamente los *warnings* de `key` faltante.",
              ],
            },
            {
              titulo: "Navegación sin usar `<Link>`",
              descripcion:
                "Usar la etiqueta `<a>` HTML estándar en lugar del componente `<Link>` de Next.js para la navegación interna, lo que desactiva el pre-fetch y las optimizaciones de enrutamiento.",
              solucion: [
                'Reemplaza todos los `<a>` por `<Link href="...">` para la navegación entre páginas internas de Next.js.',
                "Usa `<a>` solo para enlaces externos o si necesitas forzar un *full page reload*.",
              ],
              recomendacion: [
                "Aprovecha el *prefetching* automático de `<Link>` que hace la navegación instantánea.",
              ],
            },
          ],
          "Tips rápidos": [
            "Usar 'npm run dev' para desarrollo con Fast Refresh.",
            "Los Server Components pueden ser `async` para hacer `await` directamente al obtener datos.",
            "Usar React DevTools y Next.js DevTools para debugging efectivo de componentes y su arquitectura.",
            "Utilizar nombres de archivos y carpetas en minúsculas (ej. `[id]`, `dashboard`, `page.js`).",
          ],
        },
      },
    ],
  },
];

export function CertificacionesWindow({
  onClose,
  onMinimize,
  onMaximize,
  maximized,
  onDragStart,
}: {
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  maximized: boolean;
  onDragStart: (e: React.MouseEvent) => void;
}) {
  const [openFolders, setOpenFolders] = React.useState<{
    [key: string]: boolean;
  }>({
    Certificaciones: true,
  });
  const [selectedCurso, setSelectedCurso] = React.useState<{
    categoria: string;
    nombre: string;
    info?: any; // Added info to the state type
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

  // Carpeta SVG
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

  // Flecha SVG
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

  // Utilidad para truncar texto largo
  function truncateText(text: string, maxLength: number) {
    return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
  }

  // Tabs para la navegación de secciones del curso
  const courseTabs = [
    "Conceptos clave",
    "Qué aprendí",
    "Problemas comunes",
    "Buenas prácticas",
    "Ejemplos",
    "Errores frecuentes",
    "Tips rápidos",
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

  const isMobile = useIsMobile(); // breakpoint 768px (Tailwind md)

  // Nuevo useEffect para actualizar isMobileLayout cuando cambia maximized o isMobile
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
            Certificaciones
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
              Explorador
            </div>
            {isMobileLayout && (
              <button
                onClick={() => setShowSidebar(false)}
                className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#e0e0e0]"
                style={{ zIndex: 30 }} // Asegura que esté por encima del overlay
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
                Certificaciones
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
                      <span>Información</span>
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
              Mis Certificaciones
            </div>
          )}
          {selectedInfo ? (
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#e4e6eb] rounded-xl shadow-lg border border-[#e0e0e0] flex flex-col items-center justify-center text-center p-4 md:p-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white rounded-lg shadow p-2 border border-[#e0e0e0]">
                  <NotepadIcon />
                </span>
                <span className="text-xl md:text-2xl font-bold text-[#232323]">
                  Información General
                </span>
              </div>
              <div className="text-sm md:text-base text-[#232323] mb-2 font-semibold">
                Bienvenido a tu carpeta de certificaciones y cursos.
              </div>
              <div className="text-gray-700 text-xs md:text-sm mb-4 text-left">
                Aquí encontrarás un resumen de todas las áreas y tecnologías en
                las que te has capacitado.
                <br />
                Explora las carpetas a la izquierda para ver los cursos y
                certificaciones que completaste en cada categoría.
                <br />
                <span className="block mt-2 text-[#0078d4] font-medium">
                  ¿Por qué es importante?
                </span>
                <ul className="list-disc list-inside text-gray-600 mt-1 mb-2">
                  <li>
                    Demuestra tu formación formal y autodidacta en tecnologías
                    clave.
                  </li>
                  <li>
                    Facilita la presentación de tu perfil profesional en
                    entrevistas y proyectos.
                  </li>
                  <li>
                    Organiza tu portafolio para mostrar tus habilidades de
                    manera clara y visual.
                  </li>
                </ul>
                <span className="block mt-2 text-[#0078d4] font-medium">
                  ¿Cómo navegar?
                </span>
                <ul className="list-disc list-inside text-gray-600 mt-1">
                  <li>
                    Haz clic en las carpetas para desplegar los cursos y
                    certificaciones.
                  </li>
                  <li>
                    Selecciona un curso para ver más detalles en esta ventana.
                  </li>
                  <li>
                    Utiliza el botón "Volver" para regresar a la vista general.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center gap-2 mt-4">
                <span className="text-xs md:text-sm text-gray-500">
                  Última actualización: Diciembre 2025
                </span>
                <span className="text-[10px] md:text-xs text-gray-400">
                  Todos los certificados y cursos están verificados y listos
                  para compartir.
                </span>
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
                        Certificación completada • {selectedCurso.categoria}
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
                          <span className="relative z-10">Ver Certificado</span>
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
                          <span>{tab}</span>
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
                                        Descripción
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
                                              ¿Por qué es importante?
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
                              No hay información disponible para esta sección.
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
                              No hay información disponible para esta sección.
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
                              No hay información disponible para esta sección.
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
                                      Ejemplo #{idx + 1}
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
                              No hay información disponible para esta sección.
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
                              No hay información disponible para esta sección.
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
                                      Tip #{idx + 1}
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
                              No hay información disponible para esta sección.
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
                Selecciona un curso del menú para ver los detalles.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
