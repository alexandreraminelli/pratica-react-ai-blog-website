/* Importação de estilos CSS */
import styles from "./IconButton.module.css"

/**
 * Interface do props do componente IconButton.
 */
interface IconButtonProps {
  /** Ícone do botão */
  Icon: React.ComponentType
  /** Classes personalizadas */
  className?: string | null
}

/**
 * Componente de Icon Button. Cria um botão de ícone sem preenchimento, bordas ou sombras.
 * @param Icon O ícone a ser exibido.
 * @returns O botão com o ícone.
 */
export default function IconButton({ Icon, className }: IconButtonProps): JSX.Element {
  return (
    <button className={`${styles.iconButton} ${className || ""}`}>
      <Icon />
    </button>
  )
}
