/* ícone SVG */
import CircleRedirectIcon from "../../../icons/CircleRedirectIcon/CircleRedirectIcon"
/* módulos CSS */
import styles from "./RedirectCard2.module.css"

/**
 * Interface dos props do componente RedirectCard2.
 */
export interface RedirectCard2Props {
  /** Ícone do card. */
  Icon: React.ComponentType
  /** Título do card. */
  title: string
  /** Subtítulo do card. */
  subtitle: string
  /** Texto auxiliar do card.  */
  text: string
}
/**
 * Componente de card de redirecionamento (2º variação).
 */
export default function RedirectCard2({ Icon, title, subtitle, text }: RedirectCard2Props): JSX.Element {
  return (
    <section className={styles.redirectCard}>
      {/* Sub-container */}
      <div className={styles.subcontainer}>
        {/* Ícone */}
        <Icon />

        {/* Sub-container (linha) */}
        <div className={styles.row}>
          {/* Título e subtítulo */}
          <hgroup>
            {/* Título */}
            <h3>{title}</h3>
            {/* Subtítulo */}
            <p>{subtitle}</p>
          </hgroup>

          {/* Ícone de Redirecionamento */}
          <CircleRedirectIcon />
        </div>
      </div>
      {/* Texto auxiliar */}
      <p>{text}</p>
    </section>
  )
}
