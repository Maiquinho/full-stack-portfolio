'use client'

import Link from 'next/link'
import { Button } from './Button'
import {
  ArrowDown,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'
import { MY_PHONE, whatsappCustomMessage } from '../utils/whatsapp'

export function Intro() {
  return (
    <section className="flex flex-col gap-16 lg:gap-36 pt-5 lg:pt-10 mt-10 lg:mt-20 relative after:content-[''] after:bg-[url('/assets/main-banner-code-bg.png')] after:absolute after:top-0 after:right-0 after:block after:bg-no-repeat after:w-[309px] lg:after:w-[409px] after:h-[361px] lg:after:h-[461px]">
      <div className="flex flex-col gap-7">
        <div className="lg:w-[936px]">
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
        </div>
        <div className="flex items-start gap-6">
          <Link
            href={whatsappCustomMessage(
              MY_PHONE.unmasked,
              `Olá, vi seu portfólio e gostaria de contratar seus serviços. \n\nNome: ---------\nTelefone: ---------\nE-mail: ---------`,
            )}
            target="_blank"
          >
            <Button text="Contratar" variant="fill" type="button" />
          </Link>
          <Link href="/link" target="_blank">
            <Button text="Portfólio" variant="outline" type="button" />
          </Link>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <ArrowDown size={32} className="text-gray-100 animate-bounce" />
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/michael-matheus/"
            title="LinkedIn"
            target="_blank"
          >
            <LinkedinLogo
              size={32}
              className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
            />
          </Link>
          <Link
            href="https://github.com/maiquinho"
            title="Github"
            target="_blank"
          >
            {' '}
            <GithubLogo
              size={32}
              className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
            />
          </Link>
          <Link
            href="mailto:michaelmatheus2001@gmail.com?subject=Portfólio Web!&body=Olá, Michael! Vi seu portfólio e gostaria de conversar com você."
            title="E-mail"
            target="_blank"
          >
            {' '}
            <Envelope
              size={32}
              className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
