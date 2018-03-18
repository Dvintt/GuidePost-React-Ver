

import expect from 'expect';
import React, {PropTypes} from 'react';
import MsgFrame from './MsgFrame';

import SigninForm from '../input/SignupForm';
import LoginForm from '../input/LoginForm';

import { connect } from 'react-redux';
import * as types from '../../actions/actionTypes';
import * as inputActions from '../../actions/inputActions';
import { bindActionCreators } from 'redux';

import Style from '../../Style';

class SignupTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: '',
            loginName: ''
        };
        this.formList = this.formList.bind(this);
        this.getLoginName = this.getLoginName.bind(this);
    }
    
    formList(){
        let list = this.props.userlist;
        // console.log(list);
        this.setState({
            listItems:list.map(function(item, username){
                return <li key= {username} >
                    username: {item.username} <br/>  
                    email: {item.email}   <br/>
                    password: {item.password}   
                    </li>;
            })
        });
    }
    getLoginName(name){
        this.setState({
            loginName: name
        });
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <div>
                        <h1> Signup Test</h1>
                        {/* <MsgFrame msg={this.state.testArray}/> */}
                        <SigninForm setUsername={this.props.inputActions.updateUserList} 
                                    getUserlist={this.props.userlist} />
                        <button onClick={this.formList}> Test </button>
                    </div>
                    {/* <div className="chatFrame " style={{marginLeft: 150, marginTop: 100}}> */}
                    <div className="chatFrame " style={Style.testOutput} > 
                        <ul>{this.state.listItems}</ul>
                    </div>
                </div>
                <div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <h1> Login Test</h1>
                            <LoginForm setUsername={this.props.inputActions.updateUserList} 
                                       getUserlist={this.props.userlist}
                                       getName={this.getLoginName} />
                        </div>
                        {/* <div className="chatFrame " style={{marginLeft: 150, marginTop: 100}}>
                            <p>{this.state.loginName}</p>
                        </div>   */}
                    </div>
            </div>
            </div>
        );
    }
}
SignupTest.propTypes = {
    inputActions: PropTypes.object.isRequired,
    userlist: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return{
        user: state.user,
        userlist: state.userlist.slice()
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      inputActions: bindActionCreators(inputActions, dispatch)
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SignupTest);



