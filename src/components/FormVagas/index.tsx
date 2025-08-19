import { FormEvent, useState } from 'react'
<<<<<<< HEAD

import styles from './FormVagas.module.css'
=======
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;

  input,
  textarea {
    padding: 8px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 10px;
    background: #0d6efd;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      background: #0056b3;
    }
  }

  h2 {
    text-align: center;
    color: #343a40;
  }

  label {
    font-weight: bold;
    color: #495057;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 8px;
  }
`
>>>>>>> 323d5d6 (commit organização final do código)

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
<<<<<<< HEAD
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
=======
    aoPesquisar(termo.toLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <h2>Pesquisar Vagas</h2>
      <label htmlFor="pesquisa">Digite o termo de pesquisa:</label>
      <input
        type="text"
        id="pesquisa"
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
        placeholder="Ex: Front-end, React..."
      />
      <button type="submit">Pesquisar</button>
    </Form>
  )
}

>>>>>>> 323d5d6 (commit organização final do código)
export default FormVagas
