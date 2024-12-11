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
  cards: {
    /** Título do card. */
    cardTitle: string
    /** Texto do card. */
    cardText: string
  }[]
}

/**
 * Componente da seção de funcionalidades.
 */
export default function FeatureSection({ content }: { content: FeatureSectionProps }): JSX.Element {
  return (
    <section>
      {/* Cabeçalho do Card */}
      <header>
        <content.Icon />
        <h3>{content.feature}</h3>
        <p>{content.describe}</p>
      </header>
    </section>
  )
}
