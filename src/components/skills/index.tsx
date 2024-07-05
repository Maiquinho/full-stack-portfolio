import { SkillsList } from '@/components/skills/components/skills-list'

export function Skills() {
  return (
    <section className="mt-20 flex flex-col">
      <h2 className="mb-2 text-2lg text-gray-100 drop-shadow-md lg:mb-4 lg:text-2xl">
        Tecnologias que utilizo no{' '}
        <span className="text-brand">{'{desenvolvimento full-stack}'}</span>
      </h2>

      <SkillsList />
    </section>
  )
}
