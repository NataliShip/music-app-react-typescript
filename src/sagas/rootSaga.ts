import { put, takeEvery, delay, all } from 'redux-saga/effects'

function* helloSaga() {
  yield delay(1000);
  console.log('Hello Sagas!');
  yield put({ type: 'FETCH_CHART' });
}


export function* rootSaga() {
  yield all([
    helloSaga(),

  ])
}