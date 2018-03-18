import * as types from '../actions/actionTypes';
import profileInitialState from './profileInitialState';

export default function ScheduleReducer(state = profileInitialState, action) {
  switch (action.type) {
    case types.ADD_LANGUAGE:
    return [
        ...state,
        Object.assign({},state.language,{language:action.language})
      ];

    case types.ADD_LOCATION:
      return [
        ...state,
        Object.assign({},state.location,{location:action.location})
      ];

    case types.TOGGLE_TOUR:
         return [
        ...state,
        Object.assign({},state.tour,{tour:action.tour})
      ];

    default:
      return state;
  }
}
