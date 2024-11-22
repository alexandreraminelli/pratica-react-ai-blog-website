/* Header (cabeçalho) do site */

/* Importação de componentes */
import Navbar from "./components/Navbar" // importação da barra de navegação

/* Importação de estilos CSS */
import styles from "./Header.module.css"

/**
 * Componente do cabeçalho do site.
 * @return O conteúdo JSX do cabeçalho.
 */
export default function Header(): JSX.Element {
  return (
    <>
      {/* Top Banner */}

      {/* Header Principal */}
      <header className={`pd-container ${styles.siteHeader}`}>
        {/* Logo do site */}

        {/* Navbar */}
        <Navbar />
      </header>
    </>
  )
}
