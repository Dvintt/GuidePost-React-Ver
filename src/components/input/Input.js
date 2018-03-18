import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import initialState from '../../reducers/signupInitalState';
import userReducer from '../../reducers/userReducer';
import userlistReducer from '../../reducers/userlistReducer';
import * as types from '../../actions/actionTypes';
import logger from 'redux-logger';

import SignupPage from './SignupPage';
import {render} from "react-dom";
import { Provider } from 'react-redux';

//the second param is the store's state
const store = createStore(combineReducers({user: userReducer, userlist: userlistReducer}) , applyMiddleware(logger));


store.dispatch({    //defaultly connect to reducer
    type: types.UPDATE_EMAIL,
    email: "gina@ucsd.edu"    //define the action.user for changing state
});
store.dispatch({    //defaultly connect to reducer
    type: types.UPDATE_PASSWORD,
    password: "L734200843"    //define the action.user for changing state
});
// store.dispatch({
//     type: types.UPDATE_LIST,
//     user: {
//         username:"a",
//         email: "a",
//         password: "a"
//     }
// });

// store.dispatch({
//     type: types.UPDATE_LIST,
//     user: {
//         username:"b",
//         email: "b",
//         password: "b"
//     }
// });

export default class Input extends React.Component {
    render() {
        return(
            <Provider store={store}> 
                <SignupPage/>
            </Provider> //the signupPage now is wrapped by react redux
        );
    }
}