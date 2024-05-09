'use client'

import Link from 'next/link'

import { MY_PHONE, whatsappCustomMessage } from '@/utils/whatsapp'
import {
  ArrowDown,
  Envelope,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'

export function IntroFooter() {
  return (
    <footer className="flex justify-between z-30">
      <div>
        <Link href="#projects" title="Clique para ir aos projetos">
          <ArrowDown size={32} className="text-gray-100 animate-bounce" />
        </Link>
      </div>
      <div className="flex gap-4">
        {/* <Link
          href="https://www.linkedin.com/in/michael-matheus/"
          title="LinkedIn"
          target="_blank"
        >
          <LinkedinLogo
            size={32}
            className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
          />
        </Link> */}
        <Link
          href={whatsappCustomMessage(
            MY_PHONE.unmasked,
            `Olá Michael,\n\nVi seu site e gostaria de saber mais sobre seus serviços!`,
          )}
          title="Whatsapp"
          target="_blank"
        >
          <WhatsappLogo
            size={32}
            className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
          />
        </Link>
        <Link
          href="https://instagram.com/michaelmatheus.dev"
          title="Instagram"
          target="_blank"
        >
          <InstagramLogo
            size={32}
            className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
          />
        </Link>
        {/* <Link
          href="https://github.com/maiquinho"
          title="Github"
          target="_blank"
        >
          {' '}
          <GithubLogo
            size={32}
            className="text-gray-100 hover:text-gray-300 transition-colors ease-in"
          />
        </Link> */}
        <Link
          href="mailto:contato@michaelmatheus.dev"
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
    </footer>
  )
}
