import React from 'react'

function SampleProductsInLandingPage({products, title}) {
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
                className="w-full h-auto flex flex-col items-center text-center bg-white shadow-md rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-56 h-auto object-cover rounded-md mb-2"
                />
                <h3 className="text-sm font-medium">{item.title}</h3>
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