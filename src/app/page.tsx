import { About } from '@/components/About'
import { CallToAction } from '@/components/CallToAction'
import { Intro } from '@/components/Intro/'
import { Projects } from '@/components/Projects/'

export default function Home() {
  return (
    <main>
      <Intro />
      <Projects />
      <About />
      <CallToAction />
    </main>
  )
}
