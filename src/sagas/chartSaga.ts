import {FETCH_CHART, FETCH_CHART_FAILED, FETCH_CHART_SUCCEEDED} from "../constants";
import { put, takeEvery, call } from 'redux-saga/effects'

function* chartSaga() {
  yield put({type: FETCH_CHART})
  try {
    // this proxy used to fix errors with CORS policy
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