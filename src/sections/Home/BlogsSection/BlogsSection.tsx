/* importação de componentes */
import HeaderSection, { HeaderSectionProps } from "../../../components/HeaderSection/HeaderSection"

/** Interface do conteúdo da seção de blog. */
interface BlogsSectionContent {
  /** Conteúdo do cabeçalho da seção. */
  header: HeaderSectionProps
}

/**
 * Componente da seção de páginas
 */
export default function BlogsSection(): JSX.Element {
  /* Conteúdo */
  const content: BlogsSectionContent = {
    header: {
      badge: "Um Tesouro de Conhecimento",
      title: "Explore os Posts Detalhados do Blog da FutureTech",
      button: { text: "Ver todos os blogs", link: "/blog" },
    },
  }

  /* Retorno JSX */
  return (
    <section id="blogs">
      {/* Cabeçalho */}
      <HeaderSection badge={content.header.badge} title={content.header.title} button={content.header.button} />
      {/* Corpo */}
    </section>
  )
}
