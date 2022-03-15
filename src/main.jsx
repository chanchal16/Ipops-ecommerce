import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import { CartContextProvider } from './contexts/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
