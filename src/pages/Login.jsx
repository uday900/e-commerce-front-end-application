import React from 'react';
import image from '/login-page-front-image.png'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <Navbar/>
    <div className="flex h-screen text-white">
      {/* Left Section */}
      <div className="bg-cover bg-center" 
      >
        {/* Replace with your actual image */}
        <img src={image} alt="image" 
        height={956}
        width={650}/>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center items-center  text-gray-800">
        <div className="w-3/4 max-w-md">

        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
          <button className="w-full flex items-center justify-center py-2 mb-4 border rounded-md text-gray-600">
            <span className="mr-2">🌐</span> {/* Replace with Google Icon */}
            Continue With Google
          </button>

          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-300" />
            <span className="px-4 text-sm text-gray-500">OR</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Input Fields */}
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span className="absolute top-2 right-3 text-sm cursor-pointer text-gray-500">show</span>
              </div>
            </div>
            <div className="text-right mb-4">
              <Link to='/forgot-password'  className="text-sm text-indigo-600 hover:underline">
                Forgot your password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-1/4 bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Sign In
            </button>
          </form>

          <div className=" mt-4">
            <p className="text-sm">
              Don’t have an account?{' '}
              <Link to='/sign-up' className="text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login
