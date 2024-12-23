/* importação de dependências */
import { useEffect, useState } from "react" // estados de uso
import { Link, useLocation } from "react-router-dom" // hook useLocation

/* JSON com a lista de links */
import linkList from "../../../../data/NavLinks/headerNavLinks.json"

/* importação de componentes */
import IconButton from "../../../../components/Buttons/IconButton/IconButton" // botão de ícone
/* ícones SVGs */
import MenuIcon from "./MenuIcon" // ícone de menu hambúrguer
import CloseIcon from "../../../../components/icons/CloseIcon" //ícone de fechar (X)

/* importação de módulos CSS */
import styles from "./Navbar.module.css"
import styleButton from "../../../../components/Buttons/FeaturedButton/FeaturedButton.module.css"

/**
 * Componente da barra de navegação.
 * @returns O JSX da barra de navegação.
 */
export default function Navbar(): JSX.Element {
  /* Exibir/ocultar o navbar mobile */
  // Criação de estado de uso para controlar se o navbar está ativo
  const [isNavbarActive, setIsNavbarActive] = useState(false)
  // Obter o caminho atual
  const location = useLocation()

  // Handlers para abrir e fechar o menu
  const handleMenuOpen = () => setIsNavbarActive(true)
  const handleMenuClose = () => setIsNavbarActive(false)

  // Fechar o navbar mobile quando a rota (página) mudar
  useEffect(
    () => {
      handleMenuClose() // Chama a função que fecha o menu
    },
    [location] // Dispara o evento quando a rota mudar
  )

  /* Retorno JSX */
  return (
    <>
      <nav className={`${styles.navbar} ${isNavbarActive ? styles.active : ""}`}>
        {/* Botão de fechar o navbar mobile */}
        <IconButton Icon={CloseIcon} className={styles.FecharButton} onClick={handleMenuClose} />

        {/* Lista de links do Navbar */}
        <ul>
          {/* Percorrer a lista de objetos para gerar os links */}
          {linkList.map((link, index) => (
            <>
              <LinkNavbar key={index} text={link.title} link={link.link} button={link.button} />
            </>
          ))}
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
  /** Se o link deve ser estilizado como um button (opcional) */
  button?: boolean
}
/**
 * Componente dos links do navbar.
 */
function LinkNavbar({ link, text, button }: LinksNavbarProps): JSX.Element {
  /* Verificar se o link é da página atual */
  const location = useLocation() // obter o caminho atual da URL
  const isCurrentPage = location.pathname === link // verificar se o link corresponde a URL atual

  /* retorno JSX */
  return (
    <li>
      <Link
        to={link} // endereço do link
        // classes CSS:
        className={`no-recolor no-underline 
          ${button ? styleButton.featuredButton : ""}
          ${isCurrentPage ? styles.linkAtual : ""}`}
      >
        {text} {/* Texto do link */}
      </Link>
    </li>
  )
}
