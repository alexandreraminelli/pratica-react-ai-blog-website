/* importação de componentes */
import TabList, { TabContent } from "./components/Tablist/TabList"
import PostsList, { PostsListProps } from "./components/PostsList/PostsList"

/** Interface dos props do componente `PostsSection`. */
export interface PostsSectionProps {
  /** Lista de tabs de categorias de posts. */
  tabsList: TabContent[]
  /** Lista dos posts a serem exibidos. */
  postList: PostsListProps["postList"]
}

/** Componente da seção que exibe alguns posts. */
export default function PostsSection({ tabsList, postList }: PostsSectionProps): JSX.Element {
  return (
    <section>
      {/* Taps container */}
      <TabList tabList={tabsList} />

      {/* Lista de posts */}
      <PostsList postList={postList} />
    </section>
  )
}
