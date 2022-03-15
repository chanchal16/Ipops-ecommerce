import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cart from './views/Cart'
import Products from './views/products'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="cart" element={<Cart/>} />
          
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
