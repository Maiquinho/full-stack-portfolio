import { Footer } from '@/components/footer'
import { Header } from '@/components/header/'
import { UseClientApolloContextProvider } from '@/contexts/apollo-context'

import { inter, jetBrainsMono } from './fonts'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`scroll-smooth ${jetBrainsMono.variable} ${inter.variable} scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-brand`}
    >
      <body className="overflow-x-hidden">
        <div className="m-auto flex h-full flex-col px-5 selection:bg-gray-600 selection:text-brand lg:w-[1120px] lg:px-0">
          <Header />
          <UseClientApolloContextProvider>
            {children}
          </UseClientApolloContextProvider>
        </div>
        <Footer />
      </body>
    </html>
  )
}
