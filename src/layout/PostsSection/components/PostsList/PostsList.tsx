/* importação de componentes */
import Post, { PostProps } from "../Post/Post"

/** Interface dos props do componente `PostsList`. */
export interface PostsListProps {
  postList: PostProps["postContent"][]
}

/** Componente de lista de posts. */
export default function PostsList({ postList }: PostsListProps): JSX.Element {
  return (
    <div>
      {postList.map((post, index) => (
        <Post key={index} postContent={post} />
      ))}
    </div>
  )
}
