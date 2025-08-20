"use client";

import { useState } from "react";
import { fadeUp } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  CheckIcon,
  ClipboardCheckIcon,
  HeartIcon,
  SendIcon,
} from "lucide-react";

export const InformationSection = () => {
  const [copied, setCopied] = useState(false);
  const pixKey = "pix@promessaspedreira.com.br";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar Pix:", error);
    }
  };

  return (
    <section className="bg-background text-white py-20 px-6">
      <div id="dizimos" className="absolute mt-[-140px]"></div>

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
          Dizímos e Ofertas
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-10 max-w-xl mx-auto text-lg"
          variants={fadeUp}
          custom={1}
        >
          Sua contribuição é essencial para que continuemos impactando vidas.
          Abaixo, explicamos como realizar sua doação via Pix de forma simples e
          segura:
        </motion.p>

        {/* Etapas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mx-auto px-2 sm:px-4 text-left">
          {/* Etapa 1 */}
          <motion.div
            className="bg-white/5 p-6 rounded-xl transition duration-300"
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
              Entre na área Pix do seu banco ou carteira digital de preferência.
            </p>
          </motion.div>

          {/* Etapa 2 */}
          <motion.div
            className="bg-white/5 p-6 rounded-xl transition duration-300"
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
              <button
                onClick={handleCopy}
                className="cursor-pointer bg-primary  px-3 py-1 rounded-md text-xs flex items-center gap-2 hover:bg-primary/90 transition whitespace-nowrap"
                aria-label="Copiar chave Pix"
              >
                <span className="break-words text-center sm:text-left">
                  {pixKey}
                </span>
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4" />
                    Copiado!
                  </>
                ) : null}
              </button>
            </div>
          </motion.div>

          {/* Etapa 3 */}
          <motion.div
            className="bg-white/5 p-6 rounded-xl transition duration-300"
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
          className="mt-12 text-md text-black mx-auto"
          variants={fadeUp}
          custom={5}
        >
          “E provai-me nisto, diz o Senhor, se eu não vos abrir as janelas do
          céu.” – Malaquias 3:10
        </motion.p>
      </motion.div>
    </section>
  );
};
