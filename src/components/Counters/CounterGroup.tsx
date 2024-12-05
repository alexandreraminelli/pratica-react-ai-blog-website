/* importação de componentes */
import Counter, { CountersProps } from "./Counter.tsx"

/* módulos CSS */
import styles from "./CounterGroup.module.css"

/**
 * Interface dos props do componente `CounterGroup`.
 */
interface CounterGroupProps {
  /** Lista com o conteúdo JSON dos contadores. */
  counterList: CountersProps[]
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}

/**
 * Componente de grupo de contadores. Renderiza e organiza componentes `Counter`.
 */
export default function CounterGroup({ counterList, className }: CounterGroupProps): JSX.Element {
  return (
    <div className={`${styles.counterGroup} ${className}`}>
      {/* Iterar a lista de JSON `counterList` para gerar componentes `Counter`. */}
      {counterList.map((counter) => (
        <Counter number={counter.number} thousand={counter.thousand} text={counter.text} />
      ))}
    </div>
  )
}
