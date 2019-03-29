import { AnyAction } from 'redux';
import { FETCH_CHART } from '../constants';

const initialState: object = {};

export const chartReducer = (state : object = initialState, action : AnyAction) => {
  switch (action.type) {
    case FETCH_CHART:
      return state;
    default: {
      return state;
    }
  }
}

