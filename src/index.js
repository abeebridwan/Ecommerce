import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './normalize.css';
import { GlobalStyle } from './global-styles';
/* import { DataContext } from './context/data.js'; */

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
