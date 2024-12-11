/* importação de componentes */
import Card from "./Card"
/* módulos CSS*/
import styles from "./CardGroup.module.css"

/** Interface dos props do CardGroup */
interface CardGroupProps {
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}

/**
 * Componente que renderiza um grupo de `Card`s.
 */
export default function CardGroup({ className }: CardGroupProps): JSX.Element {
  return (
    <div className={`${styles.cardGroup} ${className && className}`}>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
      <Card title="Título" text="Lorem ipsum dolor sitmet"></Card>
    </div>
  )
}
