import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [categories, setCategories] = useState([]); // State to hold categories
  const [showCategories, setShowCategories] = useState(false);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for handling errors

  // Fetch categories dynamically
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data); // Update categories state
        setLoading(false); // Turn off loading
      } catch (err) {
        setError(err.message); // Set error message
        setLoading(false); // Turn off loading
      }
    };

    fetchCategories();
  }, []);

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="w-64 px-5 h-screen text-black fixed border border-slate-200">
      <ul className="mt-4">
        {/* Dashboard */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>

        {/* Products Section */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <div
            className="flex justify-between items-center"
            onClick={toggleCategories}
          >
            <span>Products</span>
            <span>
              {showCategories ? (
                <i className="fa-solid fa-angle-up"></i>
              ) : (
                <i className="fa-solid fa-angle-down"></i>
              )}
            </span>
          </div>
        </li>

        {/* Categories - Nested List */}
        {showCategories && (
          <ul className="ml-4 mt-2">
            {loading && <li>Loading categories...</li>}
            {error && <li className="text-red-500">{error}</li>}
            {!loading &&
              !error &&
              categories.map((category) => (
                <li
                  key={category.id}
                  className="p-2 hover:bg-gray-300 rounded cursor-pointer"
                >
                  {category.name}
                </li>
              ))}
          </ul>
        )}

        {/* Orders */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <a href="#orders">Orders</a>
        </li>

        {/* Customers */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <a href="#customers">Customers</a>
        </li>

        {/* Reports */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <a href="#reports">Reports</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
