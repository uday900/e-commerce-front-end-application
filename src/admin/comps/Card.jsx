import React from 'react'
import { useNavigate } from 'react-router-dom';

function Card({product}) {
  const navigate = useNavigate();
  return (
    <div>
        <div
            key={product.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-4 hover:underline cursor-pointer">{product.name}</h3>
            <p className="text-gray-700 mt-2">Price: ${product.price}</p>
            <button
              className="primary-button mt-1"
              onClick={() => navigate(`/admin/product-details/${product.id}`)} 
            >
              View Details
            </button>
          </div>
    </div>
  )
}

export default Card