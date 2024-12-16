/* importação do conteúdo */
import { BlogSectionContent } from "../../../data/PagesContent/HomepageContent/BlogsSectionContent"
/* importação de componentes */
import HeaderSection from "../../../components/HeaderSection/HeaderSection"
import PostsSection from "../../../layout/PostsSection/PostsSection"

/** Componente da seção de páginas. */
export default function BlogsSection(): JSX.Element {
  /* Retorno JSX */
  return (
    <section id="blogs">
      {/* Cabeçalho */}
      <HeaderSection badge={BlogSectionContent.header.badge} title={BlogSectionContent.header.title} button={BlogSectionContent.header.button} />
      {/* Corpo */}
      <PostsSection tabsList={BlogSectionContent.tabs} postList={BlogSectionContent.postList} />
    </section>
  )
}
