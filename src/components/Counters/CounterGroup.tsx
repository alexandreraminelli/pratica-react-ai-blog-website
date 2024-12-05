/* importação de componentes */
import Counters from "./Counters"

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
 * Componente de grupo de contadores. Renderiza e organiza componentes `Counters`.
 */
export default function CounterGroup({ className }: CounterGroupProps): JSX.Element {
  return (
    <div className={`${styles.counterGroup} ${className}`}>
      <Counters number={300} text="Recursos disponíveis" />
      <Counters number={12} thousand text="Total de downloads" />
      <Counters number={10} thousand text="Usuários ativos" />
    </div>
  )
}
