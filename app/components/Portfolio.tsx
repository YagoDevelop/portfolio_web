"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Code, Layers } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const projects = [
  {
    title: "DecorArte",
    url: "https://decorartelugo.es/",
    image: "/decorarte.png",
    description: "Tienda online de productos personalizados hechos a mano con un enfoque artesanal.",
    tags: ["Next.js", "E-commerce", "Tailwind CSS"],
    icon: <Layers className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "HomeBudgeter",
    url: "https://homebudgeter.yagodev.es/",
    image: "/homebudgeter.png",
    description: "Herramienta avanzada para el cálculo de presupuestos hipotecarios y análisis financiero detallado.",
    tags: ["React", "API Integration", "Financial Tools"],
    icon: <Code className="w-6 h-6 text-purple-500" />,
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 z-0 w-64 h-64 bg-blue-200 rounded-bl-full opacity-20 dark:bg-blue-600"></div>
      <div className="absolute bottom-0 left-0 z-0 w-64 h-64 bg-purple-200 rounded-tr-full opacity-20 dark:bg-purple-600"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <AnimatedSectionHeader title="Portafolio" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800 border border-transparent hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Visual Indicator on Hover (Icon only, no button) */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-full text-white transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ExternalLink size={32} />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-4 py-1.5 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
