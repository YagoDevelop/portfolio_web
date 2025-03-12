"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Desarrollo de Aplicaciones Multiplataforma",
      institution: "IES Muralla Romana",
      period: "2017 – 2019",
      achievements: [
        "Java",
        "Android",
        "C#",
        "MySqL",
      ],
    },
    {
      degree: "Desarrollo de Aplicaciones Web",
      institution: "IES Muralla Romana",
      period: "2019 – 2020",
      achievements: [
        "Wordpress",
        "Javascript",
        "PHP",
      ],
    },
  ]

  return (
    <section
      id="education"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900"
    >
      <div className="container relative z-10 px-6 mx-auto">
        <AnimatedSectionHeader title="Educación" />
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 mt-4 overflow-hidden transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 z-0 w-32 h-32 bg-purple-200 rounded-br-full opacity-50 dark:bg-purple-700"></div>
              <div className="relative z-10">
                <h3 className="flex items-center mb-2 text-2xl font-semibold dark:text-white">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="mb-4 text-xl text-gray-600 dark:text-gray-300">{edu.institution}</p>
                <p className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="flex items-center mb-2 text-lg font-medium dark:text-gray-200">
                  <Award className="w-5 h-5 mr-2" />
                  Asignaturas:
                </h4>
                <ul className="space-y-2 list-disc list-inside">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
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

