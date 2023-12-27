'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { Project } from './components/Project'

export function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section className="flex flex-col gap-4 mt-20 lg:mt-40">
      <header
        className="flex flex-col items-center mb-2 lg:mb-5"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
      >
        <h2 className="text-2lg lg:text-2xl text-gray-100 drop-shadow-md mb-2 lg:mb-5">
          Projetos pessoais
        </h2>
        <span className="text-sm lg:text-md text-gray-100">
          Confira abaixo alguns dos meus últimos projetos desenvolvidos
        </span>
      </header>

      <div className="flex flex-col lg:flex-row gap-10">
        <Project />
        <Project />
      </div>
    </section>
  )
}
