import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geistRaleway = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistRalewayMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promessas Pedreira",
  description:
    "Igreja Assembleia de Deus Ministério Promessas em Pedreira - SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${geistRaleway.variable} ${geistRalewayMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
