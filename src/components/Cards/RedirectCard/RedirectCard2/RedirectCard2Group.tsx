/* importação de componentes */
import RedirectCard2, { RedirectCard2Props } from "./RedirectCard2.tsx"
/* importação de ícones */
import AbstractIcon01 from "../../../icons/abstractIcons/AbstractIcon01.tsx"
import AbstractIcon02 from "../../../icons/abstractIcons/AbstractIcon02.tsx"
import AbstractIcon03 from "../../../icons/abstractIcons/AbstractIcon03.tsx"

/* módulos CSS */
import styles from "./RedirectCard2Group.module.css"

/**
 * Interface dos props do componente `RedirectCard2Group`.
 */
interface RedirectCard2GroupProps {
  /** Lista com os objetos JSON do conteúdo dos cards. */
  cardsList: RedirectCard2Props[]
}

/**
 * Componente do grupo de cards de redirecionamento
 */
export default function RedirectCard2Group({ cardsList }: RedirectCard2GroupProps): JSX.Element {
  return (
    <div className={`pd-container ${styles.redirectCardGroup}`}>
      {/* Percorrer `cardsList` para gerar os RedirectCards */}
      {cardsList.map((card) => (
        <RedirectCard2 Icon={card.Icon} title={card.title} subtitle={card.subtitle} text={card.text} />
      ))}
    </div>
  )
}
