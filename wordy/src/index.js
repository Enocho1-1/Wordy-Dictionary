import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ListProvider } from './context/ListContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ListProvider >
        <App />
      </ListProvider>
    </BrowserRouter>
  </React.StrictMode>
);

