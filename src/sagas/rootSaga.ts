import { all, fork } from 'redux-saga/effects'
import testSaga from './chartSaga'

export function* rootSaga() {
  yield all([
    fork(testSaga),
  ])
}
