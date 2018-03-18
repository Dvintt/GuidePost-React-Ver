import expect from 'expect';
import profileReducer from './profileReducer';
import * as actions from '../actions/profileAction';

describe('Course Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = [
      {
          location: 'A',
          language: 'bd',
          tour: true
      },
      {
      location: 'B',
      language: 'ad',
      tour: false
    }
    ];

    
    const newState = [{ 
      location: '',
      language: '',
      tour: false  
    }]

    const action = newState.addLanguage('A');
    action.addLocation('ad');
    action.toggleTour(true);

  
    //assert
    expect(newState[0].location).toEqual(action.location);
    expect(newState[1].language).toEqual(action.language);
    expect(newState[0].tour).toEqual(action.tour);
  });

});
