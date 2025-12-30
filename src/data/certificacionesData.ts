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
    ],
  },
];
