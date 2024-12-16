/* módulos CSS */
import styles from "./Post.module.css"
/* componentes */
import RedirectButton from "../../../../components/Buttons/RedirectButton/RedirectButton"
import AvatarImg from "../../../../components/Avatar/AvatarImg/AvatarImg"
/* ícones SVG */
import LikeIcon from "../../../../components/icons/PostIcons/LikeIcon"
import CommentIcon from "../../../../components/icons/PostIcons/CommentIcon"
import ShareIcon from "../../../../components/icons/PostIcons/ShareIcon"

/** Interface do conteúdo dos posts. */
interface PostContent {
  /** Perfil que criou o post. */
  profile: ProfileAndCategoryProps["profile"]
  /** Categoria do post. */
  category: ProfileAndCategoryProps["category"]
  /** Título do post. */
  title: string
  /** Texto do post. */
  text: string
  /** Data de publicação do post. */
  date: string
  /** Informações do post. */
  info: {
    /** Quantidade de likes do post. */
    likes: number
    /** Quantidade de comentários do post. */
    comments: number
    /** Quantidade de compartilhamentos do post. */
    shares: number
  }
}

/** Interface dos props do componente `Post`. */
export interface PostProps {
  /** Conteúdo dos posts. */
  postContent: PostContent
}

/** Componente de bloco de post do blog. */
export default function Post({ postContent }: PostProps): JSX.Element {
  return (
    <article className={`pd-container ${styles.post}`}>
      {/* Informações de perfil e categoria */}
      <ProfileAndCategory profile={postContent.profile} category={postContent.category} />

      {/* Conteúdo do post */}
      <PostContent postContent={postContent} />

      {/* Botão de redirecionamento */}
      <Button className={styles.buttonDesktop} />
    </article>
  )
}

/** Interface dos props do componente `ProfileAndCategory`. */
interface ProfileAndCategoryProps {
  /** Perfil que criou o post. */
  profile: {
    /** Nome do perfil. */
    name: string
    /** Imagem do perfil. */
    picture: string
  }
  /** Categoria do post. */
  category: string
}

/** Componente que exibe o perfil e categoria de um post. */
function ProfileAndCategory({ profile, category }: ProfileAndCategoryProps): JSX.Element {
  return (
    <div className={styles.profileCategoryContainer}>
      {/* Imagem */}
      <AvatarImg src={profile.picture} />
      {/* Perfil e categoria */}
      <div>
        {/* Perfil */}
        <p className={styles.profileName}>{profile.name}</p>
        {/* Categoria  */}
        <p className="gray2">{category}</p>
      </div>
      {/* Botão de redirecionamento */}
      <Button className={styles.buttonMobile} />
    </div>
  )
}

/** Componente do conteúdo principal do post. */
function PostContent({ postContent }: PostProps): JSX.Element {
  return (
    <div className={styles.mainContent}>
      {/* Data do post */}
      <p className={`gray2 ${styles.date}`}>{postContent.date}</p>

      {/* Texto */}
      <div className={styles.mainText}>
        <h3 className="smaller">{postContent.title}</h3>
        <p className="gray2">{postContent.text}</p>
      </div>

      {/* Botões de  do post */}
      <PostActionButtons buttons={postContent.info} />
    </div>
  )
}

/** Interface dos props do `PostActionButtons`. */
interface PostActionButtonsProps {
  buttons: PostContent["info"]
}
/** Botões de ação do post. */
function PostActionButtons({ buttons }: PostActionButtonsProps): JSX.Element {
  return (
    <aside className={styles.actionButtonList}>
      {/* Botão de like */}
      <PostActionButton Icon={LikeIcon} value={buttons.likes} />
      {/* Botão de comentários */}
      <PostActionButton Icon={CommentIcon} value={buttons.comments} />
      {/* Botão de compartilhar */}
      <PostActionButton Icon={ShareIcon} value={buttons.shares} />
    </aside>
  )
}
/** Interface dos props do `PostActionButton`. */
interface PostActionButtonProps {
  /** Ícone do botão que explica na UI sua finalidade. */
  Icon: React.ComponentType
  /** Valor exibido no botão. */
  value: number
}
/** Botão de ação do post. */
function PostActionButton({ Icon, value }: PostActionButtonProps): JSX.Element {
  return (
    <button className={styles.actionButton}>
      {/* Ícone */}
      <Icon />
      {/* Número */}
      <span>{value}</span>
    </button>
  )
}

/** Interfaces dos props do componente `Button`. */
interface ButtonProps {
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}
/** Componente do botão de "Ver Blog". */
function Button({ className }: ButtonProps): JSX.Element {
  return <RedirectButton text="Ver Blog" darkBackground className={className} />
}
