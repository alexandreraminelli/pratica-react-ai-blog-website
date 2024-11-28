/* Importação de dependências */
import { Link } from "react-router-dom"

/* Módulos CSS */
import styles from "./ButtonWithIcon.module.css"

/**
 * Interface do props do componente ButtonWithIcon.
 */
export interface ButtonWithIconProps {
  /** O texto exibido no botão. */
  text: string
  /** Componente SVG do ícone exibido no botão. */
  Icon: React.ComponentType

  /** Classes CSS personalizadas. (opcional) */
  className?: string
  /** Se botão deve ter um background mais escuro. (opcional) */
  darkBackground?: boolean

  /** Endereço a ser aberto pelo botão. Se for passado um valor, o botão será renderizado como um <Link>. (opcional) */
  link?: string
  /** Se link deve ser aberto em uma nova aba. (opcional) */
  targetBlank?: boolean

  /** Função a ser executada ao clicar no botão. (opcional) */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Componente do ButtonWithIcon que exibe um botão com texto e ícone.
 */
export default function ButtonWithIcon({ text, Icon, className, darkBackground, link, targetBlank, onClick }: ButtonWithIconProps): JSX.Element {
  /** Classes CSS do botão. */
  const classList: string = `${styles.buttonIcon} ${darkBackground ? styles.darkBackground : ""} ${className || ""}`

  /** Conteúdo do botão. */
  const content: JSX.Element = (
    <>
      {text}
      <Icon />
    </>
  )

  if (link) {
    /* Se prop link for passado, renderiza como um <Link> */
    return (
      <Link
        to={link} // Endereço
        target={targetBlank ? "_blank" : "_self"} // target do link
        className={classList} // Classes CSS
        aria-label="button"
      >
        {content}
      </Link>
    )
  } else {
    /* Se prop link não for passado, renderiza como um <button> */
    return (
      <button
        onClick={onClick} // Função a ser executada ao clicar no link
        className={classList} // Classes CSS
        type="button"
        aria-label="button"
      >
        {content}
      </button>
    )
  }
}
