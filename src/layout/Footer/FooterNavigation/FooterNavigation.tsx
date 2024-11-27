/* importação de dependências */
import { Link } from "react-router-dom"

/* módulos CSS */
import styles from "./FooterNavigation.module.css"

/**
 * Componente da seção de navegação do rodapé.
 */
export default function FooterNavigation(): JSX.Element {
  return (
    <nav className={styles.FooterNav} aria-label="Navegação do rodapé">
      {/* Lista de links */}
      <ul></ul>
    </nav>
  )
}

/** Interface de link */
interface LinkFooterNavProps {
  /** Texto exibido na UI */
  text: string
  /** Link do endpoint pra página */
  link: string
}
/**
 *
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
 * Interface dos props do LinkGroup
 */
interface LinkGroupProps {
  /** Link da página do grupo */
  linkPagina: LinkFooterNavProps
}

/**
 * Componente de grupo de links do FooterNavigation.
 */
function LinkGroup(): JSX.Element {
  return <li>{/* Link da página */}</li>
}
