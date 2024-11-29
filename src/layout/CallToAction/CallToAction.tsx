/* importação de componentes */
import HeadlineCTA from "./components/HeadlineCTA" // headline do CTA
import RedirectCardGroup from "../../components/Cards/RedirectCard/RedirectCardGroup" // lista de cards de redirecionamento
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
      <RedirectCardGroup cards={cardList} />
    </section>
  )
}
