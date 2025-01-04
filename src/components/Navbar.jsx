import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const path = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md ">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <Link to="/" >Shop<span className="text-blue-500">Ease</span></Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-600 font-medium">
        <a href="#shop" className="hover:text-black">
          Shop
        </a>
        <a href="#men" className="hover:text-black">
          Men
        </a>
        <a href="#women" className="hover:text-black">
          Women
        </a>
        <a href="#kids" className="hover:text-black">
          Kids
        </a>
      </div>

      {/* Search, Cart, and User Actions */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative">
          <i className="fas fa-search absolute top-2 left-2 text-gray-400"></i>
          <input
            type="text"
            placeholder="Search"
            className="w-96 px-8 py-1.5 text-sm text-gray-600 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>


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
        {/* Cart Icon */}
        <button className="relative text-gray-600 hover:text-black">
          <i className="fas fa-shopping-cart text-lg"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            3
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
