import Sidebar from '../comps/Sidebar';
import Navbar from '../comps/Nav';

const Dashboard = () => {
  const handleAddProduct = () => {
    alert('Add Product button clicked!');
  };

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

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <Navbar />
        <div className="p-6 mt-16">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <button
              onClick={handleAddProduct}
              className="secondary-button"
            >
              + Add Product
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
  );
};

export default Dashboard;
