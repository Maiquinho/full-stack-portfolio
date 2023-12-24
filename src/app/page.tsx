import { About } from '@/components/About'
import { CallToAction } from '@/components/CallToAction'
import { Intro } from '@/components/Intro'
import { Projects } from '@/components/Projects/'
import { Skills } from '@/components/Skills/'

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
