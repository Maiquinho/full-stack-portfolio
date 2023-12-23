import { Intro } from './components/Intro'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects/'
import { About } from './components/About'

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />
      <About />

      <section className="text-gray-200 py-2 px-10">CTA</section>
    </main>
  )
}
