import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './normalize.css';
import { GlobalStyle } from './global-styles';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
