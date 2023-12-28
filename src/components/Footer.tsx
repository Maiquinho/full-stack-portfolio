import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between lg:items-end pb-10 mt-20">
      <div className="flex flex-col gap-2">
        <nav>
          <ul className="list-none flex gap-3">
            <li>
              <Link
                href="https://github.com/maiquinho"
                className={`${inter.className} text-gray-300 text-md`}
                target="_blank"
              >
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://gitlab.com/maiquinho"
                className={`${inter.className} text-gray-300 text-md`}
                target="_blank"
              >
                Gitlab
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/michael-matheus/"
                className={`${inter.className} text-gray-300 text-md`}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com/__maiquinho"
                className={`${inter.className} text-gray-300 text-md`}
                target="_blank"
              >
                Instagram
              </Link>
            </li>
          </ul>
        </nav>
        <span className={`${inter.className} text-gray-300 text-sm`}>
          Michael Matheus &copy; Copyright {new Date().getFullYear()}
        </span>
      </div>
      <div>
        <span className={`${inter.className} text-gray-300 text-sm`}>
          Feito com ❤️ por:{' '}
          <Link href="https://github.com/Maiquinho" target="_blank">
            Maiquinho
          </Link>
        </span>
      </div>
    </footer>
  )
}
