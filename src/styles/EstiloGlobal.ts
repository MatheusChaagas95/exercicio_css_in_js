<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
    }

    body {
      background: #f8f9fa;
      color: #212529;
    }

    button {
      cursor: pointer;
    }

    header {
      background: #0d6efd;
      padding: 16px;
      color: #fff;
  }

`

export default EstiloGlobal
=======
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f8f9fa;
  }
`

export default GlobalStyle
>>>>>>> 323d5d6 (commit organização final do código)
