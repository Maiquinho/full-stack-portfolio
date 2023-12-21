import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { Header } from './components/Header'
import { Footer } from './components/Footer'

import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfólio Desenvolvedor Full-Stack - Michael Matheus',
  description:
    'Sou Michael Matheus, desenvolvedor Full-stack JavaScript. Descubra meu mundo de códigos inovadores. Convido você a explorar meus projetos ou me contratar para desafios incríveis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${jetBrainsMono.className} ${'overflow-x-hidden'}`}>
        <div className="flex flex-col h-screen w-11/12 lg:w-[1120px] m-auto">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
