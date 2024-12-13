/* importação de componentes */
import TabList, { TabContent } from "./components/Tablist/Tablist"
import PostsList from "./components/PostsList/PostsList"

/** Interface dos props do componente `PostsSection`. */
export interface PostsSectionProps {
  tabsList: TabContent[]
}

/** Componente da seção que exibe alguns posts. */
export default function PostsSection({ tabsList }: PostsSectionProps): JSX.Element {
  return (
    <section>
      {/* Taps container */}
      <TabList tabList={tabsList} />

      {/* Lista de posts */}
      <PostsList />
    </section>
  )
}
