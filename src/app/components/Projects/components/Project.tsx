'use client'

import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { LinkSimple } from '@phosphor-icons/react'

export function Project() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <article
      className="flex-1 bg-gradient-to-b from-gray-900 from-40% bg-gray-600 px-9 pt-10"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
    >
      <header>
        <h3 className="text-lg lg:text-2lg text-gray-100 mb-2 lg:mb-5">
          DT Money
        </h3>
      </header>

      <div className="mb-14">
        <p className="text-sm text-gray-100 mb-4">
          O DT Money é uma aplicação de calculo de transações financeiras e
          calculo de orçamentos mensais.
        </p>
        <p className="text-sm text-gray-100 mb-6">
          Tecnologias utilizadas: React.js, TypeScript, Styled- Components,
          React-Hook-Form, JSON Server.
        </p>

        <Link
          href="/"
          className="flex gap-2 text-md text-brand hover:drop-shadow-md"
        >
          Ver Repositório
          <LinkSimple size={24} className="text-brand" />
        </Link>
      </div>

      <Image
        src="/assets/projects/dt-money.jpg"
        width={469}
        height={252}
        alt=""
      />
    </article>
  )
}
