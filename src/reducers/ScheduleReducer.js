import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ScheduleReducer(state = initialState.schedules, action) {
  switch (action.type) {
    case types.LOAD_SCHEDULES_SUCCESS:
      return action.schedules;

    case types.CREATE_SCHEDULE:
      return [
        ...state,
        Object.assign({}, action.schedule)
      ];

    case types.UPDATE_SCHEDULE:
      return [
        ...state.filter(schedule => schedule.id !== action.schedule.id),
        Object.assign({}, action.schedule)
      ];

    default:
      return state;
  }
}
