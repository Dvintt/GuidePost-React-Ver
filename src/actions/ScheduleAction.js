import * as types from './actionTypes';
import schApi from '../api/mockSchApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadSchedulesSuccess(schedules) {
  return { type: types.LOAD_SCHEDULES_SUCCESS, schedules};
}

export function createScheduleSuccess(schedule) {
  return {type: types.CREATE_SCHEDULE, schedule};
}

export function updateScheduleSuccess(schedule) {
  return {type: types.UPDATE_SCHEDULE, schedule};
}

export function loadSchedules() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return schApi.getAllSchedules().then(schedules => {
      dispatch(loadSchedulesSuccess(schedules));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveSchedule(schedule) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return schApi.saveSchedule(schedule).then(schedule => {
      schedule.ID ? dispatch(updateScheduleSuccess(schedule)) :
        dispatch(createScheduleSuccess(schedule));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
