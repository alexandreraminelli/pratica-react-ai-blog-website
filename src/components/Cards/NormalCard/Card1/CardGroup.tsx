/* importação de componentes */
import Card, { CardProps } from "./Card"
/* módulos CSS*/
import styles from "./CardGroup.module.css"

/** Interface dos props do CardGroup */
interface CardGroupProps {
  /** Lista de objetos JSON com o conteúdo dos cards. */
  cardsList: CardProps[]
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}

/**
 * Componente que renderiza um grupo de `Card`s.
 */
export default function CardGroup({ cardsList, className }: CardGroupProps): JSX.Element {
  return (
    <div className={`${styles.cardGroup} ${className && className}`}>
      {/* Iteração para gerar os Cards */}
      {cardsList.map((card, index) => (
        <Card key={index} title={card.title} text={card.text}></Card>
      ))}
    </div>
  )
}
