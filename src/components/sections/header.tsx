"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Ministrações", href: "#ministracoes" },
    { name: "Pedidos", href: "#pedidos" },
    { name: "Dizimos e Ofertas", href: "#dizimos" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-[#111] backdrop-blur-md text-white px-6 py-4 flex justify-between items-center"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo.webp"
          alt="Promessas Pedreira"
          width={60}
          height={60}
        />
      </Link>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-6 text-sm font-medium">
        {links.map((link, i) => (
          <li key={i} className="relative group">
            <a
              href={link.href}
              className="transition-colors duration-300 group-hover:text-primary"
            >
              {link.name}
            </a>
            <motion.span
              layoutId="underline"
              className="absolute left-0 bottom-0 h-[2px] bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 w-full"
            />
          </li>
        ))}
      </ul>

      {/* Ícone Instagram + Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/promessaszs/"
          target="_blank"
          className="text-primary hover:text-primary transition duration-300"
        >
          {/* SVG Instagram */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram-icon lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* Botão hambúrguer visível apenas no mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Abrir menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // X (close)
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger
              }
            />
          </svg>
        </button>
      </div>

      {/* Menu Mobile - Framer Motion + AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#111] backdrop-blur-md text-white flex flex-col items-center py-6 gap-4 md:hidden"
          >
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
