'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'

import 'aos/dist/aos.css'

import { GithubLogo, GlobeSimple, LinkSimple } from '@phosphor-icons/react'

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
      className="flex flex-col justify-between w-full lg:w-[48%] bg-gradient-to-b from-gray-900 from-40% bg-gray-600 border-2 border-solid border-gray-600 px-9 pt-10"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
    >
      <header>
        <h3 className="text-lg lg:text-2lg text-gray-100 mb-2 lg:mb-5">
          {title}
        </h3>
      </header>

      <div className="mb-14">
        <p className="text-sm text-gray-100 mb-4">{description}</p>
        <p className="text-sm text-gray-100 mb-6">
          Tecnologias utilizadas: {technologies}
        </p>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          {repoURL && (
            <Link
              href={repoURL}
              className="flex items-center gap-2 text-md text-brand hover:drop-shadow-md underline"
              target="_blank"
            >
              <GithubLogo size={20} className="text-brand" />
              Ver repositório
            </Link>
          )}
          {productionURL && (
            <Link
              href={productionURL}
              className="flex items-center gap-2 text-md text-brand hover:drop-shadow-md underline"
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
              Projeto em desenvolvimento
            </button>
          )}
        </div>
      </div>

      <Image src={thumb} width={469} height={252} alt={title} />
    </article>
  )
}
