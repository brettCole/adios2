import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// const store = createStore(reducer, applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ &&
  // window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  // <Provider store={store}>
    // <App store={store} />
  // </Provider>,
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
