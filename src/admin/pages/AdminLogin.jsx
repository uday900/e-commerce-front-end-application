import React from 'react';
import Navbar from '../comps/Nav';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
const navigate = useNavigate()
    const handleSubmit = (e) => {
    //   e.preventDefault();
      navigate('/admin/dashboard');  


      // Handle form submission here
    };
  return (
    <>
     
      <div className="flex h-auto mt-10 justify-center text-gray-800">
        {/* Login Form Container */}
        <div className="w-3/4 max-w-md p-8 bg-white border shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Admin Sign In</h2>

          <button className="w-full flex items-center justify-center py-2 mb-4 border rounded-md text-gray-600">
            <span className="mr-2">🌐</span> {/* Replace with Google Icon */}
            Continue With Google
          </button>

          <div className="flex items-center justify-between mb-6">
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
                placeholder="Enter your email"
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
                  placeholder="Enter your password"
                />
                <span className="absolute top-2 right-3 text-sm cursor-pointer text-gray-500">
                  show
                </span>
              </div>
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              onClick={() => {
                // Handle sign-in logic here
                handleSubmit();
              }}
            >
              Sign In
            </button>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
