'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'

import 'aos/dist/aos.css'

import { GithubLogo, GlobeSimple } from '@phosphor-icons/react'

interface ProjectProps {
  title: string
  description: string
  technologies: string
  thumb: string
  repoURL: string
  productionURL: string
}

export function Project({
  title,
  description,
  technologies,
  thumb,
  repoURL,
  productionURL,
}: ProjectProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <article
      className="flex w-full flex-col justify-between border-2 border-solid border-gray-600 bg-gray-600 bg-gradient-to-b from-gray-900 from-40% px-9 pt-10"
      // data-aos="fade-right"
      // data-aos-offset="200"
      // data-aos-delay="50"
    >
      <header>
        <h3 className="mb-2 text-lg text-gray-100 lg:mb-5 lg:text-2lg">
          {title}
        </h3>
      </header>

      <div className="mb-14">
        <p className="mb-4 text-sm text-gray-100">{description}</p>
        <p className="mb-6 text-sm text-gray-100">
          Tecnologias utilizadas: {technologies}
        </p>

        <div className="flex flex-col gap-2 lg:flex-row lg:gap-6">
          {repoURL && (
            <Link
              href={repoURL}
              className="flex items-center gap-2 text-md text-brand underline hover:drop-shadow-md"
              target="_blank"
            >
              <GithubLogo size={20} className="text-brand" />
              Ver repositório
            </Link>
          )}
          {productionURL && (
            <Link
              href={productionURL}
              className="flex items-center gap-2 text-md text-brand underline hover:drop-shadow-md"
              target="_blank"
              title="Clique para ver o projeto online."
            >
              <GlobeSimple size={20} className="text-brand" />
              Ver em produção
            </Link>
          )}
          {!productionURL && (
            <button
              className="flex items-center gap-2 text-md text-alert hover:drop-shadow-md"
              disabled
              type="button"
            >
              <GlobeSimple size={20} className="text-alert" />
              Disponível em breve
            </button>
          )}
        </div>
      </div>

      <Image src={thumb} width={469} height={252} alt={title} />
    </article>
  )
}
