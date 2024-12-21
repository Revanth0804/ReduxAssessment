import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext'; 
import styled from 'styled-components';

const ProductContainer = styled.div`
  padding: 20px;
  margin-bottom: 20px;
`;

const ProductName = styled.h3`
  font-size: 20px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
`;

const AddToCartButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <ProductContainer>
      <ProductName>{product.name}</ProductName>
      <ProductPrice>Price: ${product.price}</ProductPrice>
      <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
    </ProductContainer>
  );
};

export default ProductItem;
