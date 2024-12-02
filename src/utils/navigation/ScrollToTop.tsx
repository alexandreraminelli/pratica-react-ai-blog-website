/* importação de dependências */
import { useEffect } from "react"
import { useLocation } from "react-router-dom" // informações sobre a rota/URL atual

export default function ScrollToTop(): null {
  // Obter caminho atual da URL (pathname)
  const { pathname } = useLocation()

  useEffect(
    () => {
      // Rolar até o topo da página
      window.scrollTo(0, 0)
    },
    [pathname] // executar sempre que a rota (página) mudar
  )

  // Retorno null: não renderizar nada na UI
  return null
}
