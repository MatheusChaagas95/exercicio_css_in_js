import { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface FormVagasProps {
  onSearch: (termo: string) => void;
}

const Container = styled.section`
  background: #f8fafc;
  padding: 2rem 1rem;
  border-bottom: 1px solid #e2e8f0;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
`;

const Subtitle = styled.p`
  color: #6b7280;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Button = styled.button`
  background: #2563eb;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  min-width: 120px;

  &:hover { background: #1d4ed8; }
  &:active { background: #1e40af; }
`;

const FormVagas = ({ onSearch }: FormVagasProps) => {
  const [term, setTerm] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <Container>
      <Title>Pesquisar Vagas</Title>
      <Subtitle>Digite o termo de pesquisa:</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Ex: Front-end, React..."
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button type="submit">Pesquisar</Button>
      </Form>
    </Container>
  );
};

export default FormVagas;
