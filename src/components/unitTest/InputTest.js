import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import initialState from '../../reducers/signupInitalState';
import userReducer from '../../reducers/userReducer';
import userlistReducer from '../../reducers/userlistReducer';
import * as types from '../../actions/actionTypes';
import logger from 'redux-logger';

import SignupTest from './SignupTest';
import {render} from "react-dom";
import { Provider } from 'react-redux';

const store = createStore(combineReducers({user: userReducer, userlist: userlistReducer}) , applyMiddleware(logger));

export default class InputTest extends React.Component {
    render() {
        return(
            <Provider store={store}> 
                <SignupTest/>
            </Provider> //the signupPage now is wrapped by react redux
        );
    }
}