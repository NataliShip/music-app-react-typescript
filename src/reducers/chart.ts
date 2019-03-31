import { AnyAction } from 'redux';
import {FETCH_CHART, FETCH_CHART_FAILED, FETCH_CHART_SUCCEEDED} from '../constants';

const initialState = {};

export const chartReducer = (state : object = initialState, action : AnyAction) => {
  switch (action.type) {
    case FETCH_CHART:
      return state;
    case FETCH_CHART_SUCCEEDED:
      return {
        ...state,
        chart: action.data
      }
    case FETCH_CHART_FAILED:
      return {
        ...state,
        error: action.error
      }
    default: {
      return state;
    }
  }
}

