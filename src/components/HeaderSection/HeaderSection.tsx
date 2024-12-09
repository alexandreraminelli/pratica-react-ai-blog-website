/* importação de componentes */
import Badge from "../Badge/Badge"

/* módulos CSS*/
import styles from "./HeaderSection.module.css"

/**
 * Interface dos props do componente `HeaderSection`.
 */
interface HeaderSectionProps {
  /** Texto exibido no badge no cabeçalho da seção. */
  badge: string
  /** Título da seção. */
  title: string
}

/**
 * Componente do cabeçalho de seções.
 */
export default function HeaderSection({ badge, title }: HeaderSectionProps): JSX.Element {
  return (
    <header className={`pd-container ${styles.headerSection}`}>
      <hgroup>
        <Badge text={badge} />
        <h2>{title}</h2>
      </hgroup>
    </header>
  )
}
