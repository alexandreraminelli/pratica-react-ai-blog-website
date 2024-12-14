/* importação de componentes */
import HeaderSection, { HeaderSectionProps } from "../../../components/HeaderSection/HeaderSection"
import PostsSection, { PostsSectionProps } from "../../../layout/PostsSection/PostsSection"

/** Interface do conteúdo da seção de blog. */
interface BlogsSectionContent {
  /** Conteúdo do cabeçalho da seção. */
  header: HeaderSectionProps
  /** Lista de tabs com as categorias dos blogs. */
  tabs: PostsSectionProps["tabsList"]
  /** Lista de posts que serão exibidos na seção. */
  postList: PostsSectionProps["postList"]
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
    postList: [
      {
        profile: { name: "John Techson" },
        category: "Computação Quântica",
        title: "O Salto Quântico na Computação",
        text: "Explore a revolução na computação quântica, suas aplicações e seu potencial impacto em vários setores.",
        date: "15 de outubro de 2023",
        info: {
          likes: 24.5,
          comments: 50,
          shares: 20,
        },
      },
      {
        profile: { name: "John Techson" },
        category: "Computação Quântica",
        title: "O Salto Quântico na Computação",
        text: "Explore a revolução na computação quântica, suas aplicações e seu potencial impacto em vários setores.",
        date: "15 de outubro de 2023",
        info: {
          likes: 24.5,
          comments: 50,
          shares: 20,
        },
      },
      {
        profile: { name: "John Techson" },
        category: "Computação Quântica",
        title: "O Salto Quântico na Computação",
        text: "Explore a revolução na computação quântica, suas aplicações e seu potencial impacto em vários setores.",
        date: "15 de outubro de 2023",
        info: {
          likes: 24.5,
          comments: 50,
          shares: 20,
        },
      },
    ],
  }

  /* Retorno JSX */
  return (
    <section id="blogs">
      {/* Cabeçalho */}
      <HeaderSection badge={content.header.badge} title={content.header.title} button={content.header.button} />
      {/* Corpo */}
      <PostsSection tabsList={content.tabs} postList={content.postList} />
    </section>
  )
}
