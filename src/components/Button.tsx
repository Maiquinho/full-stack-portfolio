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
          className="w-full flex justify-center lg:justify-normal items-center gap-2 text-xs lg:text-2lg bg-brand border border-brand text-gray-900 hover:drop-shadow-md transition-all duration-75 ease-in uppercase px-5 py-3"
          type={type}
        >
          {Icon && <Icon size={32} className="text-dark-900" />}
          {text}
        </button>
      )}
      {variant === 'outline' && (
        <button
          className="w-full flex justify-center lg:justify-normal items-center gap-2 text-xs lg:text-2lg bg-dark-900 border border-brand text-brand hover:drop-shadow-md transition-all duration-75 ease-in uppercase px-5 py-3"
          type={type}
        >
          {Icon && <Icon size={32} className="text-dark-900" />}
          {text}
        </button>
      )}
    </>
  )
}
