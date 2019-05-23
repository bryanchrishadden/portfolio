import { applyMiddleware, createStore, compose } from 'redux';
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from './reducers'

/* eslint-disable no-underscore-dangle */
// Setup inspection for ReduxDevTools extension
const enableLogs = process.env.REACT_APP_ENABLE_LOGS === "off";
const allowReduxDevTools = enableLogs
  ? false
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = allowReduxDevTools || compose;
const middlewares = [enableLogs ? false : logger, thunk].filter(Boolean);

export default createStore(reducers, {}, composeEnhancers(applyMiddleware(...middlewares)));
