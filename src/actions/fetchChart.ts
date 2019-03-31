import {FETCH_CHART} from '../constants'
import {FETCH_CHART_SUCCEEDED} from '../constants'
import {FETCH_CHART_FAILED} from '../constants'

export const fetchChart = () => {
  return { type: FETCH_CHART }
}

export const fetchChartSuccess = (data: object) => {
  return { type: FETCH_CHART_SUCCEEDED, data }
}

export const fetchChartError = (error : any) => {
  return { type: FETCH_CHART_FAILED, error }
}