import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
/* Importação dos estilos */
import "./assets/styles/main.css"
/* Importação de componentes */
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
