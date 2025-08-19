import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import EstiloGlobal from './styles/EstiloGlobal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <EstiloGlobal />
    <App />
  </React.StrictMode>
);

reportWebVitals();

