import Link from 'next/link'

import { List } from '@phosphor-icons/react'

export function Navigation() {
  return (
    <>
      <nav className="hidden lg:flex uppercase list-none gap-10">
        <li>
          <Link href="/" className="text-gray-100">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-300 hover:text-gray-100">
            Projetos
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-300">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-300">
            Currículo
          </Link>
        </li>
      </nav>

      <button className="block lg:hidden">
        <List size={32} className="text-brand" />
      </button>
    </>
  )
}
