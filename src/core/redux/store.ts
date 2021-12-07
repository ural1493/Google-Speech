import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from './sagas';
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const midlewares = [sagaMiddleware];

//TODO configure store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...midlewares)),
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
