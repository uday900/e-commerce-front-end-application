import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../comps/Card';

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        setProducts(response.data);
        console.log('Products from back-end:', response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-500">Welcome Back</h2>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate('/admin/manage-categories')}
          className="primary-button"
        >
          Manage Categories
        </button>
        {/* <button
          onClick={() => navigate('/admin/manage-products')}
          className="primary-button"
        >
          Manage Products
        </button> */}
        <button
          onClick={() => navigate('/admin/add-product')}
          className="primary-button"
        >
          Add Product
        </button>
      </div>

      {/* Products List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">All Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />

          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
