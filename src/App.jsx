import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
import { Main } from "./Components/Main/Main"
import { RouterProvider } from "react-router-dom"
import { router } from "./Components/AppRouter/AppRouter"

export const App = () => {
  return (
    <>
      <Header />
      <Main>
        <RouterProvider router={router} />
      </Main>
      <Footer />
    </>
  )
}

export default App
