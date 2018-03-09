import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './components/app';
import Signup from './components/signup';
import Login from './components/login';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter> 
      <div> 
        <Route exact path="/" component={App} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
