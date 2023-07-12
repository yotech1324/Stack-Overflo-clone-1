import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from 'redux'
import Reducers from './reducers';




//const store =createStore( Reducers , compose(applyMiddleware(thunk))); but this createStore is deprecated by react.
const store = createStore(Reducers , compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </Provider>
);
  
