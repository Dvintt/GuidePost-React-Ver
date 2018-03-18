import * as types from '../actions/actionTypes';
import schInitialState from './schInitialState';

export default function ScheduleReducer(state = schInitialState.sch_list, action) {
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
