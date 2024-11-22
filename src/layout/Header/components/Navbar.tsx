/* importação de componentes */
import MenuIcon from "./MenuIcon" // ícone SVG de menu
import CloseIcon from "../../../components/icons/CloseIcon" //ícone SVG de fechar (X)
import IconButton from "../../../components/Buttons/IconButton/IconButton" // botão de ícone

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
      {/* Sidebar: elementos ocultos no mobile */}
      <div className={styles.sidebar}>
        {/* Botão de fechar o navbar mobile */}
        <IconButton Icon={CloseIcon} />

        {/* Lista de links do Navbar */}
        <ul>
          <LinkNavbar link="/" text="Início" />
          <LinkNavbar link="/noticias" text="Notícias" />
          <LinkNavbar link="/podcasts" text="Podcasts" />
          <LinkNavbar link="/recursos" text="Recursos" />
          <LinkNavbar link="/contato" text="Contato" />
        </ul>
      </div>

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
      <a href={link} className="no-recolor no-underline">
        {text}
      </a>
    </li>
  )
}
