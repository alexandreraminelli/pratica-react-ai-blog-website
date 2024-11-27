/* importação de dependências */
import { Link } from "react-router-dom"
/* importação de componentes de ícones SVG */

import SocialMedia1 from "../../../components/icons/socialMediaIcons/SocialMedia1"
import SocialMedia2 from "../../../components/icons/socialMediaIcons/SocialMedia2"
import SocialMedia3 from "../../../components/icons/socialMediaIcons/SocialMedia3"

/* módulos CSS */
import styles from "./FooterLegal.module.css"

/**
 * Componente do Footer Legal com as informações legais e jurídicas da página e os links de redes sociais.
 */
export default function FooterLegal(): JSX.Element {
  return (
    <div className={styles.footerLegal}>
      {/* Links de redes sociais */}
      <SocialMediaLinks />

      {/* Links legais */}
      <p className={styles.legalLinks}>
        <Link to="/termos-e-condicoes" className="no-recolor no-underline">
          Termos e Condições
        </Link>{" "}
        |{" "}
        <Link to="politica-de-privacidade" className="no-recolor no-underline">
          Política de Privacidade
        </Link>
      </p>

      {/* Copyright */}
      <p className={styles.copyright}>&copy; 2024 FutureTech. Todos os direitos reservados.</p>
    </div>
  )
}

/**
 *
 */
function SocialMediaLinks(): JSX.Element {
  return (
    <div className={styles.socialMediaLinks}>
      <SocialMediaLink link="https://github.com/alexandreraminelli" Icon={SocialMedia1} />
      <SocialMediaLink link="https://github.com/alexandreraminelli" Icon={SocialMedia2} />
      <SocialMediaLink link="https://github.com/alexandreraminelli" Icon={SocialMedia3} />
    </div>
  )
}

/**
 * Interface dos props do componente SocialMediaLink.
 */
interface SocialMediaLinkProps {
  link: string
  Icon: React.ComponentType
}
/**
 * Componente dos links do rodapé.
 */
function SocialMediaLink({ link, Icon }: SocialMediaLinkProps): JSX.Element {
  return (
    <a href={link} target="_blank">
      {/* Ícone */}
      <Icon />
    </a>
  )
}
