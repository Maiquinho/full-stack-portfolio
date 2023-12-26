import Link from 'next/link'

import { Toggle } from './components/Toggle'

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
      <Toggle />
    </>
  )
}
