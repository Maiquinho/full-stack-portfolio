import { NavItem } from './components/NavItem'

export function Navigation() {
  return (
    <>
      <nav className="hidden lg:flex uppercase list-none gap-10">
        <li>
          <NavItem uri="/" text="Home" active />
        </li>
        <li>
          <NavItem uri="#" text="Projetos" />
        </li>
        <li>
          <NavItem uri="#" text="Sobre" />
        </li>
        <li>
          <NavItem uri="#" text="Currículo" />
        </li>
      </nav>
    </>
  )
}
