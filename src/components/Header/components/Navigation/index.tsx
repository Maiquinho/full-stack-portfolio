import { NavItem } from './components/NavItem'

export function Navigation() {
  return (
    <>
      <nav className="hidden lg:flex uppercase list-none gap-10">
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
          <NavItem
            uri="/assets/michael-matheus-cv.pdf"
            text="Currículo"
            target="_blank"
          />
        </li>
      </nav>
    </>
  )
}
