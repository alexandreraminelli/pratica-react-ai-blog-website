/* importação de componentes */
import RedirectCard, { RedirectCardsProps } from "./RedirectCard"
/* módulos CSS */
import styles from "./RedirectCardGroup.module.css"

/**
 * Interface dos props do componente RedirectCardGroup.
 */
interface RedirectCardGroupProps {
  cards: RedirectCardsProps[]
}

/**
 * Componente de grupo de RedirectCards.
 */
export default function RedirectCardGroup({ cards }: RedirectCardGroupProps): JSX.Element {
  return (
    <section className={styles.cardGroup}>
      {/* Percorrer a lista JSON */}
      {cards.map((card) => (
        <>
          <RedirectCard title={card.title} text={card.text} link={card.link} />
        </>
      ))}
    </section>
  )
}
