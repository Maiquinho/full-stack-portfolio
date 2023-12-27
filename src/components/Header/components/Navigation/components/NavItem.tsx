'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  uri: string
  text: string
}

export function NavItem({ uri, text }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === uri

  return (
    <Link
      href={uri}
      className={`${
        isActive
          ? 'text-gray-100 hover:text-gray-300'
          : 'text-gray-300 hover:text-gray-100'
      } transition-all ease-in uppercase px-5 py-4 lg:px-0 lg:py-0`}
    >
      {text}
    </Link>
  )
}
