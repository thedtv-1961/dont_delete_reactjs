import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; // 1. import createStore from redux.
import {Provider} from 'react-redux'; // 3.1 import Provider
import allReducers from './reducers';

const store = createStore(allReducers); // 2.3 create store 

ReactDOM.render(
  <React.StrictMode>
    {/* 3.2 Add <Provider> tag cover <App> component */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
