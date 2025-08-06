"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-blue-400/10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-md mx-auto">
        <div className="w-20 h-20 mx-auto flex items-center justify-center">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={64}
            height={64}
            className="w-16 h-16"
          />
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Preparando um lugar especial para você...
          </p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full max-w-xs mx-auto"
        >
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                delay: 0.8,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8"
        >
          <blockquote className="text-gray-400 text-xs sm:text-sm italic">
            "Porque eu bem sei os pensamentos que tenho a vosso respeito..."
          </blockquote>
          <cite className="text-blue-300 text-xs font-medium mt-1 block not-italic">
            Jeremias 29:11
          </cite>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
