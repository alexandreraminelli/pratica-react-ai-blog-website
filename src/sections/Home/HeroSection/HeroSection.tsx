/* importação de componentes */
import AvatarGroup from "../../../components/Avatar/AvatarGroup/AvatarGroup"
import CounterGroup from "../../../components/Counters/CounterGroup"
import RedirectButton from "../../../components/Buttons/RedirectButton/RedirectButton"
/* componentes do Hero Section */
import RedirectCard2Group from "../../../components/Cards/RedirectCard/RedirectCard2/RedirectCard2Group.tsx"

/* módulos CSS */
import styles from "./HeroSection.module.css"

/**
 * Interface do objeto JSON com o texto de introdução
 */
interface HeroSectionContent {
  /** Texto de introdução */
  introduction: {
    /** Slogan exibido acima do título de introdução. */
    slogan: string
    /** Título de introdução. */
    title: string
    /** Parágrafo de introdução. */
    paragraph: string
  }
}

/**
 * Componente Hero Section da página inicial.
 */
export default function HeroSection(): JSX.Element {
  // JSON com o texto
  const content: HeroSectionContent = {
    introduction: {
      slogan: "Sua jornada para o amanhã começa aqui",
      title: "Explore as Fronteiras da Inteligência Artificial",
      paragraph: "Bem-vindo ao centro pulsante da inovação em IA. FutureTech AI News é sua porta de entrada para um mundo onde máquinas pensam, aprendem e moldam o futuro. Embarque conosco nessa expedição visionária ao núcleo da IA.",
    },
  }

  return (
    <section className={styles.heroSection}>
      {/* Container superior */}
      <div className={styles.topContainer}>
        {/* Coluna esquerda */}
        <div className={styles.leftCol}>
          {/* Introdução (coluna esquerda) */}
          <Introduction introContent={content.introduction} />

          {/* Contadores */}
          <CounterGroup className={styles.counterGroup} />
        </div>

        {/* Coluna direita */}
        <ResourcesAside />
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
 * Interface dos props do componente Introduction.
 */
interface IntroductionProps {
  /** Conteúdo da introdução. */
  introContent: HeroSectionContent["introduction"]
}
/**
 * Componente Introduction. Exibe a introdução da página inicial no Hero Section.
 */
function Introduction({ introContent }: IntroductionProps): JSX.Element {
  return (
    <header className={styles.introduction}>
      {/* Slogan */}
      <p className={`dark ${styles.slogan}`}>{introContent.slogan}</p>
      {/* Título e subtítulo */}
      <hgroup>
        {/* Título de introdução */}
        <h2>{introContent.title}</h2>
        {/* Parágrafo introdutório */}
        <p className={`gray1 ${styles.introductionText}`}>{introContent.paragraph}</p>
      </hgroup>
    </header>
  )
}

/**
 *
 */
/**
 * Componente ResourcesAside. Exibe um `<aside>` sobre os recursos no Hero Section.
 */
function ResourcesAside(): JSX.Element {
  return (
    <aside className={styles.resourcesAside}>
      <AvatarGroup />
      <hgroup>
        <h3>Explore mais de 1.000 recursos</h3>
        <p className="gray2">Mais de 1000 artigos sobre inovações e tendências tecnológicas</p>
      </hgroup>
      <RedirectButton text="Explorar Recursos" link="/recursos" />
    </aside>
  )
}
