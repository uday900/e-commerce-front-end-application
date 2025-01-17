import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('details'); // Manage active section

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Profile
        <span className='font-normal text-sm mx-4'>
        <i class="fa-solid fa-pencil"></i>
        </span>
      </h2>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 border-b pb-2 mb-6">
        <button
          onClick={() => handleTabChange('details')}
          className={`pb-2 text-gray-700 ${
            activeTab === 'details' ? 'border-b-2 border-indigo-500' : ''
          }`}
        >
          My Details
        </button>
        <button
          onClick={() => handleTabChange('orders')}
          className={`pb-2 text-gray-700 ${
            activeTab === 'orders' ? 'border-b-2 border-indigo-500' : ''
          }`}
        >
          My Orders
        </button>
        <button
          onClick={() => handleTabChange('payment')}
          className={`pb-2 text-gray-700 ${
            activeTab === 'payment' ? 'border-b-2 border-indigo-500' : ''
          }`}
        >
          Payment Methods
        </button>
      </div>

      {/* Content Section */}
      <div>
        {activeTab === 'details' && (
          <div>
            <h3 className="text-xl font-medium mb-4">Personal Information</h3>
            <p className="mb-2">
              <strong>Name:</strong> John Doe
            </p>
            <p className="mb-2">
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Address:</strong> 123, Main Street, City, Country
            </p>
            <button className="secondary-button mt-2">
              Edit Profile
            </button>
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <h3 className="text-xl font-medium mb-4">My Orders</h3>
            <ul className="space-y-4">
              <li className="border p-4 rounded-md shadow-sm">
                <p>
                  <strong>Order ID:</strong> 12345
                </p>
                <p>
                  <strong>Date:</strong> Jan 1, 2025
                </p>
                <p>
                  <strong>Status:</strong> Delivered
                </p>
                <button className="mt-2 px-4 py-2 bg-gray-200 rounded-md">
                  View Details
                </button>
              </li>
              <li className="border p-4 rounded-md shadow-sm">
                <p>
                  <strong>Order ID:</strong> 67890
                </p>
                <p>
                  <strong>Date:</strong> Feb 10, 2025
                </p>
                <p>
                  <strong>Status:</strong> Pending
                </p>
                <button className="mt-2 px-4 py-2 bg-gray-200 rounded-md">
                  View Details
                </button>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'payment' && (
          <div>
            <h3 className="text-xl font-medium mb-4">Payment Methods</h3>
            <ul className="space-y-4">
              <li className="border p-4 rounded-md shadow-sm">
                <p>
                  <strong>Card:</strong> **** **** **** 1234
                </p>
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md">
                  Remove
                </button>
              </li>
              <li className="border p-4 rounded-md shadow-sm">
                <p>
                  <strong>PayPal:</strong> johndoe@example.com
                </p>
                <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md">
                  Remove
                </button>
              </li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md">
              Add New Payment Method
            </button>
          </div>
        )}
      </div>

      {/* Logout Button */}
      <div className="mt-10 text-right">
        <button className="px-6 py-2 bg-red-500 text-white rounded-md">
          Logout
        </button>
      </div>
    </div>
    </>
  );
};

export default UserProfile;
