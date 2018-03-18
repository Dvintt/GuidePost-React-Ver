import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'a',
            password: '',
            warning: ''
        };
        this.whenChangePassword = this.whenChangePassword.bind(this);
        this.whenChangeUsername = this.whenChangeUsername.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    whenChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }
    whenChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }

    handleClick(event) {
        var newuser = { name: "", email: "", pwd: "", location: "", language: "", tg: "" };
        var storedUsers = JSON.parse(localStorage.getItem("Users"));
        var storedPw = null, auser;
        for (var i = 0; i < storedUsers.length; i++) {
            auser = storedUsers[i];
            if (auser.name === this.state.username || auser.email === this.state.password) {
                storedPw = auser.pwd;
            }
        }
        if (storedPw === null) {
            this.setState({ warning: "The username or email does not exist!" });
        } else if (storedPw !== null && storedPw !== this.state.password) {
            this.setState({ warning: "The password is incorrect" });
        }
        else if (storedPw !== null && storedPw === this.state.password) {
            this.setState({ warning: "log in successful!" });
            localStorage.setItem("stUser", JSON.stringify(auser));
            this.history.pushState(null, 'home');
            // window.location = 'http://localhost:3000/home';
        }
    }



    render() {
        return (
            <div>
                <p>{this.state.warning}</p>
                <h2> Log In </h2>
                <span>User Name: </span><br />
                <input type="text" onChange={this.whenChangeUsername} value={this.state.username} /><br /><br />
                {/* <p>{this.state.username}</p> */}

                <span>Password: </span><br />
                <input type="text" onChange={this.whenChangePassword} value={this.state.password} /><br /><br />
                {/* <p>{this.state.password}</p> */}

                <Link to={'home'}>
                    <button type="button" onClick={this.handleClick} >Login</button>
                </Link>


            </div>
        );
    }
}

export default Login;