'use client'

import Image from 'next/image'

import { gql, useQuery } from '@apollo/client'

import Flicking from '@egjs/react-flicking'

import '@egjs/react-flicking/dist/flicking.css'

import './styles.css'

interface Skill {
  id: string
  title: string
  image: {
    url: string
  }
}

const GET_SKILLS_QUERY = gql`
  query GetSkills {
    skills(orderBy: skill_type_ASC) {
      id
      title
      image {
        url
      }
    }
  }
`

export function SkillsList() {
  const { data } = useQuery<{ skills: Skill[] }>(GET_SKILLS_QUERY)

  return (
    <Flicking
      className="mt-14 flex"
      hideBeforeInit={true}
      align="prev"
      autoResize={true}
    >
      {data?.skills.map((skill) => (
        <div
          key={skill.id}
          className="panel flex w-min flex-col items-center justify-between gap-4 hover:opacity-100"
        >
          <Image
            src={skill.image.url}
            width={87}
            height={87}
            alt={`ícone descritivo da tecnologia ${skill.title}`}
            title={skill.title}
          />
          <span className="text-md text-gray-100">{skill.title}</span>
        </div>
      ))}
    </Flicking>
  )
}
