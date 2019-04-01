import {FETCH_CHART, FETCH_CHART_SUCCEEDED, FETCH_CHART_FAILED} from '../constants'

export const index = () => {
  return { type: FETCH_CHART }
}

export const fetchChartSuccess = (data: object) => {
  return { type: FETCH_CHART_SUCCEEDED, data }
}

export const fetchChartError = (error : any) => {
  return { type: FETCH_CHART_FAILED, error }
}