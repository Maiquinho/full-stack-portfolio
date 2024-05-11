'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { gql, useQuery } from '@apollo/client'

import { Project } from './components/project'

interface Project {
  id: string
  title: string
  description: string
  technologies: string
  thumb: {
    url: string
  }
  repoURL: string
  productionURL: string
}

const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects(orderBy: updatedAt_DESC) {
      id
      title
      description
      technologies
      thumb {
        url
      }
      repoURL
      productionURL
    }
  }
`

export function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])

  const { data } = useQuery<{ projects: Project[] }>(GET_PROJECTS_QUERY)

  return (
    <section
      id="projects"
      className="mt-10 flex flex-col gap-4 font-mono before:invisible before:-mt-1 before:block before:h-1 before:content-[''] lg:mt-10"
    >
      <header
        className="mb-2 flex flex-col lg:mb-5 lg:items-center"
        // data-aos="fade-up"
        // data-aos-offset="200"
        // data-aos-delay="50"
      >
        <h2 className="mb-2 text-2lg text-gray-100 drop-shadow-md lg:mb-5 lg:text-2xl">
          Nossos Cases
        </h2>
        <span className="text-sm text-gray-100 lg:text-md">
          Confira abaixo alguns dos meus últimos projetos desenvolvidos
        </span>
      </header>

      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:justify-center">
        {data?.projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            thumb={project.thumb.url}
            repoURL={project.repoURL}
            productionURL={project.productionURL}
          />
        ))}
      </div>
    </section>
  )
}
