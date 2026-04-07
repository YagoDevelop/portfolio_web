import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Asegúrate de cambiar esto por tu dominio real de producción
    const baseUrl = 'https://yagodev.es'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
