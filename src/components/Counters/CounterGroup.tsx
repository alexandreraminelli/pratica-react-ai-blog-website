/* importação de componentes */
import Counter from "./Counter.tsx"

/* módulos CSS */
import styles from "./CounterGroup.module.css"

/**
 * Interface dos props do componente `CounterGroup`.
 */
interface CounterGroupProps {
  /** Classes CSS personalizadas. (opcional) */
  className?: string
}

/**
 * Componente de grupo de contadores. Renderiza e organiza componentes `Counter`.
 */
export default function CounterGroup({ className }: CounterGroupProps): JSX.Element {
  return (
    <div className={`${styles.counterGroup} ${className}`}>
      <Counter number={300} text="Recursos disponíveis" />
      <Counter number={12} thousand text="Total de downloads" />
      <Counter number={10} thousand text="Usuários ativos" />
    </div>
  )
}
