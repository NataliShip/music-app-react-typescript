import { combineReducers } from 'redux'
import { chartReducer } from './chartReducer'

export const reducers = combineReducers({
  chartReducer: chartReducer
})
