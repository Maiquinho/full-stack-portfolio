'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import Link from 'next/link'

import 'aos/dist/aos.css'

import { MY_PHONE, whatsappCustomMessage } from '@/utils/whatsapp'
import { Envelope, WhatsappLogo } from '@phosphor-icons/react'

import { Button } from './Button'

export function CallToAction() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <section
      id="contact"
      className="bg-gray-600 border-b-4 border-b-brand flex flex-col gap-5 p-10 lg:p-20 mt-20 lg:mt-32 before:content-[''] before:block before:h-1 before:-mt-1 before:invisible"
      // data-aos="fade-up"
      // data-aos-offset="200"
      // data-aos-delay="50"
    >
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
      <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-6">
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
        <Link href="mailto:contato@michaelmatheus.dev" target="_blank">
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
