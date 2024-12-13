/* módulos CSS */
import styles from "./TabList.module.css"

/** Interface dos objetos tabs do `PostsSection`. */
export interface TabContent {
  /** Nome da tab. */
  name: string
  /** Se a tab está ativa. (opcional) */
  active?: boolean
}

/** Interface dos props do componente `TabList`. */
interface TabListProps {
  /** Lista de tabs. */
  tabList: TabContent[]
}
/** Componente com lista de tabs. */
export default function TabList({ tabList }: TabListProps): JSX.Element {
  return (
    <div className={`pd-container ${styles.tabList}`}>
      {/* Iteração */}
      {tabList.map((tab, index) => (
        <Tab tab={tab} key={index} />
      ))}
    </div>
  )
}

/** Interface dos props do componente `Tab`. */
interface TabsProps {
  /** Conteúdo da tab. */
  tab: TabContent
}

/** Componente de botão de tab. */
function Tab({ tab }: TabsProps): JSX.Element {
  return (
    <button className={`${styles.tab} ${tab.active && styles.active}`}>
      {/* Texto da tab */}
      {tab.name}
    </button>
  )
}
