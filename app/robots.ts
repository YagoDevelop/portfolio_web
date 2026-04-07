import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        // Asegúrate de cambiar esto por tu dominio real de producción
        sitemap: 'https://yagodev.es/sitemap.xml',
    }
}
