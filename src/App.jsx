import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/sidebar'
import Products from './views/products'

function App() {

  return (
    <div className="App">
      <Navbar />
      <main>
        {/* <Sidebar/> */}
        <Products/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
