/* importação de componentes */
import HeadlineCTA from "./components/HeadlineCTA" // headline do CTA

/* módulos CSS */
import styles from "./CallToAction.module.css"

/**
 * Componente CTA (Call to Action).
 */
export default function CallToAction(): JSX.Element {
  return (
    <section className={`pd-container ${styles.callToAction}`}>
      {/* Headline */}
      <HeadlineCTA />

      {/* Lista de cards */}
    </section>
  )
}
