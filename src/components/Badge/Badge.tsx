/* módulos CSS */
import styles from "./Badge.module.css"

/**
 * Interface dos props do componente Badge.
 */
interface BadgeProps {
  /** Texto do badge. */
  text: string
}

/**
 * Componente Badge (rótulo).
 */
export default function Badge({ text }: BadgeProps): JSX.Element {
  return <span className={styles.badge}>{text}</span>
}
