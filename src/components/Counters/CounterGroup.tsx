/* importação de componentes */
import Counters from "./Counters"

/* módulos CSS */
import styles from "./CounterGroup.module.css"

/**
 * Componente de grupo de contadores.
 */
export default function CounterGroup(): JSX.Element {
  return (
    <div className={styles.counterGroup}>
      <Counters number={300} text="Recursos disponíveis" />
      <Counters number={12} thousand text="Total de downloads" />
      <Counters number={10} thousand text="Usuários ativos" />
    </div>
  )
}
