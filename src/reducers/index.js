import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import schedules from './ScheduleReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  schedules,
  ajaxCallsInProgress
});

export default rootReducer;
