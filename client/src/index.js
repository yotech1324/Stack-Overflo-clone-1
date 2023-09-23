import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
// import { configureStore } from '@redux/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import Reducers from './reducers';




//const store =createStore( Reducers , compose(applyMiddleware(thunk))); but this createStore is deprecated by react.
const store = configureStore({reducer : Reducers} , compose(applyMiddleware(thunk)));
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </Provider>
);
  
