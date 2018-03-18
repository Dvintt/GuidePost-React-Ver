import React from 'react';
// import axios from 'axios'; 
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameoremail: '',
            password: '',
            user_list:[]
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value // by this way, we do not need write function for every text event
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.state.user_list = this.props.getUserlist.slice();
    
        let auser = {};
        for (let i = 0; i < this.state.user_list.length; i++) {
            auser = this.state.user_list[i];
            console.log({auser});
            if (auser.username === this.state.usernameoremail || auser.email === this.state.usernameoremail) {
                break;
            }
        }
        if ( auser.password === '') {
            this.setState({ warning: "The username or email does not exist!" });
        } else if (auser.password !== '' && auser.password !== this.state.password) {
            this.setState({ warning: "The password is incorrect" });
        }
        else if (auser.password !== '' && auser.password === this.state.password) {
            this.setState({ warning: "log in successful!" });
            this.props.setUsername(this.state.usernameoremail);
            this.props.getName(this.state.usernameoremail);
            browserHistory.push('home');
        }
        
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Log In</h1>
                <p>{this.state.warning}</p>
                < div className="form-group">
                    <label className="control-label">Username or Email</label>
                    <input
                        value = {this.state.usernameoremail}
                        onChange = {this.handleInput}
                        type = "text"
                        name = "usernameoremail"
                        className = "form-control"
                    />
                    <label className="control-label">Password</label>
                    <input
                        value = {this.state.password}
                        onChange = {this.handleInput}
                        type = "password"
                        name = "password"
                        className = "form-control"
                    />
                </div>

                <div className = "form-group">
                    <button className="btn btn-primary btn-lg">
                        Log In
                    </button>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    setUsername: React.PropTypes.func.isRequired,
    getUserlist: React.PropTypes.array.isRequired
};

export default LoginForm;
