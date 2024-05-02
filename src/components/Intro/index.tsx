import { CallToAction } from './components/CallToAction'
import { IntroFooter } from './components/IntroFooter'

export function Intro() {
  return (
    <section className="flex flex-col gap-16 lg:gap-16 pt-5 lg:pt-10 mt-10 lg:mt-12 relative after:content-[''] after:bg-[url('/assets/main-banner-code-bg.png')] after:absolute after:top-0 after:right-0 after:block after:bg-no-repeat after:w-[309px] lg:after:w-[409px] after:h-[361px] lg:after:h-[461px]">
      <div className="flex flex-col gap-7">
        <header className="lg:w-[936px]">
          <h1 className="text-xl lg:text-3xl text-gray-100 drop-shadow-md mb-4 lg:mb-7">
            Sua presença digital
            <br /> começa através de um site{' '}
            <span className="h-[2.75rem] bg-brand px-2 ml-0 animate-blink"></span>
          </h1>
          <span className="text-md lg:text-lg text-gray-100">
            Desenvolvemos sites personalizados para atender às necessidades de
            pessoas e empresas. Desde sites institucionais até e-commerces,
            estamos aqui para transformar sua visão em realidade digital. Vamos
            construir juntos sua presença online de sucesso!
          </span>
        </header>
        <CallToAction />
      </div>
      <IntroFooter />
    </section>
  )
}
