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
export default Form
