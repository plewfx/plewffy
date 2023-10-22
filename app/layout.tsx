import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import ConvexClientProvider from "./convex-client-provider";

import './globals.css'
import { Navbar } from '@/components/navbar'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plewffy',
  description: 'The portfolio of front-end developer Plewffy',
  icons: {
    icon: [
      {
        url: "/plewffy.svg",
        href: "/plewffy.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ConvexClientProvider>
            <Navbar />
            <main className="mt-24">
              {children}
            </main>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}