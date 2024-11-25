// Importação do React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* Componentes de páginas */
import Home from "./pages/Home"
import News from "./pages/News"
import Podcasts from "./pages/Podcasts"
import Resources from "./pages/Resources"
import Contact from "./pages/Contact"

/* Importação de Componentes */
import Header from "./layout/Header/Header" // cabeçalho
import Footer from "./layout/Footer/Footer" // rodapé

/**
 * Função do componente App. É o componente principal da página e exibe o conteúdo do site.
 * @returns O conteúdo JSX do site.
 */
export default function App(): JSX.Element {
  // Retorno JSX
  return (
    <>
      {/* Corpo da página */}
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <Footer />
    </>
  )
}
