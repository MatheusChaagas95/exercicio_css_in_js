<<<<<<< HEAD
import styles from './Cabecalho.module.css'

const Cabecalho = () => (
  <header className={styles.cabecalho}>
    <h1>EBAC Jobs</h1>
  </header>
=======
import styled from "styled-components"

const Header = styled.header`
  background: #0d6efd;
  padding: 16px;
  color: #fff;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0; /* remove o espaçamento padrão do h1 */
  }
`

const Cabecalho = () => (
  <Header>
    <h1>EBAC Jobs</h1>
  </Header>
>>>>>>> 323d5d6 (commit organização final do código)
)

export default Cabecalho
