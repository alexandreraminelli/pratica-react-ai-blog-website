/* Importação de estilos CSS */
import styles from "./IconButton.module.css"

/**
 * Interface do props do componente IconButton.
 */
interface IconButtonProps {
  /** Ícone do botão */
  Icon: React.ComponentType
  /** Classes personalizadas (opcional) */
  className?: string | null
  /** Funções a serem chamadas ao clicar no botão (opcional) */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

/**
 * Componente de Icon Button. Cria um botão de ícone sem preenchimento, bordas ou sombras.
 * @param Icon O ícone a ser exibido.
 * @returns O botão com o ícone.
 */
export default function IconButton({ Icon, className, onClick }: IconButtonProps): JSX.Element {
  return (
    <button
      // Atributos do botão
      className={`${styles.iconButton} ${className || ""}`} // classes CSS do botão
      onClick={onClick} // função a ser chamada ao clicar no botão
    >
      <Icon /> {/* Ícone do botão */}
    </button>
  )
}
