import { CallToAction } from '@/components/intro/components/call-to-action'

export function Intro() {
  return (
    <section className="relative mt-4 flex flex-col gap-8 pt-5 font-mono after:absolute after:right-0 after:top-0 after:block after:h-[361px] after:w-[309px] after:bg-[url('/assets/main-banner-code-bg.png')] after:bg-no-repeat after:content-[''] lg:mt-12 lg:gap-16 lg:pt-10 lg:after:h-[461px] lg:after:w-[409px]">
      <div className="flex flex-col gap-7">
        <header className="lg:w-[936px]">
          <h1 className="mb-4 text-xl text-gray-100 drop-shadow-md lg:mb-7 lg:text-3xl">
            Sua presença digital
            <br /> começa através de um site{' '}
            <span className="ml-0 h-[2.75rem] animate-blink bg-brand px-2"></span>
          </h1>
          <span className="text-md text-gray-100 lg:text-lg">
            Desenvolvemos sites personalizados para atender às necessidades de
            pessoas e empresas. Desde sites institucionais até e-commerces,
            estamos aqui para transformar sua visão em realidade digital. Vamos
            construir juntos sua presença online de sucesso!
          </span>
        </header>
        <CallToAction />
      </div>
    </section>
  )
}
