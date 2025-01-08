
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const Sidebar = () => {
  const [showCategories, setShowCategories] = useState(false);

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

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="w-64 h-screen text-black fixed border px-2 border-slate-200">
      <div className="p-4 text-2xl font-semibold">Dashboard</div>
      <ul className="mt-4">
        {/* Dashboard */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <a href="#dashboard">Dashboard</a>
        </li>

        {/* Products Section */}
        <li className="p-2 hover:bg-gray-300 cursor-pointer">
          <div
            className="flex justify-between items-center"
            onClick={toggleCategories}
          >
            <span>Products</span>
            <span>{showCategories ? <i class="fa-solid fa-angle-up"></i>: <i class="fa-solid fa-angle-down"></i>} </span>
          </div>
        </li>

        {/* Categories - Nested List */}
        {showCategories && (
          <ul className="ml-4 mt-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-300 rounded cursor-pointer"
              >
                {category}
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
