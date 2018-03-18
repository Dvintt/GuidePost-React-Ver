import * as types from './actionTypes';

export function addLanguage(input) {
  return {type: types.ADD_LANGUAGE, input};
}

export function addLocation(input) {
    return {type: types.ADD_LOCATION, input};
  }

  export function toggleTour(input) {
    return {type: types.TOGGLE_TOUR, input};
  }
  
