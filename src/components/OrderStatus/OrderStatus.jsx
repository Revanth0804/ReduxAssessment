import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders, updateOrderStatus } from '../../redux/orderSlice'; 
import styled from 'styled-components';

const OrderContainer = styled.div`
  padding: 20px;
  background-color: bisque;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const OrderHeader = styled.h2`
  text-align: center;
  font-size: 24px;
`;

const OrderItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const OrderItemText = styled.p`
  font-size: 18px;
`;

const StatusButton = styled.button`
  padding: 8px 16px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const OrderStatus = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.items);
  const loading = useSelector((state) => state.orders.loading);
  const error = useSelector((state) => state.orders.error);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleUpdateStatus = (order, newStatus) => {
    dispatch(updateOrderStatus({ id: order.id, status: newStatus }));
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <OrderContainer>
      <OrderHeader>Order Status</OrderHeader>
      {orders.map((order) => (
        <OrderItemWrapper key={order.id}>
          <OrderItemText>Order #{order.id} - Status: {order.status}</OrderItemText>
          {order.status === 'Pending' && (
            <StatusButton onClick={() => handleUpdateStatus(order, 'Shipped')}>Mark as Shipped</StatusButton>
          )}
          {order.status === 'Shipped' && (
            <StatusButton onClick={() => handleUpdateStatus(order, 'Delivered')}>Mark as Delivered</StatusButton>
          )}
        </OrderItemWrapper>
      ))}
    </OrderContainer>
  );
};

export default OrderStatus;
