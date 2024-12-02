/** módulos CSS */
import styles from "./Counters.module.css"

/** Interface dos componentes de cards contadores. */
interface CountersProps {
  /** Número do contador. */
  number: number | string
  /** Se é um milhar (exibir o "K" no número). (opcional) */
  thousand?: boolean
  /** Texto do contador. */
  text: string
}
/**
 * Componente de cards contadores.
 */
export default function Counters({ number, thousand, text }: CountersProps): JSX.Element {
  return (
    <section className={styles.counterCard}>
      {/* Contagem */}
      <p className={styles.number}>
        {number}
        {thousand ? "k" : ""}
        <span className={styles.plusSign}>+</span>
      </p>
      {/* Texto */}
      <p className={styles.text}>{text}</p>
    </section>
  )
}
