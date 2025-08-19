<<<<<<< HEAD
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
=======
import EstiloGlobal from './styles/EstiloGlobal'
import Header from './components/Cabecalho'
import HeroSection from './components/Hero'
import Form from './components/FormVagas'
import CardVaga from './components/Vaga'
>>>>>>> 323d5d6 (commit organização final do código)

function App() {
  return (
    <>
<<<<<<< HEAD
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
=======
    	<EstiloGlobal />

      <Header />

      <HeroSection />

      <Form aoPesquisar={(termo) => console.log(termo)} />

      <CardVaga
        titulo="Desenvolvedor Front-end"
        localizacao="Remoto"
        nivel="Pleno"
        modalidade="CLT"
        salarioMin={5000}
        salarioMax={7000}
        requisitos={['HTML', 'CSS', 'JavaScript', 'React']}
      />
      <CardVaga
        titulo="Designer UI/UX"
        localizacao="São Paulo, SP"
        nivel="Sênior"
        modalidade="PJ"
        salarioMin={8000}
        salarioMax={12000}
        requisitos={['Figma', 'Adobe XD', 'Prototipagem']}
      />
      <CardVaga
        titulo="Analista de Dados"
        localizacao="Híbrido"
        nivel="Pleno"
        modalidade="CLT"
        salarioMin={6000}
        salarioMax={9000}
        requisitos={['SQL', 'Python', 'Análise de Dados']}
      />
      <CardVaga
        titulo="Gerente de Projetos"
        localizacao="São Paulo, SP"
        nivel="Sênior"
        modalidade="PJ"
        salarioMin={10000}
        salarioMax={15000}
        requisitos={['Gestão de Projetos', 'Scrum', 'Liderança']}
      />
      <CardVaga
        titulo="Desenvolvedor Backend"
        localizacao="Remoto"
        nivel="Pleno"
        modalidade="CLT"
        salarioMin={7000}
        salarioMax={10000}
        requisitos={['Node.js', 'Express', 'Banco de Dados']}
      />
      <CardVaga
        titulo="Especialista em Segurança da Informação"
        localizacao="Híbrido"
        nivel="Sênior"
        modalidade="PJ"
        salarioMin={12000}
        salarioMax={18000}
        requisitos={['Segurança de Redes', 'Cripto','Análise de Vulnerabilidades']}
      />
      <CardVaga
        titulo="Desenvolvedor Mobile"
        localizacao="Remoto"
        nivel="Pleno"
        modalidade="CLT"
        salarioMin={6000}
        salarioMax={9000}
        requisitos={['React Native', 'Flutter', 'Desenvolvimento de Apps']}
      />
>>>>>>> 323d5d6 (commit organização final do código)
    </>
  )
}

export default App
