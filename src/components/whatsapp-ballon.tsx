'use client'

import { useState } from 'react'

import { Ubuntu } from 'next/font/google'
import Image from 'next/image'

import { MY_PHONE } from '@/utils/whatsapp'

interface User {
  Name: string
  Phone: string
  UnmaskedPhone: string
  Message: string
  ButtonText: string | null
  Photo: string
}

const usersWhats: User[] = [
  {
    Name: 'Nome empresa',
    Phone: MY_PHONE.masked,
    UnmaskedPhone: '55' + MY_PHONE.unmasked,
    Message: 'Olá, vi seu site e gostaria de saber mais sobre seus produtos!',
    ButtonText: null,
    Photo: '/favicon.ico',
  },
]

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-ubuntu',
})

export function WhatsappBallon() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleWidget = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  return (
    <div className={`${ubuntu.className} fixed bottom-10 right-10 z-50`}>
      <button
        className="absolute bottom-0 right-0 flex min-h-16 max-w-16 items-center justify-center rounded-full border-0 bg-whatsapp shadow-sm outline-0 transition-all hover:bottom-2 hover:shadow-md hover:transition-all"
        onClick={toggleWidget}
      >
        <div className="flex items-center justify-center">
          <Image
            src="/whatsapp-brands.svg"
            alt="icon-chat"
            width={31}
            height={31}
          />
        </div>
      </button>
      <div
        className={`wc--float-ballon${
          isOpen ? ' wc--float-ballon---open' : ' wc--float-ballon---close'
        }`}
      >
        <button
          className="wc-float-ballon--button-close"
          onClick={toggleWidget}
        >
          +
        </button>
        <span className="wc--float-ballon--title">Conversar pelo WhatsApp</span>
        <div className="wc--float-ballon--content">
          <p className="wc--float-ballon--text">
            Olá! Vamos iniciar uma conversa pelo WhatsApp?
          </p>
          {usersWhats.map((user, i) => (
            <div key={i} className="wc--float-ballon--user">
              <Image
                width={48}
                height={48}
                src={
                  user.Photo
                    ? user.Photo
                    : 'https://blob.contato.io/gerador-de-chat/img/avatar-default.jpg'
                }
                alt=""
                className="wc--float-ballon--user---thumb"
              />
              <div className="wc--float-ballon--user--content">
                <span className="wc--float-ballon--user--content---name">
                  {user.Name}
                </span>
                <span className="wc--float-ballon--user--content---phone">
                  {user.Phone}
                </span>
                <a
                  href={`https://api.whatsapp.com/send?phone=${user.UnmaskedPhone}&text=${user.Message}`}
                  target="_blank"
                  className="wc--float-ballon--user--content---button"
                >
                  Iniciar conversa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
