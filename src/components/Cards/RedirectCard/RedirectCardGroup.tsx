/* importação de componentes */
import RedirectCard from "./RedirectCard"
/* módulos CSS */
import styles from "./RedirectCardGroup.module.css"

/**
 * Componente de grupo de RedirectCards.
 */
export default function RedirectCardGroup(): JSX.Element {
  return (
    <section className={styles.cardGroup}>
      <RedirectCard title="Recursos disponíveis" text="Os visitantes podem acessar uma ampla variedade de recursos, incluindo ebooks, whitepapers e relatórios." link="/recursos" />
      <RedirectCard title="Fórum da comunidade" text="Participe do nosso fórum ativo da comunidade para discutir tendências da indústria e colaborar com colegas." link="/recursos" />
      <RedirectCard title="Eventos Tech" text="Fique atualizado sobre os próximos eventos tecnológicos, webinars e conferências para aprimorar seu conhecimento." link="/recursos" />
    </section>
  )
}
