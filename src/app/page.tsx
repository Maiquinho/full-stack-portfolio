import { Intro } from './components/Intro'
import { Skills } from './components/Skills/'
import { Projects } from './components/Projects/'
import { About } from './components/About'
import { CallToAction } from './components/CallToAction'

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />
      <Projects />
      <About />
      <CallToAction />
    </main>
  )
}
