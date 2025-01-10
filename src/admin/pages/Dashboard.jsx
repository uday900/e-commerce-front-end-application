import Sidebar from '../comps/Sidebar';
import Navbar from '../comps/Nav';
import AddProduct from '../comps/AddProduct';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const handleAddProduct = () => {
    alert('Add Product button clicked!');
  };
  const [showAddProductModal, setShowAddProductModal] = useState(false);
const category = "mens"
  const navigate = useNavigate();
const [products, setProducts] = useState([]);
  // Example categories data
  const categories = [
    'Electronics',
    'Fashion',
    'Home Appliances',
    'Books',
    'Health & Beauty',
    'Sports',
    'Toys',
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/mens?category=mens`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
    {/* {showAddProductModal && <AddProduct setShowAddProductModal={setShowAddProductModal}/>} */}
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-6 ">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <button
              onClick={() => navigate('/admin/manage-products')}
              className="secondary-button"
            >
             <i class="fa-solid fa-table-cells-large"></i> Manage Products
            </button>
          </div>

          {/* Dashboard Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Card 1 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-bold">Total Sales</h3>
              <p className="text-2xl font-semibold mt-2">$12,345</p>
            </div>
            {/* Card 2 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-bold">Orders</h3>
              <p className="text-2xl font-semibold mt-2">234</p>
            </div>
            {/* Card 3 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-bold">Customers</h3>
              <p className="text-2xl font-semibold mt-2">1,245</p>
            </div>
            {/* Card 4 */}
            <div className="p-4 bg-white shadow-md rounded-lg">
              <h3 className="text-lg font-bold">Revenue</h3>
              <p className="text-2xl font-semibold mt-2">$45,678</p>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
