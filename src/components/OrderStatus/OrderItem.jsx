import React from 'react';
import styled from 'styled-components';

const OrderItemContainer = styled.div`
  padding: 15px;
  margin-bottom: 10px;
`;

const OrderItemHeader = styled.h4`
  font-size: 20px;
`;

const OrderItemStatus = styled.p`
  font-size: 16px;
`;

const OrderItem = ({ order }) => {
  return (
    <OrderItemContainer>
      <OrderItemHeader>Order #{order.id}</OrderItemHeader>
      <OrderItemStatus>Status: {order.status}</OrderItemStatus>
    </OrderItemContainer>
  );
};

export default OrderItem;
