/* importação de componentes */
import Badge from "../../../components/Badge/Badge" // badges

/* módulos CSS */
import styles from "../CallToAction.module.css"
/* importação de imagens */
import logo from "../../../assets/images/logo/logo-favicon.svg"

/**
 * Headline do CTA.
 */
export default function HeadlineCTA(): JSX.Element {
  return (
    <header className={styles.headlineCTA}>
      {/* Linha do Badge */}
      <BadgeLine />

      {/* Título e Texto */}
      <TitleAndTextHeadline />
    </header>
  )
}

/**
 * Linha com a logo e o badge.
 */
function BadgeLine(): JSX.Element {
  return (
    <div className={styles.badgeLine}>
      {/* Imagem (visível no mobile) */}
      <img src={logo} alt="Logo da FutureTech" />
      {/* Badge */}
      <Badge text="Aprenda, Conecte-se, Inove" />
    </div>
  )
}

/**
 * Título e texto do headline do CTA.
 */
function TitleAndTextHeadline(): JSX.Element {
  return (
    <hgroup>
      {/* Título */}
      <h2>Faça parte da revolução tecnológica do futuro</h2>

      {/* Texto mobile */}
      <p className={styles.mobileText}>Mergulhe no mundo da tecnologia do futuro. Explore nossos recursos abrangentes.</p>
      {/* Texto desktop */}
      <p className={styles.desktopText}>Mergulhe no mundo da tecnologia do futuro. Explore nossos recursos abrangentes, conecte-se com outros entusiastas da tecnologia e impulsione a inovação no setor. Junte-se a uma comunidade dinâmica de pensadores visionários.</p>
    </hgroup>
  )
}
