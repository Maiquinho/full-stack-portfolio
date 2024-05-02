import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/'
// import { WhatsappBallon } from '@/components/WhatsappBallon'
import { UseClientApolloContextProvider } from '@/contexts/ApolloContext'

import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Criação de sites | Michael Matheus',
  description:
    'Contrate um especialista em sites freelancer para criar, otimizar e manter sua presença online. Soluções personalizadas para seus projetos web.',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${jetBrainsMono.className} ${'overflow-x-hidden'} scrollbar-thin scrollbar-thumb-brand scrollbar-track-gray-600`}
      >
        <div className="flex flex-col h-full px-5 lg:px-0 lg:w-[1120px] m-auto selection:bg-gray-600 selection:text-brand">
          <Header />
          <UseClientApolloContextProvider>
            {children}
          </UseClientApolloContextProvider>
        </div>
        <Footer />
        {/* <WhatsappBallon /> */}
      </body>
    </html>
  )
}
