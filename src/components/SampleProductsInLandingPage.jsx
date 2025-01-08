import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

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
              <Card key={item.id} product={item} />
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