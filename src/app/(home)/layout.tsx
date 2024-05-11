import { ReactNode } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Criação de sites | Michael Matheus',
  description:
    'Contrate um especialista em sites freelancer para criar, otimizar e manter sua presença online. Soluções personalizadas para seus projetos web.',
  robots: 'index, follow',
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>
}
