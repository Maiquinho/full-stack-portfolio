import { NavItem } from '@/components/header/components/navigation/components/nav-item'

export function Navigation() {
  return (
    <>
      <nav className="hidden list-none gap-10 uppercase lg:flex">
        <li>
          <NavItem uri="/" text="Home" />
        </li>
        <li>
          <NavItem uri="#projects" text="Projetos" />
        </li>
        <li>
          <NavItem uri="#about" text="Sobre" />
        </li>
        <li>
          <NavItem uri="#" text="Blog" />
        </li>
        <li>
          <NavItem uri="#contact" text="Contato" />
        </li>
      </nav>
    </>
  )
}
