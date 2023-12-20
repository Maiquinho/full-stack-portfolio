import Image from 'next/image'

interface Skill {
  id: number
  image: string
  title: string
}

export function Skills() {
  const skillsData: Skill[] = [
    {
      id: 1,
      image: '/assets/skills/javascript-icon.png',
      title: 'JavaScript',
    },
    {
      id: 2,
      image: '/assets/skills/reactjs-icon.png',
      title: 'React.js',
    },
    {
      id: 3,
      image: '/assets/skills/nextjs-icon.png',
      title: 'Next.js',
    },
    {
      id: 4,
      image: '/assets/skills/nodejs-icon.png',
      title: 'Node.js',
    },
    {
      id: 5,
      image: '/assets/skills/typescript-icon.png',
      title: 'TypeScript',
    },
    {
      id: 6,
      image: '/assets/skills/mariadb-logo-white.png',
      title: 'MariaDB',
    },
  ]

  return (
    <section className="flex flex-col mt-20">
      <h2 className="text-2lg lg:text-2xl text-gray-100 drop-shadow-md mb-2 lg:mb-4">
        Tecnologias que utilizo no{' '}
        <span className="text-brand">{'{desenvolvimento full-stack}'}</span>
      </h2>

      <div className="flex gap-20 mt-14">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col gap-4 items-center justify-between"
          >
            <Image src={skill.image} width={87} height={87} alt="" />
            <span className="text-gray-100 text-md ">{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
