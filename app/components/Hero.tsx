"use client"

import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import * as image from "../assets/profile.jpeg"

const CodePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
    <pattern
      id="pattern-circles"
      x="0"
      y="0"
      width="50"
      height="50"
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
    >
      <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000"></circle>
    </pattern>
    <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-indigo-900 dark:to-purple-900"
    >
      {/* Programming-themed Background */}
      <div className="absolute inset-0 z-0">
        <CodePattern />
      </div>

      {/* Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x"></div>
      </div>

      <div className="container relative z-10 px-6 pt-32 pb-20 mx-auto">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <motion.div
            className="text-center lg:w-1/2 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="pb-2 text-4xl font-bold text-transparent md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Yago Adrio
            </h1>
            <h2 className="mb-6 ml-2 text-2xl font-semibold text-gray-700 md:text-2xl dark:text-gray-300">
              Software Developer
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-400 lg:mx-0">
            Desarrollador Full Stack con experiencia en React, Node.js y NestJS, especializado en aplicaciones de gestión y análisis de datos.
            </p>
            <div className="flex justify-center mb-8 space-x-4 lg:justify-start">
              <a
                href="https://github.com/YagoDevelop"
                className="p-3 transition-colors duration-300 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/yago-adrio-teijido-77b64a17b/"
                className="p-3 transition-colors duration-300 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:yagodevelop@gmail.com"
                className="p-3 transition-colors duration-300 rounded-full shadow-lg bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 hover:shadow-xl"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
            <motion.button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conoceme
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 transform opacity-50 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 transform opacity-50 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl -rotate-6"></div>
              <div className="overflow-hidden shadow-2xl rounded-2xl">
                <Image
                  src={image}
                  alt="Yago Adrio"
                  fill
                  className="object-cover, rounded-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-10 left-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse"></div>
      </motion.div>
    </section>
  )
}

