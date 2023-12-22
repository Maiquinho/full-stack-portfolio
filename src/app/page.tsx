import { Intro } from './components/Intro'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />

      <section className="text-gray-200 py-2 px-10">Sobre Mim</section>
      <section className="text-gray-200 py-2 px-10">CTA</section>
    </main>
  )
}
