import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthContextProvider } from './context/authContext';
import { CarritoContextProvider } from './context/carritoContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CarritoContextProvider>
        <App />
      </CarritoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
