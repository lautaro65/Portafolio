export const categorias = [
  {
    nombre: "Next.js",
    cursos: [
      {
        nombre:
          "Next.js Learn: Fundamentals and Architecture (Vercel – Official)",
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
            "Practical and conceptual study starting with the essential fundamentals of React (Components, Props, State/Hooks) and then addressing the modern architecture of Next.js (App Router). The course focuses on installation, file-based routing, and the critical distinction between Server Components (RSC) and Client Components to build optimized and interactive UIs.",
          "Conceptos clave": [
            {
              titulo: "C1: Next.js (Framework) vs. React (Library)",
              descripcion:
                "Understanding the roles of React (UI Library) and Next.js (Full-stack Framework). Study of the essential building blocks (Routing, Data Fetching, Rendering, etc.) that Next.js solves for modern web app creation.",
              importancia: [
                "Fundamental Difference: Next.js provides the tooling and structure (framework), while React is the base layer for the interface (library), enabling faster full-stack development with less configuration.",
                "Building Blocks: Identification of the nine crucial aspects (UI, Routing, Data Fetching, Integrations, etc.) that make up a scalable web app, and how Next.js addresses them in a pre-optimized way.",
              ],
              tips: [
                "Adopt Conventions: Use Next.js conventions and APIs (e.g., file system for Routing) to avoid reconfiguring and developing custom solutions for common requirements.",
                "Full-Stack Approach: Take advantage of Next.js allowing both client and server logic within the same project, improving coherence and developer experience.",
              ],
            },
            {
              titulo: "C2: Browser Architecture: The DOM and the UI",
              descripcion:
                "Analysis of how the browser interprets code, from receiving the HTML to building the Document Object Model (DOM). Understanding the DOM as the bridge that allows JavaScript to manipulate the interface.",
              importancia: [
                "Rendering Process: The browser reads the HTML file and builds the DOM, a tree-shaped object representation that reflects the UI elements.",
                "Role of the DOM: The DOM is the essential interface between JavaScript code and the visual elements of the page, allowing event listening and manipulation (add, update, delete) of the interface.",
              ],
              tips: [
                "The Need for Abstraction: Recognize that direct DOM manipulation is costly and complex in large applications, justifying the use of libraries like React that manage the DOM in an optimized and declarative way.",
                "Declarative Approach: In a React/Next.js environment, the focus should be on declaring the desired UI state, letting React handle DOM manipulation efficiently through its abstraction.",
              ],
            },
            {
              titulo:
                "C3: Imperative vs. Declarative Programming (The Reason for React)",
              descripcion:
                "Analysis of direct DOM manipulation using JavaScript methods ('Imperative'), highlighting its verbose and inefficient nature for large applications. Introduction to React's 'Declarative' approach as a solution for efficient UI updates.",
              importancia: [
                "Imperative Nature of the DOM: Understand that manually updating the DOM requires multiple steps and methods (`getElementById`, `createElement`, `appendChild`) for a simple change, which is error-prone and time-consuming.",
                "DOM vs. Source Code: Distinguish that HTML represents the initial page content, while the DOM represents the updated content after JavaScript manipulation.",
                "Adopting the Declarative Approach: Recognize that React allows developers to declare WHAT they want to display (the final state), letting React decide HOW and WHEN to update the DOM most efficiently.",
              ],
              tips: [
                "Scalability and Maintenance: Avoid direct DOM manipulation in large projects (imperative), as it becomes unsustainable as teams and application complexity grow.",
                "Code Reduction: Use React's component model to reduce the amount of code needed to manage the UI, improving development speed and readability.",
              ],
            },
            {
              titulo: "C4: The Foundation of React: ReactDOM and JSX",
              descripcion:
                "Study of the minimal configuration needed to start React, including the ReactDOM API to bind the app to the DOM (Root) and the JSX syntax, vital for describing the UI declaratively and HTML-like.",
              importancia: [
                "Creating the Root: Understand the use of `ReactDOM.createRoot()` to select the root DOM element (`#app`) and set the mounting point where React components will be rendered.",
                "JSX (Declarative Syntax): Recognize JSX as the syntax extension that allows writing HTML-like code inside JavaScript, making visual UI description concise.",
                "Compilation (Babel): Understand that JSX is not valid JavaScript for the browser and requires a compiler (like Babel) to transform it into React function calls that the browser can execute.",
              ],
              tips: [
                "Hidden Configuration: In Next.js, this initial setup (React Scripts, Babel) is fully automated and hidden, allowing the developer to focus only on component logic (the great value of using a framework).",
                "Repetition Reduction: Value how JSX eliminates the need to write long imperative JavaScript instructions, letting the developer focus on component composition.",
                "JavaScript Mastery: Recognize the list of essential JavaScript topics (Functions, Objects, Array Methods, Destructuring) that are the foundation for writing effective and modern React code.",
              ],
            },
            {
              titulo: "C5: Components (The Building Block of the UI)",
              descripcion:
                "Study of the concept of Components as modular and reusable units. Understanding that Components in React are simply JavaScript functions that return UI elements (JSX) and how their composition forms the application tree.",
              importancia: [
                "Reusable Units: Components allow dividing the interface into small, self-contained blocks (like 'LEGO bricks'), making the code more modular, scalable, and maintainable in the long term.",
                "Components as Functions: Recognize that a component is a function that returns JSX. The key convention is to capitalize the function name (`Header`) to distinguish it from HTML/JavaScript tags.",
                "Component Composition: Understand how components nest within each other to form a tree structure of the UI, which is the fundamental pattern for building complex applications.",
              ],
              tips: [
                "Correct Rendering: When rendering a root component, use the HTML tag syntax (`<HomePage />`) inside `root.render()` instead of just passing the function (`HomePage`) so React treats it as a component.",
                "Modularity for Maintenance: Whenever possible, encapsulate UI sections in new components so any addition or update affects only that modular block.",
                "Core Concepts: Remember that Components, Props, and State are the three pillars of React. Knowledge of the latter two will be essential to add dynamism to these modular blocks.",
              ],
            },
            {
              titulo: "C6: Props and One-Way Data Flow",
              descripcion:
                "Mastery of Props as the fundamental mechanism to make components reusable and dynamic. Understanding React's one-way data flow (from parent to child) and using JSX to integrate JavaScript logic.",
              importancia: [
                "Dynamic Data: `props` allow passing data, functions, or other components from a parent to a child, enabling reuse of the same structure with variable information (similar to HTML attributes).",
                "One-Way Data Flow: Understand that data flows exclusively from top to bottom in the component tree, simplifying information tracking and application logic, improving predictability.",
                "List Generation (`array.map()`): Use JavaScript's `map()` method inside JSX to iterate over data collections (arrays) and dynamically generate UI elements for each item.",
              ],
              tips: [
                "Use of Braces `{}`: Use brace syntax `{}` in JSX to enter 'JavaScript land', which is essential for embedding variables, expressions, ternaries, or function calls (e.g., `{title}`).",
                "Props Destructuring: Use object destructuring (`function Component({ prop1, prop2 })`) in the function parameters to access properties cleanly and make the code more readable.",
                "The `key` Prop in Lists: Always assign a unique and stable `key` prop (preferably a data ID, not an index) to elements generated by `map()` to ensure React can efficiently optimize DOM updates.",
              ],
            },
            {
              titulo: "C7: State and Event Handling",
              descripcion:
                "Implementation of interactivity through user event management (e.g., `onClick`). Introduction to the `useState()` Hook to store dynamic information within a component, making the UI respond to user actions.",
              importancia: [
                "Event Handling: Use attributes like `onClick` (camelCase) in JSX to bind a JavaScript function (the *event handler*) that will execute in response to user interaction.",
                "State as Memory: State (`useState`) is React's tool for components to 'remember' information that changes over time and triggers a re-render when updated.",
                "Value and Setter: The `useState()` Hook returns an array with two elements: the current state value (`likes`) and a function to update that value (`setLikes`), making reading and updating easy.",
              ],
              tips: [
                "Logic Location: Keep state (the `useState` logic) and its update function within the component where it starts. If needed in a child, pass it as a `prop` (function or value).",
                "Exclusive Update: Always use the setter function provided by `useState` to update the value. Never mutate state directly to ensure React can track changes.",
                "Client Component: Any component using `useState` or handling user events (interactivity) must be marked with `'use client'` in Next.js, as it depends on browser capabilities.",
              ],
            },
            {
              titulo:
                "C8: Transition: Manual React to Next.js (Framework Need)",
              descripcion:
                "Synthesis of React's three pillars (Components, Props, and State) and the justification for migrating from manual setup (Scripts, Babel) to Next.js. Recognition that Next.js handles complex configuration and enables modern architecture (Server/Client Components).",
              importancia: [
                "React Foundation Summary: Consolidated understanding of the three fundamentals: Components (modularity), Props (parent-to-child data flow), and State (interactivity and component memory management).",
                "Configuration Problem: Understand that React's setup (scripts, ReactDOM, Babel) becomes complex in large applications, justifying the use of Next.js, which automates all this tooling.",
                "Framework Requirement: Recognition that modern React features, such as Server and Client Components, cannot be used without the advanced architecture and bundler provided by Next.js.",
              ],
              tips: [
                "Best Practice is to Build: Reaffirm that the best way to master React is through practical building, and Next.js facilitates this process by reducing boilerplate and configuration.",
                "Next.js Approach: From now on, the focus is on how Next.js applies these React fundamentals and adds optimizations like pre-rendering and route management.",
              ],
            },
            {
              titulo: "C9: Next.js App Router Setup and Routing",
              descripcion:
                "Installation and initial configuration of Next.js, highlighting tooling automation (removal of Babel and ReactDOM scripts). Introduction to File-System Routing (App Router) and Server Component architecture.",
              importancia: [
                "Removal of Manual Tooling: Next.js automates the setup of React, ReactDOM, and Babel (JSX compilation), allowing the developer to immediately focus on application logic.",
                "File-System Routing (App Router): The folder and file structure inside the `app/` directory defines the application's routes. Files like `page.js` (route UI) and `layout.js` (shared UI) are key conventions.",
                "Server Components (Default): The default in Next.js is to render components on the server. This conflicts with interactive Hooks (`useState`), requiring explicit use of Client Components for interactivity.",
              ],
              tips: [
                "Use the `dev` Script: Use `npm run dev` to start the development server, which handles JSX compilation, React installation, and real-time route creation.",
                "Role of `layout.js`: Understand that `layout.js` defines the main HTML structure (`<html>`, `<body>`) and is ideal for UI elements that do not change between pages (e.g., navigation bar or footer).",
                "ES Modules: Recognize that importing Hooks like `import { useState } from 'react';` replaces the need to prefix React methods with `React.` (e.g., `React.useState`).",
              ],
            },
            {
              titulo:
                "C10: React Server Components (RSC) vs. Client Components",
              descripcion:
                "Analysis of the two execution environments (Server/Client) and the architecture of Server (RSC) and Client Components. Understanding the 'Network Boundary' and the use of the `'use client'` directive to enable interactivity.",
              importancia: [
                "Server Components (RSC): The default in Next.js. They run on the server, ideal for data fetching, initial performance, and backend logic. They do not support interactive hooks (`useState`).",
                "Client Components: Components marked with the `'use client'` directive at the top of the file. They run on the client/browser and are necessary for handling state (`useState`), events (`onClick`), or direct DOM access.",
                "Network Boundary: Conceptual line separating Server and Client execution. The RSC Payload is the efficient data format sent to the client, mixing server-rendered HTML and placeholders/references for Client Components.",
              ],
              tips: [
                "Modularity Principle: Place `'use client'` only in components that need it (the lowest in the tree using hooks/events). This maximizes the portion of the app rendered on the server, optimizing performance.",
                "Fast Refresh: Next.js includes preconfigured Fast Refresh, providing instant feedback on changes without losing local component state during development.",
                "Server Data Fetching: Server Components' ability to run on the server allows moving data fetching logic directly to the component, which is faster and safer than doing it on the client.",
              ],
            },
          ],
          "Qué aprendí": [
            {
              titulo: "Mastery of React's Declarative Logic",
              descripcion:
                "I acquired the ability to build complex user interfaces declaratively and modularly, migrating from imperative DOM manipulation to React's efficient model.",
              aplicado: [
                "Creation of functional components with naming convention (PascalCase).",
                "Managing data flow using **Props**, ensuring information flows from parent to child.",
                "Implementing basic interactivity using the **`useState`** Hook to manage local component state and efficiently re-render the UI.",
              ],
              recomendacion: [
                "Always think about the UI design as a component tree before writing code (Composition).",
                "Ensure state immutability using the *setter* function provided by `useState`.",
              ],
            },
            {
              titulo: "Understanding Next.js Server/Client Architecture",
              descripcion:
                "Deep understanding of the App Router architecture, differentiating execution environments to optimize performance and enable interactivity strategically.",
              aplicado: [
                "Configuring application routes using the **File System**.",
                "Critical distinction between execution on the **Server** (RSC - by default) and the **Client**.",
                "Strategic use of the **`'use client'`** directive to encapsulate interactivity logic (Hooks and Events) only where strictly necessary, maximizing the portion rendered on the server.",
              ],
              recomendacion: [
                "Apply the **Server-First** principle: by default, a component should be a Server Component unless it explicitly needs browser features (hooks, events).",
                "Take advantage of Server Components being able to perform *Data Fetching* efficiently on the server, before UI hydration.",
              ],
            },
          ],
          "Problemas comunes": [
            {
              titulo: "Client Logic in Server Components",
              descripcion:
                "Trying to use `useState` or `useEffect` in a component not marked with `'use client'`, resulting in Hydration errors or failures in the browser.",
              solucion: [
                "Move the component containing the Hook to a separate file and add the `'use client'` directive at the top.",
                "Separate the presentation layer (Server) from the interaction layer (Client).",
              ],
              recomendacion: [
                "Keep Client Components as interactive 'leaves' in the tree, minimizing their code and position.",
                "If a large component needs interactivity, make it Client and only import Server Components as children.",
              ],
            },
            {
              titulo: "Private API Key Leaks",
              descripcion:
                "Accidental exposure of private environment variables (which should not go to the browser) in a Client Component.",
              solucion: [
                "Ensure secret keys are read **only** within **Server Components** or in files without `'use client'`. Server Components remove these variables from the client's JavaScript bundle.",
                "Never prefix private keys with `NEXT_PUBLIC_`.",
              ],
              recomendacion: [
                "Use the Server-First pattern to read environment variables, keeping keys out of the JavaScript sent to the browser.",
              ],
            },
          ],
          "Buenas prácticas": [
            {
              titulo: "Server-First Design Pattern",
              descripcion:
                "Prioritize implementing logic and data fetching on the server (RSC) and reserve Client Components only for handling events, state, and browser APIs.",
              ejemplos: [
                "Place `Data Fetching` directly in asynchronous Server Components (`async function`).",
                "Use `layout.js` and `page.js` as Server Components by default to improve load performance.",
                "Use Next.js `<Link>` component, which automatically prefetches routes.",
              ],
              recomendacion: [
                "Maximize the portion of the application rendered on the server to minimize the amount of JavaScript sent to the client (lower TTI - Time to Interactive).",
                "Reduce the number of files requiring the `'use client'` directive.",
              ],
            },
          ],
          Ejemplos: [
            "// Server Component (Default)\nconst Home = () => { return <div>Home Page</div>; }\nexport default Home",
            "// Server Component with Data Fetching\nexport default async function Page() {\n \t// Runs only on the server\n \tconst data = await fetch('https://api.example.com')\n \treturn <div>{data.title}</div>\n}",
            "// Client Component (Interactivity)\n'use client'\nimport { useState } from 'react'\n\nexport default function Counter() {\n \tconst [count, setCount] = useState(0)\n \treturn <button onClick={() => setCount(count + 1)}>{count}</button>\n}",
          ],
          "Errores frecuentes": [
            {
              titulo: "Not exporting pages/components",
              descripcion:
                "Forgetting `export default` in page files (`page.js` or `layout.js`) or not exporting a functional component.",
              solucion: [
                "Check that each route file has an `export default` for the page/layout function.",
                "Make sure to export any reusable component imported elsewhere.",
              ],
              recomendacion: [
                "Keep the convention: `export default function Page() { ... }` for main pages.",
              ],
            },
            {
              titulo: "Problems with the `key` Prop in Lists",
              descripcion:
                "Forgetting the `key` prop or using the array index as a key when rendering lists (`array.map()`), causing DOM errors and re-rendering failures.",
              solucion: [
                "Assign a unique and stable `key` prop (preferably a data ID) to each JSX element that is a direct child of a `map()`.",
                "If using the index, ensure the list will not change order or have elements added/removed.",
              ],
              recomendacion: [
                "Use `React DevTools` to quickly identify missing `key` warnings.",
              ],
            },
            {
              titulo: "Navigation without using `<Link>`",
              descripcion:
                "Using the standard HTML `<a>` tag instead of Next.js `<Link>` component for internal navigation, disabling prefetch and routing optimizations.",
              solucion: [
                'Replace all `<a>` with `<Link href="...">` for navigation between internal Next.js pages.',
                "Use `<a>` only for external links or if you need to force a full page reload.",
              ],
              recomendacion: [
                "Take advantage of `<Link>`'s automatic prefetching for instant navigation.",
              ],
            },
          ],
          "Tips rápidos": [
            "Use 'npm run dev' for development with Fast Refresh.",
            "Server Components can be `async` to `await` data fetching directly.",
            "Use React DevTools and Next.js DevTools for effective debugging of components and architecture.",
            "Use lowercase file and folder names (e.g., `[id]`, `dashboard`, `page.js`).",
          ],
        },
      },
    ],
  },
];
