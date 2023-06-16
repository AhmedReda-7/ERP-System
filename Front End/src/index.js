import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DarkModeContextProvider><App /></DarkModeContextProvider>
    
  </React.StrictMode>
);


