<<<<<<< HEAD
import EstiloGlobal from './styles/EstiloGlobal'
import Header from './components/Header'
import HeroSection from './components/Hero'
import Form from './components/Formulario'
import CardVaga from './components/Vaga'
import ListaVagasWrapper from './components/ListaVagas'
=======
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a

function App() {
  return (
    <>
<<<<<<< HEAD
      <EstiloGlobal />
      <Header> Portal de Vagas</Header>
      <HeroSection>
        <h2>Encontre sua próxima oportunidade!</h2>
      </HeroSection>
      <Form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <textarea placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </Form>
      <ListaVagasWrapper>
        <CardVaga>
          <h3>Desenvolvedor Front-end</h3>
          <p>São Paulo - SP</p>
        </CardVaga>
        <CardVaga>
          <h3>Analista de Marketing</h3>
          <p>Rio de Janeiro - RJ</p>
        </CardVaga>
        <CardVaga>
          <h3>Engenheiro de Dados</h3>
          <p>Belo Horizonte - MG</p>
        </CardVaga>
      </ListaVagasWrapper>
=======
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
>>>>>>> 6b75ea68847c2a67da4aa2679f111c99ca9da97a
    </>
  )
}

export default App
