import {
  equals,
  path,
  type
} from 'ramda';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './modules';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [
  thunk,
  routerMiddleware(history)
];

if (equals(path(['env', 'NODE_ENV'], process), 'development')) {
  const devToolsExtension = window.devToolsExtension;

  if (equals(type(devToolsExtension), 'Function')) {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers
);
