/* importação de componentes */
import Tablist from "./components/Tablist/Tablist"
import PostsList from "./components/PostsList/PostsList"

/** Componente da seção que exibe alguns posts. */
export default function PostsSection(): JSX.Element {
  return (
    <section className="pd-container">
      {/* Taps container */}
      <Tablist />

      {/* Lista de posts */}
      <PostsList />
    </section>
  )
}
