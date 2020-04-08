import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import config from '../config';
import rootReducer from './index';
import { addAuthInterceptor } from '../api/apiAuthInjector';

export default function configureStore(initialState) {
  addAuthInterceptor(config.tmdb.apiKey);
  const middlewares = [
    thunkMiddleware,
  ]

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
}