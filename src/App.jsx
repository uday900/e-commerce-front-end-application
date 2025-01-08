
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SingleProduct from './components/SingleProduct'
import Navbar from './components/Navbar'
import MensCategory from './pages/MensCategory'
import Cart from './pages/Cart'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        {/* categories */}
        <Route path='/mens' element={<MensCategory />} />
        <Route path='/mens/product/:id' element={<SingleProduct/>} />

        <Route path='/cart' element={<Cart/>} />  
      </Routes>

    </>
  )
}

export default App
