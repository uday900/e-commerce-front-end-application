import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import SingleProduct from './components/SingleProduct'
import Navbar from './components/Navbar'
import MensCategory from './pages/MensCategory'
import Cart from './pages/Cart'
import ScrollToTop from './components/ScrollToTop'
import Dashboard from './admin/pages/Dashboard'
import AddProduct from './admin/comps/AddProduct'
import AdminApp from './admin/AdminRoutes'
import AdminRoutes from './admin/AdminRoutes'
import TestApp from './test/App'
import CategorySection from './pages/CategorySection'
import Payment from './pages/Payment'
import Signup from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import UserProfile from './pages/UserProfile'

function App() {

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />

        <Route path='/profile' element={<UserProfile />} />

        <Route path='/woman' element={<MensCategory />} />
        <Route path='/mens/product/:id' element={<SingleProduct />} />

        <Route path='/shop/:category' element={<CategorySection />} />
        <Route path='/shop/:category/product/:id' element={<SingleProduct />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/payment' element={<Payment />} />



        <Route path='/admin/*' element={<AdminRoutes />} />
      </Routes>


    </>
  )
}

export default App
