import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import emptyCartImage from '/empty-cart.webp';
import { CartContext } from '../context/CartProvider';

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const incrementQuantity = (index) => {
    const updatedCart = cart.map((product, i) =>
      index === i ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  const decrementQuantity = (index) => {
    const updatedCart = cart.map((product, i) =>
      index === i ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Column: Product Details */}
        <div className="md:col-span-2">
          {cart.length === 0 ? (
            <div className="flex justify-center items-center">
              <div>
                <h1 className="text-3xl text-center mt-5">No items in cart</h1>
                <img src={emptyCartImage} alt="Cart empty" />
              </div>
            </div>
          ) : (
            cart.map((product, index) => (
              <div
                key={index}
                className="max-w-2xl mx-auto my-8 bg-white shadow-lg rounded-lg p-6 flex items-start mb-2"
              >
                <div className="flex space-x-10 flex-col md:flex-row justify-start items-start px-5">
                  {/* Product Image Section */}
                  <div className="w-2/6 flex relative">
                    <img
                      src={product.image}
                      className="w-full object-cover rounded-md"
                    />
                  </div>
                  {/* Product Details Section */}
                  <div className="flex-1 w-full">
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-sm text-gray-500 mt-2">
                      <span>By {product.brand}</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mt-4">
                      ₹{product.price}
                    </div>
                    <div className="inline-block space-x-4 mt-6">
                      <button
                        className="bg-red-500 text-white text-sm py-2 px-4 rounded-lg shadow-md hover:bg-red-600"
                        onClick={() => setCart(cart.filter((_, i) => index !== i))}
                      >
                        Remove
                      </button>
                      <button 
                      className="primary-button ">
                        Buy Now
                      </button>
                      <div className="inline-block ml-4">
                        <button
                          className="bg-slate-400 text-white text-sm py-1 px-3 rounded-lg shadow-md hover:bg-slate-500"
                          onClick={() => incrementQuantity(index)}
                        >
                          +
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          className="bg-slate-400 text-white text-sm py-1 px-3 rounded-lg shadow-md hover:bg-slate-500"
                          onClick={() => decrementQuantity(index)}
                          disabled={product.quantity === 0}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Column: Summary */}
        <div className="bg-white p-6 sticky top-16 h-full rounded-lg border border-slate-200">
          <h2 className="text-2xl mb-4">Total Products</h2>
          <p className="text-lg">
            Total Items: <span className="font-bold">{totalItems}</span>
          </p>
          <p className="text-lg">
            Grand Total: <span className="font-bold">₹{totalPrice}</span>
          </p>
          <button className="mt-6 w-auto bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;