import { CallToAction } from './components/CallToAction'
import { IntroFooter } from './components/IntroFooter'

export function Intro() {
  return (
    <section className="flex flex-col gap-16 lg:gap-36 pt-5 lg:pt-10 mt-10 lg:mt-20 relative after:content-[''] after:bg-[url('/assets/main-banner-code-bg.png')] after:absolute after:top-0 after:right-0 after:block after:bg-no-repeat after:w-[309px] lg:after:w-[409px] after:h-[361px] lg:after:h-[461px]">
      <div className="flex flex-col gap-7">
        <header className="lg:w-[936px]">
          <h1 className="text-xl lg:text-3xl text-gray-100 drop-shadow-md mb-4 lg:mb-7">
            Desenvolvedor Full-Stack, <br className="hidden lg:block" /> criando{' '}
            <span className="text-brand">{'{soluções web}'}</span> desde 2019.
          </h1>
          <span className="text-md lg:text-lg text-gray-100">
            Eu sou Michael, um desenvolvedor full-stack web apaixonado pelo que
            faço há 5 anos. Sempre em busca de inovação, já trabalhei como
            front-end, gerente de desenvolvimento e atualmente atuo como
            full-stack.
          </span>
        </header>
        <CallToAction />
      </div>
      <IntroFooter />
    </section>
  )
}
