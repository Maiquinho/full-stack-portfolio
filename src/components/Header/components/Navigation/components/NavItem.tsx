import Link from 'next/link'

interface NavItemProps {
  uri: string
  text: string
  active?: boolean
}

export function NavItem({ uri, text, active }: NavItemProps) {
  return (
    <Link
      href={uri}
      className={`${
        active
          ? 'text-gray-100 hover:text-gray-300'
          : 'text-gray-300 hover:text-gray-100'
      } transition-all ease-in uppercase px-5 py-4 lg:px-0 lg:py-0`}
    >
      {text}
    </Link>
  )
}
