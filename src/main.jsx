import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import { WishlistContextProvider } from './contexts/WishlistContext'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WishlistContextProvider>
        <App />
      </WishlistContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
