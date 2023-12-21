import { Intro } from './components/Intro'
import { Skills } from './components/Skills'

export default function Home() {
  return (
    <main>
      <Intro />
      <Skills />

      <section className="text-gray-200 py-2 px-10 mt-40">
        Projetos Pessoais
      </section>
      <section className="text-gray-200 py-2 px-10">Sobre Mim</section>
      <section className="text-gray-200 py-2 px-10">CTA</section>
    </main>
  )
}
