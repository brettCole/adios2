import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import loading from './reducers/loading';
import createChecklist from './reducers/checklist';
import loginStatus from './reducers/loginStatus';
import searchResults from './reducers/searchResults';
import { loadState, saveState } from './localStorage';

const reducers = combineReducers({
  createChecklist,
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
  saveState({
    checklists: store.getState().createChecklist,
    loginStatus: store.getState().loginStatus,
    searchResults: store.getState().searchResults
  });
});
export default store;