/* importação de componentes */
import Badge from "../Badge/Badge"
import RedirectButton, { RedirectButtonProps } from "../Buttons/RedirectButton/RedirectButton"

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
  /** Props pro botão de redirecionamento.
   *  Deve ser passado como um objeto JSON. (opcional) */
  button?: Omit<RedirectButtonProps, "darkBackground">
}

/**
 * Componente do cabeçalho de seções.
 */
export default function HeaderSection({ badge, title, button }: HeaderSectionProps): JSX.Element {
  return (
    <header className={`pd-container ${styles.headerSection}`}>
      {/* Badge e título */}
      <hgroup>
        <Badge text={badge} />
        <h2>{title}</h2>
      </hgroup>
      {/* Botão de redirecionamento */}
      {button && <RedirectButton darkBackground className={styles.button} {...button} />}
    </header>
  )
}
