/**
 * Interface do props do componente Links Navbar.
 */
interface LinksNavbarProps {
  /** O endereço para o link do navbar. */
  link: string
  /** O texto exibido no link do navbar. */
  text: string
}

/**
 * Componente da barra de navegação.
 */
export default function Navbar(): JSX.Element {
  return (
    <nav>
      {/* Links do Navbar */}
      <LinkNavbar link="/" text="Início" />
      <LinkNavbar link="/noticias" text="Notícias" />
      <LinkNavbar link="/podcasts" text="Podcasts" />
      <LinkNavbar link="/recursos" text="Recursos" />
      <LinkNavbar link="/contato" text="Contato" />
    </nav>
  )
}

/**
 * Componente dos links do navbar.
 */
function LinkNavbar({ link, text }: LinksNavbarProps): JSX.Element {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  )
}