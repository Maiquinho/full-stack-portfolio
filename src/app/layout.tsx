import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap'
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Portfólio Desenvolvedor Full-Stack - Michael Matheus',
  description: 'Sou Michael Matheus, desenvolvedor Full-stack JavaScript. Descubra meu mundo de códigos inovadores. Convido você a explorar meus projetos ou me contratar para desafios incríveis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={jetBrainsMono.className}>{children}</body>
    </html>
  )
}
