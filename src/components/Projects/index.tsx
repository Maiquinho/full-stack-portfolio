'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { gql, useQuery } from '@apollo/client'

import { Project } from './components/Project'

interface Project {
  id: string
  title: string
  description: string
  technologies: string
  thumb: {
    url: string
  }
  repoURL: string
}

const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects {
      id
      title
      description
      technologies
      thumb {
        url
      }
      repoURL
    }
  }
`

export function Projects() {
  useEffect(() => {
    AOS.init()
  }, [])

  const { data } = useQuery<{ projects: Project[] }>(GET_PROJECTS_QUERY)

  return (
    <section id="projects" className="flex flex-col gap-4 mt-20 lg:mt-40">
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

      <div className="flex flex-col lg:flex-row lg:justify-center lg:flex-wrap gap-10">
        {data?.projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            thumb={project.thumb.url}
            repoURL={project.repoURL}
          />
        ))}
      </div>
    </section>
  )
}
