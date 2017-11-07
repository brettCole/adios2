import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import loading from './reducers/loading';
import loginStatus from './reducers/loginStatus';
import searchResults from './reducers/searchResults';
import { loadState, saveState } from './localStorage';

const reducers = combineReducers({
  loading,
  loginStatus,
  searchResults
});

const persistedState = loadState();

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

store.subscribe(() => {
  saveState(store.getState());
});
export default store;