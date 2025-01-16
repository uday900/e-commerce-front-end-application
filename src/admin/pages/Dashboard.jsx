import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/products');
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
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => navigate('/admin/manage-categories')}
          className="primary-button"
        >
          Manage Categories
        </button>
        <button
          onClick={() => navigate('/admin/manage-products')}
          className="primary-button"
        >
          Manage Products
        </button>
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
            <div
              key={product.id}
              className="p-4 border rounded shadow hover:shadow-md"
            >
              <h4 className="text-lg font-bold">{product.name}</h4>
              <p>{product.description}</p>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
