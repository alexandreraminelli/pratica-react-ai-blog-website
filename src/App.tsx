// Importação do React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* Componentes de páginas */
import Home from "./pages/Home"
import News from "./pages/News"
import Podcasts from "./pages/Podcasts"
import Resources from "./pages/Resources"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

/* Importação de Componentes */
import TopBanner from "./layout/TopBanner/TopBanner" // banner superior
import Header from "./layout/Header/Header" // cabeçalho
import CallToAction from "./layout/CallToAction/CallToAction" // call to action no final
import Footer from "./layout/Footer/Footer" // rodapé

/**
 * Função do componente App. É o componente principal da página e exibe o conteúdo do site.
 * @returns O conteúdo JSX do site.
 */
export default function App(): JSX.Element {
  // Retorno JSX
  return (
    <>
      <BrowserRouter>
        {/* Top Banner */}
        <TopBanner />

        {/* Header */}
        <Header />

        {/* Rotas pras páginas */}
        <Routes>
          {/* Página Inicial */}
          <Route path="/" element={<Home />} />
          {/* Página Noticias */}
          <Route path="/noticias" element={<News />} />
          {/* Página Podcasts */}
          <Route path="/podcasts" element={<Podcasts />} />
          {/* Página Recursos */}
          <Route path="/recursos" element={<Resources />} />
          {/* Página Contato */}
          <Route path="/contato" element={<Contact />} />

          {/* Página 404 (Not Found) */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* CTA */}
        <CallToAction />

        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </>
  )
}
