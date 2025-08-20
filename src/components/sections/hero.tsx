import { motion } from "framer-motion";
import Link from "next/link";
import { SpinningText } from "../magicui/spinning-text";
import { TextAnimate } from "../magicui/text-animate";
import Image from "next/image";

export const HeroSection = () => {
  return (
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
      {/* <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="absolute top-23 w-full bg-primary p-2 z-20 text-black text-sm sm:text-base tracking-wide font-medium shadow-md"
      >
        Você é bem-vindo aqui — Assembléia de Deus Promessas Zona Sul
      </motion.div> */}

      {/* Conteúdo */}
      <div className="relative z-20 max-w-4xl mx-auto text-white px-4 pt-12">
        {/* Título e subtítulo */}
        <div className="mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight tracking-tight"
          >
            Sejam Bem-vindos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light max-w-2xl mx-auto mt-[-20]"
          >
            a um lugar de esperança, fé e comunhão.
          </motion.p>
        </div>

        {/* Versículo bíblico */}
        <div className="mb-10 font-bold">
          <blockquote className="text-gray-200 text-xs sm:text-sm italic max-w-6xl mx-auto">
            <TextAnimate animation="blurInUp" once delay={0.8} duration={0.5}>
              ''Vinde a mim, todos os que estais cansados e oprimidos, e eu vos
              aliviarei''
            </TextAnimate>
          </blockquote>

          <cite className="text-primary text-xs font-medium mt-1 block not-italic">
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
            href="#dizimos"
            className="border border-primary px-6 py-3 rounded-md text-primary hover:bg-primary hover:text-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-base sm:text-lg"
            aria-label="Fazer uma doação - ir para seção de doações"
          >
            Dízimos e Ofertas
          </Link>
          <Link
            href="#pedidos"
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
          ore • leia • jejue •
        </SpinningText>
      </div>
    </section>
  );
};
