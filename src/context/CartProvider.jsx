import React, { createContext, useContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Cart provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Cart total count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    clearCart,
    cartCount,
    
  }
  return (
    <CartContext.Provider
      value={ value }
    >
      {children}
    </CartContext.Provider>
  );
};
