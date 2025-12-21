import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://tusitio.com"),
  title: "Portafolio de Lautaro",
  description:
    "Portafolio interactivo de Lautaro: proyectos, CV, contacto y más.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "Portafolio de Lautaro",
    description: "Descubre mis proyectos, habilidades y cómo contactarme.",
    url: "https://tusitio.com",
    siteName: "Portafolio de Lautaro",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0078d4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
