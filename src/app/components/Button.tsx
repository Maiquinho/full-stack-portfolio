'use client'

import { Briefcase, Megaphone } from '@phosphor-icons/react'

interface ButtonProps {
  text: string
  type: 'button' | 'submit'
  variant: 'fill' | 'outline'
}

export function Button({ text, type = 'button', variant }: ButtonProps) {
  return (
    <>
      {variant === 'fill' && (
        <button
          className="flex gap-2 text-md lg:text-2lg bg-brand border border-brand text-gray-900 hover:drop-shadow-md transition-all duration-75 ease-in uppercase px-5 py-3"
          type={type}
        >
          <Megaphone size={32} className="text-dark-900" />
          {text}
        </button>
      )}
      {variant === 'outline' && (
        <button
          className="flex gap-2 text-md lg:text-2lg bg-dark-900 border border-brand text-brand hover:drop-shadow-md transition-all duration-75 ease-in uppercase px-5 py-3"
          type={type}
        >
          <Briefcase size={32} className="text-brand" />
          {text}
        </button>
      )}
    </>
  )
}
