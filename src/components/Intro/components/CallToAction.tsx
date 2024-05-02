'use client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { MY_PHONE, whatsappCustomMessage } from '@/utils/whatsapp'
import { Briefcase, WhatsappLogo } from '@phosphor-icons/react'

export function CallToAction() {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-6">
      <Link
        href={whatsappCustomMessage(
          MY_PHONE.unmasked,
          `*Proposta comercial - site*\n\nOlá Michael,\n\nVisitei seu site e tenho interesse em uma proposta para desenvolver um site para minha empresa.\n\n*Caro cliente, ao solicitar uma proposta para o desenvolvimento do seu site, ficaríamos muito gratos se você pudesse nos enviar o seu logo, caso já o tenha. Isso nos ajudará a entender melhor a identidade visual da sua empresa e a criar um design que esteja alinhado com a sua marca.*\n\n*Nome:* ---------\n*Empresa:* ---------\n*Segmento:* ---------\n*Telefone:* ---------\n*E-mail:* ---------`,
        )}
        target="_blank"
        className="w-full lg:w-fit"
      >
        <Button
          text="Solicitar proposta"
          variant="fill"
          type="button"
          icon={WhatsappLogo}
        />
      </Link>
      <Link href="/#projects" className="w-full lg:w-fit">
        <Button
          text="Ver Portfólio"
          variant="outline"
          type="button"
          icon={Briefcase}
        />
      </Link>
    </div>
  )
}
