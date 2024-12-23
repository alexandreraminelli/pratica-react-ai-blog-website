/* importação de dependências */
import { Link } from "react-router-dom"

/* importação de componentes */
import RedirectButton from "../../../components/Buttons/RedirectButton/RedirectButton" // botão de redirecionamento
import NoveltyBadge from "../../../components/Badge/NoveltyBadge" // badge de novidade

/* importação do JSON com os links do navbar */
import linksList from "../../../data/NavLinks/footerNavLinks.json"

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
    /** Se a seção é uma novidade. Se for, haverá um label ao seu lado. (opcional) */
    newBadge?: boolean
  }[]

  /** Se os links das seções devem estar estilizados como botões de redirecionamento. (opcional) */
  buttons?: boolean
}

/**
 * Componente da seção de navegação do rodapé.
 */
export default function FooterNavigation(): JSX.Element {
  /* Retorno JSX */
  return (
    <nav className={styles.FooterNav} aria-label="Navegação do rodapé">
      <FooterNavLinkList list={linksList} />
    </nav>
  )
}

/**
 * A lista de links do Footer Navigation.
 * O JSX é gerado a partir dos objetos JSON presentes no Array do prop list.
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

          {/* Sub-lista  */}
          <SectionLinkGroup group={group} />
        </li>
      ))}
    </ul>
  )
}

/**
 * Componente da sub-lista do navigation.
 * Gera a sub-lista do navigation com os links das seções de cada página do site.
 * @param group - O objeto JSON com as informações do link de uma página.
 */
function SectionLinkGroup({ group }: { group: linksListInterface }): JSX.Element {
  if (!group.buttons) {
    /* Retornar lista com links normais */
    return (
      <ul>
        {/* Percorrer o Array de JSON em sections */}
        {group.sections.map((section) => (
          <li key={section.sectionId}>
            <LinkFooterNav
              text={section.title} // Título da seção
              link={
                `${group.link}#${section.sectionId}` // Link pra seção (/linkPagina#idSeção)
              }
              newBadge={section.newBadge} // se deve ou não exibir um badge de "New"
            />
          </li>
        ))}
      </ul>
    )
  } else {
    /* Retornar lista com links estilizados como botões */
    return (
      <ul className={styles.redirectButton}>
        {/* Percorrer o Array de JSON em sections */}
        {group.sections.map((section) => (
          <li key={section.sectionId}>
            {/* Botão de redirecionamento */}
            <RedirectButton
              text={section.title} // Título da seção
              link={
                `${group.link}#${section.sectionId}` // Link pra seção (/linkPagina#idSeção)
              }
              darkBackground // background mais escuro no botão
              className={styles.redirectButton} // classe CSS de botão de redirecionamento
            />
          </li>
        ))}
      </ul>
    )
  }
}

/** Interface dos props do componente LinkFooterNav */
interface LinkFooterNavProps {
  /** Texto exibido na UI. */
  text: string
  /** Link do endpoint pra página. */
  link: string
  /** Se a seção é uma novidade. Se for, exibe um badge ao lado. (opcional) */
  newBadge?: boolean
}
/**
 * Componente do link do Footer Navigation
 */
function LinkFooterNav({ text, link, newBadge }: LinkFooterNavProps): JSX.Element {
  return (
    <Link
      to={link} // endereço do link
      className="no-underline" // classes CSS personalizadas
    >
      {/* Texto do link */}
      {text}

      {newBadge && <NoveltyBadge />}
    </Link>
  )
}
