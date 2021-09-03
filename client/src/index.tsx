import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MemeProvider } from './context/MemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MemeProvider>
        <App />
      </MemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
