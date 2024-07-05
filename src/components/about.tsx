'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'

import 'aos/dist/aos.css'

import { Button } from '@/components/button'

export function About() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section
      id="about"
      className="mt-20 flex flex-col gap-2 font-mono before:invisible before:-mt-1 before:block before:h-1 before:content-[''] lg:mt-32 lg:gap-5"
    >
      <h2 className="mb-4 block text-left text-2lg text-gray-100 drop-shadow-md lg:mb-0 lg:text-2xl">
        Sobre Mim
      </h2>

      <div className="flex flex-col-reverse gap-7 lg:flex-row lg:gap-14">
        <div className="flex-1">
          <article>
            <p className="mb-4 text-sm text-gray-100 lg:text-md">
              Após concluir meu curso técnico em informática em 2019, mergulhei
              no mundo da programação, participando ativamente de diversos
              bootcamps para aprimorar minhas habilidades. Atualmente, sou aluno
              da Rocketseat, buscando aprimorar meu conhecimento em
              desenvolvimento de software e expandir minha expertise nas
              tecnologias mais modernas do mercado.
            </p>
            <p className="mb-6 text-sm text-gray-100 lg:text-md">
              Minha experiência concentra-se no desenvolvimento JavaScript,
              abrangendo tecnologias como ReactJS, TypeScript e Node.js.
              Trabalhando com essa stack, busco constantemente me atualizar e
              explorar novas abordagens para criar soluções inovadoras e
              eficazes.Como desenvolvedor, tenho uma paixão intrínseca pela
              criação de soluções que atendam às necessidades do usuário final.
            </p>

            <Link href="#" className="block lg:w-fit">
              <Button text="Leia mais" variant="fill" type="button" />
            </Link>
          </article>
        </div>

        <div
          className="hidden flex-col items-center justify-between gap-7 lg:flex"
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
        </div>
      </div>
    </section>
  )
}
