/* Página Inicial */

/* importação de componentes */
/* seções */
import HeroSection from "../sections/Home/HeroSection/HeroSection"
import FeaturesSection from "../sections/Home/FeaturesSection/FeaturesSection"
import BlogsSection from "../sections/Home/BlogsSection/BlogsSection"

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
      <BlogsSection />

      {/* Seção Recursos */}

      {/* Seção Depoimentos */}
    </main>
  )
}
