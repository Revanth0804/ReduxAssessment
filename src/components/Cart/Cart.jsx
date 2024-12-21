import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'; 
import styled from 'styled-components';

const CartContainer = styled.div`
  padding: 20px;
  background-color: bisque;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const CartTitle = styled.h2`
  text-align: center;
  font-size: 24px;
`;

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const CartItemText = styled.p`
  font-size: 18px;
`;

const CartButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right:6px;

  &:hover {
    background-color: #0056b3;
  }

`;

const Cart = () => {
  const { cart, removeFromCart, clearCart, placeOrder } = useContext(CartContext); 

  const handlePlaceOrder = () => {
    const order = placeOrder(); 
    console.log('Order Details:', order);
  };

  if (!cart || cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      {cart.map((item) => (
        <CartItemWrapper key={item.id}>
          <CartItemText>{item.name} - ${item.price}</CartItemText>
          <CartButton onClick={() => removeFromCart(item)}>Remove</CartButton>
        </CartItemWrapper>
      ))}
      <div style={{ textAlign: 'center' }}>
        <CartButton onClick={handlePlaceOrder}>Place Order</CartButton>
        <CartButton onClick={clearCart}>Clear Cart</CartButton>
      </div>
    </CartContainer>
  );
};

export default Cart;
