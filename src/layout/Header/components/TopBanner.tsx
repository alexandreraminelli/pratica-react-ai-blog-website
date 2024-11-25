/* importação de dependências */
import { Link } from "react-router-dom"
/* Ícones SVGs */
import RedirectIcon from "../../../components/icons/RedirectIcon"
/* Módulos CSS */
import styles from "./TopBanner.module.css"

/**
 * Componente do banner que aparece no topo da página, acima do cabeçalho.
 */
export default function TopBanner(): JSX.Element {
  return (
    <div className={`pd-container ${styles.topBanner}`}>
      {/* Texto do banner */}
      <p>
        Não perca as novidades!{" "}
        <Link to="/contato" className="no-recolor">
          Assine nossa newsletter
        </Link>
      </p>

      {/* Ícone */}
      <RedirectIcon />
    </div>
  )
}
