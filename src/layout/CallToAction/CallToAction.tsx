/* importação de componentes */
import HeadlineCTA from "./components/HeadlineCTA" // headline do CTA
import RedirectCard1Group from "../../components/Cards/RedirectCard/RedirectCard1/RedirectCard1Group.tsx" // lista de cards de redirecionamento
/* módulos CSS */
import styles from "./CallToAction.module.css"
/* JSON dos cards */
import cardList from "../../data/CTAText/cardsCTA.json"

/**
 * Componente CTA (Call to Action).
 */
export default function CallToAction(): JSX.Element {
  return (
    <section className={`pd-container ${styles.callToAction}`}>
      {/* Headline */}
      <HeadlineCTA />

      {/* Lista de cards */}
      <RedirectCard1Group cards={cardList} />
    </section>
  )
}
