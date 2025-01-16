import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './comps/Nav';
import Layout from './Layout';
import AddProduct from './comps/AddProduct';
import ManageProducts from './pages/ManageProducts';
import CategoryProducts from './comps/CategoryProducts';
import ProductDetails from './comps/ProductDetails';
import ManageCategories from './pages/ManageCategories';
import UpdateProduct from './comps/UpdateProduct';
import Orders from './pages/Orders';
import AdminLogin from './pages/AdminLogin';
// import ManageProducts from './pages/ManageProducts';

const AdminRoutes = () => {
  return (

    <>
      <Navbar />

      <Layout >
        {/* <Navbar /> */}
        <Routes>
          <Route path='/login' element={<AdminLogin/>} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/update-product/:id' element={<UpdateProduct />} />
          <Route path='/manage-products' element={<ManageProducts />} />
          <Route path='/manage-categories' element={<ManageCategories/>} />
          
          <Route path='/products' element={<CategoryProducts/>} />
          <Route path='/product-details/:id/:category' element={<ProductDetails/>} /> 

          <Route path='/orders' element={<Orders/>} />

        </Routes>
      </Layout>

    </>

  );
};

export default AdminRoutes;
