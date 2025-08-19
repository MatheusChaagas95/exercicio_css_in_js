import { useState } from 'react';
import styled from 'styled-components';
import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import FormVagas from './components/FormVagas';
import Vagas from './components/Vagas';
import './App.css';

interface Vaga {
  id: number;
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salario: string;
  tags: string[];
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
`;

const vagasData: Vaga[] = [
  { id: 1, titulo: "Desenvolvedor Front-end", localizacao: "Remoto", nivel: "Pleno", modalidade: "CLT", salario: "R$ 5000 - R$ 7000", tags: ["HTML", "CSS", "JavaScript", "React"] },
  { id: 2, titulo: "Designer UI/UX", localizacao: "São Paulo, SP", nivel: "Sênior", modalidade: "PJ", salario: "R$ 8000 - R$ 12000", tags: ["Figma", "Adobe XD", "Prototipagem"] },
  { id: 3, titulo: "Analista de Dados", localizacao: "Híbrido", nivel: "Pleno", modalidade: "CLT", salario: "R$ 6000 - R$ 9000", tags: ["SQL", "Python", "Análise de Dados"] },
  { id: 4, titulo: "Gerente de Projetos", localizacao: "São Paulo, SP", nivel: "Sênior", modalidade: "PJ", salario: "R$ 10000 - R$ 15000", tags: ["Gestão de Projetos", "Scrum", "Liderança"] },
  { id: 5, titulo: "Desenvolvedor Backend", localizacao: "Remoto", nivel: "Pleno", modalidade: "CLT", salario: "R$ 7000 - R$ 10000", tags: ["Node.js", "Express", "Banco de Dados"] },
  { id: 6, titulo: "Especialista em Segurança da Informação", localizacao: "Híbrido", nivel: "Sênior", modalidade: "PJ", salario: "R$ 12000 - R$ 18000", tags: ["Segurança de Redes", "Criptografia", "Análise de Vulnerabilidades"] },
  { id: 7, titulo: "Desenvolvedor Mobile", localizacao: "Remoto", nivel: "Pleno", modalidade: "CLT", salario: "R$ 6000 - R$ 9000", tags: ["React Native", "Flutter", "Desenvolvimento de Apps"] }
];

function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (termo: string) => {
    setSearchTerm(termo);
  };

  return (
    <AppContainer>
      <Cabecalho />
      <Hero />
      <FormVagas onSearch={handleSearch} />
      <Vagas vagas={vagasData} searchTerm={searchTerm} />
    </AppContainer>
  );
}

export default App;
