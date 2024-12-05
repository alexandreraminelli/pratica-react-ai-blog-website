/* módulos CSS */
import styles from "./AvatarGroup.module.css"

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
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
    </div>
  )
}
