'use client'

import * as Dialog from '@radix-ui/react-dialog'

import { List } from '@phosphor-icons/react'

import { MobileMenu } from './components/MobileMenu'

export function MobileNav() {
  return (
    <div className="block lg:hidden z-50">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="border border-brand p-2">
            <List size={32} className="text-brand" />
          </button>
        </Dialog.Trigger>

        <MobileMenu />
      </Dialog.Root>
    </div>
  )
}
