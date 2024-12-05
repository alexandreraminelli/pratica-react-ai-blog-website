/* importação de componentes */
import AvatarGroup from "../../../components/Avatar/AvatarGroup/AvatarGroup"
import CounterGroup from "../../../components/Counters/CounterGroup"
import RedirectButton from "../../../components/Buttons/RedirectButton/RedirectButton"
/* componentes do Hero Section */
import RedirectCard2Group from "../../../components/Cards/RedirectCard/RedirectCard2/RedirectCard2Group.tsx"

/* módulos CSS */
import styles from "./HeroSection.module.css"

/**
 * Componente Hero Section da página inicial.
 */
export default function HeroSection(): JSX.Element {
  return (
    <section className={styles.heroSection}>
      {/* Container superior */}
      <div>
        {/* Introdução (coluna esquerda) */}
        <Introduction />

        {/* Coluna direita */}
        <section>
          <AvatarGroup />
          <hgroup>
            <h3>Explore mais de 1.000 recursos</h3>
            <p>Mais de 1000 artigos sobre inovações e tendências tecnológicas</p>
          </hgroup>
          <RedirectButton text="Explorar Recursos" link="/recursos" />
        </section>
      </div>

      {/* Container inferior */}
      <div>
        <RedirectCard2Group />
      </div>

      {/* Links */}
    </section>
  )
}

/**
 * Componente Introduction. Exibe a introdução da página inicial no Hero Section.
 */
function Introduction(): JSX.Element {
  return (
    <div className={styles.introduction}>
      <header>
        {/* Título e subtítulo */}
        <hgroup>
          <p className={`dark ${styles.slogan}`}>Sua jornada para o amanhã começa aqui</p>
          <h2>Explore as Fronteiras da Inteligência Artificial</h2>
          <p className={`gray1 ${styles.introductionText}`}>Bem-vindo ao centro pulsante da inovação em IA. FutureTech AI News é sua porta de entrada para um mundo onde máquinas pensam, aprendem e moldam o futuro. Embarque conosco nessa expedição visionária ao núcleo da IA.</p>
        </hgroup>
      </header>
      {/* Contadores */}
      <CounterGroup />
    </div>
  )
}
