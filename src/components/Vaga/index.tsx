<<<<<<< HEAD
import styles from './Vaga.module.css'

type Props = {
=======
import styled from "styled-components"

type CardVagaProps = {
>>>>>>> 323d5d6 (commit organização final do código)
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

<<<<<<< HEAD
const Vaga = (props: Props) => (
  <li className={styles.vaga}>
    <h3 className={styles.vagaTitulo}>{props.titulo}</h3>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <a className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </a>
  </li>
)

export default Vaga
=======
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  padding: 40px;
  background: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-4px);
  }
`

const Titulo = styled.h3`
  font-size: 1.3rem;
  color: #0d6efd;
  margin: 0;
`

const Info = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0;
`

const Salario = styled.p`
  font-weight: bold;
  color: #198754;
`

const Requisitos = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const Requisito = styled.li`
  background: #e9ecef;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #333;
`

export default function CardVaga({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos
}: CardVagaProps) {
  return (
    <CardContainer>
      <Titulo>{titulo}</Titulo>
      <Info>{localizacao} • {nivel} • {modalidade}</Info>
      <Salario>R$ {salarioMin} - R$ {salarioMax}</Salario>
      <Requisitos>
        {requisitos.map((req, i) => (
          <Requisito key={i}>{req}</Requisito>
        ))}
      </Requisitos>
    </CardContainer>
  )
}
>>>>>>> 323d5d6 (commit organização final do código)
