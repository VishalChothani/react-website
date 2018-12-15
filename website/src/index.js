import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from "react-router-dom";
import reducer from './js/Common/IndexReducer';
import Route from './routes';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <BrowserRouter> 
      <Route />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
