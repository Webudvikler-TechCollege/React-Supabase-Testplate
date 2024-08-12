import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
import { Main } from "./Components/Main/Main"
import { RouterProvider } from "react-router-dom"
import { router } from "./Components/AppRouter/AppRouter"
import { Grid } from "./Components/Grid/Grid"

export const App = () => {
  return (
    <Grid>
      <Header area="header" />
      <Main area="main">
        <RouterProvider router={router} />
      </Main>
      <Footer area="footer" />
    </Grid>
  )
}

export default App
