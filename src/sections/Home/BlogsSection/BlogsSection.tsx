/* importação de componentes */
import HeaderSection, { HeaderSectionProps } from "../../../components/HeaderSection/HeaderSection"
import PostsSection, { PostsSectionProps } from "../../../layout/PostsSection/PostsSection"

/** Interface do conteúdo da seção de blog. */
interface BlogsSectionContent {
  /** Conteúdo do cabeçalho da seção. */
  header: HeaderSectionProps
  /** Lista de tabs com as categorias dos blogs. */
  tabs: PostsSectionProps["tabsList"]
  /** Lista  */
}

/** Componente da seção de páginas. */
export default function BlogsSection(): JSX.Element {
  /* Conteúdo */
  const content: BlogsSectionContent = {
    header: {
      badge: "Um Tesouro de Conhecimento",
      title: "Explore os Posts Detalhados do Blog da FutureTech",
      button: { text: "Ver todos os blogs", link: "/blog" },
    },
    tabs: [{ name: "Todos", active: true }, { name: "Computação Quântica" }, { name: "Ética da IA" }, { name: "Exploração Espacial" }, { name: "Biotecnologia" }, { name: "Energia Renovável" }],
  }

  /* Retorno JSX */
  return (
    <section id="blogs">
      {/* Cabeçalho */}
      <HeaderSection badge={content.header.badge} title={content.header.title} button={content.header.button} />
      {/* Corpo */}
      <PostsSection tabsList={content.tabs} />
    </section>
  )
}
