/* Header (cabeçalho) do site */

/**
 * Componente do cabeçalho do site.
 * @return O conteúdo JSX do cabeçalho.
 */
export default function Header(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Início</a>
        </li>
        <li>
          <a href="/noticias">Notícias</a>
        </li>
        <li>
          <a href="/podcasts">Podcasts</a>
        </li>
        <li>
          <a href="/recursos">Recursos</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
      </ul>
    </nav>
  )
}
