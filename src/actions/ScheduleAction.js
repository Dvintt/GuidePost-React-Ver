import * as types from './actionTypes';
//import schApi from '../api/mockSchApi';


export function loadSchedulesSuccess(schedules) {
  return { type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function createSchedule(schedule) {
  return {type: types.CREATE_SCHEDULE, schedule};
}

