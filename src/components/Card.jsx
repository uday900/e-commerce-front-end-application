import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ product, category }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-full h-auto flex flex-col bg-white shadow-md rounded-lg p-4 relative">
      <img
        // src={product.image}
        src=""
        alt={product.name}
        className="w-56 h-auto object-cover rounded-md mb-2"
      />
      <button
        onClick={toggleFavorite}
        className="text-sm absolute top-5 right-5 bg-white px-2 py-1 rounded-full text-gray-400 hover:text-red-500 focus:outline-none"
        aria-label="Add to favorites"
      
      >
        <i class="fa-regular fa-heart"></i>
      </button>
      <Link to={`/shop/${category}/product/${product.id}`}>
        <h3 className="font-medium hover:underline">{product.name}</h3>
      </Link>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
}

export default Card;
