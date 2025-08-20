import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserIcon,
  MessageSquareIcon,
  HeartIcon,
  CheckIcon,
  SendIcon,
  PhoneIcon,
} from "lucide-react";
import { fadeUp } from "@/lib/utils";

interface FormData {
  nome: string;
  phone: string;
  mensagem: string;
}

interface InputField {
  name: keyof FormData;
  placeholder: string;
  type: string;
  icon: React.ComponentType<any>;
  label: string;
}

export const ContactsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    phone: "",
    mensagem: "",
  });
  const [focusedField, setFocusedField] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro quando usuário começar a digitar
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Tele é obrigatório";
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = "E-mail inválido";
    // }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = "Mensagem é obrigatória";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simular envio
    setIsSubmitted(true);

    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ nome: "", phone: "", mensagem: "" });
    }, 3000);
  };

  const inputFields: InputField[] = [
    {
      name: "nome",
      placeholder: "Seu nome completo",
      type: "text",
      icon: UserIcon,
      label: "Nome",
    },
    {
      name: "phone",
      placeholder: "(XX) XXXXX-XXXX",
      type: "text",
      icon: PhoneIcon,
      label: "Telefone/Celular",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (isSubmitted) {
    return (
      <section className="bg-background text-white py-16 px-6">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 0.8 }}
          >
            <CheckIcon className="w-10 h-10 text-green-600" />
          </motion.div>

          <h2 className="text-3xl font-bold text-primary mb-4">
            Pedido Enviado!
          </h2>
          <p className="text-gray-700 text-lg">
            Seu pedido de oração foi recebido com carinho. Nossa equipe irá orar
            por você.
          </p>

          <motion.div
            className="flex justify-center mt-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HeartIcon className="w-6 h-6 text-red-400" />
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-background text-white py-16 px-6">
      <div id="pedidos" className="absolute mt-[-140px]"></div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeUp} custom={1} className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <HeartIcon className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary mb-2">
            Pedido de Oração
          </h2>
          <p className="text-gray-700 max-w-md mx-auto">
            Compartilhe conosco seus pedidos de oração. Nossa equipe está pronta
            para interceder por você.
          </p>
        </motion.div>

        {/* Formulário */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Campos de input */}
          <div className="grid gap-6">
            {inputFields.map((field) => {
              const IconComponent = field.icon;
              const hasError = errors[field.name];
              const hasValue = formData[field.name];
              const isFocused = focusedField === field.name;

              return (
                <motion.div
                  key={field.name}
                  className="relative"
                  transition={{ duration: 0.2 }}
                  variants={fadeUp}
                  custom={2}
                >
                  {/* Label */}
                  <motion.label
                    className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                      isFocused || hasValue
                        ? "top-4 text-xs text-primary font-medium"
                        : "top-4 text-gray-400"
                    }`}
                    animate={{
                      y: isFocused || hasValue ? -8 : 0,
                    }}
                  >
                    {field.label}
                  </motion.label>

                  {/* Ícone */}
                  <div
                    className={`absolute left-4 top-4 transition-colors duration-300 ${
                      isFocused ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Input */}
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField("")}
                    placeholder={isFocused ? field.placeholder : ""}
                    className={`w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-white text-black transition-all duration-300 border-2 ${
                      hasError
                        ? "border-red-400 focus:border-red-500"
                        : isFocused
                        ? "border-primary focus:border-primary"
                        : "border-gray-200 focus:border-primary"
                    } focus:outline-none focus:ring-0`}
                  />

                  {/* Mensagem de erro */}
                  {hasError && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm mt-2 ml-2"
                    >
                      {hasError}
                    </motion.p>
                  )}
                </motion.div>
              );
            })}

            {/* Textarea */}
            <motion.div
              className="relative"
              variants={fadeUp}
              custom={4}
              transition={{ duration: 0.2 }}
            >
              <motion.label
                className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                  focusedField === "mensagem" || formData.mensagem
                    ? "top-4 text-xs text-primary font-medium"
                    : "top-4 text-gray-400"
                }`}
                animate={{
                  y: focusedField === "mensagem" || formData.mensagem ? -8 : 0,
                  scale:
                    focusedField === "mensagem" || formData.mensagem ? 0.85 : 1,
                }}
              >
                Mensagem
              </motion.label>

              <div
                className={`absolute left-4 top-4 transition-colors duration-300 ${
                  focusedField === "mensagem" ? "text-primary" : "text-gray-400"
                }`}
              >
                <MessageSquareIcon className="w-5 h-5" />
              </div>

              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                onFocus={() => setFocusedField("mensagem")}
                onBlur={() => setFocusedField("")}
                placeholder={
                  focusedField === "mensagem"
                    ? "Compartilhe seu pedido de oração..."
                    : ""
                }
                rows={4}
                className={`w-full pl-12 pr-4 pt-6 pb-2 rounded-lg bg-white text-black transition-all duration-300 border-2 resize-none ${
                  errors.mensagem
                    ? "border-red-400 focus:border-red-500"
                    : focusedField === "mensagem"
                    ? "border-primary focus:border-primary"
                    : "border-gray-200 focus:border-primary"
                } focus:outline-none focus:ring-0`}
              />

              {errors.mensagem && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 ml-2"
                >
                  {errors.mensagem}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Botão */}
          <motion.div
            className="text-center pt-4"
            variants={fadeUp}
            custom={5}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary/90"
            >
              <SendIcon className="w-5 h-5" />
              Enviar Pedido
            </button>
          </motion.div>
        </motion.form>

        {/* Footer */}
        <motion.div
          variants={fadeUp}
          custom={6}
          className="text-center mt-8 text-gray-700 text-sm"
        >
          <p>
            Seus dados estão seguros conosco e serão usados apenas para fins de
            oração.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
