import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const path = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow">
      {/* Brand Name */}
      <div className="text-2xl font-bold text-gray-800">ShopEase</div>

      {/* Language Selector */}
      <div className="text-sm text-gray-600">
        <select className=" text-gray-600 focus:outline-none">
          <option>English (United States)</option>
          <option>Español</option>
          <option>Français</option>
          <option>Deutsch</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className={`text-sm font-semibold 
        ${path.pathname === '/login' && 'bg-black text-white px-3 py-2 rounded-lg'} text-gray-800`}
        
        >
          <Link to="/login">Sign In</Link>
        </button>
        <button className="text-sm font-semibold px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
