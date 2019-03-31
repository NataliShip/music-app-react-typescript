import { all } from 'redux-saga/effects'
import { watchChartSaga } from './chartSaga'


export function* rootSaga() {
  yield all([
    watchChartSaga(),

  ])
}