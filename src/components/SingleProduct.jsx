import React, { useContext } from 'react'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom';
import { mens } from '../mock-data/mens';
import SampleProductsInLandingPage from './SampleProductsInLandingPage';
import { CartContext } from '../context/CartProvider';

function SingleProduct() {

  const { id } = useParams();
  const product = mens.filter((item) => item.id === +id)[0];
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto py-4 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt="Raven Hoodie"
              className="w-full h-96 object-cover rounded-lg sticky top-16"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-sm text-gray-500 ml-2">
                ({product.rating})
              </span>
            </div>

            <p className="text-2xl font-semibold mb-4">${product.price}</p>

            <div className="mt-6">
              <h2 className="text-sm font-semibold mb-2">Select Size</h2>

              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className="border border-gray-200 rounded-md px-3 py-1 hover:bg-slate-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-sm font-semibold mb-2">Colour Available</h2>
              <div className="flex space-x-2 mb-4 ">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="inline-block border border-slate-200 p-2 w-5 h-5 rounded-full"
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  ></span>
                ))}
              </div>
            </div>

            <button
              className="primary-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

            <button className="mx-3 secondary-button">Buy Now</button>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Product Description</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>

            {/* Ratings and Reviews Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Ratings and Reviews</h2>
              <div className="space-y-4">
                {product.reviews?.length ? (
                  product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 p-4 rounded-md shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-yellow-500">★</span>
                          <span className="text-yellow-500">★</span>
                          <span className="text-yellow-500">★</span>
                          <span className="text-yellow-500">★</span>
                          <span className="text-yellow-400">★</span>
                          <span className="ml-2 text-sm text-gray-600">
                            {review.rating}/5
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          {review.date}
                        </p>
                      </div>
                      <p className="text-gray-800 mt-2">{review.comment}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        - {review.user}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No reviews available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SampleProductsInLandingPage
        products={mens}
        title="Related Products"
      />
    </>
  );
}

export default SingleProduct;
