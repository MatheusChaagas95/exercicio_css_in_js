import EstiloGlobal from './styles/EstiloGlobal'
import Header from './components/Header'
import HeroSection from './components/Hero'
import Form from './components/Formulario'
import CardVaga from './components/Vaga'
import ListaVagasWrapper from './components/ListaVagas'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
