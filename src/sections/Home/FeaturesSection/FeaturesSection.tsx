/* importação de componentes */
import HeaderSection from "../../../components/HeaderSection/HeaderSection"
import FeatureSection, { FeatureSectionProps } from "./components/FeatureSection"
/* ícones SVG */
import AbstractIcon04 from "../../../components/icons/abstractIcons/AbstractIcon04"
import AbstractIcon05 from "../../../components/icons/abstractIcons/AbstractIcon05"

/**
 * Componente da seção de funcionalidades da página inicial.
 */
export default function FeaturesSection(): JSX.Element {
  // Valores dos cards
  const feature1: FeatureSectionProps = {
    feature: "Blog de Tecnologia",
    describe: "Mantenha-se informado com nossa seção de blog dedicada à tecnologia do futuro.",
    Icon: AbstractIcon04,
    cards: [
      { title: "Quantidade", text: "Mais de 1.000 artigos sobre tendências e avanços tecnológicos emergentes." },
      { title: "Variedade", text: "Os artigos abrangem áreas como IA, robótica, biotecnologia e muito mais." },
      { title: "Frequência", text: "Conteúdo novo adicionado diariamente para mantê-lo atualizado." },
      { title: "Confiável", text: "Escrito por nossa equipe de especialistas em tecnologia e profissionais do setor." },
    ],
  }
  const feature2: FeatureSectionProps = {
    feature: "Blogs de Insights de Pesquisa",
    describe: "Mergulhe fundo nos conceitos de tecnologia do futuro com nossa seção de pesquisa.",
    Icon: AbstractIcon05,
    cards: [
      { title: "Profundidade", text: "Mais de 500 artigos de pesquisa para compreensão aprofundada." },
      { title: "Gráficos", text: "Recursos visuais e infográficos para melhorar a compreensão." },
      { title: "Tendências", text: "Explore tendências emergentes em pesquisas de tecnologia do futuro." },
      { title: "Contribuidores", text: "Contribuições de pesquisadores de tecnologia e acadêmicos." },
    ],
  }

  return (
    <section id="funcionalidades">
      {/* Cabeçalho */}
      <HeaderSection badge="Desbloqueie o Poder das" title="Funcionalidades da FutureTech" />
      {/* Funcionalidades */}
      <FeatureSection content={feature1} />
      <FeatureSection content={feature2} />
    </section>
  )
}
