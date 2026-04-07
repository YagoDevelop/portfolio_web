import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Yago Adrio - Creación de Páginas Web y Diseño en Lugo",
  description: "Yago Adrio, programador web especialista en diseño web, creación de páginas web y desarrollo a medida en Lugo (Galicia).",
  keywords: ["Programador Lugo", "Páginas Web Lugo", "Diseño Web Lugo", "Creación de páginas web", "Desarrollo Web Lugo", "Desarrollador Full Stack", "Web a medida", "Hacer página web Lugo", "Yago Adrio"],
  authors: [{ name: "Yago Adrio" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://yagodev.es", // Cambiar por tu dominio real si difiere
    title: "Yago Adrio - Desarrollador Web y Programador en Lugo",
    description: "Portfolio de Yago Adrio, Desarrollador Full Stack (React, Node.js, NestJS) con base en Lugo, Galicia.",
    siteName: "Yago Adrio Portfolio",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yago Adrio",
    jobTitle: "Desarrollador Full Stack",
    url: "https://yagodev.es", // Cambiar por tu dominio
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lugo",
      addressRegion: "Galicia",
      addressCountry: "ES"
    },
    sameAs: [
      "https://github.com/YagoDevelop",
      "https://www.linkedin.com/in/yago-adrio-teijido-77b64a17b/"
    ],
    knowsAbout: ["React", "Node.js", "NestJS", "PostgreSQL", "Desarrollo Web", "TypeScript", "Desarrollo de Software"]
  }

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed z-50 top-4 right-4">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}