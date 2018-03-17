import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const schedules = [
  {
    ID: 0,
    Date: '',
    Time: '',
    Location: '',
    Description: '',
    SchList = []
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (schedule) => {
  return schedule.firstName.toLowerCase() + '-' + schedule.lastName.toLowerCase();
};

class ScheduleApi {
  static getAllSchedules() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], schedules));
      }, delay);
    });
  }

  static saveSchedule(schedule) {
    schedule = Object.assign({}, schedule); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate server-side validation
          const minAuthorNameLength = 3;
          if (author.firstName.length < minAuthorNameLength) {
            reject(`First Name must be at least ${minAuthorNameLength} characters.`);
          }
  
          if (author.lastName.length < minAuthorNameLength) {
            reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
          }
  
          if (author.id) {
            const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
            authors.splice(existingAuthorIndex, 1, author);
          } else {
            //Just simulating creation here.
            //The server would generate ids for new authors in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            author.id = generateId(author);
            authors.push(author);
          }
  
          resolve(author);
        }, delay);
      });

}

  static deleteSchedule(scheduleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSchToDelete = schedules.findIndex(schedule => {
          return schedule.scheduleId == scheduleId;
        });
        schedules.splice(indexOfscheduleToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default scheduleApi;
