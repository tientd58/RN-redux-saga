import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { persistState } from 'redux-devtools';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  persistState(
    window.location.href.match(/[?&]debug_session=([^&#]+)\b/)
  )
);

export default (initialState = {}) => {
  const store = createStore(
    reducers,
    fromJS(initialState),
    enhancers
  );

  sagaMiddleware.run(rootSaga);

  return store;
};