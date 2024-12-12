/* importação de componentes */
import Post from "../Post/Post"

/** Componente de lista de posts. */
export default function PostsList(): JSX.Element {
  return (
    <div>
      <Post />
      <Post />
      <Post />
    </div>
  )
}
