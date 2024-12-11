/* importação de componentes */
import CardGroup from "../../../../components/Cards/NormalCard/Card1/CardGroup"
/* importação de interfaces */
import { CardProps } from "../../../../components/Cards/NormalCard/Card1/Card"
/* módulos CSS */
import styles from "./FeatureSection.module.css"

/**
 * Interface dos props do componente `FeatureSection`.
 */
export interface FeatureSectionProps {
  /** Nome da funcionalidade. */
  feature: string
  /** Descrição da funcionalidade. */
  describe: string
  /** Ícone exibido. */
  Icon: React.ComponentType
  /** Cards que ajudam a explicar a funcionalidade. */
  cards: CardProps[]
}

/**
 * Componente da seção de funcionalidades.
 */
export default function FeatureSection({ content }: { content: FeatureSectionProps }): JSX.Element {
  return (
    <section className={`pd-container ${styles.featureSection}`}>
      {/* Cabeçalho da seção */}
      <header>
        <content.Icon />
        <div className={styles.text}>
          <h3>{content.feature}</h3>
          <p className="gray2">{content.describe}</p>
        </div>
      </header>
      {/* Cards */}
      <CardGroup cardsList={content.cards} className={styles.cardGroup} />
    </section>
  )
}
