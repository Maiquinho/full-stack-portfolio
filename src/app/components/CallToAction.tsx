'use client'

import Link from 'next/link'

import { Button } from './Button'

import { WhatsappLogo, Envelope } from '@phosphor-icons/react'
import { whatsappCustomMessage, MY_PHONE } from '../utils/whatsapp'

export function CallToAction() {
  return (
    <section className="bg-gray-600 border-b-4 border-b-brand flex flex-col gap-5 p-10 lg:p-20 mt-40">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <h2 className="flex-1 text-xl lg:text-cta text-gray-100">
          Vamos <span className="text-brand">{'{trabalhar}'}</span> juntos?
        </h2>
        <div className="lg:w-[361px]">
          <p className="text-sm lg:text-md text-gray-100 mb-4">
            Sou apaixonado por transformar ideias em soluções inovadoras e estou
            pronto para enfrentar novos desafios.
          </p>
          <p className="text-sm lg:text-md text-gray-100">
            Vamos construir algo incrível? 🚀
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        <Link
          href={whatsappCustomMessage(
            MY_PHONE.unmasked,
            `Olá, vi seu portfólio e gostaria de contratar seus serviços. \n\nNome: ---------\nTelefone: ---------\nE-mail: ---------`,
          )}
          target="_blank"
        >
          <Button
            text="Chamar no WhatsApp"
            variant="fill"
            type="button"
            icon={WhatsappLogo}
          />
        </Link>
        <Link
          href="mailto:michaelmatheus2001@gmail.com?subject=Portfólio Web!&body=Olá, Michael! Vi seu portfólio e gostaria de conversar com você."
          target="_blank"
        >
          <Button
            text="Portfólio"
            variant="outline"
            type="button"
            icon={Envelope}
          />
        </Link>
      </div>
    </section>
  )
}
