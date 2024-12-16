/* módulos CSS */
import styles from "./AvatarImg.module.css"

/** Interface dos props do componente `AvatarImg`. */
interface AvatarImgProps {
  /** Imagem a ser exibida. */
  src: string
}
/** Componente que renderiza uma imagem de avatar. */
export default function AvatarImg({ src }: AvatarImgProps): JSX.Element {
  return <img src={src} alt="" className={styles.avatar} />
}
