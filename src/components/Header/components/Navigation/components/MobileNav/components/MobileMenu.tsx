'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { NavItem } from '../../NavItem'

export function MobileMenu() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed w-screen h-screen top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-gray-950 opacity-75" />
      <Dialog.Content className="absolute top-28 left-4 w-11/12 flex flex-col gap-2 bg-gray-600 p-4">
        <nav className="flex flex-col">
          <NavItem uri="/" text="Home" />
          <NavItem uri="#" text="Projetos" />
          <NavItem uri="#" text="Sobre" />
          <NavItem uri="#" text="Currículo" />
        </nav>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
