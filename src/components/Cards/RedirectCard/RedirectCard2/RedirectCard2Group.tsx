/* importação de componentes */
import RedirectCard2 from "./RedirectCard2.tsx"
/* importação de ícones */
import AbstractIcon01 from "../../../icons/abstractIcons/AbstractIcon01.tsx"
import AbstractIcon02 from "../../../icons/abstractIcons/AbstractIcon02.tsx"
import AbstractIcon03 from "../../../icons/abstractIcons/AbstractIcon03.tsx"

/* módulos CSS */
import styles from "./RedirectCard2Group.module.css"

/**
 * Componente do grupo de cards de redirecionamento
 */
export default function RedirectCard2Group(): JSX.Element {
  return (
    <div className={`pd-container ${styles.redirectCardGroup}`}>
      <RedirectCard2 Icon={AbstractIcon01} title="Atualizações Recentes de Notícias" subtitle="Mantenha-se atualizado" text="Mais de 1.000 artigos publicados por mês" />
      <RedirectCard2 Icon={AbstractIcon02} title="Colaboradores Especializados" subtitle="Informações confiáveis" text="50+ especialistas renomados em IA na nossa equipe" />
      <RedirectCard2 Icon={AbstractIcon03} title="Leitores Globais" subtitle="Impacto Mundial" text="2 milhões de leitores mensais" />
    </div>
  )
}