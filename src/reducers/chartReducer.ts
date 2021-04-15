import {ChartState} from '../types'
import { ChartActionTypes, FETCH_CHART_REQUESTED, FETCH_CHART_SUCCESS, FETCH_CHART_FAILURE } from '../actions'

const initialState: ChartState = {
  data: {
    tracks: {
      data: []
    }
  },
  error: null,
  isLoaded: false
}

export const chartReducer = (state = initialState, action : ChartActionTypes) => {
  switch (action.type) {
    case FETCH_CHART_REQUESTED:
      return state
    case FETCH_CHART_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoaded: true
      }
    case FETCH_CHART_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoaded: false
      }
    default: {
      return state
    }
  }
}
