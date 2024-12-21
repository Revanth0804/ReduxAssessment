import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import { CartProvider } from './contexts/CartContext';  
import { ThemeProvider } from './contexts/ThemeContext';  
import App from './App';  
import './App.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ThemeProvider> 
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </Provider>
);