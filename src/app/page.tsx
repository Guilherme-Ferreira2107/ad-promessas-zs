"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import LoadingScreen from "./loading";
import { useEffect, useState } from "react";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const links = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Galeria", href: "#galeria" },
    { name: "Mensagens", href: "#blog" },
    { name: "Contato", href: "#formulario" },
  ];

  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];
  const posts = [
    {
      title: "A Fé que Transforma",
      description: "Reflexão sobre Hebreus 11",
      link: "#",
    },
    {
      title: "Vivendo em Comunhão",
      description: "Mensagem sobre Atos 2",
      link: "#",
    },
  ];

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="font-sans" id="home">
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

      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden font-[var(--font-sans)]">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="/1.jpg"
            aria-label="Vídeo de fundo da igreja"
          >
            <source src="/video.mp4" type="video/mp4" />
            <Image
              src="/1.jpg"
              alt="Imagem de fundo da igreja"
              className="w-full h-full object-cover"
            />
          </video>
        </div>

        {/* Overlay escurecido */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>

        {/* Faixa de destaque (azul claro) */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="absolute top-23 w-full bg-primary p-2 z-20 text-black text-sm sm:text-base tracking-wide font-medium shadow-md"
        >
          Você é bem-vindo aqui — Assembléia de Deus Promessas Zona Sul
        </motion.div>

        {/* Conteúdo */}
        <div className="relative z-20 max-w-4xl mx-auto text-white px-4 pt-12">
          {/* Título e subtítulo */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary leading-tight tracking-tight"
            >
              Sejam Bem-vindos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto"
            >
              à um lugar de esperança, fé e comunhão.
            </motion.p>
          </div>

          {/* Versículo bíblico */}
          <div className="mb-10 font-bold">
            <blockquote className="text-gray-400 text-xs sm:text-sm italic max-w-3xl mx-auto">
              <TextAnimate animation="blurInUp" once delay={0.8} duration={0.5}>
                Portanto ide, fazei discípulos de todas as nações...
              </TextAnimate>
            </blockquote>

            <cite className="text-blue-300 text-xs font-medium mt-1 block not-italic">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                delay={1.0}
                duration={0.9}
              >
                Mateus 28:19
              </TextAnimate>
            </cite>
          </div>

          {/* Botões de ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1.1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="#doacoes"
              className="border border-primary px-6 py-3 rounded-md text-primary hover:bg-primary hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-base sm:text-lg"
              aria-label="Fazer uma doação - ir para seção de doações"
            >
              Dízimos e Ofertas
            </Link>
            <Link
              href="#formulario"
              className="bg-primary text-black px-6 py-3 rounded-md font-semibold hover:bg-blue-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-base sm:text-lg"
              aria-label="Enviar pedido de oração - abre formulário"
            >
              Enviar Pedido de Oração
            </Link>
          </motion.div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>

        <div className="absolute bottom-[60px] right-[60px]  z-20">
          <SpinningText
            reverse
            className="text-sm text-white"
            duration={20}
            radius={4}
          >
            ore • leia • cresça •
          </SpinningText>
        </div>
      </section>

      <section className="bg-background text-white py-16 px-6" id="sobre">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Sobre a Igreja
          </h2>
          <p className="mb-4">
            Fundada em 2012, a Assembleia de Deus Promessas - Promessas Pedreira
            é liderada pelo Pastor César Ferreira da Silva. Nossa missão é
            discipular, amar e servir.
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Missão:</strong> Levar o evangelho com excelência
            </li>
            <li>
              <strong>Visão:</strong> Comunhão, discipulado e transformação
            </li>
            <li>
              <strong>Valores:</strong> Fé, amor, serviço e integridade
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-background text-white py-16 px-6" id="galeria">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Galeria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Galeria ${i}`}
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </section>

      <section className="bg-background text-white py-16 px-6" id="blog">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Mensagens
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              className="bg-white text-black p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4">{post.description}</p>
              <a href={post.link} className="text-primary font-semibold">
                Leia Mais
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-background text-white py-16 px-6" id="formulario">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Pedido de Oração
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            {...register("nome")}
            placeholder="Nome"
            className="w-full p-3 rounded bg-white text-black"
          />
          <input
            {...register("email")}
            placeholder="E-mail"
            className="w-full p-3 rounded bg-white text-black"
          />
          <textarea
            {...register("mensagem")}
            placeholder="Mensagem"
            className="w-full p-3 rounded bg-white text-black h-32"
          />
          <button
            type="submit"
            className="bg-primary text-black px-6 py-2 rounded font-semibold"
          >
            Enviar Pedido
          </button>
        </form>
      </section>

      <section className="bg-background text-white py-16 px-6" id="doacoes">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center">
          Doações
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="mb-4">
            Ajude-nos a continuar nossa missão. Faça sua doação via Pix:
          </p>
          <div className="bg-white text-black p-4 rounded-lg font-bold text-lg mb-4">
            pix@promessaspedreira.com.br
          </div>
          <p>Por favor, descreva a origem da oferta no campo de observações.</p>
        </div>
      </section>

      <footer className="bg-black text-white py-6 px-4 text-center">
        <p>Contato: promessaspedreira@gmail.com</p>
        <p>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/promessaszs/"
            className="text-primary"
          >
            @promessaszs
          </a>
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Desenvolvido com ❤️ por M3 Digital Solutions
        </p>
      </footer>
    </div>
  );
}
