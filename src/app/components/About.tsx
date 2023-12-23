'use client'

import { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { ArrowElbowDownRight } from '@phosphor-icons/react'
import { Button } from './Button'

export function About() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="flex flex-col gap-2 lg:gap-5 mt-40">
      <h2 className="block text-2lg lg:text-2xl text-gray-100 drop-shadow-md">
        Sobre Mim
      </h2>

      <div className="flex flex-col-reverse lg:flex-row gap-14">
        <div
          className="flex-1"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
        >
          <article>
            <p className="text-sm lg:text-md text-gray-100 mb-4">
              Após concluir meu curso técnico em informática em 2019, mergulhei
              no mundo da programação, participando ativamente de diversos
              bootcamps para aprimorar minhas habilidades. Atualmente, sou aluno
              da Rocketseat, buscando aprimorar meu conhecimento em
              desenvolvimento de software e expandir minha expertise nas
              tecnologias mais modernas do mercado.
            </p>
            <p className="text-sm lg:text-md text-gray-100 mb-6">
              Minha experiência concentra-se no desenvolvimento JavaScript,
              abrangendo tecnologias como ReactJS, TypeScript e Node.js.
              Trabalhando com essa stack, busco constantemente me atualizar e
              explorar novas abordagens para criar soluções inovadoras e
              eficazes.Como desenvolvedor, tenho uma paixão intrínseca pela
              criação de soluções que atendam às necessidades do usuário final.
            </p>

            <Link href="/about" target="_blank" className="block w-fit">
              <Button text="Leia mais" variant="fill" type="button" />
            </Link>
          </article>
        </div>

        <div
          className="flex flex-col items-center justify-between gap-7"
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
        >
          <Image
            src="/assets/michael-matheus.png"
            width={275}
            height={275}
            alt=""
          />
          <Link
            href="/assets/michael-matheus-cv.pdf"
            className="flex gap-2 text-md text-brand hover:drop-shadow-md"
            target="_blank"
          >
            Ver meu currículo
            <ArrowElbowDownRight size={24} className="text-brand" />
          </Link>
        </div>
      </div>
    </section>
  )
}
