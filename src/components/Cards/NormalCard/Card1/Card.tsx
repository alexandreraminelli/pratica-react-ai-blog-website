/* módulos CSS */
import styles from "./Card.module.css"

/** Interface dos props do componente `Card`. */
interface CardProps {
  /** Título do card. */
  title: string
  /** Texto do card. */
  text: string
}

/**
 * Componente de card.
 */
export default function Card({ title, text }: CardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p className="gray2">{text}</p>
    </div>
  )
}
