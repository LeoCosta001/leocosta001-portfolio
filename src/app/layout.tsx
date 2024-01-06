import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Leonardo Costa - Engenheiro de Software Especialista em Desenvolvimento Web e Mobile',
  description: 'Especializado em desenvolvimento web e mobile, Leonardo Costa oferece soluções personalizadas para projetos digitais. Com habilidades técnicas avançadas e uma abordagem criativa, ele transforma ideias em aplicativos e sites de alta performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
