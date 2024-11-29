/* importação de componentes */
import Badge from "../../../components/Badge/Badge" // badges

/* módulos CSS */
import styles from "./HeadlineCTA.module.css"
/* importação de imagens */
import logo from "../../../assets/images/logo/logo-favicon.svg"

/* dados do JSON */
import data from "../../../data/CTAText/headlineCTA.json"

/**
 * Headline do CTA.
 */
export default function HeadlineCTA(): JSX.Element {
  return (
    <header className={styles.headlineCTA}>
      {/* Logo (visível no desktop) */}
      <LogoHeadlineCTA className={styles.desktopLogo} />

      {/* Coluna com o texto */}
      <div className={styles.textCol}>
        {/* Linha do Badge */}
        <BadgeLine />

        {/* Título e Texto */}
        <TitleAndTextHeadline />
      </div>
    </header>
  )
}

/**
 * Linha com a logo e o badge.
 */
function BadgeLine(): JSX.Element {
  return (
    <div className={styles.badgeLine}>
      {/* Logo (visível no mobile) */}
      <LogoHeadlineCTA className={styles.mobileLogo} />
      {/* Badge */}
      <Badge text={data.slogan} />
    </div>
  )
}

/** Logo do headline do CTA. */
function LogoHeadlineCTA({ className }: { className?: string }): JSX.Element {
  return <img src={logo} alt="Logo da FutureTech" className={className} />
}

/**
 * Título e texto do headline do CTA.
 */
function TitleAndTextHeadline(): JSX.Element {
  return (
    <hgroup>
      {/* Título */}
      <h2>{data.title}</h2>

      {/* Texto mobile */}
      <p className={styles.mobileText}>{data.mobileText ? data.mobileText : data.desktopText}</p>
      {/* Texto desktop */}
      <p className={styles.desktopText}>{data.desktopText ? data.desktopText : data.mobileText}</p>
    </hgroup>
  )
}
