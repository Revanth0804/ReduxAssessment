import React from 'react';
import ProductItem from './ProductItem'; 
import styled from 'styled-components';

const ProductListContainer = styled.div`
  padding: 20px;
  background-color: bisque;
  border-radius: 8px;
  margin: 0 auto;
  max-width: 800px;
`;

const ProductListTitle = styled.h2`
  text-align: center;
  font-size: 24px;
`;

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
  ];

  return (
    <ProductListContainer>
      <ProductListTitle>Product List</ProductListTitle>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
