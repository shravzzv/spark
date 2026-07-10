import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Spark',
    short_name: 'Spark',
    description:
      'Spark helps you discover what consistently gives you energy through guided reflection and AI-powered pattern recognition. Instead of telling you what your passion is, it reveals the patterns hidden in your own experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
