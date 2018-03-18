import React, {PropTypes} from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
// import { userSignupRequest } from '../../actions/signupActions';
import * as types from '../../actions/actionTypes';
import * as inputActions from '../../actions/inputActions';
import { bindActionCreators } from 'redux';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                  <SignupForm setUsername={this.props.inputActions.updateUserList} 
                              getUserlist={this.props.userlist}/>
                  <br/>
                  <LoginForm setUsername={this.props.inputActions.updateUsername} 
                             getUserlist={this.props.userlist}/>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    inputActions: PropTypes.object.isRequired,
    userlist: PropTypes.array.isRequired
};


const mapStateToProps = (state) => {
    return{
        user: state.user,
        userlist: state.userlist
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      inputActions: bindActionCreators(inputActions, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
