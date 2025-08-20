import { fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="relative bg-background text-white py-20 px-6">
      <div id="sobre" className="absolute mt-[-140px]"></div>
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
          Desde 2012, a Assembleia de Deus Promessas – unidade Pedreira tem sido
          um lugar de acolhimento, discipulado e crescimento espiritual. Sob a
          liderança do Pastor César Ferreira da Silva, seguimos firmes no
          propósito de viver e compartilhar o amor de Cristo.
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
              <h3 className="text-primary text-lg font-semibold mb-2">
                {item.titulo}
              </h3>
              <div className="w-8 h-0.5 bg-primary mt-[-8px] group-hover:w-12 transition-all duration-300"></div>
              <p className="text-gray-800 mt-4">{item.texto}</p>
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
            href="https://www.instagram.com/promessaszs/"
            target="_blank"
            className="w-full md:w-[200px] bg-primary text-black px-6 py-3 rounded-md font-semibold hover:bg-blue-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-base sm:text-lg flex items-center justify-center gap-2"
            aria-label="Saiba mais sobre a igreja"
          >
            Acompanhe-nos
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
