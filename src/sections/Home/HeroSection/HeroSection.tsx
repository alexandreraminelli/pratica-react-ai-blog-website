/* importação de componentes */
import AvatarGroup from "../../../components/Avatar/AvatarGroup/AvatarGroup"
import CounterGroup from "../../../components/Counters/CounterGroup"
import RedirectButton, { RedirectButtonProps } from "../../../components/Buttons/RedirectButton/RedirectButton"
import RedirectCard2Group from "../../../components/Cards/RedirectCard/RedirectCard2/RedirectCard2Group.tsx"
/* importação de ícones */
import AbstractIcon01 from "../../../components/icons/abstractIcons/AbstractIcon01.tsx"
import AbstractIcon02 from "../../../components/icons/abstractIcons/AbstractIcon02.tsx"
import AbstractIcon03 from "../../../components/icons/abstractIcons/AbstractIcon03.tsx"
/* importação de interfaces */
import { CountersProps } from "../../../components/Counters/Counter.tsx"
import { RedirectCard2Props } from "../../../components/Cards/RedirectCard/RedirectCard2/RedirectCard2.tsx"

/* módulos CSS */
import styles from "./HeroSection.module.css"

/**
 * Interface do objeto JSON com o texto de introdução
 */
interface HeroSectionContent {
  /** Conteúdo de introdução no Hero Section. */
  introduction: IntroductionProps["introContent"]
  /** Conteúdo do aside do Hero Section. */
  asideContent: ResourcesAsideProps["asideContent"]
  /** Conteúdo dos contadores do Hero Section. */
  counters: CountersProps[]
  /** Conteúdo dos cards do Hero Section. */
  cardsContent: RedirectCard2Props[]
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
    asideContent: {
      title: "Explore mais de 1.000 recursos",
      text: "Mais de 1000 artigos sobre inovações e tendências tecnológicas",
      button: { text: "Explorar Recursos", link: "/recursos" },
    },
    counters: [
      { text: "Recursos disponíveis", number: 300 },
      { text: "Total de downloads", number: 12, thousand: true },
      { text: "Usuários ativos", number: 10, thousand: true },
    ],
    cardsContent: [
      {
        Icon: AbstractIcon01,
        title: "Atualizações Recentes de Notícias",
        subtitle: "Mantenha-se atualizado",
        text: "Mais de 1.000 artigos publicados por mês",
      },
      {
        Icon: AbstractIcon02,
        title: "Colaboradores Especializados",
        subtitle: "Informações confiáveis",
        text: "50+ especialistas renomados em IA na nossa equipe",
      },
      {
        Icon: AbstractIcon03,
        title: "Leitores Globais",
        subtitle: "Impacto Mundial",
        text: "2 milhões de leitores mensais",
      },
    ],
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
          <CounterGroup counterList={content.counters} className={styles.counterGroup} />
        </div>

        {/* Coluna direita */}
        <ResourcesAside asideContent={content.asideContent} />
      </div>

      {/* Container inferior */}
      <div>
        <RedirectCard2Group cardsList={content.cardsContent} />
      </div>

      {/* Links */}
    </section>
  )
}

/**
 * Interface dos props do componente Introduction.
 */
interface IntroductionProps {
  introContent: {
    /** Slogan exibido acima do título de introdução. */
    slogan: string
    /** Título de introdução. */
    title: string
    /** Parágrafo de introdução. */
    paragraph: string
  }
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

/** Interface dos props do componente `ResourcesAside`. */
interface ResourcesAsideProps {
  asideContent: {
    /** Título do aside. */
    title: string
    /** Texto do aside. */
    text: string
    /** Botão do aside. */
    button: RedirectButtonProps
  }
}
/**
 * Componente ResourcesAside. Exibe um `<aside>` sobre os recursos no Hero Section.
 */
function ResourcesAside({ asideContent }: ResourcesAsideProps): JSX.Element {
  return (
    <aside className={styles.resourcesAside}>
      <AvatarGroup />
      <hgroup>
        {/* Título do aside */}
        <h3>{asideContent.title}</h3>
        {/* Texto do aside */}
        <p className="gray2">{asideContent.text}</p>
      </hgroup>
      {/* Botão do aside */}
      <RedirectButton {...asideContent.button} darkBackground />
    </aside>
  )
}
