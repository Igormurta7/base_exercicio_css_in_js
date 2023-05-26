import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle from './styles'
import { HeroDiv } from './components/Hero/styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <HeroDiv>
        <ListaVagas />
      </HeroDiv>
    </>
  )
}

export default App
