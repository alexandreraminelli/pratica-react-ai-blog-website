/* módulos CSS */
import styles from "./AvatarGroup.module.css"

/* componentes */
import AvatarImg from "../AvatarImg/AvatarImg"
/* componentes das imagens */
import img1 from "../../../assets/images/avatars/avatar01.png"
import img2 from "../../../assets/images/avatars/avatar02.png"
import img3 from "../../../assets/images/avatars/avatar03.png"
import img4 from "../../../assets/images/avatars/avatar04.png"

/**
 * Componente de grupo de avatares.
 * Renderiza
 */
export default function AvatarGroup(): JSX.Element {
  return (
    <div className={styles.avatarGroup}>
      <AvatarImg src={img1} />
      <AvatarImg src={img2} />
      <AvatarImg src={img3} />
      <AvatarImg src={img4} />
    </div>
  )
}
