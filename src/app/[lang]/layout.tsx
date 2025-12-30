import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  // Asegura que lang sea "es" | "en"
  const safeLang = lang === "en" ? "en" : "es";

  const titles: Record<"es" | "en", string> = {
    es: "Portafolio de Lautaro",
    en: "Lautaro's Portfolio",
  };
  const descriptions: Record<"es" | "en", string> = {
    es: "Portafolio interactivo de Lautaro: proyectos, CV, contacto y más.",
    en: "Lautaro's interactive portfolio: projects, resume, contact and more.",
  };

  const title = titles[safeLang];
  const description = descriptions[safeLang];

  return {
    metadataBase: new URL("https://tusitio.com"),
    title,
    description,
    icons: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    ],
    openGraph: {
      title,
      description,
      url: "https://tusitio.com",
      siteName: title,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0078d4",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
