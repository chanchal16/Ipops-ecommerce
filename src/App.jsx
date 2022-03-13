import './App.css'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Products from './views/products'
import Wishlist from './views/Wishlist'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
        {/* <Sidebar/> */}
          <Route path="/" element={<Products/>} />
          <Route path="wishlist" element={<Wishlist/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
