import * as types from '../actions/actionTypes';
import signupInitialState from './signupInitalState';

export default function userReducer(state = signupInitialState, action) {
    switch (action.type) {
      case types.UPDATE_NAME:
        return (
            Object.assign({}, state, {username: action.username})
        );
  
      case types.UPDATE_EMAIL:
        return (
            Object.assign({}, state, {email: action.email})
        );
  
      case types.UPDATE_PASSWORD:
        return (
            Object.assign({}, state, {password: action.password})
        );
      
    //   case types.UPDATE_LIST:
    //     return [
    //         ...state,
    //         Object.assign({}, action.user)
    //     ];
      default:
        return state;
    }
  }
  