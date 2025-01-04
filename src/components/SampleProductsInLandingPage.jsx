import React from 'react'
import { Link } from 'react-router-dom';

function SampleProductsInLandingPage(props) {
  const {products, title} = props;
  // products = products.slice(4)
  return (
    <>
    <div className="container pl-4 py-8">
        {/* Section Title */}
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {/* Slider Container */}
        <div className="flex items-center">
          {/* Items */}
          <div className="grid grid-cols-4 gap-10">
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full h-auto flex flex-col bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-56 h-auto object-cover rounded-md mb-2"
                />
                <Link to = {`/mens/product/${item.id}`}>
                <h3 className="font-medium hover:underline">{item.name}</h3>
                </Link>
                
                <p className="text-gray-600">${item.price}</p>
              </div>
            ))}
            
          </div>
          <button>
          <i class="fa-solid fa-chevron-right mx-10"></i>
          </button>
          

        </div>
      </div>
      </>
  )
}

export default SampleProductsInLandingPage