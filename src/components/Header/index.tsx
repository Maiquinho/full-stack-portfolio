import Link from 'next/link'

import { Navigation } from './components/Navigation'

import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="bg-gray-600 flex items-center justify-between sticky top-5 lg:top-10 mt-5 lg:mt-10 px-5 lg:px-11 py-4 lg:py-7 z-10">
      <Link href="/">
        <Logo />
      </Link>
      <Navigation />
    </header>
  )
}
