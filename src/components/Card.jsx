import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card({ product, category }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-full h-auto flex flex-col bg-white  rounded-lg relative">

      {product.image && <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto object-cover rounded-md mb-2"
      />
      }
      <button
        onClick={toggleFavorite}
        className="text-sm absolute top-5 right-5 bg-white  px-2 py-1 rounded-full text-gray-400 hover:text-red-500 focus:outline-none"
        aria-label="Add to favorites"

      >
        <i class="fa-regular fa-heart"></i>
      </button>
      <div className="flex ">
        <div >
          <Link to={`/shop/${category}/product/${product.id}`}>
            <h3 className="font-medium hover:underline">{product.name}</h3>
          </Link>
          <p className="text-gray-600">{product.brand}</p>
        </div>
        <div className="ml-auto">
        <p className="px-2 py-1 bg-slate-100 h-auto text-gray-600 font-bold rounded-lg">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
