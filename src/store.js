import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginStatus from './reducers/loginStatus';
import searchResults from './reducers/searchResults';

const reducers = combineReducers({
  loginStatus,
  searchResults
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);