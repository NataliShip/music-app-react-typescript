import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from './reducers'

export const configStore = () => {
  const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
  const store = createStore(
    reducers,
    composeEnhancers(
      // applyMiddleware(reduxThunk, sagaMiddleware),
    ),
  );
  // sagaMiddleware.run(indexSaga);
  return store;
};