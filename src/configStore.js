import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from './reducers'
import { rootSaga } from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const configStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    )
  )
  sagaMiddleware.run(rootSaga)
  return store
}
