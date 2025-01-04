
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SingleProduct from './components/SingleProduct'
import Navbar from './components/Navbar'

function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mens/product/:id' element={<SingleProduct/>} />
      </Routes>

    </>
  )
}

export default App
