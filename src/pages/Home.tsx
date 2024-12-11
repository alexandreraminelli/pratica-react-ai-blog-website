/* Página Inicial */

/* importação de componentes */
/* seções */
import HeroSection from "../sections/Home/HeroSection/HeroSection"
import FeaturesSection from "../sections/Home/FeaturesSection/FeaturesSection"

/**
 * Componente da página inicial.
 * @returns O conteúdo da página inicial.
 */
export default function Home(): JSX.Element {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Seção Funcionalidades */}
      <FeaturesSection />

      {/* Seção Blog */}

      {/* Seção Recursos */}

      {/* Seção Depoimentos */}
    </main>
  )
}
