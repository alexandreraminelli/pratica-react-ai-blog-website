/* importação de dependências */
import { Link } from "react-router-dom"

/* módulos CSS */
import styles from "./FooterNavigation.module.css"

/**
 * Interface da lista de links do Footer Navigation.
 */
interface linksListInterface {
  /** O título da página do grupo. */
  title: string
  /** O link pra página do grupo. */
  link: string
  /** Lista de links das seções. */
  sections: {
    /** Título da seção. */
    title: string
    /** O ID da seção (sem o '#'). */
    sectionId: string
  }[]
}

/**
 * Componente da seção de navegação do rodapé.
 */
export default function FooterNavigation(): JSX.Element {
  /**
   * Lista de objetos JSON com os links do Footer Navigation.
   */
  const linksList: linksListInterface[] = [
    {
      title: "Início",
      link: "/",
      sections: [
        { title: "Novidades", sectionId: "novidades" },
        { title: "Blogs", sectionId: "blogs" },
        { title: "Recursos", sectionId: "recursos" },
        { title: "Depoimentos", sectionId: "depoimentos" },
        { title: "Entre em Contato", sectionId: "contato" },
        { title: "Newsletter", sectionId: "newsletter" },
      ],
    },
    {
      title: "Notícias",
      link: "/noticias",
      sections: [
        { title: "Notícias em Alta", sectionId: "noticias-em-alta" },
        { title: "Vídeos em Destaque", sectionId: "videos-em-destaque" },
        { title: "Tecnologia", sectionId: "tecnologia" },
        { title: "Saúde", sectionId: "saude" },
        { title: "Política", sectionId: "politica" },
        { title: "Meio Ambiente", sectionId: "meio-ambiente" },
      ],
    },
    {
      title: "Blogs",
      link: "/blog",
      sections: [
        { title: "Computação Quântica", sectionId: "computacao-quantica" },
        { title: "Ética em IA", sectionId: "etica-em-ia" },
        { title: "Exploração Espacial", sectionId: "exploracao-espacial" },
        { title: "Biotecnologia", sectionId: "biotecnologia" },
        { title: "Energias Renováveis", sectionId: "energias-renovaveis" },
        { title: "Biohacking", sectionId: "biohacking" },
      ],
    },
    {
      title: "Podcasts",
      link: "/podcasts",
      sections: [
        { title: "AI Revolution", sectionId: "ai-revolution" },
        { title: "TechTalk AI", sectionId: "techtalk-ai" },
        { title: "AI Conversations", sectionId: "ai-conversations" },
      ],
    },
    {
      title: "Recursos",
      link: "/recursos",
      sections: [
        { title: "Whitepapers", sectionId: "whitepapers" },
        { title: "Ebooks", sectionId: "ebooks" },
        { title: "Relatórios", sectionId: "relatorios" },
        { title: "Artigos de Pesquisa", sectionId: "artigos-de-pesquisa" },
      ],
    },
  ]

  /* Retorno JSX */
  return (
    <nav className={styles.FooterNav} aria-label="Navegação do rodapé">
      {/* Lista de links */}
      <ul>{/* <LinkGroup pageLink={linksList} /> */}</ul>
    </nav>
  )
}

/** Interface dos props do componente LinkFooterNav */
interface LinkFooterNavProps {
  /** Texto exibido na UI */
  text: string
  /** Link do endpoint pra página */
  link: string
}
/**
 * Componente do link do Footer Navigation
 */
function LinkFooterNav({ text, link }: LinkFooterNavProps): JSX.Element {
  return (
    <li>
      <Link
        to={link} // endereço do link
      >
        {/* Texto do link */}
        {text}
      </Link>
    </li>
  )
}

/**
 * Interface dos props do componente LinkGroup.
 */
interface LinkGroupProps {
  /** Link da página do grupo. */
  pageLink: LinkFooterNavProps
}

/**
 * Componente de grupo de links do FooterNavigation.
 */
function LinkGroup({ pageLink }: LinkGroupProps): JSX.Element {
  return (
    <li>
      {/* Link da página principal */}
      <LinkFooterNav text={pageLink.text} link={pageLink.link} />

      {/*  */}
    </li>
  )
}
