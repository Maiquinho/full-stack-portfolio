'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Navigation } from './components/Navigation'
import { MobileNav } from './components/Navigation/components/MobileNav'

import { Logo } from '../Logo'

export function Header() {
  const [scrollOffset, setScrollOffset] = useState<number>(0)

  useEffect(() => {
    const onScroll = () => setScrollOffset(window.scrollY)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`bg-gray-600 flex items-center justify-between sticky ${
        scrollOffset < 100 ? 'top-5 lg:top-10' : 'top-0 lg:top-0'
      } mt-5 lg:mt-10 px-5 lg:px-11 py-4 lg:py-7 transition-all duration-150 z-50`}
    >
      <nav className="flex items-center justify-between flex-row-reverse lg:flex-row gap-3 w-full">
        <MobileNav />
        <Link href="/">
          <Logo />
        </Link>
      </nav>
      <Navigation />
    </header>
  )
}
