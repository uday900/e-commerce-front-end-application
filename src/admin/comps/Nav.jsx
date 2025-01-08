import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-white h-16 flex items-center px-6  border fixed w-full left-0 top-0 z-10">
      <h1 className="text-2xl font-bold text-gray-800">ShopEase Dashboard</h1>


      

      <div className="ml-auto flex items-center space-x-4">

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
      {/* <i className="fas fa-search absolute top-2 left-2 text-gray-400"></i>
        <input
          type="text"   
          placeholder="Search"
          className="border rounded-lg px-4 py-2 focus:outline-none"
        /> */}
        <button>
            Log out <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
      </div>

    </div>
  );
};

export default Navbar;
