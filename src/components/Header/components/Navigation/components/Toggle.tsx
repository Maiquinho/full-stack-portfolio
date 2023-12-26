'use client'

import { List } from '@phosphor-icons/react'

export function Toggle() {
  return (
    <button className="block lg:hidden">
      <List size={32} className="text-brand" />
    </button>
  )
}
