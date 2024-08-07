'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import Link from 'next/link'

import 'aos/dist/aos.css'

import { Button } from '@/components/button'
import { Envelope, WhatsappLogo } from '@phosphor-icons/react'

import { MY_PHONE, whatsappCustomMessage } from '@/utils/whatsapp'

export function CallToAction() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section
      id="contact"
      className="mt-20 flex flex-col gap-5 border-b-4 border-b-brand bg-gray-600 p-10 font-mono before:invisible before:-mt-1 before:block before:h-1 before:content-[''] lg:mt-32 lg:p-20"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
        <h2 className="flex-1 text-xl text-gray-100 lg:text-cta">
          Vamos <span className="text-brand">{'{trabalhar}'}</span> juntos?
        </h2>
        <div className="lg:w-[361px]">
          <p className="mb-4 text-sm text-gray-100 lg:text-md">
            Sou apaixonado por transformar ideias em soluções inovadoras e estou
            pronto para enfrentar novos desafios.
          </p>
          <p className="text-sm text-gray-100 lg:text-md">
            Vamos construir algo incrível? 🚀
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-6">
        <Link
          href={whatsappCustomMessage(
            MY_PHONE.unmasked,
            `*Proposta comercial - site*\n\nOlá Michael,\n\nVisitei seu site e tenho interesse em uma proposta para desenvolver um site para minha empresa.\n\n*Caro cliente, ao solicitar uma proposta para o desenvolvimento do seu site, ficaríamos muito gratos se você pudesse nos enviar o seu logo, caso já o tenha. Isso nos ajudará a entender melhor a identidade visual da sua empresa e a criar um design que esteja alinhado com a sua marca.*\n\n*Nome:* ---------\n*Empresa:* ---------\n*Segmento:* ---------\n*Telefone:* ---------\n*E-mail:* ---------`,
          )}
          target="_blank"
        >
          <Button
            text="Solicitar proposta"
            variant="fill"
            type="button"
            icon={WhatsappLogo}
          />
        </Link>
        <Link href="mailto:michaelmatheus2001@gmail.com" target="_blank">
          <Button
            text="Enviar E-mail"
            variant="outline"
            type="button"
            icon={Envelope}
          />
        </Link>
      </div>
    </section>
  )
}
