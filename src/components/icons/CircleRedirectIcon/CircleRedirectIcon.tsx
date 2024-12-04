/* importação do ícone de redirecionamento */
import RedirectIcon from "../RedirectIcon"
/* módulos CSS */
import styles from "./CircleRedirectIcon.module.css"

/**
 * Componente do ícone de redirecionamento envolvido em um círculo.
 */
export default function CircleRedirectIcon(): JSX.Element {
  return <RedirectIcon className={styles.redirectCircle} />
}
