import { call, put, takeLatest } from 'redux-saga/effects'
import * as actions from '../actions'

const callApi = (url: string, params: object = {}) => {
  return fetch(url, params)
    .then(response => response.json())
}

export default function * Sagas () {
  yield takeLatest(actions.fetchChart, fetchChart)
}

function * fetchChart () {
  yield put(actions.fetchChartRequested())

  try {
    const apiUrl = 'https://api.deezer.com/chart'
    // this proxy used to fix errors with CORS policy
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const url = proxyUrl + apiUrl

    const response = yield call(callApi, url)

    yield put(actions.fetchChartSuccess(response))
  } catch (error) {

    yield put(actions.fetchChartFailure(error))
  }
}
