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
    Description: ''
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

  static deleteSchedule(scheduleId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfSchToDelete = schedules.findIndex(schedule => {
          return schedule.scheduleId == scheduleId;
        });
        schedules.splice(indexOfSchToDelete, 1);
        resolve();
      }, delay);
    });
  }
}


