'use client'

import { useEffect, useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { NavItem } from '../../nav-item'

export function MobileMenu() {
  const [scrollOffset, setScrollOffset] = useState<number>(0)

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.scrollY)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Dialog.Portal>
      {/* <Dialog.Overlay className="fixed w-screen h-screen top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gray-950 opacity-75" /> */}
      <Dialog.Content
        className={`fixed ${
          scrollOffset < 100 ? 'top-[7rem]' : 'top-[5.625rem]'
        } left-4 z-50 flex w-11/12 flex-col gap-2 bg-gray-600 p-4`}
      >
        <nav className="flex flex-col">
          <NavItem uri="/" text="Home" />
          <NavItem uri="#projects" text="Projetos" />
          <NavItem uri="#about" text="Sobre" />
          <NavItem uri="#" text="Blog" />
          <NavItem uri="#contact" text="Contato" />
        </nav>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Portal>
  )
}
