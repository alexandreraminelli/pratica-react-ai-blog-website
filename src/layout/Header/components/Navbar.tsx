import { useState } from "react" // estados de uso

/* importação de componentes */
import MenuIcon from "./MenuIcon" // ícone SVG de menu
import CloseIcon from "../../../components/icons/CloseIcon" //ícone SVG de fechar (X)
import IconButton from "../../../components/Buttons/IconButton/IconButton" // botão de ícone

/* importação de modulos CSS */
import styles from "./Navbar.module.css"

/**
 * Componente da barra de navegação.
 * @returns O JSX da barra de navegação.
 */
export default function Navbar(): JSX.Element {
  /* exibir/ocultar o navbar mobile */
  // Criação de estado de uso para controlar se o navbar está ativo
  const [isNavbarActive, setIsNavbarActive] = useState(false)
  // Handlers para abrir e fechar o menu
  const handleMenuOpen = () => setIsNavbarActive(true)
  const handleMenuClose = () => setIsNavbarActive(false)

  return (
    <>
      <nav className={`${styles.navbar} ${isNavbarActive ? styles.active : ""}`}>
        {/* Botão de fechar o navbar mobile */}
        <IconButton Icon={CloseIcon} className={styles.FecharButton} onClick={handleMenuClose} />

        {/* Lista de links do Navbar */}
        <ul>
          <LinkNavbar link="/" text="Início" />
          <LinkNavbar link="/noticias" text="Notícias" />
          <LinkNavbar link="/podcasts" text="Podcasts" />
          <LinkNavbar link="/recursos" text="Recursos" />
          <LinkNavbar link="/contato" text="Entre em Contato" />
        </ul>
      </nav>
      {/* Botão de menu mobile */}
      <IconButton Icon={MenuIcon} className={styles.MenuButton} onClick={handleMenuOpen} />
    </>
  )
}

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
