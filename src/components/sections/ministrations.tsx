import { fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";
import { BookOpenIcon, PlayIcon } from "lucide-react";

export const MinistrationsSection = () => {
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

  return (
    <motion.section
      className="text-white py-16 px-6 mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div id="ministracoes" className="absolute mt-[-140px]"></div>
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
  );
};
