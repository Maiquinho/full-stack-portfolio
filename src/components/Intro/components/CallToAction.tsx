'use client'

import Link from 'next/link'

import { Button } from '@/components/Button'
import { MY_PHONE, whatsappCustomMessage } from '@/utils/whatsapp'
import { Briefcase, Megaphone } from '@phosphor-icons/react'

export function CallToAction() {
  return (
    <div className="flex items-start gap-2 lg:gap-6">
      <Link
        href={whatsappCustomMessage(
          MY_PHONE.unmasked,
          `Olá, vi seu portfólio e gostaria de contratar seus serviços. \n\nNome: ---------\nTelefone: ---------\nE-mail: ---------`,
        )}
        target="_blank"
      >
        <Button
          text="Contratar"
          variant="fill"
          type="button"
          icon={Megaphone}
        />
      </Link>
      <Link href="/portfolio" target="_blank">
        <Button
          text="Portfólio"
          variant="outline"
          type="button"
          icon={Briefcase}
        />
      </Link>
    </div>
  )
}
