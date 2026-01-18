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
      {
        nombre:
          "Next.js App Router: From Zero to Dashboard (Vercel – Official)",
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
            "Intensive conceptual and practical study focused on building a scalable Dashboard using the modern architecture of Next.js's App Router (version 14+). The course covers everything from asset optimization and UI implementation (Client/Server Components) to the full-stack layer: optimized data fetching (Streaming, Parallelism), secure mutation (Server Actions), error handling, accessibility, and route protection with authentication (NextAuth.js).",
          "Conceptos clave": [
            {
              titulo: "C1: Getting Started (Environment Setup and Structure)",
              descripcion:
                "Project installation with `create-next-app` using the 'starter-example' and `pnpm`. The App Router folder structure is introduced, and the use of TypeScript and placeholder data is justified.",
              importancia: [
                "Project Creation: Using `npx create-next-app@latest` with the `--example` flag to initialize the project with an existing codebase, reflecting real-world development.",
                "Package Management (pnpm): Adopting `pnpm` as the recommended package manager for its efficiency and speed, requiring the `pnpm i` command for dependency installation.",
                "App Router Structure: Introduction to the key convention of the `/app` folder (routes, components, and logic) and the separation of concerns into subfolders (`/app/lib` for functions/data, `/app/ui` for UI components).",
              ],
              tips: [
                "Automated Configuration: Most configuration files (`next.config.ts`) are automatically generated and pre-configured by `create-next-app`, allowing focus on logic.",
                "TypeScript (TS): The project uses TS (`.ts`, `.tsx`) for type safety. The `definitions.ts` file manually defines the data types to be used.",
                "Placeholder Data: The project includes `placeholder-data.ts` as mock data to build the UI without immediate dependency on an active database or API.",
              ],
            },
            {
              titulo: "C2: CSS Styling (Global Styles, Tailwind, and Modules)",
              descripcion:
                "Implementation of different styling strategies in the Next.js application, including global style configuration, the use of utility frameworks (Tailwind CSS), and style encapsulation with CSS Modules.",
              importancia: [
                "Global Styles: The `global.css` file is imported into the top-level component, the **Root Layout** (`/app/layout.tsx`), to apply CSS rules to *all* application routes (e.g., resets, `@tailwind` directives).",
                "Tailwind CSS: A *utility-first* CSS framework that allows writing utility classes directly in React code (`className`), improving development speed and preventing style collisions.",
                "CSS Modules: Allow isolating CSS to a specific component by automatically generating unique class names. They are imported as a style object (`import styles from '...'`) and applied via `styles.[class]`. ",
                "Conditional Class Management (`clsx`): Using the `clsx` library to conditionally toggle or apply classes (e.g., based on `'pending'` or `'paid'` status), simplifying dynamic class handling.",
              ],
              tips: [
                "Best Practice: It is recommended to import `global.css` only in the `Root Layout` to maintain a clear style structure.",
                "Flexibility: Next.js allows using multiple styling solutions simultaneously (Tailwind, CSS Modules, Sass, CSS-in-JS).",
                "Configuration: Tailwind integration is automated when creating a new project with `create-next-app`.",
              ],
            },
            {
              titulo:
                "C3: Optimizing Fonts and Images (next/font and next/image)",
              descripcion:
                "Applying Next.js asset optimization tools to improve performance and user experience, focusing on preventing Cumulative Layout Shift (CLS) through automatic font and image management.",
              importancia: [
                "Font Optimization (`next/font`): The `next/font` module downloads font files at **build time** and hosts them as static assets, eliminating additional network requests and preventing the **Cumulative Layout Shift (CLS)** caused by font changes.",
                "Using `<Inter>`: Importing Google fonts (e.g., `Inter`, `Lusitana`) and applying the class (`className`) to the `<body>` element of the **Root Layout** for global typography application.",
                "Image Optimization (`next/image`): The `<Image>` component extends the HTML `<img>` tag with automatic optimizations such as: **Layout Shift prevention**, **resizing** for different viewports, default **Lazy Loading**, and serving modern formats (WebP, AVIF).",
                "Crucial `<Image>` Props: It is a best practice to set `width` and `height` in `<Image>` so that Next.js calculates the **aspect ratio**, preventing *Layout Shift* during loading. These values should match the source file's ratio, not necessarily the rendered size.",
              ],
              tips: [
                "Secondary Fonts: It is possible to import multiple fonts and apply them only to specific elements, specifying the necessary `weights` (e.g., 400 and 700) for optimal performance.",
                "Static Images: Images should be placed in the `/public` directory to be referenced directly in the `src` property of the `<Image>` component.",
                "Responsive Design: It is possible to use multiple `<Image>` components with conditional Tailwind CSS classes (`hidden md:block`) to serve entirely different images based on screen size (e.g., `hero-desktop.png` vs `hero-mobile.png`).",
              ],
            },
            {
              titulo: "C4: Creating Layouts and Pages (Routing and Shared UI)",
              descripcion:
                "Mastering file-based routing in the App Router, using folders for route segments and the special files `page.tsx` and `layout.tsx` to construct the user interface.",
              importancia: [
                "File-System Routing: **Folders** in `/app` define the route segments (URL), and the `page.tsx` file is mandatory for a route to be publicly accessible (endpoint). ",
                "Nested Layouts: The `layout.tsx` file defines the **shared UI** (e.g., a navigation bar) for its nested routes. It receives the pages or sub-layouts as the `children` prop.",
                "Partial Rendering: A key advantage of layouts. During navigation, only the components within `children` (the page) are updated, while the layout **is not re-mounted** and retains its client-side React state.",
                "Colocation: The App Router allows placing UI components (`/ui`), business logic (`/lib`), and test files next to the routes (`page.tsx`), making only the content of `page.tsx` publicly visible.",
              ],
              tips: [
                "Root Layout: The `/app/layout.tsx` file is **mandatory** in every Next.js application. It defines the root tags (`<html>`, `<body>`) and applies UI (like fonts and global styles) shared across the *entire* application.",
                "UI Separation: It is recommended to use the **Root Layout** only for global structure (HTML, fonts) and nested layouts (e.g., `/dashboard/layout.tsx`) for section-specific UI (e.g., side navigation).",
              ],
            },
            {
              titulo:
                "C5: Navigating Between Pages (Client-Side Routing and Prefetching)",
              descripcion:
                "Implementing efficient internal navigation without page reload using Next.js's `<Link>` component. The `usePathname()` hook is used to manage the active state of links.",
              importancia: [
                "The `<Link>` Component: It is the replacement for the traditional HTML `<a>` tag for internal links. It enables **Client-Side Navigation** using JavaScript, avoiding full page reloads.",
                "Automatic Optimization: Next.js automatically performs **Code-Splitting** (code division by route segments) and **Prefetching** (preloading) in production. When a `<Link>` is visible in the viewport, it preloads the destination route's code in the background, resulting in near-instant page transitions.",
                "Active Link Management: The `usePathname()` hook is used to get the user's current route. Since it's a React Hook, the component using it must be marked with the `'use client'` directive to become a **Client Component**.",
                "Conditional Pattern: The `clsx` library (introduced in C2) is used along with `usePathname()` to conditionally apply styles (e.g., light blue background, blue text) when `pathname` matches `link.href`, indicating the active link to the user.",
              ],
              tips: [
                "When to use `'use client'`: The directive is only necessary in components that depend on React Hooks (`usePathname`, `useState`, `useEffect`) or handle browser interactivity.",
                "Safety: Code Splitting isolates pages; an error in one route will not stop the rest of the application from functioning.",
                "Alternative to `usePathname`: The `clsx` library allows creating a conditional class cleanly: `{ 'active-class': pathname === link.href }`.",
              ],
            },
            {
              titulo:
                "C6: Setting Up Your Database (Vercel Integration and Seeding)",
              descripcion:
                "Configuration and linking of the Next.js project with a PostgreSQL database through Vercel integrations. The deployment workflow and database initialization are covered.",
              importancia: [
                "Workflow (GitHub/Vercel): Linking the GitHub repository with Vercel to get **automatic deployments** every time a *push* is made to `main`, and **Instant Preview URLs** for Pull Requests. ",
                "Database Configuration: Creating and connecting a PostgreSQL database through the 'Storage' tab of the Vercel panel, choosing the closest **region** (ideally Washington D.C. `iad1`) to reduce latency.",
                "Environment Variables (`.env`): Obtaining database credentials (secrets) from Vercel and pasting them into the local `.env` file. It is **critical** to ensure that the `.env` file is listed in `.gitignore` to prevent secret exposure.",
                "Seeding (Data Initialization): Using a local script (`/seed`) that executes SQL commands to create tables and **populate** the database with placeholder data (`placeholder-data.ts`), allowing development to start with initial data.",
              ],
              tips: [
                "Connection Verification: The database connection and functionality are verified by running a simple SQL query through a *Route Handler* (`app/query/route.ts`), ensuring the connection is successful before proceeding.",
                "Password Security: The *seeding* script uses `bcrypt` (or `bcryptjs`) to **hash** user passwords before storing them, an essential security practice.",
                "Database Maintenance: In development, `DROP TABLE tablename` can be used to delete existing tables and re-seed, but this should **never** be done in a production environment.",
              ],
            },
            {
              titulo:
                "C7: Fetching Data (Server Components, SQL, and Parallelism)",
              descripcion:
                "Data fetching strategies for the Dashboard summary page. The use of React Server Components (RSC) to query the database directly is justified, and performance issues introduced by request 'waterfalls' are resolved.",
              importancia: [
                "Data Fetching in Server Components (RSC): The `async/await` syntax is used directly in page components (which are RSC by default) to fetch data without the need for Hooks (`useEffect`, `useState`). This eliminates the extra API layer (Route Handlers) for direct queries, as database credentials remain secure on the server. ",
                "Using SQL: The `postgres.js` library and SQL (the industry standard) are used to write queries. This allows **filtering and manipulating data precisely in the database** (e.g., `LIMIT 5`, `SELECT COUNT(*)`), transferring only the necessary information instead of the entire table.",
                "Request Waterfalls: Identifying 'waterfalls' of requests, where a data request starts **only after** the previous one has finished (unintentional sequentiality), negatively impacting performance. ",
                "Parallel Data Fetching: Solving the 'waterfalls' problem by initiating multiple data requests concurrently using the native JavaScript function **`Promise.all()`**. This ensures that requests execute simultaneously, reducing the total loading time.",
              ],
              tips: [
                "When to use API: APIs (`Route Handlers`) are necessary if data is fetched from the **client** (since database secrets would be exposed) or if third-party services are used.",
                "SQL vs JavaScript: It is more efficient to use SQL to filter and aggregate data (e.g., `COUNT(*)` or `SUM()`) in the database than to load all data and manipulate it with JavaScript on the server.",
                "Intentional Waterfalls: The waterfall pattern is acceptable only when one request depends on the data returned by the previous one (e.g., getting the user ID before getting their friends).",
              ],
            },
            {
              titulo:
                "C8: Static and Dynamic Rendering (Cache and Blocking Strategies)",
              descripcion:
                "Analysis of the two main rendering strategies in Next.js (Static vs. Dynamic) and how data fetching latency can create a 'block' in the rendering of the entire page.",
              importancia: [
                "Static Rendering: Occurs on the server at **build time** or during revalidation. It is ideal for data-less content or shared data (blogs, product pages) because it offers **faster sites** (served from global cache), **reduces server load**, and optimizes **SEO** (pre-rendered indexable content).",
                "Dynamic Rendering: Occurs on the server at **request time**. It is necessary for **real-time data**, **personalized content** (dashboards, user profiles), or when access to information only available in the request is required (e.g., Cookies, URL `searchParams`).",
                "The Slowest Component Problem: With Dynamic Rendering, **the page is only as fast as the slowest data request**.",
                "UI Blocking: If a data request is intentionally or accidentally slow (e.g., 3-second `setTimeout` in `fetchRevenue`), it blocks the rendering of **the entire page** until it resolves, degrading the user experience.",
              ],
              tips: [
                "Activating Dynamism: Next.js uses static rendering by default. It switches to dynamic when a page component uses functions only available at request time (`searchParams`, `cookies`, `headers`) or when the request cache is disabled (`fetch(..., { cache: 'no-store' })`).",
                "Trade-off: Static rendering improves performance but cannot reflect recent data changes (not suitable for a dashboard without revalidation). Dynamic ensures up-to-dateness but can be slower.",
              ],
            },
            {
              titulo: "C9: Streaming (Suspense, loading.tsx, and Skeletons)",
              descripcion:
                "Applying the Streaming technique to enhance user experience (UX) by preventing slow data requests from blocking the rendering of the entire page. It is implemented with Suspense boundaries and the use of loading skeletons. ",
              importancia: [
                "Streaming: A data transfer technique that divides the route into 'chunks' and progressively sends them from the server to the client as they are ready. This allows the user to **see and interact** with the static parts of the page without waiting for the slowest component. ",
                "Page-Level Implementation (`loading.tsx`): The `loading.tsx` file is a special Next.js file that, based on React Suspense, defines the *fallback* UI for the entire page or route. It displays a **loading skeleton** while the dynamic content is being generated.",
                "Component-Level Implementation (`<Suspense>`): The React `<Suspense>` component is used to wrap specific components that fetch data slowly. This allows for more granular control, showing a *fallback* only for the component that is loading, without blocking the rest of the UI.",
                "Best Practice (Data Colocation): The general recommendation is to **move data fetching logic closer to the components that need it** and then wrap those components in `<Suspense>`. This creates granular loading boundaries and prevents blocking.",
                "Loading Skeletons: Simplified versions of the UI (placeholders) that are sent immediately as part of the static file, visually indicating to the user where the content will appear.",
              ],
              tips: [
                "Route Groups: The convention of folders in parentheses (`/(overview)`) is used to **logically organize files without affecting the URL** (e.g., `/dashboard/(overview)/page.tsx` is still `/dashboard`). This allows a `loading.tsx` to affect only a specific group of pages.",
                "Component Grouping: Multiple related components (e.g., the `Card`s) can be grouped into a *wrapper* and only the *wrapper* wrapped with `<Suspense>`. This avoids the visually jarring 'popping' effect if each element loaded individually.",
                "Interruptible Navigation: Thanks to Streaming, the user can navigate to another page without waiting for the current page to finish loading.",
              ],
            },
            {
              titulo:
                "C10: Searching and Pagination (URL Search Params and Client Hooks)",
              descripcion:
                "Implementing search and pagination functionalities using URL parameters (`searchParams`) instead of client-side state. Next.js hooks are used to manipulate the URL without reloading the page.",
              importancia: [
                "URL Search Params as State: The URL (e.g., `/invoices?page=1&query=pending`) is used to manage search and pagination state. This allows for **shareable and bookmarkable URLs**, facilitates initial **Server-Side Rendering**, and aids in **data analytics**.",
                "Client Hooks for Navigation:",
                "* `useSearchParams()`: Reads URL parameters in **Client Components**.",
                "* `usePathname()`: Gets the current URL *pathname* (e.g., `/dashboard/invoices`).",
                "* `useRouter()`: Allows programmatic navigation with the `replace()` method, which updates the URL without a full page reload (Client-side Navigation).",
                "Server Data Passing: The page component (`page.tsx` - Server Component) receives URL parameters in the `searchParams` prop and passes them directly to the `<Table>` component for use in data fetching (`fetchFilteredInvoices`).",
                "Debouncing: The `use-debounce` library is used to limit the frequency with which the URL is updated and, therefore, the database is queried. This **prevents multiple unnecessary requests** to the server for every keystroke, saving resources.",
              ],
              tips: [
                "Navigation Logic (`URLSearchParams`): The `URLSearchParams` web API is used to build URL query strings safely and easily, using methods like `params.set('query', term)`.",
                "Hook Difference: If parameters need to be accessed in a **Client Component** (e.g., `<Search>`), `useSearchParams()` is used. If parameters are needed in a **Server Component** (e.g., `page.tsx` for data fetching), the `searchParams` prop is used.",
                "Pagination Reset: When performing a new search, the **page parameter must be reset to 1** (`params.set('page', '1')`) in the `handleSearch` function to ensure the user sees valid results.",
              ],
            },
            {
              titulo:
                "C11: Mutating Data (Server Actions and Cache Management)",
              descripcion:
                "Implementing CRUD (Create, Read, Update, Delete) functionality using React Server Actions, a mechanism that allows executing asynchronous code directly on the server via HTML forms. ",
              importancia: [
                "React Server Actions (RSA): Asynchronous functions marked with `'use server'` (either in a dedicated file or within a Server Component) that execute directly on the server. They allow data mutation without creating REST API endpoints, offering **security enhancements** and **Progressive Enhancement** (the form works even without JavaScript).",
                "Forms and `action`: Forms call RSAs using the `action` attribute. The invoked action automatically receives the native browser object **`FormData`**.",
                "Secure Data Handling and `Zod`: Before mutation, the **`Zod`** validation library is used to validate the type and format of the data extracted from `FormData` (e.g., converting `string` to `number` with `z.coerce.number()`), preventing database errors.",
                "Cache Management (`revalidatePath`): After a mutation (CREATE, UPDATE, DELETE), the **`revalidatePath(route)`** function from Next.js is used. This purges the client cache for the specified route (e.g., `/dashboard/invoices`) and forces a new server request, ensuring the user sees the latest data.",
                "Redirection: The **`redirect(route)`** function from Next.js is used to redirect the user to a new page after the form mutation is completed.",
                "Dynamic Routes: Using square brackets (`[id]`) to create dynamic route segments (e.g., `/invoices/[id]/edit`) that allow reading unique identifiers (like the invoice `id`) from the `params` prop in the page component.",
              ],
              tips: [
                "Invoking RSA with Parameters: To pass an `id` to an RSA (such as in update or deletion), using JavaScript's `bind` (`updateInvoice.bind(null, invoice.id)`) is recommended to securely encode the parameter.",
                "Monetary Storage: It is recommended to store monetary values in **cents** in the database (`amount * 100`) to avoid JavaScript floating-point errors.",
                "UUIDs: UUIDs (Universally Unique Identifiers) are preferred over auto-incrementing keys for record IDs, as they offer greater security and global uniqueness.",
              ],
            },
            {
              titulo:
                "C12: Handling Errors (try/catch, error.tsx, and notFound)",
              descripcion:
                "Strategies for error management, including handling exceptions in Server Actions and defining route-level error boundaries for a smoother user experience.",
              importancia: [
                "Error Handling in Server Actions (`try/catch`): SQL queries and data mutation code are wrapped within `try/catch` blocks to intercept database or logic errors. Upon catching an error, the action returns a helpful message (`return { message: 'Database Error...' }`) instead of crashing the application.",
                "Route Error Boundary (`error.tsx`): This is a special **Client Component** file that wraps a route segment as a React Error Boundary. It acts as a **'catch-all' for uncaught exceptions** on the server or client. It displays a *fallback* UI and accepts a `reset()` function that attempts to re-render the route segment.",
                "Specific Error Handling (`notFound`): The **`notFound()`** function from Next.js is used to specifically handle 404 errors when a resource cannot be found (e.g., an invoice by ID). It throws an error that is intercepted by the closest **`not-found.tsx`** file.",
                "Precedence: `notFound()` has **precedence** over `error.tsx`. If `notFound()` is thrown within a component, the `not-found.tsx` UI will be shown instead of the `error.tsx` UI, allowing a more specific error message to the user.",
              ],
              tips: [
                "`redirect` Placement: The `redirect()` function must be called **outside** the `try/catch` block of a Server Action, as it throws an error that would otherwise be caught by the `catch` block.",
                "`not-found.tsx` vs `error.tsx`: `error.tsx` is used for unexpected server/code errors (exceptions). `not-found.tsx` is used for resource errors (e.g., invalid invoice ID). Both offer a better experience than the generic error screen.",
              ],
            },
            {
              titulo:
                "C13: Improving Accessibility (Form Validation and useActionState)",
              descripcion:
                "Focus on improving form accessibility through semantic HTML, labels, and implementing server-side validation using the React `useActionState` hook to manage and display errors.",
              importancia: [
                "Accessibility (A11y): Designing and implementing web applications that everyone can use. It is based on **Semantic HTML** and **Labels** (`htmlFor`).",
                "Server-Side Validation: Using `Zod` with `safeParse()` to ensure data validity before insertion into the database.",
                "Server Error Handling (`useActionState`): This React hook connects the **client-side form state** with the **Server Action's validation response**.",
                "Error Accessibility (`aria-labels`): Using **`aria-describedby`**, **`id`**, and **`aria-live='polite'`** to non-intrusively communicate errors to screen readers.",
              ],
              tips: [
                "Zod Coercion: `z.coerce.number()` is used to transform the form's string input into a number, which facilitates the application of numeric validation rules (`.gt(0)`).",
                "Missing Field Validation: The check `if (!validatedFields.success)` allows returning the Zod errors (`validatedFields.error.flatten().fieldErrors`) and the message to the client `state`.",
              ],
            },
            {
              titulo:
                "C14: Adding Authentication (NextAuth.js and Route Protection)",
              descripcion:
                "Implementing user authentication using NextAuth.js (Auth.js) to secure access to dashboard routes, manage sessions, and handle login errors.",
              importancia: [
                "Authentication vs. Authorization: **Authentication** verifies identity (who you are); **Authorization** determines what you can access (what you can do).",
                "NextAuth.js (Auth.js): Library for simplified session management and *sign-in/out*.",
                "Route Protection (`Proxy` and `authorized`): Using **Middleware/Proxy** to check the session before rendering, redirecting unauthenticated users to `/login`.",
                "Credentials Provider: Implementing `authorize` for credential validation with Zod and password comparison with `bcrypt.compare`.",
                "Login Handling: Using **`signIn()`** within a Server Action (`authenticate`) and `useActionState` to display specific `AuthError` errors.",
              ],
              tips: [
                "Logout: The *logout* functionality is implemented by calling the **`signOut()`** function from NextAuth.js within a Server Action.",
                "Password Security: It is essential to use *hashing* (e.g., `bcrypt`) to store and compare passwords.",
              ],
            },
            {
              titulo: "C15: Adding Metadata (SEO and Open Graph)",
              descripcion:
                "Strategies for adding crucial metadata for SEO and social media using the Next.js Metadata API, including titles, descriptions, favicons, and Open Graph images.",
              importancia: [
                "Metadata Purpose: Essential information for **SEO** (indexing and ranking) and **Shareability** (appearance of shared links).",
                "Metadata API: Defined by **configuration** (metadata object/function) or by **file** (`favicon.ico`, `opengraph-image.jpg`).",
                "Inheritance and Overriding: Layout metadata is inherited; nested page metadata overrides it.",
                "Templated Title: Using **`title.template`** (`%s | Acme Dashboard`) for consistent title structure.",
              ],
              tips: [
                "Metadata File Location: Moving `favicon.ico` and `opengraph-image.jpg` to the **root of the `/app` folder** for automatic recognition.",
                "Using `metadataBase`: Setting a base URL to simplify the definition of absolute URLs.",
              ],
            },
          ],
          "Qué aprendí": [
            {
              titulo:
                "Mastering the Server-First Architecture (RSC and Data Fetching)",
              descripcion:
                "Acquired the ability to build applications prioritizing Server-Side Rendering (RSC) to securely fetch data (direct SQL), minimize client JavaScript, and optimize loading performance.",
              aplicado: [
                "Implementing `async` and `await` directly in Server Components.",
                "Using **`Promise.all()`** to parallelize data fetching and avoid 'waterfall' latencies.",
                "Utilizing SQL with `postgres.js` for efficient queries on the server.",
              ],
              recomendacion: [
                "Identify the Network Boundary and ensure 90% of the code is a Server Component, reserving `'use client'` only for interactivity.",
              ],
            },
            {
              titulo:
                "Comprehensive Data Management (CRUD, Cache, and Secure Mutation)",
              descripcion:
                "Full understanding of the data lifecycle, from fetching to mutation, using Next.js and React APIs for a modern full-stack workflow.",
              aplicado: [
                "Implementing **Server Actions** (`'use server'`) for secure mutations (CRUD) from HTML forms.",
                "Using **`revalidatePath()`** to invalidate the cache after mutations, ensuring the client sees the latest data.",
                "Using `redirect()` for post-mutation navigation.",
              ],
              recomendacion: [
                "Always include `revalidatePath` and `redirect` after any successful Server Action for a smooth UX.",
              ],
            },
            {
              titulo: "UX Optimization with Streaming and Accessibility",
              descripcion:
                "Integration of advanced rendering and accessibility techniques for a high-quality user experience (UX).",
              aplicado: [
                "Implementing **Streaming** using `loading.tsx` and `<Suspense>` to prevent the entire UI from being blocked by slow components.",
                "Using **`useActionState`** to manage pending state and server form validation errors on the client.",
                "Improving accessibility (A11y) and form validation with Zod and `aria-live` attributes.",
              ],
              recomendacion: [
                "Create realistic loading skeletons in `loading.tsx` to reduce the perception of latency.",
              ],
            },
          ],
          "Problemas comunes": [
            {
              titulo: "Latency due to Data 'Waterfalls'",
              descripcion:
                "Sequential rendering of components waiting for data fetching, which blocks the entire page load.",
              solucion: [
                "Use `Promise.all()` to execute all data fetching promises in parallel within a Server Component.",
              ],
              recomendacion: [
                "Group all high-level data requests in one place if they do not depend on each other.",
              ],
            },
            {
              titulo: "Data or Credential Leaks",
              descripcion:
                "Accidentally exposing database secrets or private keys in the client JavaScript bundle.",
              solucion: [
                "Ensure that all database queries or secret readings are performed **only** in Server Components or Server Actions, which execute only on the server.",
              ],
              recomendacion: ["Never prefix private keys with `NEXT_PUBLIC_`."],
            },
          ],
          "Buenas prácticas": [
            {
              titulo: "Server-First Pattern and Data Colocation",
              descripcion:
                "Prioritize the Server Component and place data fetching logic as close as possible to the component that consumes it to create granular Suspense boundaries.",
              ejemplos: [
                "Place `fetchInvoiceData()` inside the `<LatestInvoices>` component and wrap it with `<Suspense>`.",
                "Minimize the number of components that have the `'use client'` directive.",
              ],
              recomendacion: [
                "Server logic is placed in `/app/lib/actions.ts` and exported as a Server Action.",
              ],
            },
            {
              titulo: "State in the URL",
              descripcion:
                "Use search parameters (`searchParams`) instead of React state (`useState`) to manage UI state such as search and pagination.",
              ejemplos: [
                "`page.tsx` (Server Component) reads `searchParams` and passes them to the data fetching function.",
                "`<Search>` (Client Component) uses `useRouter().replace()` to manipulate the URL.",
              ],
              recomendacion: [
                "This makes the URL the source of truth, allowing the page to be shareable and re-rendered by the server on first load.",
              ],
            },
          ],
          Ejemplos: [
            "// Parallel Fetching for Dashboard\nconst data = await Promise.all([\n  fetchInvoiceCount(),\n  fetchCustomerCount(),\n]);",
            "// Server Action for Mutation\n'use server';\nimport { revalidatePath } from 'next/cache';\nexport async function createInvoice(formData) { /* ... DB logic ... */ revalidatePath('/dashboard/invoices'); }",
            "// Error Boundary\nimport { ErrorBoundary } from 'react';\n// Component wrapped in an error.tsx file in the route",
            "// Authentication with useActionState\nconst [errorMessage, formAction] = useActionState(authenticate, undefined);",
            "// Route Protection (Middleware/Proxy)\nconst isLoggedIn = !!auth?.user;\nif (isOnDashboard) { if (isLoggedIn) return true; return false; }",
          ],
          "Errores frecuentes": [
            {
              titulo: "Omitting `revalidatePath`",
              descripcion:
                "Performing a successful data mutation but failing to invalidate the Next.js cache, resulting in stale data being shown to the user.",
              solucion: [
                "Ensure to call `revalidatePath('/route-to-update')` after any INSERT, UPDATE, or DELETE in a Server Action.",
              ],
              recomendacion: [
                "If possible, use `revalidateTag()` if `fetch()` requests have defined tags.",
              ],
            },
            {
              titulo: "Calling `redirect` Incorrectly",
              descripcion:
                "Placing `redirect()` inside a `try/catch` block of a Server Action, which prevents the redirection from working correctly.",
              solucion: [
                "Move `redirect()` outside the `try/catch` block or before any database code that might fail.",
              ],
              recomendacion: [
                "Only call `redirect()` after successful validation and mutation.",
              ],
            },
            {
              titulo: "Not Using `key` in Lists",
              descripcion:
                "Forgetting the `key` prop or using the array index as the key when rendering lists (`array.map()`), causing re-rendering issues and state problems.",
              solucion: [
                "Assign a unique and stable `key` prop (data ID) to each JSX element that is a direct child of a `map()`.",
              ],
              recomendacion: [
                "Use `React DevTools` to quickly identify missing `key` warnings.",
              ],
            },
          ],
          "Tips rápidos": [
            "Use `pnpm` for fast installations.",
            "Utilize **`Promise.all()`** to optimize Dashboard loading time.",
            "Implement **`loading.tsx`** and **`<Suspense>`** to improve loading UX.",
            "Use **`use-debounce`** in the search component.",
            "Utilize **`z.coerce.number()`** to ensure correct form data conversion.",
            "Configure **`title.template`** in the Root Layout for metadata.",
          ],
        },
      },
      {
        nombre:
          "Next.js Learn SEO: Optimization, Crawling and Core Web Vitals (Vercel – Official)",
        categoria: "Next.js",
        tecnologias: [
          "Next.js (App Router/Pages Router)",
          "React (Components and Hooks)",
          "Technical SEO (Crawling, Indexing, Metadata)",
          "Core Web Vitals (LCP, FID/TBT, CLS)",
          "HTML/CSS (Headings, Links, Structure)",
          "Lighthouse and Google Search Console",
          "JavaScript (Code Splitting and Lazy Loading)",
        ],
        certificado: "./Certificaciones/NextjsLearnSEO.pdf",
        info: {
          Descripción:
            "Advanced study of essential Search Engine Optimization (SEO) practices within the Next.js ecosystem. The course covers the three pillars of SEO (Technical, Content, Popularity), the crawling and indexing cycle, metadata management, and routing. The main focus is performance optimization through Core Web Vitals (CWV) using Next.js native features.",
          "Conceptos clave": [
            {
              titulo:
                "C1: The Importance of SEO and the Three Pillars of Optimization",
              descripcion:
                "Fundamental understanding of why SEO is crucial for conversion and brand trust, and the distinction of the three pillars guiding optimization strategy.",
              importancia: [
                "Organic Traffic: Visitors arriving via unpaid search results are high quality.",
                "Key Benefits of Organic Traffic:",
                "1. Qualitative: Higher conversion probability (visitors become customers).",
                "2. Trustable: High ranking increases brand credibility and trust.",
                "3. Low Cost: No direct cost for appearing in top organic positions, unlike SEM.",
                "SEM vs. SEO Distinction: SEO is organic (free) positioning; SEM is sponsored/paid content marked as 'Sponsored'.",
              ],
              pilares_optimizacion: [
                "1. Technical: Optimize the website for search engine crawlability and web performance.",
                "2. Content: Develop a content strategy targeting relevant keywords.",
                "3. Popularity: Increase site presence so engines recognize it as a trusted source, mainly via Backlinks.",
              ],
              tips: [
                "As a Next.js developer, your initial focus should be mastering the Technical Pillar (crawling, performance, metadata, structured data).",
                "Always monitor the distinction between organic and paid traffic (SEM) in analytics tools.",
              ],
            },
            {
              titulo:
                "C2: The Search Engine Cycle: Crawling, Indexing, Rendering, and Ranking",
              descripcion:
                "Description of the four main responsibilities of a Search Engine System (e.g. Google, Bing) and how they interact to build the web index and deliver relevant search results.",
              importancia: [
                "**1. Crawling (Rastreo):** Proceso de recorrer la web y analizar el contenido de todos los sitios (más de 350 millones de dominios).",
                "**2. Indexing (Indexación):** Almacenamiento de todos los datos recopilados durante el rastreo para que puedan ser accesibles en futuras consultas.",
                "**3. Rendering (Renderizado):** Ejecución de recursos de la página, especialmente JavaScript, para enriquecer el contenido. Este paso es crucial para aplicaciones Next.js/React.",
                "**4. Ranking (Clasificación):** Proceso de consultar los datos indexados para generar páginas de resultados (SERP) relevantes, aplicando criterios para satisfacer la intención del usuario.",
                "**Googlebot:** El rastreador de Internet específico de Google, encargado de recopilar la información para la base de datos de contenido.",
              ],
              detalle_rendering: [
                "El proceso de **Renderizado** no ocurre para todas las páginas rastreadas y, en ocasiones, puede ocurrir **después** de la indexación si el sistema no tiene recursos disponibles en el momento del rastreo inicial.",
                "Next.js, al usar Server-Side Rendering (SSR) o Static Site Generation (SSG), asegura que el HTML esté completo **antes** de que Googlebot necesite ejecutar JavaScript (lo que se conoce como 'hidratación'), facilitando y acelerando el Renderizado por parte del buscador.",
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
                "**Función del Web Crawler:** Bots que emulan usuarios para navegar sitios web y descubrir nuevas páginas siguiendo enlaces. Son esenciales para que un sitio aparezca en los resultados de búsqueda.",
                "**Identificación:** Los rastreadores se identifican mediante **User-Agents** (ej. Googlebot Desktop, Googlebot Smartphone). Google prioriza la visión 'Smartphone' (Mobile-First Indexing).",
                "**Fuentes de URL:** Google encuentra URLs a través de **Google Search Console**, enlaces externos/internos y **XML Sitemaps**.",
                "**Cola de Rastreo (Crawl Queue):** Las URLs descubiertas se añaden a una cola para ser procesadas. El tiempo de espera es generalmente corto, pero puede demorar si requiere renderizado o actualización.",
              ],
              proceso_googlebot: [
                "**1. HTTP Request:** El rastreador hace una petición HTTP a la URL.",
                "**2. Manejo de Status Codes:** El comportamiento depende del código de estado:",
                "   - **200 (OK):** Rastrea y analiza el HTML.",
                "   - **30X (Redirección):** Sigue la redirección a la nueva URL.",
                "   - **40X (Error Cliente):** Nota el error y no carga el HTML. (Crucial mostrar `not-found.tsx` en Next.js).",
                "   - **50X (Error Servidor):** Puede volver más tarde para reintentar (Error temporal).",
              ],
              el_desafio_del_rendering: [
                "**Cola de Renderizado (Render Queue):** Si la página tiene contenido dependiente de JavaScript (CSR), se añade a una cola de renderizado. Este proceso es **costoso** en recursos para Google (y otros buscadores).",
                "**Ventaja de Next.js:** Frameworks como Next.js que usan SSR o SSG (Server-Side Rendering o Static Site Generation) sirven el HTML completo en la primera petición (HTTP Request, 200), **reduciendo la dependencia del Render Queue** y facilitando la indexación.",
              ],
              tips: [
                "Monitorear los códigos de estado HTTP en Google Search Console para identificar errores 40X/50X.",
                "Asegúrate de que tus redirecciones (301/302) funcionen correctamente.",
                "Al construir una aplicación Next.js, la elección de la estrategia de renderizado es tu mayor herramienta para optimizar la velocidad y rastreabilidad del sitio, minimizando la necesidad de la costosa Render Queue.",
              ],
            },
            {
              titulo:
                "C4: Cabeceras HTTP, Metadatos y Comunicación con Googlebot",
              descripcion:
                "Análisis de cómo los códigos de estado HTTP y las etiquetas de metadatos dirigen el comportamiento de los rastreadores y cómo Next.js nos permite comunicar el estado de indexación deseado para cada página.",
              temas_clave: [
                "**Fundamentos de Códigos de Estado HTTP:** Entendimiento de los códigos 200 (OK), 30X (Redirección), 40X (Error Cliente) y 50X (Error Servidor) y su impacto en si el contenido se rastrea o no (visto en C3).",
                "**Metadatos para Rastreadores:** Información que los rastreadores buscan al analizar el HTML (ej. `<title>`, `<meta name='description'>`) para comprender el contenido y la intención de la página.",
                "**Comunicación de Contenido Nuevo:** Estrategias para notificar a Googlebot sobre nuevo contenido o actualizaciones, asegurando que el índice se refresque rápidamente. (Generalmente a través de Sitemaps y Google Search Console).",
                "**Etiquetas Meta Robots:** Uso de `<meta name='robots' content='...'>` para control granular de indexación y seguimiento de enlaces (ej. `noindex, nofollow`).",
                "**Enlaces Canónicos (Canonical Links):** Uso de la etiqueta `<link rel='canonical' href='...'>` para indicar la versión principal de una página a los motores de búsqueda, previniendo problemas de contenido duplicado (Duplicated Content).",
              ],
              aplicacion_nextjs: [
                "**Manejo de Errores (404/500):** Next.js facilita el manejo de códigos de estado críticos (404 a través de `not-found.tsx` y 500 para errores de servidor) para una comunicación clara con los rastreadores.",
                "**Metadata API:** Next.js permite la configuración sencilla de `meta` tags y la URL canónica mediante el objeto `metadata` y la función `generateMetadata` en los componentes de página/layout.",
                "**Meta Robots y Canonical:** Estos se implementan directamente en el objeto `metadata` de Next.js, permitiendo al desarrollador dictar la indexación deseada por cada ruta de la aplicación.",
              ],
              tips: [
                "Asegúrate de que las páginas eliminadas respondan consistentemente con un código de estado **404** o **410** (Gone) para que Google las retire del índice.",
                "Utiliza la etiqueta canónica en **todas** las páginas, incluso si no hay contenido duplicado, para confirmar tu URL preferida.",
                "Evita el uso de `noindex` en páginas críticas a menos que sea una necesidad específica (ej. páginas de login o de agradecimiento sin valor SEO).",
              ],
            },
            {
              titulo:
                "C5: El Significado SEO de los Códigos de Estado HTTP (200, 30X, 40X, 50X)",
              descripcion:
                "Análisis de los códigos de respuesta HTTP más importantes en el contexto del SEO. Este conocimiento es fundamental para comunicar el estado de una página al motor de búsqueda (si está disponible, movida o eliminada) y asegurar la indexación correcta.",
              codigos_clave: [
                {
                  codigo: "200 (OK)",
                  significado: "Éxito. La página se ha cargado correctamente.",
                  seo: "El código requerido para que una página sea **indexada** y pueda recibir tráfico orgánico. Es el valor por defecto de una página Next.js renderizada exitosamente.",
                },
                {
                  codigo: "301/308 (Moved Permanently)",
                  significado: "Redirección Permanente.",
                  seo: "Indica que un recurso se ha movido definitivamente. Es esencial para **mantener el PageRank (link equity)** y evitar la pérdida de tráfico. Next.js utiliza **308** por defecto en redirecciones permanentes, ya que es la versión moderna y no cambia el método de la petición (POST a GET).",
                },
                {
                  codigo: "302 (Found)",
                  significado: "Redirección Temporal.",
                  seo: "Indica un movimiento temporal. Debe usarse con cautela, solo si el contenido volverá a su URL original. En la mayoría de los casos de migración de contenido, el **301/308** es el preferido.",
                },
                {
                  codigo: "404 (Not Found)",
                  significado: "Error del Cliente (Recurso no encontrado).",
                  seo: "El estado deseado para una URL que **ya no existe** y no tiene reemplazo. Next.js lo retorna automáticamente para rutas no definidas y permite forzarlo mediante `notFound: true` en las funciones de obtención de datos. Un exceso de 404 puede indicar problemas de rastreo.",
                },
                {
                  codigo: "410 (Gone)",
                  significado: "Recurso Ido Permanentemente.",
                  seo: "Recomendado para contenido que se ha **eliminado definitivamente** y que no regresará (ej. productos descatalogados, posts eliminados). Indica a los bots que deben retirar la URL del índice más rápido que un 404.",
                },
                {
                  codigo: "500 (Internal Server Error)",
                  significado: "Error Interno del Servidor.",
                  seo: "Next.js lo retorna por defecto para errores inesperados. Un error 500 no es catastrófico si es temporal, pero si persiste, puede afectar negativamente el **Crawl Budget** (Presupuesto de Rastreo).",
                },
                {
                  codigo: "503 (Service Unavailable)",
                  significado: "Servicio no Disponible.",
                  seo: "Recomendado para devolver cuando el sitio está fuera de línea por un período extenso (ej. mantenimiento planificado). **Previene la pérdida de ranking** al indicar al bot que regrese más tarde sin perder el índice.",
                },
              ],
              implementacion_nextjs: [
                "**Redirecciones (308):** Configurable en `next.config.js` o retornando `redirect: { permanent: true }` en funciones de datos (ej. `getStaticProps` en Pages Router, o mediante `redirect()` en App Router).",
                "**Páginas de Error Personalizadas (404/500):** Next.js permite crear archivos `404.js` y `500.js` para servir páginas estáticas de error, mejorando la experiencia del usuario y la comunicación con el bot.",
              ],
              tips: [
                "Para redirecciones permanentes, siempre usa la opción `permanent: true` en Next.js para aprovechar el código **308** y preservar el método HTTP.",
                "Utiliza la herramienta **Google Search Console** para monitorear los códigos de estado que Googlebot encuentra en tu sitio.",
              ],
            },
            {
              titulo:
                "C6: `robots.txt`: Controlando el Presupuesto de Rastreo (Crawl Budget)",
              descripcion:
                "Análisis del propósito y la implementación del archivo `robots.txt`, un estándar web que permite indicar a los rastreadores de motores de búsqueda qué partes de un sitio pueden (Allow) o no (Disallow) solicitar y rastrear.",
              importancia: [
                "**Propósito:** Evitar que los rastreadores accedan a páginas o archivos innecesarios o sensibles (ej. `admin`, cuentas de usuario, rutas de API internas).",
                "**`Crawl Budget`:** Al bloquear rutas, se evita que los bots gasten su 'presupuesto' de rastreo en contenido sin valor SEO, enfocándose en las páginas importantes.",
                "**Ubicación Estándar:** El archivo debe servirse en la raíz del host (`/robots.txt`).",
              ],
              directivas_clave: [
                "**`User-agent: *`:** Aplica las reglas a todos los rastreadores (Googlebot, Bingbot, etc.). Puedes especificar un bot concreto (ej. `User-agent: Googlebot`).",
                "**`Disallow: /ruta`:** Indica al rastreador que **no** solicite contenido de esa ruta (ej. `Disallow: /accounts` para proteger el área de usuario).",
                "**`Allow: /`:** Permite el rastreo de todo el sitio, a menudo usado como valor por defecto.",
              ],
              implementacion_nextjs: [
                "**Servicio de Archivos Estáticos:** En un proyecto Next.js, el archivo `robots.txt` se coloca directamente en la carpeta **`public`** (en la raíz del proyecto).",
                "**Acceso:** Una vez en `public/robots.txt`, se sirve automáticamente desde la raíz (`/robots.txt`) cuando la aplicación está en ejecución.",
                "**Nomenclatura:** La carpeta `public` es la única que Next.js utiliza para servir activos estáticos en la raíz URL y su nombre **no puede ser cambiado**.",
              ],
              tips: [
                "Nunca dependas del `robots.txt` para la seguridad; úsalo para la eficiencia del rastreo. Si necesitas bloquear la indexación de una página sensible, usa la etiqueta **`noindex`** (ver Capítulo 4).",
                "Asegúrate de que la ruta del **XML Sitemap** esté incluida en el `robots.txt` mediante la directiva `Sitemap: [URL_del_Sitemap]`.",
              ],
            },
            {
              titulo:
                "C7: Sitemaps XML: El Mapa de Rutas para los Motores de Búsqueda",
              descripcion:
                "Análisis de los Sitemaps como la forma más fácil y eficiente de comunicar a Google las URLs que pertenecen al sitio, cuándo se actualizaron y cómo priorizar su rastreo. El Sitemaps es una lista de URLs, no una herramienta de bloqueo (a diferencia de `robots.txt`).",
              importancia: [
                "**Eficiencia de Rastreo:** Los Sitemaps facilitan a Googlebot y otros rastreadores la detección de contenido nuevo o actualizado, mejorando la velocidad de indexación.",
                "**Necesidad de un Sitemap:** Es particularmente necesario si el sitio es muy grande, tiene contenido aislado (con pocos enlaces internos), es nuevo (con pocos enlaces externos), o contiene mucho contenido multimedia (video, imágenes).",
                "**Formatos:** Aunque XML es el más común, pueden ser creados en RSS, Atom o archivos de texto plano.",
                "**No es Obligatorio, pero Recomendado:** Aunque no son obligatorios, mejoran la eficiencia del rastreo, lo que lleva a que el contenido sea indexado y clasificado más rápido.",
                "**Dinamismo vs. Estático:** Se recomienda enfáticamente que los sitemaps sean **dinámicos** para reflejar el contenido nuevo y actualizado de forma constante. Los estáticos son menos útiles para el descubrimiento constante.",
              ],
              implementacion_nextjs: [
                "**1. Manual (Estático):** Para sitios pequeños o muy estáticos, se puede crear un archivo `sitemap.xml` manual y colocarlo en el directorio **`public`**.",
                "**2. Dinámico (Recomendado):** Para sitios con contenido que cambia (blogs, e-commerce, etc.), se genera el sitemap sobre la marcha utilizando **Server-Side Rendering (SSR)**.",
                "**Uso de `getServerSideProps` (Pages Router):** Se crea un archivo de página (`pages/sitemap.xml.js`) que usa `getServerSideProps` para:",
                "   - Obtener las URLs dinámicas de una API o base de datos.",
                "   - Construir la estructura XML (`<urlset>`, `<url>`, `<loc>`, `<lastmod>`).",
                "   - Establecer la cabecera `Content-Type` a `text/xml` y enviar la respuesta XML (`res.write(sitemap)`).",
              ],
              tips: [
                "Asegúrate de que la URL de tu Sitemap esté referenciada en el archivo **`robots.txt`** para que los rastreadores lo encuentren inmediatamente (`Sitemap: [URL]`).",
                "El Sitemap **solo debe incluir URLs que devuelvan código 200 (OK)** y que desees que se indexen (excluyendo URLs con `noindex` o con errores).",
                "Utiliza la etiqueta `<lastmod>` para informar a los motores de búsqueda cuándo fue la última vez que se modificó esa URL, ayudando a priorizar el rastreo de páginas frescas.",
              ],
            },
            {
              titulo:
                "C8: Meta Tags Especiales: Directivas de Indexación (`noindex`, `nofollow`) y Canonicalización",
              descripcion:
                "Estudio de las 'Meta Robot Tags', que son directivas que indican a los motores de búsqueda cómo deben indexar y rastrear una página, y la diferencia crucial entre directivas (Meta Robots) y sugerencias (Canonical).",
              directivas_vs_sugerencias: [
                "**Directivas (Obligatorias):** El archivo `robots.txt` y las etiquetas `<meta name='robots' content='...'>` son **directivas** que los motores de búsqueda siempre respetarán.",
                "**Sugerencias (Recomendaciones):** La etiqueta Canonical (`<link rel='canonical'>`) es una **recomendación** que Google puede decidir obedecer o no, si considera que hay una URL más apropiada.",
              ],
              meta_robots_tags: [
                "**`index, follow` / `all` (Por defecto):** Permite la indexación de la página y sigue los enlaces internos.",
                "**`noindex`:** **DIRECTIVA CRÍTICA** para que la página **no se muestre** en los resultados de búsqueda. Es el método más fiable para asegurar que una página se retire del índice (incluso si ya estaba indexada). Útil para páginas de configuración, resultados de búsqueda internos con bajo valor, o políticas.",
                "**`nofollow`:** Indica al bot que **no siga** los enlaces contenidos en esta página.",
                "**`googlebot`:** Permite establecer reglas específicas solo para el rastreador de Google (ej. `noindex, nofollow` solo para Googlebot). En caso de etiquetas conflictivas, **la regla más restrictiva es la que aplica**.",
              ],
              otras_google_tags: [
                "**`nositelinkssearchbox`:** Evita que Google muestre la caja de búsqueda específica del sitio en los resultados de búsqueda (SERP).",
                "**`notranslate`:** Evita que Google ofrezca un enlace para traducir la página en el SERP.",
              ],
              implementacion_nextjs: [
                "**Uso de `next/head` (Pages Router):** Componente integrado para añadir elementos al `<head>` (como se muestra en el ejemplo del curso). Se recomienda el uso de la propiedad `key` en las etiquetas `<meta>` para evitar duplicados en el HTML renderizado.",
                "**Next.js App Router (Nota):** En la arquitectura moderna de Next.js, estas etiquetas de metadatos se gestionan de forma nativa a través del objeto `export const metadata` o la función `generateMetadata` en los componentes de página/layout, lo que es la práctica recomendada hoy en día.",
              ],
              tips: [
                "Si quieres que una página **nunca se indexe**, el método más seguro es usar la etiqueta **`noindex`** (a diferencia de `robots.txt` que solo evita el rastreo).",
                "Asegúrate de que la etiqueta canónica apunte siempre a la versión de la URL que deseas que se indexe (la versión principal).",
                "La flexibilidad de estas meta tags es clave, ya que permiten aplicar reglas basadas en la lógica de la página (ej. `noindex` si no hay resultados en un filtro de búsqueda).",
              ],
            },
            {
              titulo:
                "C9: Enlaces Canónicos: Designando la 'Fuente de Verdad' de una URL",
              descripcion:
                "Estudio del Canonical Tag, la herramienta que se usa para indicar a los motores de búsqueda cuál es la URL más representativa o 'fuente de verdad' (canonical) de un conjunto de páginas con contenido idéntico o muy similar. Su propósito principal es consolidar la equidad de enlaces y prevenir la penalización por contenido duplicado.",
              importancia: [
                "**Prevención de Contenido Duplicado:** Evita que Google penalice o clasifique incorrectamente el contenido que se puede acceder desde múltiples URLs (ej. rutas con y sin `/products/`, o URLs que incluyen parámetros UTM).",
                "**Consolidación de 'Link Equity':** Asegura que todos los enlaces (backlinks) que apuntan a las diferentes versiones de la página se consoliden y cuenten para la clasificación de la URL canónica (preferida).",
                "**Diferencia Crucial:** El Canonical Tag es una **SUGERENCIA** o recomendación (no una directiva como `noindex`), aunque Google la respeta en la mayoría de los casos.",
                "**Causas de Duplicación:** Puede ser intencional (ej. diferentes rutas de una tienda de e-commerce), o accidental (ej. la indexación de URLs con parámetros de seguimiento, como **UTM parameters**).",
              ],
              mecanismo: [
                'La URL canónica se define mediante la etiqueta `<link rel="canonical" href="[URL_Preferida]" />` colocada en el `<head>` de la página duplicada.',
                "**Ejemplo:** Si `example.com/phone` y `example.com/products/phone` tienen el mismo contenido, y queremos que la segunda sea la que clasifique, la primera debe llevar la etiqueta canónica apuntando a la segunda.",
              ],
              implementacion_nextjs: [
                '**Uso de `next/head` (Pages Router):** Se importa `Head` y se incluye la etiqueta `<link rel="canonical" ...>` con el atributo `key` para prevenir duplicados.',
                "**Next.js App Router (Nota):** En el App Router, esta configuración se realiza de manera declarativa dentro del objeto `metadata` o en la función `generateMetadata` de la página o layout, lo cual es la práctica moderna recomendada.",
              ],
              tips: [
                "Siempre utiliza el **Canonical Tag en todas las páginas**, incluso si crees que no hay duplicados, para confirmar tu URL preferida a Google.",
                "Asegúrate de que la URL canónica siempre use la versión **HTTPS** y la versión **www** o **non-www** que has elegido como principal.",
                "La URL canónica debe apuntar a una página que devuelva código **200 (OK)** y no a una con un `noindex`.",
              ],
            },
            {
              titulo:
                "C10: Rendering and Ranking: Estrategias de Next.js (CSR, SSR, SSG, ISR)",
              descripcion:
                "Análisis de la transición de los motores de búsqueda para manejar contenido dependiente de JavaScript (JS). Se cubren las diferentes estrategias de Renderizado de Next.js como la herramienta clave para garantizar un HTML completo para los rastreadores, además de la optimización de la estructura de URLs, encabezados y enlaces internos para el Ranking.",
              importancia_renderizado: [
                "**Contexto:** Históricamente, el JS complicó la indexación, ya que los bots solo analizaban el HTML inicial y no esperaban la ejecución del JS (Client-Side Rendering).",
                "**La Solución de Next.js:** El framework permite al desarrollador elegir la estrategia de renderizado más adecuada para cada ruta, asegurando que el contenido esencial esté en el HTML inicial (Server-Rendered o Pre-Rendered).",
                "**Estrategias de Renderizado:**",
                "1. **CSR (Client-Side Rendering):** El contenido se renderiza totalmente en el navegador (menos óptimo para SEO, solo para partes altamente interactivas).",
                "2. **SSR (Server-Side Rendering):** La página se renderiza completamente en el servidor en cada solicitud. Ideal para contenido dinámico que requiere frescura (ej. datos de usuario, precios en tiempo real).",
                "3. **SSG (Static Site Generation):** La página se renderiza una sola vez en el tiempo de compilación. Ofrece el mejor rendimiento y es ideal para contenido estático (ej. páginas 'Acerca de', blogs).",
                "4. **ISR (Incremental Static Regeneration):** Un híbrido que permite regenerar páginas SSG en segundo plano a intervalos definidos, ofreciendo velocidad estática con frescura dinámica.",
              ],
              factores_de_ranking: [
                "**Estructura de URL:** La forma en que se estructuran las URLs afecta el ranking. Se prefieren URLs cortas, descriptivas y que incluyan palabras clave relevantes. (Next.js con File-System Routing facilita una estructura lógica).",
                "**Encabezados (Headings):** El uso correcto de `<h1>`, `<h2>`, etc., es crucial para la jerarquía del contenido, indicando a los motores de búsqueda cuáles son los temas y subtemas principales de la página.",
                "**Enlaces Internos (Internal Links):** Conectan las páginas del sitio, ayudando a los rastreadores a descubrir nuevo contenido y distribuyendo la 'autoridad' (Link Equity) a través de la aplicación.",
              ],
              tips: [
                "Para el SEO, maximiza el uso de **SSG** e **ISR** donde sea posible, y utiliza **SSR** solo cuando la frescura de los datos en cada solicitud sea una necesidad crítica.",
                "Asegúrate de que haya un solo `<h1>` por página y que contenga la palabra clave principal de la página.",
                "Utiliza el componente `<Link>` de Next.js para los enlaces internos para aprovechar el *prefetching* y las optimizaciones de enrutamiento, que son cruciales para un buen Ranking de la Experiencia de Página.",
              ],
            },
            {
              titulo:
                "C11: Estrategias de Renderizado y su Impacto en SEO (SSG, SSR, ISR, CSR)",
              descripcion:
                "Análisis de las cuatro estrategias de renderizado de Next.js. Se subraya que la disponibilidad del HTML completo y los metadatos en la carga inicial de la página (Pre-renderizado) es el factor más importante para el SEO y el rendimiento.",
              estrategias_renderizado: [
                {
                  estrategia: "SSG (Static Site Generation)",
                  mecanismo:
                    "El HTML se genera en el **tiempo de compilación (build time)** y se reutiliza para cada solicitud.",
                  impacto_seo:
                    "Es la **mejor opción para SEO**. El contenido está completamente pre-renderizado, lo que garantiza una indexación instantánea y ayuda directamente a los factores de ranking de rendimiento (velocidad).",
                },
                {
                  estrategia: "SSR (Server-Side Rendering)",
                  mecanismo:
                    "El HTML se genera en el **tiempo de solicitud (request time)** en el servidor.",
                  impacto_seo:
                    "Es **excelente para SEO** ya que el contenido está pre-renderizado, pero se utiliza para páginas dinámicas (ej. noticias, feeds) donde la frescura del dato es crítica y no se puede predecir en el *build time*.",
                },
                {
                  estrategia: "ISR (Incremental Static Regeneration)",
                  mecanismo:
                    "Permite generar o actualizar páginas estáticas **después** de que el sitio ha sido construido, a intervalos definidos (`revalidate`).",
                  impacto_seo:
                    "Combina la velocidad de SSG con la frescura de SSR, escalando a millones de páginas estáticas sin necesidad de reconstruir todo el sitio. Muy óptimo para blogs o catálogos grandes.",
                },
                {
                  estrategia: "CSR (Client-Side Rendering)",
                  mecanismo:
                    "El sitio se renderiza **completamente en el navegador** con JavaScript, dejando un HTML inicial vacío.",
                  impacto_seo:
                    "Generalmente **no es recomendado para SEO** crítico, ya que los motores de búsqueda tienen que gastar recursos en renderizar el JS. Es ideal para áreas privadas o con mucha lógica de usuario (dashboards, páginas de cuentas) que no requieren ser indexadas.",
                },
              ],
              conclusion_nextjs: [
                "La principal fortaleza de Next.js es la capacidad de aplicar cada uno de estos métodos de renderizado **por página** (per-page basis), permitiendo una optimización granular de toda la aplicación.",
                "**Regla de Oro del SEO:** Para el contenido que debe indexarse, asegúrate de que los datos y los metadatos estén disponibles en la carga inicial de la página **sin depender de JavaScript** (es decir, usa SSG o SSR).",
              ],
              tips: [
                "Para páginas críticas (landing pages, posts, productos), prioriza **SSG o ISR** para la máxima velocidad y mejor Core Web Vitals (CWV).",
                "Utiliza la opción de renderizado adecuada en el App Router (`page.js` por defecto es RSC/SSR/SSG) para asegurar la pre-renderización del contenido.",
              ],
            },
            {
              titulo:
                "C12: El Fin de AMP y la Centralidad de las Core Web Vitals (CWV)",
              descripcion:
                "Análisis de la obsolescencia de AMP (Accelerated Mobile Pages) como requisito SEO, y la confirmación de que el enfoque de optimización ha cambiado permanentemente hacia las métricas de rendimiento intrínsecas del sitio, conocidas como Core Web Vitals.",
              contexto_amp: [
                "**AMP (Accelerated Mobile Pages):** Tecnología introducida por Google en 2016 para crear páginas que cargan extremadamente rápido en dispositivos móviles, lo que ofrecía una ventaja en el ranking y la aparición en carruseles de búsqueda.",
                "**Costo:** La implementación y el mantenimiento de AMP requerían un esfuerzo de desarrollo y mantenimiento considerable, a menudo requiriendo dos versiones de la misma página.",
              ],
              abandono_amp: [
                "**Actualización de Core Web Vitals (CWV):** Con esta actualización, Google eliminó la preferencia de ranking y el requisito de AMP para aparecer en los carruseles de búsqueda.",
                "**Enfoque Actual:** El rendimiento es ahora medido directamente a través de las Core Web Vitals (LCP, FID/INP, CLS), las cuales se optimizan de forma nativa en Next.js.",
              ],
              impacto_nextjs: [
                "**Soporte Eliminado:** A partir de Next.js 16, el soporte para AMP ha sido **eliminado** del framework.",
                "**Recomendación:** Para nuevos proyectos, la estrategia es enfocarse en optimizar directamente las Core Web Vitals utilizando las funciones de rendimiento integradas de Next.js (optimización de imágenes con `<Image>`, gestión de fuentes con `next/font`, pre-renderizado con SSG/SSR) en lugar de depender de AMP.",
              ],
              tips: [
                "Para el SEO moderno, ignora AMP.",
                "Concéntrate en obtener puntuaciones altas en **LCP (Largest Contentful Paint)** y **CLS (Cumulative Layout Shift)**, ya que son los indicadores principales que Next.js ayuda a resolver con sus optimizaciones de renderizado y assets.",
              ],
            },
            {
              titulo:
                "C13: Estructura de URLs: Principios y Enrutamiento Dinámico en Next.js",
              descripcion:
                "Análisis de la estructura de URL como una práctica esencial de SEO, enfatizando la necesidad de URLs semánticas y consistentes que ayuden tanto a los usuarios como a los motores de búsqueda a comprender la jerarquía y el contenido de la página. Se detalla cómo Next.js gestiona esto.",
              principios_url: [
                "**1. Descriptivas y Semánticas:** Las URLs deben ser claras y reflejar el contenido de la página (ej. `/blog/nombre-articulo` en lugar de `/p?id=123`).",
                "**2. Uso de Guiones:** Usar guiones (`-`) para separar palabras, en lugar de guiones bajos (`_`) o espacios.",
                "**3. Evitar Parámetros:** Minimizar el uso de parámetros complejos (query strings) que no son necesarios, ya que pueden crear problemas de contenido duplicado.",
                "**4. Cortas y Consistentes:** Mantener la longitud razonable y usar consistentemente mayúsculas/minúsculas.",
              ],
              enrutamiento_nextjs: [
                "**Enrutamiento Basado en Archivos (File-System Routing):** Next.js facilita naturalmente las URLs descriptivas, ya que la estructura de carpetas se mapea directamente a las rutas del sitio (ej. `pages/products/phone.js` se convierte en `/products/phone`).",
                "**Rutas Dinámicas (`[slug]`):** El uso de rutas dinámicas es esencial para blogs y catálogos (ej. `[id].js`). Se debe asegurar que el *slug* final en la URL sea la palabra clave principal del contenido.",
              ],
              tips: [
                "Revisa que tu servidor maneje correctamente las URLs con y sin *trailing slash* (barra final, `/`). Next.js lo gestiona por defecto.",
                "Asegúrate de que la URL canónica siempre apunte a la versión de la URL que deseas que se indexe (la versión limpia).",
              ],
            },
            {
              titulo: "C14: Open Graph y Datos Estructurados (Structured Data)",
              descripcion:
                "Análisis de las 'Social Media Meta Tags' (Open Graph y Twitter Cards) para optimizar la forma en que el contenido se comparte en redes sociales, además de la importancia de los Datos Estructurados (Schema.org) para enriquecer la apariencia del sitio en los resultados de búsqueda (Rich Snippets).",
              open_graph_y_twitter: [
                "**Open Graph (OG):** Protocolo de Facebook, adoptado por muchas otras redes. Permite controlar la imagen, el título y la descripción que se muestran cuando una URL es compartida (ej. `og:image`, `og:title`).",
                "**Twitter Cards:** Específicos para X/Twitter, a menudo duplicando los campos de Open Graph pero con formatos específicos (ej. `twitter:card`).",
                "**Importancia SEO:** Si bien no son factores directos de ranking, mejoran la tasa de clics (CTR) en las redes sociales, lo que genera más tráfico.",
              ],
              datos_estructurados: [
                "**Schema.org:** Vocabulario estandarizado utilizado para marcar el contenido de la página, ayudando a los motores de búsqueda a entender el contexto de la información (ej. 'Este es un producto', 'Este es un artículo', 'Esta es una receta').",
                "**Rich Snippets:** Los datos estructurados correctos pueden habilitar características visuales avanzadas en los resultados de búsqueda (Rich Snippets) como estrellas de calificación, precios o preguntas frecuentes (FAQ), mejorando drásticamente el CTR.",
                "**Formato:** Se recomienda utilizar el formato **JSON-LD** para incluir los datos estructurados en el `<head>` o `<body>` de la página, ya que es el formato más simple y recomendado por Google.",
              ],
              implementacion_nextjs: [
                "Las etiquetas Open Graph y Twitter Cards se configuran a través del objeto `metadata` en Next.js (App Router), mientras que los datos estructurados (JSON-LD) se añaden como un `<script type='application/ld+json'>` en el `<head>` de la página.",
              ],
            },
            {
              titulo:
                "C15: SEO On-Page: Estructura del Contenido (Headings y Link Equity)",
              descripcion:
                "Análisis de cómo la estructura interna de una página (encabezados y enlaces) impacta en el SEO. Los encabezados ayudan a los usuarios y motores de búsqueda a entender la jerarquía, mientras que los enlaces internos distribuyen la autoridad de página (PageRank) a través del sitio.",
              encabezados: [
                "**Propósito:** Ayudar a los usuarios a escanear el contenido y señalar a los motores de búsqueda las partes más importantes de la página.",
                "**`<h1>` (Heading 1):** Es el encabezado más importante y debe usarse **solo una vez** por página. Debe representar el tema principal y ser similar al contenido de la etiqueta `<title>`.",
                "**Jerarquía:** Los encabezados (`<h1>` a `<h6>`) deben usarse en orden lógico y descendente para estructurar el documento correctamente.",
              ],
              enlaces_internos: [
                "**PageRank Algorithm:** (Inventado por Google) Sistema que califica los dominios basándose en la cantidad y, más importante aún, la **calidad** de los enlaces que reciben.",
                "**Importancia:** Incluir enlaces internos y externos es crucial. Los enlaces internos distribuyen la autoridad de enlace (*Link Equity*) a las páginas secundarias.",
                "**Requisito Vital:** Los enlaces siempre necesitan usar **`href`** para ser considerados en los cálculos de PageRank y ser rastreados.",
              ],
              componente_link_nextjs: [
                "**`<Link>` Componente:** El componente `next/link` habilita transiciones del lado del cliente.",
                "**`passHref`:** Si el componente `Link` envuelve un componente personalizado que a su vez renderiza una etiqueta `<a>` (ej. Styled Components), se debe añadir la propiedad **`passHref`** a `<Link>`. Esto es **vital para el SEO**, asegurando que el `href` se pase a la etiqueta `<a>` subyacente para el rastreo sin JavaScript.",
              ],
              tips: [
                "Utiliza **Next.js ESLint** para identificar y prevenir la omisión de `passHref` cuando sea necesario, ya que este es un error común que afecta directamente al SEO.",
              ],
            },
            {
              titulo:
                "C16: Core Web Vitals (CWV): La Experiencia de Usuario como Factor de Ranking",
              descripcion:
                "Análisis de la iniciativa Web Vitals de Google, enfocándose en las métricas Core Web Vitals (CWV) como un subconjunto crucial para medir la experiencia de página del usuario. Un buen desempeño en las CWV es ahora un factor de ranking directo en el algoritmo de búsqueda de Google.",
              core_web_vitals: [
                "**Iniciativa Web Vitals:** Creada por Google para proporcionar métricas unificadas para medir la experiencia de página del usuario.",
                "**Subconjunto CWV:** Actualmente son tres métricas que miden carga, interactividad y estabilidad visual.",
                "**Las Tres Métricas:** **LCP** (Largest Contentful Paint), **FID** (First Input Delay, pronto INP), y **CLS** (Cumulative Layout Shift).",
                "**Impacto en SEO:** Google usa las Core Web Vitals como un **factor de clasificación (ranking factor)** directo. Un bajo rendimiento impacta negativamente el ranking y el tráfico.",
              ],
              optimización: [
                "Next.js está inherentemente diseñado para optimizar estas métricas gracias al pre-renderizado (SSG/SSR) y la optimización de activos.",
                "La meta es crear una experiencia más fluida y agradable, lo que a su vez se traduce en un mejor SEO (menor tasa de rebote).",
              ],
            },
            {
              titulo: "C17: Umbrales y Estrategias de las Core Web Vitals",
              descripcion:
                "Introducción a los diferentes estados de medición (Good, Needs Improvement, Poor) de las Core Web Vitals y las dos estrategias clave para enfocar su optimización: la perfección técnica y el benchmark competitivo.",
              medición_citas: [
                "Las Core Web Vitals se clasifican en tres estados:",
                "1. **Good (Bueno):** El sitio proporciona una excelente experiencia.",
                "2. **Needs Improvement (Necesita Mejorar):** Debe optimizarse para evitar impactos negativos.",
                "3. **Poor (Pobre):** Está muy por debajo del estándar, impactando negativamente el ranking.",
              ],
              estrategias_de_optimización: [
                "**1. Perfección Técnica:** Buscar la mejor puntuación posible en cada métrica.",
                "**2. Benchmark Competitivo:** Enfocarse en superar las CWV de los **competidores directos** que clasifican para las mismas palabras clave, ya que es el nivel real de competencia.",
              ],
            },
            {
              titulo:
                "C18: Largest Contentful Paint (LCP): La Métrica de Carga Clave",
              descripcion:
                "Análisis de la métrica LCP, que mide el rendimiento de la carga al cuantificar el tiempo que tarda el elemento de contenido más grande (Largest Contentful Element) en volverse visible dentro del viewport del usuario.",
              definicion_lcp: [
                "**Medición:** LCP mide el tiempo desde que la página comienza a cargarse hasta que el bloque de imagen, video o texto más grande (el contenido principal) es completamente renderizado.",
                "**Diferencia vs. FCP:** LCP es más relevante para la UX que el First Contentful Paint (FCP), ya que FCP mide solo la primera renderización, mientras que LCP mide cuándo el usuario puede consumir el contenido principal.",
                "**Umbral 'Good':** LCP debe ocurrir en **2.5 segundos** o menos.",
              ],
              optimizacion_nextjs: [
                "Se optimiza sirviendo el HTML con el contenido crítico en la primera respuesta HTTP (SSG/SSR).",
                "Uso del componente `next/image` con la propiedad `priority` para optimizar y cargar de forma prioritaria la imagen que será el LCP.",
              ],
            },
            {
              titulo:
                "C19: First Input Delay (FID): Métrica de Interactividad y TBT",
              descripcion:
                "Análisis de la métrica FID, que mide la capacidad de respuesta de la página a la primera interacción del usuario. Un FID alto se percibe como una página 'congelada'.",
              definicion_fid: [
                "**Medición:** FID mide el tiempo desde la **primera interacción** del usuario (input) hasta que el navegador puede comenzar a **procesar** esa interacción.",
                "**Causa del Retraso:** El Hilo Principal del Navegador está ocupado ejecutando otras tareas (ej. *parsing* y ejecución de JavaScript grande).",
                "**Umbral 'Good':** FID debe ser de **100 milisegundos** o menos.",
              ],
              fid_y_tbt: [
                "FID solo se puede medir con **datos de usuarios reales** (*Field Data*).",
                "Su proxy medible en laboratorio (ej. Lighthouse) es **TBT (Total Blocking Time)**, que mide la cantidad total de tiempo que el hilo principal estuvo bloqueado.",
              ],
            },
            {
              titulo:
                "C20: Cumulative Layout Shift (CLS): Métrica de Estabilidad Visual",
              descripcion:
                "Análisis de la métrica CLS, que mide la estabilidad visual de una página. Un CLS alto ocurre cuando los elementos de la página se mueven de forma inesperada después de ser cargados, causando clics erróneos y frustración.",
              definicion_cls: [
                "**Medición:** CLS cuantifica la frecuencia y la gravedad de los cambios de diseño inesperados (combinación de impacto y distancia).",
                "**Causa:** Tipificados por imágenes sin dimensiones, anuncios o *embeds* que se insertan dinámicamente, o fuentes web que tardan en cargar (*FOIT/FOUT*).",
                "**Umbral 'Good':** CLS debe ser de **0.1** o menos.",
              ],
              optimizacion_nextjs: [
                "El componente `<Image>` de Next.js resuelve CLS automáticamente al forzar la especificación de dimensiones (`width`, `height`), reservando el espacio.",
                "El uso de `next/font` ayuda a eliminar el CLS causado por el cambio de fuentes.",
              ],
            },
            {
              titulo:
                "C21: Impacto del SEO: La Fusión de Rendimiento y Ranking",
              descripcion:
                "Análisis de cómo el rendimiento web se convirtió en un factor de ranking explícito en junio de 2021. Se detalla la importancia de la velocidad para la UX y la ponderación que Google otorga a estas métricas en Lighthouse.",
              impacto_seo: [
                "**Factor de Ranking Explícito:** Desde junio de 2021, las CWV son un factor de clasificación claro.",
                "**Regla del 'Good':** Todas las páginas que caen dentro del rango 'Good' tienen el mismo impacto positivo en el ranking, no se requiere la perfección.",
                "**Impacto UX/Negocio:** La velocidad es crucial para la experiencia de usuario y la conversión. Un retraso de un segundo puede costar millones en ingresos (ejemplo de Amazon).",
              ],
              ponderacion_lighthouse: [
                "**LCP (Largest Contentful Paint):** **25%**",
                "**TBT (Total Blocking Time):** **25%** (Proxy de FID)",
                "**CLS (Cumulative Layout Shift):** **5%**",
              ],
            },
            {
              titulo:
                "C22: Optimización Activa: Usando las Características de Next.js para Mejorar las CWV",
              descripcion:
                "El plan de ataque para mejorar el rendimiento. Se establece que las características incorporadas de Next.js son la solución directa y más eficiente para abordar los problemas subyacentes de LCP, FID/TBT y CLS.",
              ejes_de_optimización: [
                "**1. Medición:** Determinar dónde estamos fallando (Lighthouse).",
                "**2. LCP y CLS (Imágenes y Fuentes):** Next.js proporciona herramientas dedicadas para gestionarlos.",
                "**3. FID/TBT (JavaScript):** Es crucial reducir el tamaño del paquete JS inicial (Code Splitting).",
                "**4. Scripts de Terceros:** El código de terceros debe cargarse de forma óptima.",
              ],
              próximas_lecciones: [
                "**Capítulos 24-28:** Aplicación práctica de `next/image`, `next/dynamic`, `next/font` y `next/script`.",
              ],
            },
            {
              titulo:
                "C23: Introducción a Lighthouse: La Herramienta de Diagnóstico Esencial",
              descripcion:
                "Análisis de Lighthouse, una herramienta de auditoría automatizada que simula un entorno controlado ('laboratorio') para medir y reportar el rendimiento de una página web, con un enfoque principal en las Core Web Vitals (CWV).",
              función_lighthouse: [
                "**Auditoría y Reporte:** Ejecuta una serie de auditorías y genera un informe detallado con sugerencias de mejora.",
                "**Simulación (Lab Data):** Opera en un entorno simulado, midiendo LCP, CLS y **TBT (Total Blocking Time)** como proxy para FID.",
              ],
              medición_confiable: [
                "**Regla de Oro:** Siempre ejecutar reportes en una **Ventana de incógnito**.",
                "**Ambiente:** Probar con una **Producción Build** (`npm run build && npm run start`) para obtener resultados precisos, reflejando las optimizaciones de Next.js.",
              ],
            },
            {
              titulo:
                "C24: next/image: LCP, CLS y Optimización de Imágenes 'Out-of-the-Box'",
              descripcion:
                "Análisis de cómo el componente `next/image` aplica optimizaciones automáticas cruciales para el rendimiento, mejorando las métricas LCP y CLS.",
              ventajas_next_image: [
                "**On-Demand Optimization:** Las imágenes se optimizan (redimensionamiento, compresión) **bajo demanda**, no en el tiempo de compilación, manteniendo los *build times* bajos.",
                "**Lazy Loading (Por Defecto):** Las imágenes fuera del viewport se cargan de forma diferida automáticamente.",
                "**Evita CLS:** Requiere las propiedades `width` y `height` para reservar el espacio, eliminando el **CLS**.",
                "**Responsive y Moderno:** Genera automáticamente `srcset` y utiliza formatos modernos (ej. WebP).",
              ],
              implementacion: [
                "Se reemplaza `<img>` por `<Image src='...' width={W} height={H} />`.",
              ],
              tips: [
                "Para las imágenes que son el **LCP**, añadir la propiedad `priority` a `<Image>`.",
              ],
            },
            {
              titulo:
                "C25: Dynamic Imports: Dividir el Código y Mejorar la Interactividad (FID/TBT)",
              descripcion:
                "Análisis de la técnica de Dynamic Imports (`import()`) para cargar módulos de JavaScript solo cuando son necesarios, reduciendo el tamaño del paquete JS inicial, lo que disminuye el Total Blocking Time (TBT) y mejora el First Input Delay (FID).",
              solución_dynamic_imports: [
                "**Mecanismo:** El código no esencial se carga como un *chunk* de JS separado y solo se descarga cuando se requiere (ej. en el *handler* de un evento `onChange`).",
                "**Impacto CWV:** Reduce el TBT al liberar el hilo principal y resuelve el aviso de Lighthouse **'Remove unused JavaScript'**.",
                "**Implementación:** Se usa `const Modulo = (await import('modulo')).default;`.",
              ],
              tips: [
                "Aplica Dynamic Imports a cualquier librería o componente que **no sea visible Above the Fold** y no sea necesaria para la carga inicial.",
              ],
            },
            {
              titulo:
                "C26: next/dynamic: Lazy Loading a Nivel de Componente y Optimizaciones Adicionales",
              descripcion:
                "Uso de `next/dynamic` para aplicar Dynamic Imports a componentes completos de React, asegurando que solo se carguen cuando sean estrictamente necesarios, mejorando el TBT y la carga inicial.",
              next_dynamic_mecanismo: [
                "**Wrapper:** `next/dynamic` es un *wrapper* sobre `React.lazy()` que se integra con Next.js.",
                "**Uso:** `const CodeSampleModal = dynamic(() => import('../components/CodeSampleModal'), { ssr: false });`",
                "**`ssr: false`:** Desactiva el Server-Side Rendering para componentes no críticos, útiles para librerías que solo funcionan en el navegador.",
              ],
              optimización_clave: [
                "La mejor práctica es envolver el componente dinámico en una condición (`{isModalOpen && <Componente... />}`) para asegurar que el JS se descargue **solo** cuando la condición se cumpla por primera vez.",
              ],
            },
            {
              titulo:
                "C27: Optimización Automática de Fuentes Web: Mejorando LCP y CLS",
              descripcion:
                "Análisis de cómo Next.js mitiga el costo de rendimiento de las fuentes web, que son un contribuyente común al CLS y al LCP.",
              problemas_fuentes_web: [
                "Las fuentes requieren una solicitud de red separada (*round trip*) para el CSS y el archivo de fuente.",
                "El *parpadeo de texto* (FOIT/FOUT) causa **CLS** cuando el texto salta al cambiar de fuente.",
              ],
              solución_nextjs: [
                "**Inlining de CSS:** Next.js implementa la **Optimización Automática de Fuentes** al incrustar el CSS de las declaraciones de fuente (`@font-face`) directamente en el HTML en el tiempo de compilación.",
                "**Beneficios:** Elimina la necesidad de una solicitud de red separada, acelerando la renderización de texto y mejorando **LCP** y **FCP**.",
              ],
            },
            {
              titulo:
                "C28: next/script: Gestionando Scripts de Terceros de Forma Óptima",
              descripcion:
                "Análisis de cómo `next/script` permite controlar con precisión el momento de carga y ejecución de los scripts de terceros (ej. analíticas, anuncios) para evitar el bloqueo de la renderización y mejorar las CWV.",
              componente_script: [
                "El componente `<Script>` permite añadir scripts en cualquier parte del componente de React sin usar `next/head`.",
              ],
              estrategias_de_carga: [
                "**`afterInteractive`:** (Recomendado) Carga el script inmediatamente **después** de que la página se vuelve interactiva, sin bloquear el LCP.",
                "**`lazyOnload`:** Carga de forma **diferida** durante el tiempo de inactividad del navegador (*browser idle time*). Ideal para scripts no esenciales (ej. widgets de chat).",
                "**`beforeInteractive`:** (Solo para scripts críticos) Ejecuta el script antes de la interacción.",
              ],
            },
            {
              titulo:
                "C29: Monitoreo: Tracking de CWV en Producción y Herramientas de Reporte",
              descripcion:
                "Análisis de la importancia de monitorizar las Core Web Vitals en un entorno de producción para garantizar que las optimizaciones persistan, utilizando datos de usuarios reales (*Field Data*).",
              importancia_monitoreo: [
                "**Tendencia vs. Punto:** El seguimiento a lo largo del tiempo es clave para identificar regresiones, no los *tests* puntuales de laboratorio.",
                "**Umbral de Google:** Las métricas deben mantenerse en el rango 'Good' para el **75% de las visitas de los usuarios** (percentil 75).",
              ],
              herramientas_de_monitoreo: [
                "**1. Next.js Speed Insights:** Recopila y visualiza automáticamente los datos de CWV de tráfico real.",
                "**2. Custom Reporting (`reportWebVitals`):** Permite enviar métricas CWV a servicios de terceros (ej. Google Analytics).",
                "**3. CrUX Report:** Conjunto de datos públicos de Google que alimenta **Google Search Console** y **PageSpeed Insights** (*Field Data*).",
              ],
            },
          ],
          "Tips rápidos": [
            "For indexable and critical content, maximize the use of SSG and ISR over SSR/CSR.",
            "Use the canonical tag on all pages to consolidate authority and prevent duplicates.",
            "Ensure the first load (HTML) contains essential content for crawling, without relying on JavaScript execution.",
            "Use next/image with explicit width/height to avoid CLS and improve LCP with the priority prop.",
            "Apply Dynamic Imports to any component or library not visible Above the Fold to improve interactivity (FID/TBT).",
            "Use strategy='afterInteractive' or lazyOnload in next/script to defer third-party script loading.",
            "Monitor your performance metrics in production using field data (CrUX) and the 75th percentile threshold.",
          ],
        },
      },
    ],
  },
];
