import { put, takeEvery, all, call } from 'redux-saga/effects'
import {FETCH_CHART, FETCH_CHART_FAILED, FETCH_CHART_SUCCEEDED} from "../constants";

function* chartSaga() {
  yield put({type: FETCH_CHART})
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://api.deezer.com/chart';
    const data = yield call(() => fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        console.log(data);
        return data;
      }))
    yield put({type: FETCH_CHART_SUCCEEDED, data})
  } catch (error) {
    yield put({type: FETCH_CHART_FAILED, error})
  }
}

export function* watchChartSaga() {
  yield takeEvery('FETCH_CHART', chartSaga)
}


export function* rootSaga() {
  yield all([
    watchChartSaga(),

  ])
}