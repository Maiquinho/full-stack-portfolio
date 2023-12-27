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
      className="bg-gray-600 border-b-4 border-b-brand flex flex-col gap-5 p-10 lg:p-20 mt-20 lg:mt-40"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
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
