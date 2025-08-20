import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const geistRaleway = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistRalewayMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AD Promessas Pedreira",
  description:
    "Igreja Assémbleia de Deus Ministério Promessas em Pedreira - SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistRaleway.variable} ${geistRalewayMono.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
