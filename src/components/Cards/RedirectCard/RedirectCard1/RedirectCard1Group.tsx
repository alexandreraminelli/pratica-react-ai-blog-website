/* importação de componentes */
import RedirectCard, { RedirectCardsProps } from "./RedirectCard1.tsx"
/* módulos CSS */
import styles from "./RedirectCard1Group.module.css"

/**
 * Interface dos props do componente RedirectCard2Group.
 */
interface RedirectCardGroupProps {
  cards: RedirectCardsProps[]
}

/**
 * Componente de grupo de RedirectCards.
 */
export default function RedirectCard1Group({ cards }: RedirectCardGroupProps): JSX.Element {
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
