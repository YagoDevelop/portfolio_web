"use client"

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Norvento",
      location: "Hibrido",
      period: "2021 - Present",
      role: "Full Stack Developer",
      responsibilities: [
        "Desarrollo y mantenimiento de ERP interno",
        "Desarrollo y mantenimiento de aplicaciones internas y extrenas",
        "Gestion de tareas y Revision de PRs",
        "Colaboracion con otros equipos",
      ],
    },
    {
      company: "TrustyNet",
      location: "Lugo, Galicia",
      period: "Septiebre a Diciembre 2020",
      role: "Web Designer",
      responsibilities: [
        "Desarrollo de funcionalidades Javascript",
        "Diseño de Paginas Web de clientes con Wordpress",
        "Desarrollo de ecomerces con shopify",
      ],
    },
    {
      company: "Conpas.Net",
      location: "Lugo, Galicia",
      period: "Enero- Agosto 2020",
      role: "Web Developer",
      responsibilities: [
        "Desarrollo de funcionalidades Javascript",
        "Diseño de Paginas Web de clientes con Wordpress",
        "Diseño de la pagina web propia de la empresa",
      ],
    },
    {
      company: "Kastel Ingenieria",
      location: "Lugo, Galicia",
      period: "Junio - Diciembre 2019",
      role: "Web Developer",
      responsibilities: [
        "Desarrollo de funcionalidades del ERP en ASP.NET",
        "Desarrollo de funcionalidades para empresas externas",
        "Desarrollo de aplicacion de escritorio para cliente",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
    >
      <div className="container relative z-10 px-6 mx-auto">
        <AnimatedSectionHeader title="Experiencia Profesional" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative p-8 overflow-hidden transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl group"
            >
              <div
                className="absolute top-0 right-0 z-0 w-32 h-32 transition-transform duration-300 bg-blue-200 rounded-bl-full opacity-50 dark:bg-blue-700 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="flex items-center mb-2 text-2xl font-semibold dark:text-white">
                  {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                  {exp.company}
                </h3>
                <p className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="flex items-center mb-4 text-xl font-medium dark:text-gray-200">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="space-y-2 list-none">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-blue-500">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

