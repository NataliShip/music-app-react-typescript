import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from './reducers'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();

export const configStore = () => {
  const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};