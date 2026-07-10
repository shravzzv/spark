import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://spark-passion.vercel.app'),
  applicationName: 'Spark',
  title: {
    default: 'Spark',
    template: '%s · Spark',
  },
  description:
    'Spark helps you discover what consistently gives you energy through guided reflection and AI-powered pattern recognition. Instead of telling you what your passion is, it reveals the patterns hidden in your own experiences.',
  keywords: [
    'Spark',
    'Passion',
    'Reflection',
    'Self-discovery',
    'Gemini AI',
    'Next.js',
  ],
  authors: [{ name: 'Sai' }],
  creator: 'Sai',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn('antialiased', 'font-sans', inter.variable)}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-screen font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
