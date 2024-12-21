import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext'; 
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import OrderStatus from './components/OrderStatus/OrderStatus';
import styled, { createGlobalStyle } from 'styled-components';

// Global Styles for Theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#333')};
    color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
    font-family: Arial, sans-serif;
  }
`;

const AppContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppContainer>
      <GlobalStyle theme={theme} />
      <h1>Order Management System</h1>
      <button onClick={toggleTheme}>Toggle Theme</button><br/><br/>
      <ProductList /><br/><br/>
      <Cart /><br/><br/>
      <OrderStatus /><br/><br/>
    </AppContainer>
  );
};

export default App;
