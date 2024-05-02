import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import logoSquare from 'public/assets/logo-square.svg'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function Footer() {
  return (
    <footer className="bg-gray-600 selection:bg-gray-600 selection:text-brand">
      <div className="px-5 lg:px-0 lg:w-[1120px] m-auto flex flex-col lg:flex-row lg:justify-between lg:items-end py-10 mt-20">
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
                  href="https://instagram.com/michaelmatheus.dev"
                  className={`${inter.className} text-gray-300 text-md`}
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
          <span className={`${inter.className} text-gray-300 text-sm`}>
            &copy; {new Date().getFullYear()} Michael Matheus - Todos os
            direitos reservados. CNPJ 34.611.733/0001-84
          </span>
        </div>
        <div className="hidden lg:block">
          <Link href="https://github.com/maiquinho" target="_blank">
            <Image
              src={logoSquare}
              width={55}
              height={55}
              alt="símbolo quadrado da marca: Michael Matheus - Software Development"
              title="Michael Matheus - Software Development"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
