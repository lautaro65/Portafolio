export const categorias = [
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
      {
        nombre: "Next.js App Router: De Cero a Dashboard (Vercel – Oficial)",
        categoria: "Next.js",
        tecnologias: [
          "Next.js (App Router)",
          "React (RSC, Suspense, useActionState)",
          "PostgreSQL (Vercel Postgres)",
          "Tailwind CSS",
          "React Server Components (RSC)",
          "Server Actions",
          "NextAuth.js (Auth.js)",
          "Zod",
          "SQL",
        ],
        certificado: "./Certificaciones/dashboard-app-certificate.pdf",
        info: {
          Descripción:
            "Estudio práctico y conceptual intensivo centrado en la creación de un Dashboard escalable utilizando la arquitectura moderna del App Router de Next.js (versión 14+). El curso abarca desde la optimización de assets y la implementación de UI (Client/Server Components) hasta la capa full-stack: obtención de datos optimizada (Streaming, Paralelismo), mutación segura (Server Actions), manejo de errores, accesibilidad y protección de rutas con autenticación (NextAuth.js).",
          "Conceptos clave": [
            {
              titulo:
                "C1: Getting Started (Configuración del Entorno y Estructura)",
              descripcion:
                "Instalación del proyecto con `create-next-app` utilizando el ejemplo 'starter-example' y `pnpm`. Se introduce la estructura de carpetas del App Router y se justifica el uso de TypeScript y datos de ejemplo (placeholder data).",
              importancia: [
                "Creación del Proyecto: Uso de `npx create-next-app@latest` con la flag `--example` para inicializar el proyecto con una base de código existente, reflejando el desarrollo en entornos reales.",
                "Manejo de Paquetes (pnpm): Adopción de `pnpm` como gestor de paquetes recomendado por su eficiencia y rapidez, que requiere el comando `pnpm i` para la instalación de dependencias.",
                "Estructura del App Router: Introducción a la convención clave `/app` (rutas, componentes y lógica) y la separación de intereses en subcarpetas (`/app/lib` para funciones/datos, `/app/ui` para componentes de interfaz).",
              ],
              tips: [
                "Configuración Automatizada: La mayoría de los archivos de configuración (`next.config.ts`) se generan y preconfiguran automáticamente por `create-next-app`, permitiendo enfocarse en la lógica.",
                "TypeScript (TS): El proyecto utiliza TS (`.ts`, `.tsx`) para la seguridad de tipos, aunque el desarrollador puede enfocarse en el código. El archivo `definitions.ts` define manualmente los tipos de datos a usar.",
                "Datos de Ejemplo: El proyecto incluye `placeholder-data.ts` como datos simulados (mock data) para construir la UI sin depender inicialmente de una base de datos o API activa.",
              ],
            },
            {
              titulo: "C2: CSS Styling (Estilos Globales, Tailwind y Módulos)",
              descripcion:
                "Implementación de diferentes estrategias de estilos en la aplicación Next.js, incluyendo la configuración de estilos globales, el uso de frameworks utilitarios (Tailwind CSS) y la encapsulación de estilos con CSS Modules.",
              importancia: [
                "Estilos Globales: El archivo `global.css` se importa en el componente de nivel superior, el **Root Layout** (`/app/layout.tsx`), para aplicar reglas CSS a *todas* las rutas de la aplicación (ej. resets, `@tailwind` directives).",
                "Tailwind CSS: Un framework CSS *utility-first* que permite escribir clases de utilidad directamente en el código React (`className`), mejorando la velocidad de desarrollo y evitando colisiones de estilos.",
                "CSS Modules: Permiten aislar CSS a un componente específico al generar nombres de clases únicos automáticamente. Se importan como un objeto de estilos (`import styles from '...'`) y se aplican mediante `styles.[clase]`. ",
                "Gestión Condicional de Clases (`clsx`): Uso de la librería `clsx` para alternar o aplicar clases condicionalmente (ej. basado en el estado `'pending'` o `'paid'`), simplificando el manejo de clases dinámicas.",
              ],
              tips: [
                "Buenas Prácticas: Se recomienda importar `global.css` únicamente en el `Root Layout` para mantener una estructura de estilos clara.",
                "Flexibilidad: Next.js permite usar múltiples soluciones de estilo simultáneamente (Tailwind, CSS Modules, Sass, CSS-in-JS).",
                "Configuración: La integración de Tailwind se automatiza al crear un nuevo proyecto con `create-next-app`.",
              ],
            },
            {
              titulo:
                "C3: Optimizing Fonts and Images (next/font y next/image)",
              descripcion:
                "Aplicación de las herramientas de optimización de assets de Next.js para mejorar el rendimiento y la experiencia del usuario, centrándose en evitar el Cumulative Layout Shift (CLS) mediante la gestión automática de fuentes e imágenes.",
              importancia: [
                "Optimización de Fuentes (`next/font`): El módulo `next/font` descarga los archivos de fuente en tiempo de compilación (`build time`) y los aloja como assets estáticos, eliminando peticiones de red adicionales y previniendo el **Cumulative Layout Shift (CLS)** causado por el cambio de fuentes.",
                "Uso de `<Inter>`: Importación de fuentes de Google (ej. `Inter`, `Lusitana`) y aplicación de la clase (`className`) al elemento `<body>` del **Root Layout** para que la tipografía se aplique globalmente.",
                "Optimización de Imágenes (`next/image`): El componente `<Image>` extiende la etiqueta HTML `<img>` con optimizaciones automáticas como: **prevención de Layout Shift**, **redimensionamiento** para diferentes viewports, **Lazy Loading** por defecto y servicio de formatos modernos (WebP, AVIF).",
                "Propiedades Cruciales de `<Image>`: Es una buena práctica establecer `width` y `height` en `<Image>` para que Next.js calcule la **relación de aspecto**, evitando el *Layout Shift* durante la carga. Estos valores deben coincidir con la relación del archivo fuente, no necesariamente con el tamaño de renderizado.",
              ],
              tips: [
                "Fuentes Secundarias: Es posible importar múltiples fuentes y aplicarlas solo a elementos específicos, especificando los `weights` necesarios (ej. 400 y 700) para un rendimiento óptimo.",
                "Imágenes Estáticas: Las imágenes deben colocarse en el directorio `/public` para ser referenciadas directamente en la propiedad `src` del componente `<Image>`.",
                "Diseño Responsivo: Es posible usar múltiples componentes `<Image>` con clases condicionales de Tailwind CSS (`hidden md:block`) para servir imágenes completamente diferentes basadas en el tamaño de la pantalla (ej. `hero-desktop.png` vs `hero-mobile.png`).",
              ],
            },
            {
              titulo:
                "C4: Creating Layouts and Pages (Enrutamiento y UI Compartida)",
              descripcion:
                "Dominio del enrutamiento basado en la estructura de archivos del App Router, utilizando carpetas para segmentos de ruta y los archivos especiales `page.tsx` y `layout.tsx` para construir la interfaz de usuario.",
              importancia: [
                "File-System Routing: Las **carpetas** en `/app` definen los segmentos de ruta (URL), y el archivo `page.tsx` es obligatorio para que una ruta sea accesible públicamente (end-point).",
                "Layouts Anidados: El archivo `layout.tsx` define la **UI compartida** (ej. una barra de navegación) para sus rutas anidadas. Recibe las páginas o sub-layouts como la propiedad `children`.",
                "Partial Rendering (Renderizado Parcial): Una ventaja clave de los layouts. En la navegación, solo los componentes dentro del `children` (la página) se actualizan, mientras que el layout **no se vuelve a montar** y conserva el estado de React del lado del cliente.",
                "Colocación (`Colocation`): El App Router permite colocar componentes de UI (`/ui`), lógica de negocio (`/lib`) y archivos de prueba junto a las rutas (`page.tsx`), haciendo que solo el contenido de `page.tsx` sea visible públicamente.",
              ],
              tips: [
                "Root Layout: El archivo `/app/layout.tsx` es **obligatorio** en cada aplicación Next.js. Define las etiquetas raíz (`<html>`, `<body>`) y aplica UI (como fuentes y estilos globales) que se comparte a través de *toda* la aplicación.",
                "Separación de UI: Se recomienda usar el **Root Layout** solo para la estructura global (HTML, fuentes) y layouts anidados (ej. `/dashboard/layout.tsx`) para la UI específica de secciones (ej. navegación lateral).",
              ],
            },
            {
              titulo:
                "C5: Navigating Between Pages (Client-Side Routing y Prefetching)",
              descripcion:
                "Implementación de navegación interna eficiente y sin recarga de página mediante el componente `<Link>` de Next.js. Se utiliza el hook `usePathname()` para gestionar el estado activo de los enlaces.",
              importancia: [
                "Componente `<Link>`: Es el sustituto de la etiqueta tradicional `<a>` para enlaces internos. Permite la **navegación del lado del cliente (`Client-Side Navigation`)** mediante JavaScript, evitando recargas completas de la página.",
                "Optimización Automática: Next.js automáticamente realiza **Code-Splitting** (división de código por segmentos de ruta) y **Prefetching** (carga previa) en producción. Cuando un `<Link>` es visible en el viewport, precarga el código de la ruta destino en segundo plano, resultando en transiciones de página casi instantáneas.",
                "Gestión de Enlace Activo: El hook `usePathname()` se utiliza para obtener la ruta actual del usuario. Como es un Hook de React, el componente que lo utiliza debe ser marcado con la directiva `'use client'` para convertirse en un **Client Component**.",
                "Patrón Condicional: Se usa la librería `clsx` (introducida en C2) junto con `usePathname()` para aplicar estilos condicionalmente (ej. fondo azul claro, texto azul) cuando `pathname` coincide con `link.href`, indicando el enlace activo al usuario.",
              ],
              tips: [
                "Cuándo usar `'use client'`: La directiva es necesaria solo en los componentes que dependen de Hooks de React (`usePathname`, `useState`, `useEffect`) o que manejan interactividad del navegador.",
                "Seguridad: El Code Splitting aísla las páginas; un error en una ruta no detendrá el funcionamiento del resto de la aplicación.",
                "Alternativa a `usePathname`: La biblioteca `clsx` permite crear una clase condicional de manera limpia: `{ 'clase-activa': pathname === link.href }`.",
              ],
            },
            {
              titulo:
                "C6: Setting Up Your Database (Vercel Integration y Seeding)",
              descripcion:
                "Configuración y vinculación del proyecto Next.js con una base de datos PostgreSQL a través de las integraciones de Vercel. Se cubre el flujo de trabajo de despliegue y la inicialización de la base de datos.",
              importancia: [
                "Flujo de Trabajo (GitHub/Vercel): Vinculación del repositorio de GitHub con Vercel para obtener **despliegues automáticos** cada vez que se hace un *push* al `main`, y **URLs de Previsualización Instantánea** para Pull Requests. ",
                "Configuración de Base de Datos: Creación y conexión de una base de datos PostgreSQL a través de la pestaña 'Storage' del panel de Vercel, eligiendo la **región** más cercana (idealmente Washington D.C. `iad1`) para reducir la latencia.",
                "Variables de Entorno (`.env`): Obtención de las credenciales de la base de datos (secrets) de Vercel y su pegado en el archivo `.env` local. Es **crítico** asegurar que el archivo `.env` esté listado en `.gitignore` para prevenir la exposición de secretos.",
                "Seeding (Inicialización de Datos): Uso de un script local (`/seed`) que ejecuta comandos SQL para crear las tablas y **poblar** la base de datos con los datos de ejemplo (`placeholder-data.ts`), permitiendo comenzar el desarrollo con datos iniciales.",
              ],
              tips: [
                "Verificación de Conexión: Se verifica la conexión y funcionalidad de la base de datos ejecutando una consulta SQL simple a través de un *Route Handler* (`app/query/route.ts`), asegurando que la conexión es exitosa antes de avanzar.",
                "Seguridad de la Contraseña: El script de *seeding* utiliza `bcrypt` (o `bcryptjs`) para **hashear** las contraseñas de los usuarios antes de almacenarlas, una práctica de seguridad esencial.",
                "Mantenimiento de la Base de Datos: En desarrollo, se puede usar `DROP TABLE tablename` para eliminar tablas existentes y re-sembrar, pero esto **nunca** debe hacerse en un entorno de producción.",
              ],
            },
            {
              titulo:
                "C7: Fetching Data (Server Components, SQL y Paralelismo)",
              descripcion:
                "Estrategias de obtención de datos para la página de resumen del Dashboard. Se justifica el uso de React Server Components (RSC) para consultar la base de datos directamente y se resuelven los problemas de rendimiento introducidos por los 'waterfalls' de peticiones.",
              importancia: [
                "Data Fetching en Server Components (RSC): Se utiliza la sintaxis `async/await` directamente en los componentes de página (que son RSC por defecto) para obtener datos sin la necesidad de Hooks (`useEffect`, `useState`). Esto elimina la capa de API adicional (Route Handlers) para consultas directas, ya que las credenciales de la base de datos permanecen seguras en el servidor.",
                "Uso de SQL: Se utiliza la librería `postgres.js` y SQL (el estándar de la industria) para escribir consultas. Esto permite **filtrar y manipular datos de forma precisa en la base de datos** (ej. `LIMIT 5`, `SELECT COUNT(*)`), transfiriendo solo la información necesaria en lugar de toda la tabla.",
                "Waterfalls de Peticiones: Identificación de las 'cascadas' de peticiones, donde una solicitud de datos se inicia **solo después** de que la anterior haya terminado (secuencialidad no intencional), lo que impacta negativamente el rendimiento. ",
                "Fetching de Datos en Paralelo: Solución al problema de 'waterfalls' iniciando múltiples peticiones de datos de forma concurrente mediante la función nativa de JavaScript **`Promise.all()`**. Esto asegura que las peticiones se ejecuten simultáneamente, reduciendo el tiempo total de carga.",
              ],
              tips: [
                "Cuándo usar API: Las APIs (`Route Handlers`) son necesarias si los datos se obtienen desde el **cliente** (ya que los secretos de la base de datos se exponen) o si se usan servicios de terceros.",
                "SQL vs JavaScript: Es más eficiente usar SQL para filtrar y agregar datos (ej. `COUNT(*)` o `SUM()`) en la base de datos que cargar todos los datos y manipularlos con JavaScript en el servidor.",
                "Waterfalls Intencionales: El patrón de cascada es aceptable solo cuando una petición depende de los datos devueltos por la anterior (ej. obtener el ID de usuario antes de obtener sus amigos).",
              ],
            },
            {
              titulo:
                "C8: Static and Dynamic Rendering (Estrategias de Cache y Bloqueo)",
              descripcion:
                "Análisis de las dos principales estrategias de renderizado en Next.js (Estático vs. Dinámico) y cómo la latencia en la obtención de datos puede crear un 'bloqueo' en la renderización de la página completa.",
              importancia: [
                "Static Rendering (Renderizado Estático): Ocurre en el servidor en **tiempo de construcción (`build time`)** o durante la revalidación. Es ideal para contenido sin datos o datos compartidos (blogs, páginas de productos) porque ofrece **sitios más rápidos** (servidos desde caché global), **reduce la carga del servidor** y optimiza el **SEO** (contenido indexable previamente renderizado).",
                "Dynamic Rendering (Renderizado Dinámico): Ocurre en el servidor en **tiempo de solicitud (`request time`)**. Es necesario para **datos en tiempo real**, **contenido personalizado** (dashboards, perfiles de usuario) o cuando se requiere acceder a información que solo está disponible en la solicitud (ej. Cookies, `searchParams` de la URL).",
                "El Problema del Componente Más Lento: Con el Renderizado Dinámico, **la página es tan rápida como la petición de datos más lenta**.",
                "Bloqueo de UI: Si una petición de datos es intencionalmente o accidentalmente lenta (ej. `setTimeout` de 3 segundos en `fetchRevenue`), bloquea la representación de **toda la página** hasta que se resuelva, degradando la experiencia del usuario.",
              ],
              tips: [
                "Activación del Dinamismo: Next.js utiliza el renderizado estático por defecto. Se pasa a dinámico cuando un componente de página usa funciones que solo están disponibles en tiempo de solicitud (`searchParams`, `cookies`, `headers`) o cuando se desactiva el caché de la petición (`fetch(..., { cache: 'no-store' })`).",
                "Compensación: El renderizado estático mejora el rendimiento, pero no puede reflejar los cambios de datos recientes (no es apto para un dashboard sin revalidación). El dinámico asegura la actualidad, pero puede ser más lento.",
              ],
            },
            {
              titulo: "C9: Streaming (Suspense, loading.tsx y Skeletons)",
              descripcion:
                "Aplicación de la técnica de Streaming para mejorar la experiencia del usuario (UX) al evitar que las peticiones de datos lentas bloqueen la renderización de la página completa. Se implementa con los límites de Suspense y el uso de esqueletos de carga.",
              importancia: [
                "Streaming: Técnica de transferencia de datos que divide la ruta en 'chunks' y los envía progresivamente del servidor al cliente a medida que están listos. Esto permite que el usuario **vea e interactúe** con las partes estáticas de la página sin esperar al componente más lento. ",
                "Implementación a Nivel de Página (`loading.tsx`): El archivo `loading.tsx` es un archivo especial de Next.js que, basado en React Suspense, define la UI de *fallback* para toda la página o para la ruta. Muestra un **esqueleto de carga (`loading skeleton`)** mientras el contenido dinámico se está generando.",
                "Implementación a Nivel de Componente (`<Suspense>`): Se utiliza el componente `<Suspense>` de React para envolver componentes específicos que obtienen datos lentamente. Esto permite un control más granular, mostrando un *fallback* solo para el componente que está cargando, sin bloquear el resto de la UI.",
                "Buenas Prácticas (Data Colocation): La recomendación general es **mover la lógica de obtención de datos hacia los componentes que la necesitan** y luego envolver esos componentes en `<Suspense>`. Esto crea límites de carga granulares y evita el bloqueo.",
                "Esqueletos de Carga (`Skeletons`): Son versiones simplificadas de la UI (placeholders) que se envían inmediatamente como parte del archivo estático, indicando visualmente al usuario dónde aparecerá el contenido.",
              ],
              tips: [
                "Route Groups: Se utiliza la convención de carpetas entre paréntesis (`/(overview)`) para **organizar archivos lógicamente sin afectar la URL** (ej. `/dashboard/(overview)/page.tsx` sigue siendo `/dashboard`). Esto permite que un `loading.tsx` afecte solo a un grupo específico de páginas.",
                "Agrupación de Componentes: Se pueden agrupar múltiples componentes relacionados (ej. las `Card`) en un *wrapper* y envolver solo el *wrapper* con `<Suspense>`. Esto evita el efecto de 'popping' visualmente discordante si cada elemento se cargara individualmente.",
                "Navegación Interrumpible: Gracias al Streaming, el usuario puede navegar a otra página sin esperar a que la página actual termine de cargar.",
              ],
            },
            {
              titulo:
                "C10: Searching and Pagination (URL Search Params y Client Hooks)",
              descripcion:
                "Implementación de las funcionalidades de búsqueda y paginación utilizando parámetros de URL (`searchParams`) en lugar de estado del lado del cliente. Se utilizan los hooks de Next.js para manipular la URL sin recargar la página.",
              importancia: [
                "URL Search Params como Estado: Se utiliza la URL (ej. `/invoices?page=1&query=pending`) para gestionar el estado de búsqueda y paginación. Esto permite **URLs compartibles y *bookmarkeables***, facilita el **Server-Side Rendering** inicial y el **análisis** de datos.",
                "Hooks del Cliente para la Navegación:",
                "* `useSearchParams()`: Lee los parámetros de la URL en componentes del cliente (`Client Components`).",
                "* `usePathname()`: Obtiene el *pathname* actual de la URL (ej. `/dashboard/invoices`).",
                "* `useRouter()`: Permite la navegación programática con el método `replace()`, que actualiza la URL sin una recarga completa de la página (Client-side Navigation).",
                "Pase de Datos del Servidor: El componente de página (`page.tsx` - Server Component) recibe los parámetros de la URL en la prop `searchParams` y los pasa directamente al componente `<Table>` para que se use en la obtención de datos (`fetchFilteredInvoices`).",
                "Debouncing: Se utiliza la librería `use-debounce` para limitar la frecuencia con la que se actualiza la URL y, por lo tanto, se consulta la base de datos. Esto **previene múltiples peticiones innecesarias** al servidor por cada pulsación de tecla, ahorrando recursos.",
              ],
              tips: [
                "Lógica de Navegación (`URLSearchParams`): Se utiliza la API web `URLSearchParams` para construir cadenas de consulta de URL de forma segura y sencilla, usando métodos como `params.set('query', term)`.",
                "Diferencia de Hooks: Si se necesita acceder a los parámetros en un **Client Component** (ej. `<Search>`), se usa `useSearchParams()`. Si se necesitan los parámetros en un **Server Component** (ej. `page.tsx` para obtener datos), se usa la prop `searchParams`.",
                "Reset de Paginación: Al realizar una nueva búsqueda, se debe **resetear el parámetro de página a 1** (`params.set('page', '1')`) en la función `handleSearch` para asegurar que el usuario vea resultados válidos.",
              ],
            },
            {
              titulo: "C11: Mutating Data (Server Actions y Gestión de Cache)",
              descripcion:
                "Implementación de la funcionalidad CRUD (Crear, Actualizar, Eliminar) utilizando React Server Actions, un mecanismo que permite ejecutar código asíncrono directamente en el servidor mediante formularios HTML.",
              importancia: [
                "React Server Actions (RSA): Funciones asíncronas marcadas con `'use server'` (ya sea en un archivo dedicado o dentro de un Server Component) que se ejecutan directamente en el servidor. Permiten mutar datos sin crear endpoints de API REST, ofreciendo **mejoras de seguridad** y **Progressive Enhancement** (el formulario funciona incluso sin JavaScript).",
                "Formularios y `action`: Los formularios llaman a los RSA usando el atributo `action`. La acción invocada recibe automáticamente el objeto nativo del navegador **`FormData`**.",
                "Manejo de Datos Seguros y `Zod`: Antes de la mutación, se utiliza la librería de validación **`Zod`** para validar el tipo y el formato de los datos extraídos de `FormData` (ej. convertir `string` a `number` con `z.coerce.number()`), previniendo errores de la base de datos.",
                "Gestión de Cache (`revalidatePath`): Después de una mutación (CREATE, UPDATE, DELETE), se usa la función **`revalidatePath(ruta)`** de Next.js. Esto purga la caché del cliente para la ruta especificada (ej. `/dashboard/invoices`) y fuerza una nueva solicitud al servidor, asegurando que el usuario vea los datos más recientes.",
                "Redirección: Se utiliza la función **`redirect(ruta)`** de Next.js para redirigir al usuario a una nueva página después de completar la mutación del formulario.",
                "Rutas Dinámicas: Uso de corchetes (`[id]`) para crear segmentos de ruta dinámicos (ej. `/invoices/[id]/edit`) que permiten leer identificadores únicos (como el `id` de la factura) de la prop `params` en el componente de página.",
              ],
              tips: [
                "Invocación de RSA con Parámetros: Para pasar un `id` a un RSA (como en la actualización o eliminación), se recomienda el uso de `bind` de JavaScript (`updateInvoice.bind(null, invoice.id)`) para codificar el parámetro de forma segura.",
                "Almacenamiento Monetario: Se recomienda almacenar valores monetarios en **centavos** en la base de datos (`amount * 100`) para evitar errores de coma flotante de JavaScript.",
                "UUIDs: Se prefiere el uso de UUIDs (Universally Unique Identifiers) sobre las claves auto-incrementales para los IDs de registro, ya que ofrecen mayor seguridad y unicidad global.",
              ],
            },
            {
              titulo: "C12: Handling Errors (try/catch, error.tsx y notFound)",
              descripcion:
                "Estrategias para la gestión de errores, incluyendo el manejo de excepciones en Server Actions y la definición de límites de error a nivel de ruta para una experiencia de usuario más fluida.",
              importancia: [
                "Manejo de Errores en Server Actions (`try/catch`): Se envuelve el código de mutación de datos (`sql` queries) dentro de bloques `try/catch` para interceptar errores de base de datos o lógicos. Al atrapar un error, la acción retorna un mensaje útil (`return { message: 'Database Error...' }`) en lugar de fallar la aplicación.",
                "Límite de Error de Ruta (`error.tsx`): Es un archivo especial de **Client Component** que envuelve un segmento de ruta como un límite de error de React (Error Boundary). Actúa como un **'catch-all' para excepciones no controladas** en el servidor o cliente. Muestra una UI de *fallback* y acepta una función `reset()` que intenta volver a renderizar el segmento de ruta.",
                "Manejo de Errores Específicos (`notFound`): La función **`notFound()`** de Next.js se utiliza para manejar errores 404 de manera específica cuando no se puede encontrar un recurso (ej. una factura por ID). Lanza un error que es interceptado por el archivo **`not-found.tsx`** más cercano.",
                "Precedencia: `notFound()` tiene **precedencia** sobre `error.tsx`. Si se lanza `notFound()` dentro de un componente, se mostrará la UI de `not-found.tsx` en lugar de la UI de `error.tsx`, permitiendo un mensaje de error más específico al usuario.",
              ],
              tips: [
                "Ubicación de `redirect`: La función `redirect()` debe llamarse **fuera** del bloque `try/catch` de un Server Action, ya que lanza un error que de otro modo sería atrapado por el bloque `catch`.",
                "`not-found.tsx` vs `error.tsx`: `error.tsx` se usa para errores inesperados del servidor/código (exceptions). `not-found.tsx` se usa para errores de recursos (ej. ID de factura no válido). Ambos ofrecen una mejor experiencia que la pantalla de error genérica.",
              ],
            },
            {
              titulo:
                "C13: Improving Accessibility (Validación de Formularios y useActionState)",
              descripcion:
                "Enfoque en la mejora de la accesibilidad de formularios mediante HTML semántico, etiquetas y la implementación de validación del lado del servidor utilizando el hook `useActionState` de React para manejar y mostrar errores.",
              importancia: [
                "Accesibilidad (A11y): Diseño e implementación de aplicaciones web que todos puedan usar. Se basa en **HTML Semántico** y **Etiquetas** (`htmlFor`).",
                "Validación del Lado del Servidor (Server-Side Validation): Uso de `Zod` con `safeParse()` para garantizar la validez de los datos antes de la inserción en la base de datos.",
                "Manejo de Errores del Servidor (`useActionState`): Este hook de React conecta el **estado del formulario del lado del cliente** con la **respuesta de validación del Server Action**.",
                "Accesibilidad de Errores (`aria-labels`): Uso de **`aria-describedby`**, **`id`** y **`aria-live='polite'`** para comunicar los errores a los lectores de pantalla de forma no intrusiva.",
              ],
              tips: [
                "Coerción de Zod: Se utiliza `z.coerce.number()` para transformar la entrada de cadena (string) del formulario en un número, lo que facilita la aplicación de reglas de validación numérica (`.gt(0)`).",
                "Validación de Campos Faltantes: La verificación `if (!validatedFields.success)` permite retornar los errores de Zod (`validatedFields.error.flatten().fieldErrors`) y el mensaje al `state` del cliente.",
              ],
            },
            {
              titulo:
                "C14: Adding Authentication (NextAuth.js y Protección de Rutas)",
              descripcion:
                "Implementación de la autenticación de usuarios utilizando NextAuth.js (Auth.js) para asegurar el acceso a las rutas del dashboard, gestionar sesiones y manejar errores de login.",
              importancia: [
                "Authentication vs. Authorization: **Authentication** verifica la identidad (quién eres); **Authorization** determina lo que puedes acceder (qué puedes hacer).",
                "NextAuth.js (Auth.js): Librería para gestión de sesiones y *sign-in/out* simplificada.",
                "Protección de Rutas (`Proxy` y `authorized`): Uso del **Middleware/Proxy** para verificar la sesión antes de renderizar, redirigiendo a `/login` a no autenticados.",
                "Credentials Provider: Implementación de `authorize` para validación de credenciales con Zod y comparación de contraseñas con `bcrypt.compare`.",
                "Manejo de Login: Uso de **`signIn()`** dentro de un Server Action (`authenticate`) y `useActionState` para mostrar errores de `AuthError` específicos.",
              ],
              tips: [
                "Logout: La funcionalidad de *logout* se implementa llamando a la función **`signOut()`** de NextAuth.js dentro de un Server Action.",
                "Seguridad de Contraseña: Es fundamental usar *hashing* (ej. `bcrypt`) para almacenar y comparar contraseñas.",
              ],
            },
            {
              titulo: "C15: Adding Metadata (SEO y Open Graph)",
              descripcion:
                "Estrategias para añadir metadatos cruciales para SEO y redes sociales utilizando la Metadata API de Next.js, incluyendo títulos, descripciones, favicons e imágenes Open Graph.",
              importancia: [
                "Propósito del Metadata: Información esencial para **SEO** (indexación y ranking) y **Shareability** (apariencia de los enlaces compartidos).",
                "Metadata API: Definición por **configuración** (`metadata` object/función) o por **archivo** (`favicon.ico`, `opengraph-image.jpg`).",
                "Herencia y Sobreescritura: La metadata del *layout* es heredada, la de la página anidada sobrescribe.",
                "Título con Plantilla: Uso de **`title.template`** (`%s | Acme Dashboard`) para una estructura de títulos consistente.",
              ],
              tips: [
                "Ubicación de Archivos de Metadata: Mover `favicon.ico` y `opengraph-image.jpg` a la **raíz de la carpeta `/app`** para reconocimiento automático.",
                "Uso de `metadataBase`: Establecer una URL base para simplificar la definición de URLs absolutas.",
              ],
            },
          ],
          "Qué aprendí": [
            {
              titulo:
                "Dominio de la Arquitectura Server-First (RSC y Data Fetching)",
              descripcion:
                "Adquirí la capacidad de construir aplicaciones priorizando el Server-Side Rendering (RSC) para obtener datos de forma segura (SQL directo), minimizar el JavaScript del cliente y optimizar la performance de carga.",
              aplicado: [
                "Implementación de `async` y `await` directamente en Server Components.",
                "Uso de **`Promise.all()`** para paralelizar la obtención de datos y evitar latencias por 'waterfalls'.",
                "Utilización de SQL con `postgres.js` para consultas eficientes en el servidor.",
              ],
              recomendacion: [
                "Identificar la Network Boundary y asegurarse de que el 90% del código sea Server Component, reservando `'use client'` solo para la interactividad.",
              ],
            },
            {
              titulo:
                "Gestión Completa de Datos (CRUD, Cache y Mutación Segura)",
              descripcion:
                "Entendimiento completo del ciclo de vida de los datos, desde la consulta hasta la mutación, usando las APIs de Next.js y React para un flujo de trabajo full-stack moderno.",
              aplicado: [
                "Implementación de **Server Actions** (`'use server'`) para mutaciones (CRUD) seguras desde formularios HTML.",
                "Uso de **`revalidatePath()`** para invalidar la caché después de las mutaciones, asegurando que el cliente vea los datos más recientes.",
                "Uso de `redirect()` para la navegación post-mutación.",
              ],
              recomendacion: [
                "Siempre incluir `revalidatePath` y `redirect` después de cualquier Server Action exitosa para una UX fluida.",
              ],
            },
            {
              titulo: "Optimización de UX con Streaming y Accesibilidad",
              descripcion:
                "Integración de técnicas de renderizado avanzado y accesibilidad para una experiencia de usuario (UX) de alta calidad.",
              aplicado: [
                "Implementación de **Streaming** usando `loading.tsx` y `<Suspense>` para evitar el bloqueo total de la UI por componentes lentos.",
                "Uso de **`useActionState`** para manejar el estado pendiente y los errores de validación del formulario del servidor en el cliente.",
                "Mejora de la accesibilidad (A11y) y la validación de formularios con Zod y atributos `aria-live`.",
              ],
              recomendacion: [
                "Crear esqueletos de carga (`skeletons`) realistas en `loading.tsx` para reducir la percepción de latencia.",
              ],
            },
          ],
          "Problemas comunes": [
            {
              titulo: "Latencia por 'Waterfalls' de Datos",
              descripcion:
                "El renderizado secuencial de componentes que esperan por la obtención de datos, lo que bloquea la carga de la página completa.",
              solucion: [
                "Utilizar `Promise.all()` para ejecutar todas las promesas de obtención de datos de manera paralela en un Server Component.",
              ],
              recomendacion: [
                "Agrupar todas las peticiones de datos de alto nivel en un solo lugar si no dependen unas de otras.",
              ],
            },
            {
              titulo: "Fugas de Datos o Credenciales",
              descripcion:
                "Exposición accidental de secretos de la base de datos o claves privadas en el bundle de JavaScript del cliente.",
              solucion: [
                "Asegurar que todas las consultas a la base de datos o lecturas de secretos se realicen **únicamente** en Server Components o Server Actions, que se ejecutan solo en el servidor.",
              ],
              recomendacion: [
                "Nunca prefijar claves privadas con `NEXT_PUBLIC_`.",
              ],
            },
          ],
          "Buenas prácticas": [
            {
              titulo: "Patrón Server-First y Colocation de Datos",
              descripcion:
                "Priorizar el Server Component y colocar la lógica de obtención de datos lo más cerca posible del componente que la consume para crear límites de Suspense granulares.",
              ejemplos: [
                "Colocar `fetchInvoiceData()` dentro del componente `<LatestInvoices>` y envolverlo con `<Suspense>`.",
                "Minimizar la cantidad de componentes que tienen la directiva `'use client'`.",
              ],
              recomendacion: [
                "La lógica del servidor se coloca en `/app/lib/actions.ts` y se exporta como Server Action.",
              ],
            },
            {
              titulo: "Estado en la URL",
              descripcion:
                "Usar parámetros de búsqueda (`searchParams`) en lugar de estado de React (`useState`) para gestionar el estado de UI como la búsqueda y la paginación.",
              ejemplos: [
                "El `page.tsx` (Server Component) lee los `searchParams` y los pasa a la función de obtención de datos.",
                "El `<Search>` (Client Component) utiliza `useRouter().replace()` para manipular la URL.",
              ],
              recomendacion: [
                "Esto hace que la URL sea la fuente de verdad, permitiendo que la página sea compartible y re-renderizada por el servidor en la primera carga.",
              ],
            },
          ],
          Ejemplos: [
            "// Fetching en Paralelo para Dashboard\nconst data = await Promise.all([\n  fetchInvoiceCount(),\n  fetchCustomerCount(),\n]);",
            "// Server Action para Mutación\n'use server';\nimport { revalidatePath } from 'next/cache';\nexport async function createInvoice(formData) { /* ... lógica de DB ... */ revalidatePath('/dashboard/invoices'); }",
            "// Error Boundary\nimport { ErrorBoundary } from 'react';\n// Componente envuelto en un archivo error.tsx en la ruta",
            "// Autenticación con useActionState\nconst [errorMessage, formAction] = useActionState(authenticate, undefined);",
            "// Protección de Rutas (Middleware/Proxy)\nconst isLoggedIn = !!auth?.user;\nif (isOnDashboard) { if (isLoggedIn) return true; return false; }",
          ],
          "Errores frecuentes": [
            {
              titulo: "Omitir `revalidatePath`",
              descripcion:
                "Realizar una mutación de datos exitosa pero no invalidar la caché de Next.js, lo que resulta en datos obsoletos mostrados al usuario.",
              solucion: [
                "Asegurarse de llamar a `revalidatePath('/ruta-a-actualizar')` después de cualquier INSERT, UPDATE o DELETE en un Server Action.",
              ],
              recomendacion: [
                "Si es posible, usar `revalidateTag()` si las peticiones `fetch()` tienen tags definidos.",
              ],
            },
            {
              titulo: "Llamar a `redirect` incorrectamente",
              descripcion:
                "Colocar `redirect()` dentro de un bloque `try/catch` de un Server Action, lo que evita que la redirección funcione correctamente.",
              solucion: [
                "Mover `redirect()` fuera del bloque `try/catch` o antes de cualquier código de base de datos que pueda fallar.",
              ],
              recomendacion: [
                "Solo llamar a `redirect()` después de una validación y mutación exitosa.",
              ],
            },
            {
              titulo: "No usar `key` en listas",
              descripcion:
                "Olvidar la prop `key` o usar el índice del array como clave al renderizar listas (`array.map()`), causando fallos en el re-renderizado y problemas de estado.",
              solucion: [
                "Asigna una prop `key` única y estable (ID de datos) a cada elemento JSX que sea hijo directo de un `map()`.",
              ],
            },
          ],
          "Tips rápidos": [
            "Para contenido indexable y crítico, maximiza el uso de **SSG** e **ISR** sobre el SSR/CSR.",
            "Utiliza la etiqueta canónica en **todas** las páginas para consolidar la autoridad y prevenir duplicados.",
            "Asegúrate de que la primera carga (HTML) contenga el contenido esencial para el rastreo, sin depender de la ejecución de JavaScript.",
            "Usa `next/image` con `width`/`height` explícitos para evitar el **CLS** y mejora el **LCP** con la prop `priority`.",
            "Aplica **Dynamic Imports** a cualquier componente o librería que **no sea visible Above the Fold** para mejorar la interactividad (FID/TBT).",
            "Utiliza `strategy='afterInteractive'` o `lazyOnload` en `next/script` para deferir la carga de scripts de terceros.",
            "Monitorea tus métricas de rendimiento en producción utilizando **datos de campo (CrUX)** y el umbral del **percentil 75**.",
          ],
        },
      },
      {
        nombre:
          "Next.js Learn SEO: Optimización, Rastreo y Core Web Vitals (Vercel – Oficial)",
        categoria: "Next.js",
        tecnologias: [
          "Next.js (App Router/Pages Router)",
          "React (Componentes y Hooks)",
          "SEO Técnico (Rastreo, Indexación, Metadatos)",
          "Core Web Vitals (LCP, FID/TBT, CLS)",
          "HTML/CSS (Headings, Links, Estructura)",
          "Lighthouse y Google Search Console",
          "JavaScript (Code Splitting y Lazy Loading)",
        ],
        certificado: "./Certificaciones/NextjsLearnSEO.pdf",
        info: {
          Descripción:
            "Estudio avanzado de las prácticas esenciales de la Optimización para Motores de Búsqueda (SEO) dentro del ecosistema Next.js. El curso aborda los tres pilares del SEO (Técnico, Creación, Popularidad), el ciclo de rastreo e indexación, la gestión de metadatos y el enrutamiento. El enfoque principal es la optimización del rendimiento a través de las Core Web Vitals (CWV) utilizando las características nativas de Next.js.",
          "Conceptos clave": [
            {
              titulo:
                "C1: La Importancia del SEO y los Tres Pilares de la Optimización",
              descripcion:
                "Comprensión fundamental de por qué la optimización para motores de búsqueda (SEO) es crucial para la conversión y la confianza de la marca, y la distinción de los tres pilares que guían la estrategia de optimización.",
              importancia: [
                "Tráfico Orgánico: Los visitantes que llegan a través de resultados de búsqueda no pagados son de alta calidad.",
                "Beneficios Clave del Tráfico Orgánico:",
                "1. Cualitativo: Mayor probabilidad de conversión (visitantes se convierten en clientes).",
                "2. Confianza (Trustable): Un alto ranking aumenta la credibilidad y confianza en la marca.",
                "3. Bajo Costo: No hay un costo directo por aparecer en las primeras posiciones orgánicas, a diferencia del Search Engine Marketing (SEM).",
                "Pilares de Optimización: El SEO se divide en 3 pilares: Técnico (Rastreo, Rendimiento), Creación (Estrategia de Contenido/Keywords) y Popularidad (Backlinks).",
              ],
              tips: [
                "Como desarrollador Next.js, tu enfoque inicial debe ser dominar el **Pilar Técnico** (rastreo, rendimiento, metadatos, estructurado).",
                "Siempre monitorear la distinción entre tráfico orgánico y de pago (SEM) en las herramientas de analítica.",
              ],
            },
            {
              titulo:
                "C2: El Ciclo del Motor de Búsqueda: Crawling, Indexing, Rendering y Ranking",
              descripcion:
                "Descripción de las cuatro responsabilidades principales de un Sistema de Búsqueda (ej. Google, Bing) y cómo interactúan para construir el índice de la web y ofrecer resultados de búsqueda relevantes.",
              importancia: [
                "1. Crawling (Rastreo): Proceso de recorrer la web y analizar el contenido de los sitios (Googlebot).",
                "2. Indexing (Indexación): Almacenamiento de todos los datos recopilados.",
                "3. Rendering (Renderizado): Ejecución de recursos de la página, especialmente JavaScript, crucial para aplicaciones Next.js/React.",
                "4. Ranking (Clasificación): Generación de resultados (SERP) relevantes.",
                "Detalle del Rendering: El Renderizado puede demorar si el contenido depende de JS (CSR). Next.js (SSR/SSG) asegura que el HTML esté completo antes de que Googlebot necesite ejecutar JavaScript.",
              ],
              tips: [
                "Asegúrate de que la primera carga (HTML) de tu aplicación Next.js contenga el contenido esencial para que el Indexing no dependa de la ejecución de JavaScript (Rendering).",
                "El **Pilar Técnico del SEO** se centra en optimizar las primeras tres responsabilidades (Crawling, Indexing, Rendering).",
              ],
            },
            {
              titulo:
                "C3: Web Crawlers y el Viaje de Googlebot (Crawling Queue y Status Codes)",
              descripcion:
                "Análisis de qué son los rastreadores web (Web Crawlers), cómo se identifican (User-Agents) y la secuencia de pasos que Googlebot sigue para descubrir, procesar y eventualmente indexar una URL, prestando atención al costoso paso del Renderizado.",
              importancia: [
                "Función del Web Crawler: Bots que emulan usuarios para navegar y descubrir nuevas páginas siguiendo enlaces.",
                "Identificación: Se identifican mediante User-Agents (ej. Googlebot Smartphone).",
                "Proceso de Solicitud: Googlebot hace una petición HTTP y actúa según el código de estado (200, 30X, 40X, 50X).",
                "El Desafío del Rendering: Si la página tiene contenido dependiente de JavaScript (CSR), se añade a una costosa Cola de Renderizado (Render Queue). Next.js minimiza esto usando SSR o SSG.",
              ],
              tips: [
                "Monitorear los códigos de estado HTTP en Google Search Console para identificar errores 40X/50X.",
                "Next.js, con SSR/SSG, es tu mayor herramienta para optimizar la velocidad y rastreabilidad del sitio, minimizando la dependencia de la Render Queue.",
              ],
            },
            {
              titulo:
                "C4: Cabeceras HTTP, Metadatos y Comunicación con Googlebot",
              descripcion:
                "Análisis de cómo los códigos de estado HTTP y las etiquetas de metadatos dirigen el comportamiento de los rastreadores y cómo Next.js nos permite comunicar el estado de indexación deseado para cada página.",
              importancia: [
                "Metadatos Clave: Los rastreadores buscan <title> y <meta name='description'> para entender la intención y contenido de la página.",
                "Etiquetas Meta Robots: Controlan el rastreo y la indexación (ej. noindex, nofollow).",
                "Enlaces Canónicos (Canonical Links): Uso de <link rel='canonical'> para indicar la versión principal de una página, previniendo el contenido duplicado.",
                "Aplicación en Next.js: Next.js facilita todo esto mediante el manejo de errores (404/500) y la API de metadata (en App Router) para configurar tags y URL canónicas.",
              ],
              tips: [
                "Asegúrate de que las páginas eliminadas respondan consistentemente con un código de estado **404** o **410**.",
                "Utiliza la etiqueta canónica en **todas** las páginas, incluso si no hay contenido duplicado, para confirmar tu URL preferida.",
                "Evita el uso de `noindex` en páginas críticas a menos que sea una necesidad específica.",
              ],
            },
            {
              titulo:
                "C5: El Significado SEO de los Códigos de Estado HTTP (200, 30X, 40X, 50X)",
              descripcion:
                "Análisis de los códigos de respuesta HTTP más importantes en el contexto del SEO, fundamental para comunicar el estado de una página al motor de búsqueda (disponible, movida o eliminada) y asegurar la indexación correcta.",
              importancia: [
                "200 (OK): Requerido para la indexación.",
                "301/308 (Moved Permanently): Esencial para mantener el PageRank (link equity) tras una migración. Next.js usa 308 por defecto.",
                "302 (Found): Redirección temporal. Usar con cautela.",
                "404 (Not Found): El estado deseado para una URL que ya no existe y no tiene reemplazo.",
                "410 (Gone): Recomendado para contenido eliminado definitivamente, retira la URL del índice más rápido que un 404.",
                "500/503 (Error Servidor/Mantenimiento): Si son persistentes, afectan el Crawl Budget.",
              ],
              tips: [
                "Para redirecciones permanentes en Next.js, usa la opción `permanent: true` (genera 308).",
                "Monitorea los códigos de estado en Google Search Console para identificar errores.",
                "Utiliza páginas de error personalizadas (`not-found.tsx` o `500.js`) para mejorar la UX y la comunicación con el bot.",
              ],
            },
            {
              titulo:
                "C6: `robots.txt`: Controlando el Presupuesto de Rastreo (Crawl Budget)",
              descripcion:
                "Análisis del propósito y la implementación del archivo `robots.txt`, un estándar web que permite indicar a los rastreadores de motores de búsqueda qué partes de un sitio pueden o no solicitar y rastrear.",
              importancia: [
                "Propósito: Evitar que los rastreadores accedan a páginas o archivos innecesarios o sensibles (ej. /admin).",
                "Crawl Budget: Al bloquear rutas (Disallow: /ruta), se evita que los bots gasten su 'presupuesto' de rastreo en contenido sin valor SEO, enfocándose en las páginas importantes.",
                "Directivas Clave: User-agent: * (aplica a todos los bots), Disallow: /ruta (no rastrear).",
              ],
              tips: [
                "Nunca dependas del `robots.txt` para la seguridad; úsalo solo para la eficiencia del rastreo. Para bloquear la **indexación**, usa la etiqueta **`noindex`**.",
                "En Next.js, el archivo `robots.txt` se coloca en la carpeta **`public`**.",
                "Asegúrate de que la ruta del **XML Sitemap** esté incluida en el `robots.txt` mediante la directiva `Sitemap: [URL_del_Sitemap]`.",
              ],
            },
            {
              titulo:
                "C7: Sitemaps XML: El Mapa de Rutas para los Motores de Búsqueda",
              descripcion:
                "Análisis de los Sitemaps como la forma más fácil y eficiente de comunicar a Google las URLs que pertenecen al sitio, cuándo se actualizaron y cómo priorizar su rastreo. Es una lista de URLs, no una herramienta de bloqueo.",
              importancia: [
                "Eficiencia de Rastreo: Los Sitemaps facilitan a Googlebot la detección de contenido nuevo o actualizado, mejorando la velocidad de indexación.",
                "Necesidad: Es crucial para sitios grandes, nuevos o con mucho contenido aislado (con pocos enlaces internos).",
                "Estructura: El formato es XML (<urlset>, <url>, <loc>).",
                "Dinamismo: Se recomienda enfáticamente que los sitemaps sean dinámicos para reflejar el contenido nuevo y actualizado de forma constante.",
              ],
              tips: [
                "Asegúrate de que la URL de tu Sitemap esté referenciada en el archivo **`robots.txt`**.",
                "El Sitemap **solo debe incluir URLs que devuelvan código 200 (OK)** y que desees que se indexen.",
                "Utiliza la etiqueta `<lastmod>` para informar a los motores de búsqueda cuándo fue la última vez que se modificó esa URL.",
                "En Next.js (Pages Router), se pueden generar Sitemaps dinámicos usando **SSR (`getServerSideProps`)** para obtener datos de una API y generar la respuesta XML.",
              ],
            },
            {
              titulo:
                "C8: Meta Tags Especiales: Directivas de Indexación (`noindex`, `nofollow`) y Canonicalización",
              descripcion:
                "Estudio de las 'Meta Robot Tags', que son directivas que indican a los motores de búsqueda cómo deben indexar y rastrear una página, y la diferencia crucial entre directivas (Meta Robots) y sugerencias (Canonical).",
              importancia: [
                "Directivas vs. Sugerencias: robots.txt y meta name='robots' son directivas (obligatorias). La etiqueta Canonical es una sugerencia (recomendación).",
                "noindex: DIRECTIVA CRÍTICA para que la página no se muestre en los resultados de búsqueda. Es el método más fiable para retirar una página del índice.",
                "nofollow: Indica al bot que no siga los enlaces contenidos en esta página.",
                "googlebot: Permite establecer reglas específicas solo para el rastreador de Google.",
              ],
              tips: [
                "Si quieres que una página **nunca se indexe**, el método más seguro es usar la etiqueta **`noindex`**.",
                "En Next.js (App Router), estas etiquetas se gestionan de forma nativa a través del objeto `export const metadata` o la función `generateMetadata`.",
                "La regla más restrictiva siempre prevalece. Evita etiquetas contradictorias.",
              ],
            },
            {
              titulo:
                "C9: Enlaces Canónicos: Designando la 'Fuente de Verdad' de una URL",
              descripcion:
                "Estudio del Canonical Tag, la herramienta que se usa para indicar a los motores de búsqueda cuál es la URL más representativa o 'fuente de verdad' de un conjunto de páginas con contenido idéntico o similar. Previene la penalización por contenido duplicado.",
              importancia: [
                "Prevención de Duplicados: Evita que Google penalice o clasifique incorrectamente contenido accesible desde múltiples URLs (ej. rutas con parámetros UTM).",
                "Consolidación de 'Link Equity': Asegura que todos los enlaces (backlinks) que apuntan a las diferentes versiones de la página se consoliden en la URL canónica (preferida).",
                'Mecanismo: La URL canónica se define mediante la etiqueta <link rel="canonical" href="[URL_Preferida]" /> colocada en el <head>.',
              ],
              tips: [
                "Siempre utiliza el **Canonical Tag en todas las páginas**, incluso si no hay duplicados, para confirmar tu URL preferida a Google.",
                "Asegúrate de que la URL canónica siempre use la versión **HTTPS** y la versión **www** o **non-www** principal.",
                "La URL canónica debe apuntar a una página que devuelva código **200 (OK)** y no a una con un `noindex`.",
              ],
            },
            {
              titulo:
                "C10: Rendering and Ranking: Estrategias de Next.js (CSR, SSR, SSG, ISR)",
              descripcion:
                "Análisis de las diferentes estrategias de Renderizado de Next.js como la herramienta clave para garantizar un HTML completo para los rastreadores. También cubre la optimización de la estructura de URLs, encabezados y enlaces internos para el Ranking.",
              importancia: [
                "Estrategias de Renderizado: La elección (CSR, SSR, SSG, ISR) determina si el contenido esencial está en el HTML inicial, lo cual es crítico para el SEO.",
                "Ventaja de Next.js: Pre-renderiza contenido usando SSR o SSG para asegurar que Googlebot vea el contenido completo sin depender de JavaScript.",
                "Factores de Ranking: URLs cortas y semánticas, uso correcto de encabezados (`<h1>` una vez por página), y enlaces internos para distribuir la 'autoridad' (Link Equity).",
              ],
              tips: [
                "Para el SEO, maximiza el uso de **SSG** e **ISR** donde sea posible, y utiliza **SSR** solo cuando la frescura de los datos en cada solicitud sea una necesidad crítica.",
                "Asegúrate de que haya un solo `<h1>` por página.",
                "Utiliza el componente `<Link>` de Next.js para el *prefetching* y las optimizaciones de enrutamiento.",
              ],
            },
            {
              titulo:
                "C11: Estrategias de Renderizado y su Impacto en SEO (SSG, SSR, ISR, CSR)",
              descripcion:
                "Análisis detallado de las cuatro estrategias de renderizado. Se subraya que la disponibilidad del HTML completo y los metadatos en la carga inicial de la página es el factor más importante para el SEO y el rendimiento.",
              importancia: [
                "SSG (Static Site Generation): El HTML se genera en el **build time**. Es la **mejor opción para SEO** por su velocidad y pre-renderizado completo.",
                "SSR (Server-Side Rendering): El HTML se genera en el **request time**. Excelente para SEO de contenido dinámico (noticias, datos frescos).",
                "ISR (Incremental Static Regeneration): Combina velocidad estática con frescura dinámica (`revalidate`). Óptimo para blogs y catálogos grandes.",
                "CSR (Client-Side Rendering): El sitio se renderiza **completamente en el navegador**. Generalmente **no recomendado para SEO** crítico.",
              ],
              tips: [
                "La regla de oro: Para el contenido que debe indexarse, usa **SSG o SSR** para que los datos y metadatos estén disponibles en la carga inicial de la página sin depender de JavaScript.",
                "Prioriza **SSG o ISR** para la máxima velocidad y mejor Core Web Vitals (CWV).",
              ],
            },
            {
              titulo:
                "C12: El Fin de AMP y la Centralidad de las Core Web Vitals (CWV)",
              descripcion:
                "Análisis de la obsolescencia de AMP (Accelerated Mobile Pages) como requisito SEO, y la confirmación de que el enfoque de optimización ha cambiado permanentemente hacia las métricas de rendimiento intrínsecas del sitio (Core Web Vitals).",
              importancia: [
                "Contexto AMP: Era una tecnología que ofrecía una ventaja en el ranking, pero requería mantener dos versiones de la misma página.",
                "Abandono de AMP: Google eliminó la preferencia de ranking para AMP con la actualización de Core Web Vitals.",
                "Enfoque Actual: El rendimiento es medido directamente a través de las CWV (LCP, FID/INP, CLS).",
                "Impacto en Next.js: El soporte para AMP ha sido eliminado del framework (desde Next.js 16).",
              ],
              tips: [
                "Para el SEO moderno, ignora AMP.",
                "Concéntrate en obtener puntuaciones altas en **LCP** y **CLS** optimizando el rendimiento de la aplicación Next.js de forma nativa.",
              ],
            },
            {
              titulo:
                "C13: Estructura de URLs: Principios y Enrutamiento Dinámico en Next.js",
              descripcion:
                "Análisis de la estructura de URL como una práctica esencial de SEO, enfatizando la necesidad de URLs semánticas y consistentes que ayuden tanto a los usuarios como a los motores de búsqueda a comprender el contenido. Se detalla cómo Next.js gestiona esto.",
              importancia: [
                "Principios de URL: Deben ser descriptivas, cortas, usar guiones (-) para separar palabras y minimizar el uso de parámetros complejos (query strings).",
                "Enrutamiento Next.js: El Enrutamiento Basado en Archivos facilita naturalmente las URLs descriptivas (la estructura de carpetas se mapea a las rutas).",
                "Rutas Dinámicas ([slug]): Esencial para blogs y catálogos. Asegúrate de que el slug final en la URL sea la palabra clave principal.",
              ],
              tips: [
                "Revisa que tu servidor maneje correctamente las URLs con y sin *trailing slash*.",
                "Asegúrate de que la URL canónica siempre apunte a la versión limpia de la URL, evitando parámetros innecesarios.",
              ],
            },
            {
              titulo: "C14: Open Graph y Datos Estructurados (Structured Data)",
              descripcion:
                "Análisis de las 'Social Media Meta Tags' (Open Graph y Twitter Cards) para optimizar la forma en que el contenido se comparte, además de la importancia de los Datos Estructurados (Schema.org) para enriquecer la apariencia del sitio en los resultados de búsqueda (Rich Snippets).",
              importancia: [
                "Open Graph (OG) y Twitter Cards: Permiten controlar la imagen, el título y la descripción que se muestran cuando una URL es compartida en redes, mejorando el Click-Through Rate (CTR).",
                "Datos Estructurados (Schema.org): Vocabulario estandarizado para marcar el contenido de la página, ayudando a los motores a entender el contexto.",
                "Rich Snippets: Los datos estructurados correctos pueden habilitar características visuales avanzadas en los resultados de búsqueda (estrellas de calificación, FAQ), mejorando drásticamente el CTR.",
              ],
              tips: [
                "Se recomienda utilizar el formato **JSON-LD** para incluir los datos estructurados en el `<head>` o `<body>` de la página.",
                "Las etiquetas Open Graph y Twitter Cards se configuran de forma sencilla a través del objeto `metadata` en Next.js (App Router).",
              ],
            },
            {
              titulo:
                "C15: SEO On-Page: Estructura del Contenido (Headings y Link Equity)",
              descripcion:
                "Análisis de cómo la estructura interna de una página (encabezados y enlaces) impacta en el SEO. Los encabezados ayudan a la jerarquía, mientras que los enlaces internos distribuyen la autoridad de página (PageRank) a través del sitio.",
              importancia: [
                "Encabezados: Uso correcto de <h1> a <h6> para estructurar el documento. Debe haber solo un <h1> por página, representando el tema principal.",
                "Enlaces Internos: Conectan las páginas del sitio, distribuyendo la 'autoridad' de enlace (Link Equity) y ayudando a los rastreadores a descubrir nuevo contenido.",
                "Requisito Vital: Los enlaces siempre necesitan usar el atributo href para ser rastreados y considerados en PageRank.",
              ],
              tips: [
                "Utiliza **`next/link`** para los enlaces internos. Si el componente `<Link>` envuelve un componente personalizado que renderiza una etiqueta `<a>`, usa la propiedad **`passHref`**. Esto es **vital para el SEO**.",
                "Asegúrate de que el `<h1>` contenga la palabra clave principal de la página.",
              ],
            },
            {
              titulo:
                "C16: Core Web Vitals (CWV): La Experiencia de Usuario como Factor de Ranking",
              descripcion:
                "Análisis de la iniciativa Web Vitals de Google, enfocándose en las métricas Core Web Vitals (CWV) como un subconjunto crucial para medir la experiencia de página del usuario. Un buen desempeño en las CWV es ahora un factor de ranking directo.",
              importancia: [
                "Subconjunto CWV: Actualmente son tres métricas que miden la experiencia del usuario: LCP (Carga), FID/INP (Interactividad) y CLS (Estabilidad Visual).",
                "Factor de Ranking: Google usa las Core Web Vitals como un **factor de clasificación (ranking factor)** directo. Un bajo rendimiento impacta negativamente el ranking.",
                "Optimización: Next.js está diseñado para optimizar estas métricas gracias al pre-renderizado (SSG/SSR) y la optimización de activos.",
              ],
              tips: [
                "La meta es crear una experiencia más fluida, lo que reduce la tasa de rebote y mejora el SEO.",
                "El enfoque principal debe estar en LCP (carga) y CLS (estabilidad).",
              ],
            },
            {
              titulo: "C17: Umbrales y Estrategias de las Core Web Vitals",
              descripcion:
                "Introducción a los diferentes estados de medición (Good, Needs Improvement, Poor) de las Core Web Vitals y las dos estrategias clave para enfocar su optimización.",
              importancia: [
                "Clasificación: Las métricas se clasifican como **Good** (el sitio proporciona una excelente experiencia), **Needs Improvement** o **Poor** (impactando negativamente el ranking).",
                "Umbrales: Cada métrica tiene un umbral para ser considerada 'Good' (ej. LCP < 2.5s).",
                "Estrategias: 1. **Perfección Técnica** (mejor puntuación posible). 2. **Benchmark Competitivo** (superar a los competidores directos, que es el nivel real de competencia).",
              ],
              tips: [
                "Concéntrate en superar el umbral 'Good' para la mayoría de tus usuarios.",
                "Utiliza Lighthouse para el diagnóstico de laboratorio, pero recuerda que Google clasifica basado en datos de usuario reales (Field Data/CrUX).",
              ],
            },
            {
              titulo:
                "C18: Largest Contentful Paint (LCP): La Métrica de Carga Clave",
              descripcion:
                "Análisis de la métrica LCP, que mide el rendimiento de la carga al cuantificar el tiempo que tarda el elemento de contenido más grande (imagen o bloque de texto) en volverse visible dentro del viewport del usuario.",
              importancia: [
                "Medición: LCP mide el tiempo desde que la página comienza a cargarse hasta que el contenido principal es completamente renderizado.",
                "Umbral 'Good': LCP debe ocurrir en 2.5 segundos o menos.",
                "Causas de LCP Lento: Imágenes grandes, recursos que bloquean el renderizado (CSS/JS) o tiempos de respuesta lentos del servidor (TTFB).",
              ],
              tips: [
                "Optimiza LCP sirviendo el HTML con el contenido crítico en la primera respuesta HTTP (SSG/SSR).",
                "Usa el componente `next/image` y la propiedad `priority` en la imagen que será el LCP para optimizar su carga.",
                "Minimiza el tiempo de respuesta del servidor (TTFB).",
              ],
            },
            {
              titulo:
                "C19: First Input Delay (FID): Métrica de Interactividad y TBT",
              descripcion:
                "Análisis de la métrica FID, que mide la capacidad de respuesta de la página a la primera interacción del usuario. Un FID alto se percibe como una página 'congelada'.",
              importancia: [
                "Medición: FID mide el tiempo desde la primera interacción del usuario hasta que el navegador puede comenzar a procesar esa interacción.",
                "Causa del Retraso: El Hilo Principal del Navegador está ocupado ejecutando tareas pesadas de JavaScript.",
                "Umbral 'Good': FID debe ser de 100 milisegundos o menos.",
                "TBT (Total Blocking Time): Es el proxy medible en laboratorio (Lighthouse) para FID, y mide la cantidad total de tiempo que el hilo principal estuvo bloqueado.",
              ],
              tips: [
                "Para mejorar FID/TBT, hay que reducir el tamaño de las tareas de JavaScript (usando Code Splitting y Dynamic Imports) para liberar el hilo principal.",
                "FID solo se puede medir con **datos de usuarios reales** (*Field Data*).",
              ],
            },
            {
              titulo:
                "C20: Cumulative Layout Shift (CLS): Métrica de Estabilidad Visual",
              descripcion:
                "Análisis de la métrica CLS, que mide la estabilidad visual de una página. Un CLS alto ocurre cuando los elementos de la página se mueven de forma inesperada después de ser cargados, causando clics erróneos.",
              importancia: [
                "Medición: CLS cuantifica la frecuencia y la gravedad de los cambios de diseño inesperados.",
                "Causas Comunes: Imágenes sin dimensiones (width/height), anuncios que se cargan tarde o fuentes web que tardan en cargar (FOIT/FOUT).",
                "Umbral 'Good': CLS debe ser de 0.1 o menos.",
              ],
              tips: [
                "El componente `<Image>` de Next.js resuelve CLS automáticamente al forzar la especificación de dimensiones, reservando el espacio.",
                "El uso de la función de optimización de fuentes de Next.js ayuda a eliminar el CLS causado por el cambio de fuentes.",
              ],
            },
            {
              titulo:
                "C21: Impacto del SEO: La Fusión de Rendimiento y Ranking",
              descripcion:
                "Análisis de cómo el rendimiento web se convirtió en un factor de ranking explícito en 2021. Se detalla la importancia de la velocidad para la UX y la ponderación que Google otorga a estas métricas en Lighthouse.",
              importancia: [
                "Factor de Ranking Explícito: Las CWV son un factor de clasificación claro en el algoritmo de búsqueda de Google.",
                "Regla del 'Good': Todas las páginas que caen dentro del rango 'Good' tienen el mismo impacto positivo en el ranking, no se requiere la perfección.",
                "Ponderación Lighthouse (Ejemplo): LCP (25%), TBT (25%), CLS (5%), etc. La velocidad tiene una ponderación significativa del 50% entre LCP y TBT.",
              ],
              tips: [
                "La velocidad es crucial para la experiencia de usuario y la conversión. Un rendimiento deficiente impacta directamente el negocio.",
                "El objetivo es la 'Experiencia de Página' completa, donde el rendimiento y la utilidad del contenido se fusionan.",
              ],
            },
            {
              titulo:
                "C22: Optimización Activa: Usando las Características de Next.js para Mejorar las CWV",
              descripcion:
                "El plan de ataque para mejorar el rendimiento. Se establece que las características incorporadas de Next.js son la solución directa y más eficiente para abordar los problemas subyacentes de LCP, FID/TBT y CLS.",
              importancia: [
                "Ejes de Optimización: La estrategia se centra en: 1. Medición (Lighthouse). 2. Optimización de Imágenes y Fuentes (LCP/CLS). 3. Optimización de JavaScript (FID/TBT). 4. Gestión de Scripts de Terceros.",
                "Herramientas Next.js: El framework proporciona soluciones *out-of-the-box* para cada problema: `next/image`, `next/dynamic`, optimización automática de fuentes y `next/script`.",
              ],
              tips: [
                "Utiliza la herramienta adecuada de Next.js para cada tipo de activo o problema de rendimiento.",
                "El uso del pre-renderizado (SSG/ISR) es el primer paso y el más importante para optimizar el LCP.",
              ],
            },
            {
              titulo:
                "C23: Introducción a Lighthouse: La Herramienta de Diagnóstico Esencial",
              descripcion:
                "Análisis de Lighthouse, una herramienta de auditoría automatizada que simula un entorno controlado ('laboratorio') para medir y reportar el rendimiento de una página web, con un enfoque principal en las Core Web Vitals (CWV).",
              importancia: [
                "Función: Ejecuta auditorías de rendimiento, accesibilidad, mejores prácticas y SEO.",
                "Simulación (Lab Data): Opera en un entorno simulado (emulando un dispositivo móvil lento y una conexión 4G), midiendo LCP, CLS y TBT.",
                "Diferencia vs. CrUX: Lighthouse proporciona datos de laboratorio (diagnóstico), mientras que el CrUX Report proporciona datos de campo (lo que ven los usuarios reales).",
              ],
              tips: [
                "Siempre ejecutar reportes en una **Ventana de incógnito**.",
                "Probar con una **Producción Build** (`npm run build && npm run start`) para obtener resultados precisos y reflejar las optimizaciones de Next.js.",
              ],
            },
            {
              titulo:
                "C24: next/image: LCP, CLS y Optimización de Imágenes 'Out-of-the-Box'",
              descripcion:
                "Análisis de cómo el componente `next/image` aplica optimizaciones automáticas cruciales para el rendimiento, mejorando las métricas LCP y CLS.",
              importancia: [
                "Evita CLS: Requiere las propiedades `width` y `height` para reservar el espacio, eliminando el **CLS**.",
                "Optimización On-Demand: Las imágenes se optimizan (redimensionamiento, compresión) **bajo demanda** y utiliza formatos modernos (ej. WebP/AVIF).",
                "Lazy Loading (Por Defecto): Las imágenes fuera del viewport se cargan de forma diferida automáticamente.",
                "Impacto LCP: Al optimizar la imagen LCP y usar la prop `priority`, se acelera la carga del elemento más grande.",
              ],
              tips: [
                "Para las imágenes que son el **LCP**, añadir la propiedad `priority` a `<Image>`.",
                "Siempre utiliza el componente `<Image>` en lugar de la etiqueta `<img>` nativa de HTML.",
              ],
            },
            {
              titulo:
                "C25: Dynamic Imports: Dividir el Código y Mejorar la Interactividad (FID/TBT)",
              descripcion:
                "Análisis de la técnica de Dynamic Imports (`import()`) para cargar módulos de JavaScript solo cuando son necesarios, reduciendo el tamaño del paquete JS inicial, lo que disminuye el Total Blocking Time (TBT) y mejora el First Input Delay (FID).",
              importancia: [
                "Mecanismo: El código no esencial se carga como un *chunk* de JS separado.",
                "Impacto CWV: Reduce el TBT y mejora el FID al liberar el Hilo Principal del Navegador, permitiendo que las interacciones del usuario se procesen más rápido.",
                "Resolución de Lighthouse: Resuelve el aviso 'Remove unused JavaScript'.",
              ],
              tips: [
                "Aplica Dynamic Imports a cualquier librería o componente que **no sea visible Above the Fold** y no sea necesaria para la carga inicial.",
                "La sintaxis es `import('ruta/del/modulo')` y se utiliza dentro de componentes o eventos.",
              ],
            },
            {
              titulo:
                "C26: next/dynamic: Lazy Loading a Nivel de Componente y Optimizaciones Adicionales",
              descripcion:
                "Uso de `next/dynamic` para aplicar Dynamic Imports a componentes completos de React, asegurando que solo se carguen cuando sean estrictamente necesarios, mejorando el TBT y la carga inicial.",
              importancia: [
                "Wrapper: `next/dynamic` es un *wrapper* sobre `React.lazy()` que simplifica la aplicación de Dynamic Imports a nivel de componente.",
                "Uso Común: Ideal para modales, carruseles, charts o cualquier componente con alta lógica JS que no se vea inmediatamente.",
                "ssr: false: Permite desactivar el Server-Side Rendering para componentes que solo funcionan en el navegador (ej. librerías con dependencias de `window`).",
              ],
              tips: [
                "La mejor práctica es envolver el componente dinámico en una condición (`{isModalOpen && <ComponenteDinamico... />}`) para asegurar que el JS se descargue **solo** cuando se abre el modal.",
                "El *lazy loading* es una estrategia fundamental para el **Code Splitting** de Next.js.",
              ],
            },
            {
              titulo:
                "C27: Optimización Automática de Fuentes Web: Mejorando LCP y CLS",
              descripcion:
                "Análisis de cómo Next.js mitiga el costo de rendimiento de las fuentes web (que son cruciales para el branding), ya que son un contribuyente común al CLS y al LCP.",
              importancia: [
                "Problema: Las fuentes requieren una solicitud de red separada (*round trip*) para el CSS y el archivo de fuente, causando retrasos y el 'parpadeo de texto' (FOUT/FOIT).",
                "Solución Next.js: Implementa la **Optimización Automática de Fuentes Web** al detectar las solicitudes de fuentes y automáticamente **inlining (incrustar)** el CSS (`@font-face`) directamente en el HTML en el tiempo de compilación (Build Time).",
                "Beneficios: Elimina el *round trip* extra, acelerando la renderización de texto y mejorando **LCP** y **CLS**.",
              ],
              tips: [
                "Las versiones modernas de Next.js (13+) ahora utilizan `next/font`, que también optimiza el CLS al auto-alojar archivos de fuente e inyectar *fallbacks* CSS.",
              ],
            },
            {
              titulo:
                "C28: next/script: Gestionando Scripts de Terceros de Forma Óptima",
              descripcion:
                "Análisis de cómo `next/script` permite controlar con precisión el momento de carga y ejecución de los scripts de terceros (ej. analíticas, anuncios, widgets) para evitar el bloqueo de la renderización y mejorar las CWV.",
              importancia: [
                "Problema: El código de terceros puede retrasar la renderización del contenido crítico, afectando el **LCP** y la interactividad.",
                "Solución: El componente `<Script>` se integra con Next.js y ofrece la propiedad `strategy` para controlar la carga.",
                "Estrategias de Carga:",
                " - **`afterInteractive`:** (Recomendado) Carga el script inmediatamente **después** de que la página se vuelve interactiva, sin bloquear el LCP.",
                " - **`lazyOnload`:** Carga de forma **diferida** durante el tiempo de inactividad del navegador (ideal para scripts no esenciales, como widgets de chat).",
                " - **`beforeInteractive`:** (Solo para scripts críticos) Ejecuta el script antes de la interacción.",
              ],
              tips: [
                "Para herramientas como Google Analytics, utiliza `strategy='afterInteractive'` para asegurar que el rendimiento inicial no se vea penalizado.",
                "El componente se puede colocar en cualquier parte del componente de React sin usar `next/head`.",
              ],
            },
            {
              titulo:
                "C29: Monitoreo: Tracking de CWV en Producción y Herramientas de Reporte",
              descripcion:
                "Análisis de la importancia de monitorizar las Core Web Vitals en un entorno de producción para garantizar que las optimizaciones persistan, utilizando datos de usuarios reales (*Field Data*).",
              importancia: [
                "Realidad vs. Laboratorio: La clave es el seguimiento **a lo largo del tiempo** (Tendencia), utilizando datos de usuario reales (Field Data), ya que es lo que Google usa para el ranking.",
                "Umbral de Google: Las métricas deben mantenerse en el rango 'Good' para el **75% de las visitas de los usuarios** (percentil 75).",
                "Herramientas Clave:",
                " - **Next.js Speed Insights:** Recopila y visualiza automáticamente los datos de CWV de tráfico real (en Vercel).",
                " - **CrUX Report (Chrome User Experience Report):** Fuente de datos de Google que alimenta **Google Search Console**.",
              ],
              tips: [
                "Utiliza la función `reportWebVitals` de Next.js para enviar las métricas a servicios de monitoreo personalizados (ej. Google Analytics).",
                "Combina el **diagnóstico de laboratorio (Lighthouse)** para el 'porqué' con los **datos de campo (CrUX)** para el 'qué' (lo que Google ve).",
              ],
            },
          ],
          "Qué aprendí": [
            {
              titulo: "Dominio del Pilar Técnico de SEO y Arquitectura Next.js",
              descripcion:
                "Adquirí la capacidad de optimizar el sitio a nivel de arquitectura, asegurando la rastreabilidad y la indexación correcta del contenido crucial.",
              aplicado: [
                "Configuración de metadatos (Title, Description, Open Graph) utilizando el objeto `metadata` del App Router.",
                "Gestión del rastreo mediante `robots.txt` y la generación de **Sitemaps XML dinámicos**.",
                "Implementación de estrategias de renderizado (SSG, ISR, SSR) para garantizar que el HTML completo esté disponible para los *crawlers*.",
              ],
              recomendacion: [
                "Priorizar el Server-Side Rendering (SSR) o Static Site Generation (SSG) para cualquier página que deba ser indexada, asegurando que el contenido esencial no dependa de JavaScript.",
                "Revisar regularmente los informes de cobertura y Sitemaps en Google Search Console para identificar errores de rastreo.",
              ],
            },
            {
              titulo:
                "Optimización de Core Web Vitals (CWV) con Herramientas Nativas",
              descripcion:
                "Comprendí cómo medir el rendimiento con Lighthouse y aplicar soluciones de Next.js para mejorar las métricas LCP, CLS y TBT/FID.",
              aplicado: [
                "Uso del componente **`next/image`** para resolver problemas de LCP (con `priority`) y CLS (dimensionamiento automático).",
                "Implementación de **`next/dynamic`** y Dynamic Imports para el *Code Splitting*, reduciendo el tamaño del bundle JS y mejorando el **TBT/FID**.",
                "Uso de **`next/script`** con estrategias de carga (ej. `afterInteractive`) para evitar que scripts de terceros bloqueen el renderizado de la página.",
              ],
              recomendacion: [
                "Enfocarse en mantener el percentil 75 de LCP y CLS en el rango 'Good' (LCP < 2.5s, CLS < 0.1).",
                "Auditar la aplicación constantemente usando Lighthouse, ejecutando las pruebas con un *Production Build*.",
              ],
            },
          ],
          "Problemas comunes": [
            {
              titulo: "Contenido Duplicado e Indexación Errónea",
              descripcion:
                "URLs accesibles por múltiples caminos (ej. con/sin `www`, con/sin parámetros UTM), lo que puede confundir a Google y dispersar la 'autoridad' (Link Equity).",
              solucion: [
                "Implementar la etiqueta **Canónica** (`<link rel='canonical'>`) en todas las páginas, apuntando a la URL preferida.",
                "Configurar redirecciones 301/308 a nivel de servidor para consolidar el tráfico de versiones antiguas o no preferidas.",
              ],
              recomendacion: [
                "Asegurarse de que el CDN o Vercel Edge Functions maneje la redirección de `http` a `https` y de `www` a `non-www` (o viceversa) de forma consistente con 301/308.",
              ],
            },
            {
              titulo: "LCP Lento debido a la Carga Crítica",
              descripcion:
                "El Largest Contentful Paint (LCP) es lento porque la imagen principal de la página (Hero Image) se carga tarde, o el CSS/JS bloquea el renderizado.",
              solucion: [
                "Usar **`next/image`** y aplicar la propiedad **`priority`** a la imagen LCP.",
                "Minimizar los recursos que bloquean el renderizado (CSS/JS) usando *Code Splitting* y cargando solo el CSS crítico inicialmente.",
              ],
              recomendacion: [
                "Priorizar el pre-renderizado (SSR/SSG/ISR) para reducir el Tiempo hasta el Primer Byte (TTFB), que es un factor clave en LCP.",
              ],
            },
          ],
          "Buenas prácticas": [
            {
              titulo: "Estrategia de Renderizado para SEO",
              descripcion:
                "Maximizar el pre-renderizado para garantizar que el rastreador siempre reciba el contenido completo y optimizado en la primera solicitud (HTML).",
              ejemplos: [
                "Utilizar **SSG** (Static Site Generation) para la página de inicio o cualquier contenido que no cambie con frecuencia.",
                "Utilizar **ISR** (Incremental Static Regeneration) con un tiempo de `revalidate` apropiado (ej. 1 hora) para blogs y catálogos grandes, ofreciendo velocidad estática con frescura de datos.",
              ],
              recomendacion: [
                "Evitar el Client-Side Rendering (CSR) completo para cualquier ruta que se pretenda indexar en Google.",
              ],
            },
            {
              titulo: "Optimización del Code Splitting",
              descripcion:
                "Reducir el tamaño del bundle de JavaScript enviado al cliente para mejorar las métricas de interactividad (FID/TBT).",
              ejemplos: [
                "Implementar **Dynamic Imports** a nivel de componentes o librerías pesadas que se encuentren *Below the Fold* (ej. un reproductor de video o un widget de chat).",
                "Utilizar `next/dynamic` con la opción `loading` para mostrar un *placeholder* mientras se carga el componente pesado.",
              ],
              recomendacion: [
                "Monitorear los *chunks* de JavaScript en Lighthouse y aplicar la importación dinámica tan pronto como se detecte código no esencial grande.",
              ],
            },
          ],
          Ejemplos: [
            "// Configuración de metadatos en App Router (con Canonical)\nexport const metadata = {\n  title: 'Next.js SEO Page',\n  description: 'Optimización CWV y Rastreo.',\n  alternates: {\n    canonical: 'https://example.com/ruta-preferida',\n  },\n};",
            '// next/image con priority para LCP\nimport Image from \'next/image\';\n\nconst HeroImage = () => (\n  <Image\n    src="/hero.jpg"\n    width={1200}\n    height={800}\n    alt="Descripción esencial"\n    priority // Marca esta imagen como prioritaria para el LCP\n  />\n);',
            '// Configuración de next/script para deferir analíticas\nimport Script from \'next/script\';\n\nconst Analytics = () => (\n  <Script\n    src="https://analytics.com/script.js"\n    strategy="afterInteractive" // Carga después de la hidratación inicial\n  />\n);',
            "// Ejemplo de robots.txt en la carpeta /public\nUser-agent: *\nDisallow: /private/\nDisallow: /api/\n\nSitemap: https://www.ejemplo.com/sitemap.xml",
          ],
          "Errores frecuentes": [
            {
              titulo: "Bloquear la Indexación con `robots.txt`",
              descripcion:
                "Usar la directiva `Disallow: /` en el archivo `robots.txt` con la intención de ocultar una página, resultando en que Google rastrea la URL pero la lista de indexación no se actualiza, mostrando la URL en los resultados sin título ni descripción.",
              solucion: [
                "Utilizar la etiqueta **`noindex`** (`<meta name='robots' content='noindex'>`) en el `<head>` de la página. El `robots.txt` solo controla el *rastreo*, no la *indexación*.",
              ],
              recomendacion: [
                "Reservar `robots.txt` exclusivamente para la gestión del *Crawl Budget* (rutas inútiles para el SEO, ej. `/admin`).",
              ],
            },
            {
              titulo: "No usar `passHref` con `<Link>`",
              descripcion:
                "El rastreador de Google (o Vercel) puede fallar al rastrear enlaces internos cuando el componente `<Link>` envuelve un componente personalizado que a su vez renderiza una etiqueta `<a>`.",
              solucion: [
                "Asegúrate de agregar la propiedad **`passHref`** a `<Link>` cuando envuelve un componente hijo que es su propio enlace (ej. un botón estilizado).",
              ],
              recomendacion: [
                "Si no se usa un componente personalizado, la etiqueta `<a>` no debe estar dentro del `<Link>` en las versiones modernas de Next.js.",
              ],
            },
            {
              titulo: "Dimensiones Faltantes en `next/image`",
              descripcion:
                "No especificar `width` y `height` en el componente `<Image>`, lo que resulta en un valor CLS (Cumulative Layout Shift) alto debido a que el navegador no puede reservar el espacio para la imagen.",
              solucion: [
                "Siempre incluye las propiedades `width` y `height` para evitar cambios de diseño inesperados.",
              ],
              recomendacion: [
                "Para imágenes con diseños flexibles, utiliza la propiedad `fill` en lugar de dimensiones fijas, junto con el padre posicionado, para evitar CLS.",
              ],
            },
          ],
          "Tips rápidos": [
            "Para contenido indexable y crítico, maximiza el uso de **SSG** e **ISR** sobre el SSR/CSR.",
            "Utiliza la etiqueta canónica en **todas** las páginas para consolidar la autoridad y prevenir duplicados.",
            "Asegúrate de que la primera carga (HTML) contenga el contenido esencial para el rastreo, sin depender de la ejecución de JavaScript.",
            "Usa `next/image` con `width`/`height` explícitos para evitar el **CLS** y mejora el **LCP** con la prop `priority`.",
            "Aplica **Dynamic Imports** a cualquier componente o librería que **no sea visible Above the Fold** para mejorar la interactividad (FID/TBT).",
            "Utiliza `strategy='afterInteractive'` o `lazyOnload` en `next/script` para deferir la carga de scripts de terceros.",
            "Monitorea tus métricas de rendimiento en producción utilizando **datos de campo (CrUX)** y el umbral del **percentil 75**.",
          ],
        },
      },
    ],
  },
];
