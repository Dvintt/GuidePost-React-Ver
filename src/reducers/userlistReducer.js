import * as types from '../actions/actionTypes';
import signupInitialState from './signupInitalState';

export default function userReducer(state = signupInitialState.users_list, action) {
    switch (action.type) {
      case types.UPDATE_LIST:
        return [
            ...state.filter(user => user.username !== action.user.username),
            Object.assign({}, action.user)
        ];
      default:
        return state;
    }
  }
  