/* importação de dependências */
import { Link } from "react-router-dom"

/* módulos CSS */
import styles from "./FooterNavigation.module.css"

/**
 * Componente da seção de navegação do rodapé.
 */
export default function FooterNavigation(): JSX.Element {
  // Objeto com os links do Footer Navigation
  const linksList = {
    text: "contato",
    link: "/contato",
  }

  return (
    <nav className={styles.FooterNav} aria-label="Navegação do rodapé">
      {/* Lista de links */}
      <ul>
        <LinkGroup pageLink={linksList} />
      </ul>
    </nav>
  )
}

/** Interface dos props do componente LinkFooterNav */
interface LinkFooterNavProps {
  /** Texto exibido na UI */
  text: string
  /** Link do endpoint pra página */
  link: string
}
/**
 * Componente do link do Footer Navigation
 */
function LinkFooterNav({ text, link }: LinkFooterNavProps): JSX.Element {
  return (
    <li>
      <Link
        to={link} // endereço do link
      >
        {/* Texto do link */}
        {text}
      </Link>
    </li>
  )
}

/**
 * Interface dos props do componente LinkGroup.
 */
interface LinkGroupProps {
  /** Link da página do grupo. */
  pageLink: LinkFooterNavProps
}

/**
 * Componente de grupo de links do FooterNavigation.
 */
function LinkGroup({ pageLink }: LinkGroupProps): JSX.Element {
  return (
    <li>
      {/* Link da página principal */}
      <LinkFooterNav text={pageLink.text} link={pageLink.link} />

      {/*  */}
    </li>
  )
}
