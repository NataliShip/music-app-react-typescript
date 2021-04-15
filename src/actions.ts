import { Data } from './types'
import { createAction } from 'redux-actions'

export const FETCH_CHART = 'FETCH_TODOS'
export const FETCH_CHART_REQUESTED = 'FETCH_TODOS_REQUESTED'
export const FETCH_CHART_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_CHART_FAILURE = 'FETCH_TODOS_FAILURE'

export const fetchChart = createAction(FETCH_CHART)
export const fetchChartRequested = createAction(FETCH_CHART_REQUESTED)
export const fetchChartSuccess = createAction(FETCH_CHART_SUCCESS)
export const fetchChartFailure = createAction(FETCH_CHART_FAILURE)

interface FetchChartAction {
  type: typeof FETCH_CHART_REQUESTED
  payload: {}
}

interface FetchChartSuccessAction {
  type: typeof FETCH_CHART_SUCCESS
  payload: Data[]
}

interface FetchChartFailureAction {
  type: typeof FETCH_CHART_FAILURE
  payload: Error
}


export type ChartActionTypes = FetchChartAction | FetchChartSuccessAction | FetchChartFailureAction
