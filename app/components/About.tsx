"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "FrontEnd", description: "React, Bootstrap.js" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "BackEnd", description: "Node.js, Express, Nest.js" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "BBDD", description: "PostgreSQL, OracleDB" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "DevOps", description: "Docker, Jenkins" },
  ]

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
    >
      <div className="container relative z-10 px-6 mx-auto">
        <motion.h2
          className="mb-8 text-4xl font-bold text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mi
        </motion.h2>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <motion.div
            className="pr-8 mb-8 md:w-1/2 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Soy Yago, un desarrollador full stack con experiencia en la creación de aplicaciones web escalables y eficientes. Me especializo en tecnologías como React, Node.js, NestJS y PostgreSQL, y disfruto diseñando arquitecturas robustas que optimicen el rendimiento y la experiencia del usuario.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            He trabajado en aplicaciones de gestión empresarial y análisis de datos para instalaciones, desarrollando soluciones que mejoran la operatividad y la toma de decisiones. Mi enfoque se basa en la calidad del código, la eficiencia y la escalabilidad, siempre buscando nuevas formas de optimizar los procesos de desarrollo.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Además de la programación, me interesa la gestión de proyectos y la evolución de productos tecnológicos desde la planificación hasta la implementación. Siempre estoy aprendiendo y explorando nuevas tecnologías para seguir mejorando como profesional.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-6 md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                {skill.icon}
                <h3 className="mt-4 mb-2 text-xl font-semibold dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}

