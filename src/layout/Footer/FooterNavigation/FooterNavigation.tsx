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
      <FooterNavLinkList list={linksList} />
    </nav>
  )
}

/**
 * A lista de links do Footer Navigation.
 * O JSX é gerado a partir dos objetos JSON presentas no Array do prop list.
 * @param list - O Array de objetos JSON de links.
 */
function FooterNavLinkList({ list }: { list: linksListInterface[] }): JSX.Element {
  /* Retorno JSX */
  return (
    <ul>
      {/* Percorrer o prop list */}
      {list.map((group) => (
        <li key={group.link}>
          {/* Link da página */}
          <LinkFooterNav
            text={group.title} // Título da página
            link={group.link} // Link da página
          />

          {/* Sub-lista com os links das seções */}
          <ul>
            {/* Percorrer o Array de JSON em sections */}
            {group.sections.map((section) => (
              <li key={section.sectionId}>
                <LinkFooterNav
                  text={section.title} // Título da seção
                  link={
                    `${group.link}#${section.sectionId}` // Link pra seção (/linkPagina#idSeção)
                  }
                />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
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
    <Link
      to={link} // endereço do link
    >
      {/* Texto do link */}
      {text}
    </Link>
  )
}
