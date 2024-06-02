import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700','900'], // Puedes especificar los pesos que necesitas
  style: ['normal', 'italic'], // Puedes especificar los estilos que necesitas
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
      
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
