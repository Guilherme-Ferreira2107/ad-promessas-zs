"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SpinningText } from "@/components/magicui/spinning-text";
import {
  ArrowRightIcon,
  BookOpenIcon,
  CheckIcon,
  ClipboardCheckIcon,
  CopyIcon,
  HeartIcon,
  PlayIcon,
  SendIcon,
} from "lucide-react";
import PrayerFormRefactored from "@/components/magicui/contacts";
import { fadeUp } from "@/lib/utils";

export default function Home() {
  const [, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pixKey = "pix@promessaspedreira.com.br";

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Resetar após 2s
    } catch (error) {
      console.error("Erro ao copiar Pix:", error);
    }
  };

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

  const links = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#sobre" },
    { name: "Mensagens", href: "#blog" },
    { name: "Contato", href: "#formulario" },
  ];

  // const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"];
  // const posts = [
  //   {
  //     title: "A Fé que Transforma",
  //     description: "Reflexão sobre Hebreus 11",
  //     link: "#",
  //   },
  //   {
  //     title: "Vivendo em Comunhão",
  //     description: "Mensagem sobre Atos 2",
  //     link: "#",
  //   },
  // ];

  const ministracoes = [
    {
      title: "A Graça que Transforma",
      description:
        "Uma mensagem poderosa sobre como a graça de Deus pode transformar completamente nossas vidas e nos dar uma nova perspectiva.",
      link: "#",
      date: "15 de Agosto, 2025",
      image: "/1.jpg",
    },
    {
      title: "Fé em Tempos Difíceis",
      description:
        "Reflexões bíblicas sobre como manter a fé firme mesmo quando enfrentamos os maiores desafios da vida.",
      link: "#",
      date: "8 de Agosto, 2025",
      image: "/2.jpg",
    },
    {
      title: "O Amor que Não Falha",
      description:
        "Explorando o amor incondicional de Cristo e como podemos refletir esse amor em nossos relacionamentos diários.",
      link: "#",
      date: "1 de Agosto, 2025",
      image: "/3.jpg",
    },
    {
      title: "Propósito Divino",
      description:
        "Descobrindo o plano de Deus para nossas vidas e como caminhar no centro da vontade divina com confiança.",
      link: "#",
      date: "25 de Julho, 2025",
      image: "/4.jpg",
    },
  ];

  // if (isLoading) {
  //   return <LoadingScreen />;
  // }

  return (
    <div className="font-sans" id="home">
      {/* header */}
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

      {/* hero */}
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
              fill
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
              className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto"
            >
              a um lugar de esperança, fé e comunhão.
            </motion.p>
          </div>

          {/* Versículo bíblico */}
          <div className="mb-10 font-bold">
            <blockquote className="text-gray-200 text-xs sm:text-sm italic max-w-6xl mx-auto">
              <TextAnimate animation="blurInUp" once delay={0.8} duration={0.5}>
                Vinde a mim, todos os que estais cansados e oprimidos, e eu vos
                aliviarei
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
                Mateus 11:28
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

      {/* sobre a igreja */}
      <section className="bg-background text-white py-20 px-6" id="sobre">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Título */}
          <motion.h2
            className="relative inline-block text-3xl sm:text-4xl font-bold text-primary mb-10 after:block after:mx-auto after:mt-2 after:h-[2px] after:w-12 after:bg-primary"
            variants={fadeUp}
            custom={0}
          >
            Sobre a Promessas Pedreira
          </motion.h2>

          {/* Parágrafo principal */}
          <motion.p
            className="max-w-3xl mx-auto text-gray-800 text-lg mb-8 leading-relaxed"
            variants={fadeUp}
            custom={1}
          >
            Desde 2012, a Assembleia de Deus Promessas – unidade Pedreira tem
            sido um lugar de acolhimento, discipulado e crescimento espiritual.
            Sob a liderança do Pastor César Ferreira da Silva, seguimos firmes
            no propósito de viver e compartilhar o amor de Cristo.
          </motion.p>

          {/* Blocos de Missão, Visão e Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left text-sm sm:text-base">
            {[
              {
                titulo: "Missão",
                texto:
                  "Discipular vidas com excelência, amor e compromisso com o Reino.",
              },
              {
                titulo: "Visão",
                texto:
                  "Ser uma igreja acolhedora, centrada em Cristo, que promove comunhão e transformação.",
              },
              {
                titulo: "Valores",
                texto:
                  "Fé, amor, serviço, integridade e compromisso com a Palavra.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUp} custom={index + 2}>
                <h3 className="text-primary font-semibold mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-800">{item.texto}</p>

                <div className="w-8 h-0.5 bg-primary mt-4 group-hover:w-12 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Botão */}
          <motion.div
            className="w-full mx-auto flex justify-center text-center mt-6"
            variants={fadeUp}
            custom={5}
          >
            <Link
              href="/sobre-nos"
              className="w-full md:w-[200px] bg-primary text-black px-6 py-3 rounded-md font-semibold hover:bg-blue-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-base sm:text-lg flex items-center justify-center gap-2"
              aria-label="Saiba mais sobre a igreja"
            >
              Saiba mais
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ministrações */}
      <motion.section
        className="text-white py-16 px-6 mx-auto text-center"
        id="blog"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Título com linha abaixo */}
        <motion.h2
          className="relative inline-block text-3xl sm:text-4xl font-bold text-primary mb-10 after:block after:mx-auto after:mt-2 after:h-[2px] after:w-12 after:bg-primary"
          variants={fadeUp}
          custom={0}
        >
          Últimas Ministrações
        </motion.h2>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {ministracoes.map((post, i) => (
            <motion.div
              key={i}
              className="relative bg-white text-black rounded-lg shadow-lg overflow-hidden group cursor-pointer"
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Imagem no topo */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Decoração animada (mantido) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/30 to-secondary/30"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-primary/75"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <BookOpenIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  {post.description}
                </p>
                <motion.a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 2 }}
                >
                  Leia Mais
                  <PlayIcon className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* contatos */}
      <PrayerFormRefactored />

      {/* informações */}
      <section className="bg-background text-white py-20 px-6" id="doacoes">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-primary mb-10 relative inline-block after:block after:mx-auto after:mt-2 after:h-[2px] after:w-12 after:bg-primary"
            variants={fadeUp}
            custom={0}
          >
            Doações
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-10 max-w-xl mx-auto text-lg"
            variants={fadeUp}
            custom={1}
          >
            Sua contribuição é essencial para que continuemos impactando vidas.
            Abaixo, explicamos como realizar sua doação via Pix de forma simples
            e segura:
          </motion.p>

          {/* Etapas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto px-2 sm:px-4 text-left">
            {/* Etapa 1 */}
            <motion.div
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition duration-300"
              variants={fadeUp}
              custom={2}
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <HeartIcon className="w-6 h-6" />
                <h3 className="text-lg font-semibold">
                  1. Acesse seu app bancário
                </h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                Entre na área Pix do seu banco ou carteira digital de
                preferência.
              </p>
            </motion.div>

            {/* Etapa 2 */}
            <motion.div
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition duration-300"
              variants={fadeUp}
              custom={3}
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <SendIcon className="w-6 h-6" />
                <h3 className="text-lg font-semibold">2. Envie sua oferta</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Use a chave Pix abaixo:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-black font-bold text-sm w-full">
                <span className="break-words text-center sm:text-left">
                  {pixKey}
                </span>

                <button
                  onClick={handleCopy}
                  className="cursor-pointer bg-primary text-white px-3 py-1 rounded-md text-xs flex items-center gap-2 hover:bg-primary/90 transition whitespace-nowrap"
                  aria-label="Copiar chave Pix"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-4 h-4" />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-4 h-4" />
                      Copiar
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Etapa 3 */}
            <motion.div
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/30 transition duration-300"
              variants={fadeUp}
              custom={4}
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <ClipboardCheckIcon className="w-6 h-6" />
                <h3 className="text-lg font-semibold">3. Escreva o motivo</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                No campo de descrição do Pix, por favor, informe o motivo da sua
                doação. <br />
                Ex: <em>"Dízimo", "Oferta", "Campanha Social"</em>.
              </p>
            </motion.div>
          </div>

          <motion.p
            className="mt-12 text-sm text-gray-700 max-w-xl mx-auto"
            variants={fadeUp}
            custom={5}
          >
            “E provai-me nisto, diz o Senhor, se eu não vos abrir as janelas do
            céu.” – Malaquias 3:10
          </motion.p>
        </motion.div>
      </section>

      <footer className="bg-[#2e2e2e] text-white py-6 px-4 text-center">
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
