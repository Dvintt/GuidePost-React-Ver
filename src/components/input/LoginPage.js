import React, { Component } from 'react';
import './login.css';
import Login from './Login';
import Signin from './Signin';
import { Link } from 'react-router';
// import Profile from '../profile/Profile';
// import Navi from '../nav/Navi';

const w = '100%';
// user_list = [];
class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      userlist: [],
    };
    this.passUsersIn = this.passUsersIn.bind(this);
  }

  passUsersIn(userl){
    var getUsers = JSON.parse(localStorage.getItem("Users"));
    this.state.userlist = getUsers;
    console.log(getUsers);
    // console.log(userl);
    console.log(this.state.userlist);
  }

  render() {
      return (
        <div>
          {/* <Navi /> */}
          <div className='container'>
            <img src={require('./Signin.png')} alt='signin' 
                      style={{width:w, marginTop: -20, id: 'top'}}/>
            <div className='centered'>Start your trip with GuidePost</div>
          </div>


          <div className='inputFrame' style={{borderColor: '#ffc2b3'}}>
            {/* {console.log(this.passUsersIn)} */}
            <Signin passUsersIn={this.passUsersIn}/>
          </div>


          <div className='inputFrame' style={{borderColor: '#d1e0e0'}}>
            
            
            <Login />

          </div>

          {/* <Profile/> */}
        </div>
              // React.createElement(
              //   "div",
              //   { className: "inputFrame", style: { borderColor: '#d1e0e0'} },
              //   React.createElement(Input, null)
              //   )
              
      );
    }
}

export default LoginPage;