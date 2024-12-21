import React from 'react';
import styled from 'styled-components';

const CartItemContainer = styled.div`
  padding: 15px;
  margin-bottom: 10px;
`;

const CartItemName = styled.h4`
  font-size: 20px;
`;

const CartItemPrice = styled.p`
  font-size: 16px;
`;

const CartItem = ({ item }) => {
  return (
    <CartItemContainer>
      <CartItemName>{item.name}</CartItemName>
      <CartItemPrice>Price: ${item.price}</CartItemPrice>
    </CartItemContainer>
  );
};

export default CartItem;
