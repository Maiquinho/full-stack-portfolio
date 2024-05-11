'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  uri: string
  text: string
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export function NavItem({ uri, text, target }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === uri

  return (
    <Link
      href={uri}
      className={`${
        isActive
          ? 'text-gray-100 hover:text-gray-300'
          : 'text-gray-300 hover:text-gray-100'
      } px-5 py-4 font-mono uppercase transition-all ease-in lg:px-0 lg:py-0`}
      target={target}
    >
      {text}
    </Link>
  )
}
