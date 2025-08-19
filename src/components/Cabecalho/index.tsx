import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2563eb;
  color: white;
  padding: 1rem 0;
  text-align: center;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.025em;
`;

const Cabecalho = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>EBAC Jobs</HeaderTitle>
    </HeaderContainer>
  );
};

export default Cabecalho;
