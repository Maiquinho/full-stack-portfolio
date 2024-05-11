import { About } from '@/components/about'
import { CallToAction } from '@/components/call-to-action'
import { Intro } from '@/components/intro/'
import { Projects } from '@/components/projects/'

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <About />
      <CallToAction />
    </>
  )
}
