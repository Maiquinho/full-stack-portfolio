import { SkillsList } from './components/SkillsList'

export function Skills() {
  return (
    <section className="flex flex-col mt-20">
      <h2 className="text-2lg lg:text-2xl text-gray-100 drop-shadow-md mb-2 lg:mb-4">
        Tecnologias que utilizo no{' '}
        <span className="text-brand">{'{desenvolvimento full-stack}'}</span>
      </h2>

      <SkillsList />
    </section>
  )
}
