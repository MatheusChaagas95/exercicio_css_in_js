import React, { useMemo } from 'react';
import styled from 'styled-components';

// Styled-components compactos
const Container = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;
const List = styled.div`display: flex; flex-direction: column; gap: 1rem;`;
const Card = styled.div`
  background: white; border: 1px solid #e2e8f0; border-radius: 0.5rem;
  padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); transition: box-shadow 0.2s;
  &:hover { box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
`;
const Header = styled.div`display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;`;
const Title = styled.h3`color: #2563eb; font-size:1.25rem; font-weight:600; margin:0; cursor:pointer; &:hover{text-decoration:underline;}`;
const Salary = styled.div`color: #059669; font-weight:600; font-size:1rem;`;
const Details = styled.div`display:flex; flex-wrap:wrap; gap:0.5rem; margin-bottom:1rem; color:#6b7280; font-size:0.875rem;`;
const Location = styled.span`&::after{content:" • "; margin:0 0.25rem;} &:last-child::after{content:"";}`;
const Tags = styled.div`display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1rem;`;
const Tag = styled.span`background:#f1f5f9; color:#475569; padding:0.25rem 0.75rem; border-radius:9999px; font-size:0.75rem; font-weight:500;`;
const Empty = styled.div`text-align:center; padding:3rem 1rem; color:#6b7280;`;
const EmptyTitle = styled.h3`font-size:1.25rem; margin-bottom:0.5rem; color:#374151;`;
const EmptyText = styled.p`margin:0;`;


interface Vaga { id: string|number; titulo:string; salario:string; localizacao:string; nivel:string; modalidade:string; tags:string[] }
interface Props { vagas: Vaga[]; searchTerm: string }


const Vagas: React.FC<Props> = ({ vagas, searchTerm }) => {
  const vagasToShow = useMemo(() => {
    if (!searchTerm) return vagas;
    const term = searchTerm.toLowerCase();
    return vagas.filter(v =>
      v.titulo.toLowerCase().includes(term) ||
      v.localizacao.toLowerCase().includes(term) ||
      v.nivel.toLowerCase().includes(term) ||
      v.modalidade.toLowerCase().includes(term) ||
      v.tags.some(tag => tag.toLowerCase().includes(term))
    );
  }, [vagas, searchTerm]);

  if (vagasToShow.length === 0) {
    return (
      <Container>
        <Empty>
          <EmptyTitle>Nenhuma vaga encontrada</EmptyTitle>
          <EmptyText>Tente pesquisar com outros termos ou verifique a ortografia.</EmptyText>
        </Empty>
      </Container>
    );
  }

  return (
    <Container>
      <List>
        {vagasToShow.map(v => (
          <Card key={v.id}>
            <Header>
              <Title>{v.titulo}</Title>
              <Salary>{v.salario}</Salary>
            </Header>
            <Details>
              <Location>{v.localizacao}</Location>
              <Location>{v.nivel}</Location>
              <Location>{v.modalidade}</Location>
            </Details>
            <Tags>
              {v.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </Tags>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default Vagas;
