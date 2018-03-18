import expect from 'expect';
import ScheduleReducer from './courseReducer';
import * as actions from '../actions/ScheduleAction';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {
       Date: '1/2/3',
       Location: 'San Diego',
       Time: '2:20',
       Description: 'Thats cool'  
      },
      {
        Date: '1/2/4',
        Location: 'Paris',
        Time: '6:20',
        Description: 'Thats cool' 
      }
    ];

    const newSch = {
        Date: '7/2/4',
        Location: 'here',
        Time: '6:24',
        Description: 'Thats cool' 
    };

    const action = actions.createSchedule(newSch);

    //act
    const newState = ScheduleReducer(initialState, action);

    //assert
    expect(newState[0]).toEqual({
        Date:'1/4/3',
        Location: 'San Fran',
        Time: '2:25',
        Description: 'Alright'  
    });
    expect(newState[1]).toEqual({
        Date:'1/2/4',
        Location: 'Paris',
        Time: '6:20',
        Description: 'Thats cool'  
    });
    expect(newState[2]).toEqual(newSch);
  });

});
