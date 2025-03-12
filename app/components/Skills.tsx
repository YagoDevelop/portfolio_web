"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Workflow } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

const skills = [
  {
    icon: Code,
    name: "Frontend Development",
    tech: "React.js",
    description:
      "Creación de interfaces de usuario interactivas y receptivas con funciones modernas de React para un rendimiento óptimo.",
    color: "text-blue-500",
  },
  
  {
    icon: Server,
    name: "Backend Development",
    tech: "Node.js, Express, NestJs",
    description: "Creación de aplicaciones robustas del lado del servidor con foco en la escalabilidad y la arquitectura limpia.",
    color: "text-green-500",
  },
  {
    icon: Cpu,
    name: "API Development",
    tech: "REST, Microservices",
    description: "Diseño e implementación de API eficientes para una comunicación de datos fluida.",
    color: "text-red-500",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "PostgreSQL, OracleDb, MySQL, SQL Server",
    description: "Experiencia en SQL, incluyendo diseño de bases de datos, creación de vistas, optimización de consultas y desarrollo de procedimientos almacenados (PL/SQL).",
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "UI/UX Design",
    tech: "Bootsrap, Tailwind CSS",
    description: "Creación de interfaces de usuario hermosas e intuitivas con principios y marcos de diseño modernos.",
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub, Bitbucket",
    description: "Gestionar versiones de código de forma eficiente con Git y colaborar eficazmente a través de GitHub.",
    color: "text-orange-500",
  },
  {
    icon: Terminal,
    name: "TypeScript",
    tech: "TypeScript, JavaScript",
    description: "Escribir código seguro para lograr un mejor mantenimiento y una mejor experiencia para el desarrollador.",
    color: "text-yellow-500",
  },
  {
    icon: Layers,
    name: "State Management",
    tech: "Context API",
    description: "Gestión de estados de aplicaciones complejas con soluciones modernas de gestión de estados.",
    color: "text-indigo-500",
  },
  
  {
    icon: Workflow,
    name: "Agile Methodologies",
    tech: "Agile, AzureDevOps",
    description: "Trabajar eficientemente en entornos ágiles con foco en la entrega continua.",
    color: "text-cyan-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <AnimatedSectionHeader title="Habilidades " />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 transition-all duration-300 bg-white shadow-lg dark:bg-gray-800 rounded-xl hover:shadow-xl group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold transition-colors duration-300 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

