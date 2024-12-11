/* importação de componentes */
import Card from "./Card"
/* módulos CSS*/
import styles from "./CardGroup.module.css"

/**
 * Componente que renderiza um grupo de `Card`s.
 */
export default function CardGroup(): JSX.Element {
  return (
    <div className={styles.cardGroup}>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
    </div>
  )
}
