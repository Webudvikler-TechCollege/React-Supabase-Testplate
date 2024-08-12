import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App.jsx"
import { SupabaseProvider } from "./Providers/SupabaseProvider.jsx"
import { ThemeProvider } from "styled-components"
import { theme } from "./Styled/Theme.style.js"
import { GlobalStyle } from "./Styled/Global.style.js"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SupabaseProvider>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
        <App />
      </ThemeProvider>
    </SupabaseProvider>
  </StrictMode>
)
