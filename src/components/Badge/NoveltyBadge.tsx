/* módulos CSS */
import styles from "./NoveltyBadge.module.css"

/**
 * Componente do badge "Novo".
 */
export default function NoveltyBadge(): JSX.Element {
  return (
    <span className={styles.border}>
      <span className={styles.noveltyBadge}>Novo</span>
    </span>
  )
}
