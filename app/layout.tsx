import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Puedes especificar los pesos que necesitas
  style: ["normal", "italic"], // Puedes especificar los estilos que necesitas
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bienvenidos a mi portafolio web. Soy Lautaro Octavio Faure, un apasionado programador argentino de 18 años con 3 años de experiencia en el desarrollo de páginas web."
        />
        <meta
          name="keywords"
          content="Lautaro Octavio Faure, portafolio web, programador argentino, desarrollo web, páginas web, programador joven, proyectos de programación, tecnologías web, innovación en desarrollo, programador de 18 años, experiencia en programación, soluciones web, desarrollo de sitios web"
        />
        <meta name="author" content="Lautaro Octavio Faure" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="es"/>
        <meta
          property="og:title"
          content="portafolio web de Lautaro Octavio Faure"
        />
        <meta
          property="og:description"
          content="Bienvenidos a mi portafolio web. Soy Lautaro Octavio Faure, un apasionado programador argentino de 18 años con 3 años de experiencia en el desarrollo de páginas web."
        />
        <meta
          property="og:image"
          content="https://portafolio-lautaro-faures-projects.vercel.app/portada.png"
        />
        <meta
          property="og:url"
          content="https://portafolio-lautaro-faures-projects.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="portafolio web de Lautaro Octavio Faure"
        />
        <meta
          name="twitter:description"
          content="Bienvenidos a mi portafolio web. Soy Lautaro Octavio Faure, un apasionado programador argentino de 18 años con 3 años de experiencia en el desarrollo de páginas web."
        />
        <meta
          name="twitter:image"
          content="https://portafolio-lautaro-faures-projects.vercel.app/portada.png"
        />
        <meta name="twitter:site" content="@Developer_faure" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="application-name"
          content="portafolio web de Lautaro Octavio Faure"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="https://portafolio-lautaro-faures-projects.vercel.app/portada.png"
        />
        <meta name="msapplication-config" content="browserconfig.xml" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="apple-touch-icon"
          href="https://portafolio-lautaro-faures-projects.vercel.app/portada.png"
        />
        <title>Portafolio web de Lautaro Octavio Faure</title>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
