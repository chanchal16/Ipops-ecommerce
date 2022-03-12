import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { WishlistContextProvider } from './contexts/WishlistContext'

ReactDOM.render(
  <React.StrictMode>
    <WishlistContextProvider>
    <App />
    </WishlistContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
