import { GlobalStyle } from './styles/global'
import Header from './layout/Header/Header'
import { Main } from './pages/Main/Main'
import { Footer } from './pages/Footer/Footer'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App;
