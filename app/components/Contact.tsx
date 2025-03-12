"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  
  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
    >
      <div className="container relative z-10 px-6 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>
        <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
          <motion.div
            className="align-middle lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 bg-white shadow-lg dark:bg-gray-800 rounded-xl">
              
              <div className="space-y-6">
                <a
                  href="https://www.linkedin.com/in/yago-adrio-teijido-77b64a17b/"
                  className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="w-6 h-6 mr-3 text-blue-600" />
                  Yago Adrio Teijido
                </a>
                <a
                  href="mailto:yagodevelop@gmail.com"
                  className="flex items-center text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Mail className="w-6 h-6 mr-3 text-blue-600" />
                  yagodevelop@gmail.com
                </a>

                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                  Lugo, Galicia
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  )
}

