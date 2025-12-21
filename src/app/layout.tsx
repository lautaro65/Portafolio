import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Lautaro",
  description:
    "Portafolio interactivo de Lautaro: proyectos, CV, contacto y más.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#0078d4",
  openGraph: {
    title: "Portafolio de Lautaro",
    description: "Descubre mis proyectos, habilidades y cómo contactarme.",
    url: "https://tusitio.com", // Cambia por tu dominio real
    siteName: "Portafolio de Lautaro",
    images: [
      {
        url: "/og-image.png", // Cambia por la ruta de tu imagen Open Graph
        width: 1200,
        height: 630,
        alt: "Portafolio de Lautaro",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de Lautaro",
    description: "Descubre mis proyectos, habilidades y cómo contactarme.",
    images: ["/og-image.png"], // Cambia por la ruta de tu imagen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
