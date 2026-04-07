"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Smartphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Creación de Páginas Web",
      description: "Diseño y desarrollo de páginas web a medida y aplicaciones modernas utilizando React y Next.js, optimizadas para SEO y velocidad.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Desarrollo Backend",
      description: "Programación de servidores robustos y bases de datos escalables utilizando tecnologías líderes como Node.js, Express y NestJS.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "Desarrollo y Diseño de APIs",
      description:
        "Sistemas integrados y APIs a medida para conectar plataformas, haciendo que tu negocio funcione de forma más inteligente.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "Diseño Web Responsive",
      description: "Diseños intuitivos y atractivos que se adaptan perfectamente a móviles, tablets y ordenadores de escritorio.",
    },
  ]

  return (
    <section
      id="services"
      className="relative py-20 overflow-hidden transition-colors duration-300 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="container relative z-10 px-6 mx-auto">
        <motion.h2
          className="mb-12 text-4xl font-bold text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Servicios
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-4 text-2xl font-semibold dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

