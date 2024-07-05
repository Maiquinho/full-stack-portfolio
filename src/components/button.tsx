'use client'

import { ElementType } from 'react'

interface ButtonProps {
  text: string
  type: 'button' | 'submit'
  variant: 'fill' | 'outline'
  icon?: ElementType
}

export function Button({
  text,
  type = 'button',
  variant,
  icon: Icon,
}: ButtonProps) {
  return (
    <>
      {variant === 'fill' && (
        <button
          className="flex w-full items-center justify-center gap-2 border border-brand bg-brand px-5 py-3 text-md uppercase text-gray-900 transition-all duration-75 ease-in hover:drop-shadow-md lg:justify-normal lg:text-2lg"
          type={type}
        >
          {Icon && <Icon size={32} className="text-dark-900" />}
          {text}
        </button>
      )}
      {variant === 'outline' && (
        <button
          className="bg-dark-900 flex w-full items-center justify-center gap-2 border border-brand px-5 py-3 text-md uppercase text-brand transition-all duration-75 ease-in hover:drop-shadow-md lg:justify-normal lg:text-2lg"
          type={type}
        >
          {Icon && <Icon size={32} className="text-dark-900" />}
          {text}
        </button>
      )}
    </>
  )
}
