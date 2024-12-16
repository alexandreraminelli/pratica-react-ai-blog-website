/* importação de interfaces */
import { HeaderSectionProps } from "../../../components/HeaderSection/HeaderSection"
import { PostsSectionProps } from "../../../layout/PostsSection/PostsSection"
/* imagens de avatar */
import avatar1 from "../../../assets/images/avatars/avatar02.png"
import avatar2 from "../../../assets/images/avatars/avatar03.png"
import avatar3 from "../../../assets/images/avatars/avatar04.png"

/** Interface do JSON do conteúdo da seção de blog. */
export interface BlogSectionContent {
  /** Conteúdo do cabeçalho da seção. */
  header: HeaderSectionProps
  /** Lista de tabs com as categorias dos blogs. */
  tabs: PostsSectionProps["tabsList"]
  /** Lista de posts que serão exibidos na seção. */
  postList: PostsSectionProps["postList"]
}

/** Conteúdo da seção de blog da página inicial. */
export const BlogSectionContent: BlogSectionContent = {
  header: {
    badge: "Um Tesouro de Conhecimento",
    title: "Explore os Posts Detalhados do Blog da FutureTech",
    button: { text: "Ver todos os blogs", link: "/blog" },
  },
  tabs: [{ name: "Todos", active: true }, { name: "Computação Quântica" }, { name: "Ética da IA" }, { name: "Exploração Espacial" }, { name: "Biotecnologia" }, { name: "Energia Renovável" }],
  postList: [
    {
      profile: { name: "John Techson", picture: avatar1 },
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
      profile: { name: "Sarah Ethicist", picture: avatar2 },
      category: "Ética em IA",
      title: "Os dilemas éticos da IA",
      text: "Um mergulho profundo nos desafios éticos impostos pela IA, incluindo preconceito, privacidade e transparência.",
      date: "5 de novembro de 2023",
      info: {
        likes: 32,
        comments: 72,
        shares: 18,
      },
    },
    {
      profile: { name: "Astronomer X", picture: avatar3 },
      category: "Exploração Espacial",
      title: "O Desafio da Colonização de Marte",
      text: "Explorando os desafios técnicos e logísticos da colonização humana em Marte.",
      date: "10 de dezembro de 2023",
      info: {
        likes: 20,
        comments: 31,
        shares: 12,
      },
    },
  ],
}
