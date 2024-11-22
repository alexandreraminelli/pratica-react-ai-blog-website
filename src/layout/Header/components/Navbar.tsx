/* importação de componentes */
import MenuIcon from "./MenuIcon"
import IconButton from "../../../components/Buttons/IconButton/IconButton"

/* importação de modulos CSS */
import styles from "./Navbar.module.css"

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
 * @returns O JSX da barra de navegação.
 */
export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      {/* Links do Navbar */}
      <ul>
        <LinkNavbar link="/" text="Início" />
        <LinkNavbar link="/noticias" text="Notícias" />
        <LinkNavbar link="/podcasts" text="Podcasts" />
        <LinkNavbar link="/recursos" text="Recursos" />
        <LinkNavbar link="/contato" text="Contato" />
      </ul>

      {/* Botão de menu mobile */}
      <IconButton Icon={MenuIcon} />
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
