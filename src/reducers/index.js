import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import schedules from './ScheduleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  schedules,
  profileReducer,
  ajaxCallsInProgress
});

export default rootReducer;
