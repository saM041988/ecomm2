import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductsProvider} from './context/products_context';
import {FilterProvider} from './context/filter_context';
import {CartProvider} from './context/cart_context';
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react';
// dev-hr79jjip.au.auth0.com -domain
//JTgUYxZ5WYAfqy5kmmQZZHAvvtsoEZm5 - client id

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-hr79jjip.au.auth0.com"
    clientId="JTgUYxZ5WYAfqy5kmmQZZHAvvtsoEZm5"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
    
    </Auth0Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
