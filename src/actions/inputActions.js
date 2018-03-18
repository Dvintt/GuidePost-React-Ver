import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function updateUsername(username) {
  return { type: types.UPDATE_NAME, username: username};
}

export function updateUserList(user) {
  return {
    type: types.UPDATE_LIST,
    user: {
        username:user.username,
        email: user.email,
        password: user.password
    }
  };
}
