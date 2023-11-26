import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import './i18n.jsx'
import { ContextProvider } from './context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ContextProvider>
  </BrowserRouter>
)
