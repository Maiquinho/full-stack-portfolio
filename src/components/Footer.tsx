import Image from 'next/image'
import Link from 'next/link'

import logoSquare from 'public/assets/logo-square.svg'

export function Footer() {
  return (
    <footer className="bg-gray-600 selection:bg-gray-600 selection:text-brand">
      <div className="m-auto mt-20 flex flex-col px-5 py-10 lg:w-[1120px] lg:flex-row lg:items-end lg:justify-between lg:px-0">
        <div className="flex flex-col gap-2">
          <nav>
            <ul className="flex list-none gap-3">
              <li>
                <Link
                  href="https://github.com/maiquinho"
                  className="font-sans text-md text-gray-300"
                  target="_blank"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://gitlab.com/maiquinho"
                  className="font-sans text-md text-gray-300"
                  target="_blank"
                >
                  Gitlab
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/michael-matheus/"
                  className="font-sans text-md text-gray-300"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com/michaelmatheus.dev"
                  className="font-sans text-md text-gray-300"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </nav>
          <span className="font-sans text-sm text-gray-300">
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
