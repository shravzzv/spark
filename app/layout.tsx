import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/providers/theme-provider'
import { Analytics } from '@vercel/analytics/next'

const APP_NAME = 'Spark'
const APP_DEFAULT_TITLE = 'Spark'
const APP_TITLE_TEMPLATE = '%s · Spark'
const APP_DESCRIPTION =
  'Spark helps you discover what consistently gives you energy through guided reflection and AI-powered pattern recognition. Instead of telling you what your passion is, it reveals the patterns hidden in your own experiences.'

export const metadata: Metadata = {
  applicationName: APP_NAME,

  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },

  description: APP_DESCRIPTION,

  authors: [{ name: 'Sai' }],

  creator: 'Sai',

  metadataBase: new URL('https://spark-passion.vercel.app'),

  formatDetection: {
    telephone: false,
  },

  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },

  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },

  icons: {
    icon: '/icon-512x512.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
}

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

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
