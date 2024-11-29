/* importação de dependências */
import { Link } from "react-router-dom"
/* ícones SVG */
import RedirectIcon from "../../icons/RedirectIcon"
/* módulos CSS */
import styles from "./RedirectCard.module.css"

/**
 * Interface dos props do componente RedirectCards.
 */
export interface RedirectCardsProps {
  /** Título exibido nos cards. */
  title: string
  /** Texto dos cards. */
  text: string
  /** Link dos cards */
  link: string
}

/**
 * Cards de Redirecionamento. Os cards são compostos por: título, parágrafo e ícone de redirecionamento.
 */
export default function RedirectCards({ title, text, link }: RedirectCardsProps): JSX.Element {
  return (
    <Link
      to={link} // endereço
      className={`no-recolor no-underline ${styles.redirectCard}`} // classes CSS
    >
      {/* Headline do Card */}
      <HeadlineRedirectCard title={title} />

      {/* Texto */}
      <p>{text}</p>
    </Link>
  )
}

/**
 * Headline do card de redirecionamento.
 */
function HeadlineRedirectCard({ title }: Pick<RedirectCardsProps, "title">): JSX.Element {
  return (
    <header className={styles.headlineCard}>
      {/* Título do card */}
      <h3>{title}</h3>
      {/* Ícone */}
      <RedirectIcon />
    </header>
  )
}
