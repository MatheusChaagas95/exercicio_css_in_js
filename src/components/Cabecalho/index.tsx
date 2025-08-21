import styled from 'styled-components'

const HeaderContainer = styled.header`
  text-align: center;
  margin: 0;
`

const HeaderTitle = styled.h1`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding-bottom: 16px;
`

const Cabecalho = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>EBAC Jobs</HeaderTitle>
    </HeaderContainer>
  )
}

export default Cabecalho
