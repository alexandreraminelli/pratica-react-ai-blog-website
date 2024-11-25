/* Header (cabeçalho) do site */

/* Importação de componentes */
import Navbar from "./components/Navbar" // importação da barra de navegação

/* Importação de estilos CSS */
import styles from "./Header.module.css"

/* Importação da logo */
import logo from "../../assets/images/logo/logo-inline.svg"

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
        <img className={`${styles.logo}`} src={logo} alt="Logo da Future Tech" />

        {/* Navbar */}
        <Navbar />
      </header>
    </>
  )
}
