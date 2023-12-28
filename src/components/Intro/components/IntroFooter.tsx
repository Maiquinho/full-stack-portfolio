'use client'

import Link from 'next/link'

import {
  ArrowDown,
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from '@phosphor-icons/react'

export function IntroFooter() {
  return (
    <footer className="flex justify-between">
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
    </footer>
  )
}
