'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { Navigation } from './components/navigation'
import { MobileNav } from './components/navigation/components/mobile-nav'

import { Logo } from '../logo'

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
      className={`sticky flex items-center justify-between bg-gray-600 font-mono ${
        scrollOffset < 100 ? 'top-5 lg:top-5' : 'top-0 lg:top-0'
      } z-50 mt-5 px-5 py-4 transition-all duration-150 lg:mt-5 lg:px-11 lg:py-7`}
    >
      <nav className="flex w-full flex-row-reverse items-center justify-between gap-3 lg:flex-row">
        <MobileNav />
        <Link href="/">
          <Logo />
        </Link>
      </nav>
      <Navigation />
    </header>
  )
}
