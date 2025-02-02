import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../slices/CategorySlice';
const Navbar = () => {
  const path = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(true)
  const { cartCount } = useContext(CartContext);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const { data: categories, isLoading } = useSelector((state) => state.categories)
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-white border border-b-2 sticky top-0 z-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-black">
        <Link to="/" >
          Shop<span className="text-blue-500">Ease</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-600 font-medium">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${category.name.toLowerCase()}`}
            className="hover:text-black"
          >
            {category.name}
          </Link>
        ))}

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

      <div className="flex space-x-6">
        {isLoggedIn ? <>

          <button className="">
            <i class="fa-regular fa-heart"></i>
          </button>
          <Link to = '/profile' className=""
          // text-sm font-semibold px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-200"
          >
            <i class="fa-regular fa-user"></i>
          </Link>

          <button>
            Log out <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </> : <>

          <button className={`text-sm font-semibold 
        ${path.pathname === '/login' && 'bg-black text-white px-3 py-2 rounded-lg'} text-gray-800`}
          >
            <Link to="/login">Sign In</Link>
          </button>
          <button className="text-sm font-semibold px-4 py-1 border border-gray-800 rounded-md hover:bg-gray-200">
            Sign Up
          </button>
        </>}
        <Link to='/cart'>
          <button className="relative text-gray-600 hover:text-black">
            <i className="fas fa-shopping-cart text-lg"></i>
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
              {cartCount}
            </span>
          </button>
        </Link>

      </div>


    </nav>
  );
};

export default Navbar;
