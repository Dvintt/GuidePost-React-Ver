import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import StartPage from './components/start/StartPage';
import MsgPage from './components/messenger/MessengerPage';
import HomeReg from './components/home/HomeReg';
import SelectTour from './components/tour/SelectTour';
import SelectionTour from './components/tourFinal/SelectionTour';
import Profile from './components/profile/Profile';
// import LoginPage from './components/input/LoginPage';
import Input from './components/input/Input';
import Test from './components/unitTest/Test';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={SelectionTour} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="home" component={HomeReg} />
    <Route path="start" component={StartPage} />
    <Route path="tour" component={SelectTour} />
    <Route path="messenger" component={MsgPage} /> 
    <Route path="tourFinal" component={SelectionTour} />
    <Route path="input" component={Input}/> 
    <Route path="Profile" component={Profile}/> 
    <Route path="unitTest" component={Test}/>
  </Route>
);
