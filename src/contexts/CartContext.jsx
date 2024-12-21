import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { cartReducer } from '../reducers/cartReducer';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart/1'); 
        if (response.data) {
          dispatch({ type: 'SET_CART', payload: response.data.items });
        }
      } catch (error) {
        console.error("Error fetching cart", error);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    dispatch({ type: 'ADD_TO_CART', payload: product });

    try {
      await axios.put('http://localhost:3000/cart/1', { items: updatedCart });
    } catch (error) {
      console.error("Error adding product to cart", error);
    }
  };

  const removeFromCart = async (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });

    try {
      await axios.put('http://localhost:3000/cart/1', { items: updatedCart });
    } catch (error) {
      console.error("Error removing product from cart", error);
    }
  };

  const clearCart = async () => {
    dispatch({ type: 'CLEAR_CART' });

    try {
      await axios.delete('http://localhost:3000/cart/1');
    } catch (error) {
      console.error("Error clearing cart", error);
    }
  };

  const placeOrder = async () => {
    const order = {
      id: Math.random().toString(36).substr(2, 9),
      status: 'Pending',
      items: [...cart],
    };

    try {
      await axios.post('http://localhost:3000/orders', order);
      alert('Order placed successfully!');
      clearCart();
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};

