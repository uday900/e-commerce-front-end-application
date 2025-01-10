import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navbar from './comps/Nav';
import Layout from './Layout';
import AddProduct from './comps/AddProduct';
import ManageProducts from './pages/ManageProducts';
import CategoryProducts from './comps/CategoryProducts';
// import ManageProducts from './pages/ManageProducts';

const AdminRoutes = () => {
  return (

    <>
      <Navbar />

      <Layout >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/manage-products' element={<ManageProducts />} />
          
          <Route path='/products' element={<CategoryProducts/>} />

        </Routes>
      </Layout>

    </>

  );
};

export default AdminRoutes;
