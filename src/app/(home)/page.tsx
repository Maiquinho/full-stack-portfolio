import { About } from '@/components/about'
import { CallToAction } from '@/components/call-to-action'
import { Card } from '@/components/card'
import { Intro } from '@/components/intro/'
import { Projects } from '@/components/projects/'

export default function Home() {
  return (
    <>
      <Intro />
      <section className="mt-10 hidden flex-col gap-10 lg:mt-20 lg:flex lg:flex-row lg:flex-wrap lg:justify-between">
        <Card
          title="Sites Institucionais"
          content="Sites desktop e mobile integrados com SEO e Analytics."
          variant="active"
        />
        <Card
          title="Landing Pages"
          content="E-commerce completo para desktop e smartphones."
          variant="inactive"
        />
        <Card
          title="Lojas Virtuais"
          content="Páginas de conversão integradas para leads de qualidade."
          variant="inactive"
        />
      </section>
      <Projects />
      <About />
      <CallToAction />
    </>
  )
}
