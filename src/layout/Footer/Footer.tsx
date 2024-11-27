/* Footer (rodapé) do site */

/* importação de componentes */
import FooterNavigation from "./FooterNavigation/FooterNavigation"

/* módulos CSS */
import styles from "./Footer.module.css"

/**
 * Componente do rodapé do site.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className={`pd-container ${styles.siteFooter}`}>
      {/* Footer navigation */}
      <FooterNavigation />

      {/* Footer legal */}
    </footer>
  )
}
