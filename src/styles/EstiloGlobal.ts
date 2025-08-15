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
