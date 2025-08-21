import { useState } from 'react'
import styled from 'styled-components'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import FormVagas from './components/FormVagas'
import ListaVagas from './components/ListaVagas'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #fefefe;
`

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = (termo: string) => {
    setSearchTerm(termo)
  }

  return (
    <AppContainer>
      <Cabecalho />
      <Hero />
      <FormVagas onSearch={handleSearch} />
      <ListaVagas searchTerm={searchTerm} />
    </AppContainer>
  )
}

export default App
