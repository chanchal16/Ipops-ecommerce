import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Cart from './views/Cart'
import Products from './views/products'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        {/* <Sidebar/> */}
        <Products/>
        <Cart/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
