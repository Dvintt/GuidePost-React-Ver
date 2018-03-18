import React from 'react';
// import axios from 'axios'; 

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            warning: '',
            user_list: []
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
        // this.setState({
        //     user_list: this.props.getUserlist.slice()
        // });
        this.state.user_list = this.props.getUserlist.slice();
        for( let i = 0; i<this.state.user_list.length; i++){
            if(this.state.user_list[i].username === this.state.username){
                this.setState({warning:"The username have been used."});
                return;
            }
            else if(this.state.user_list[i].email === this.state.email ){
                this.setState({warning:"The email have been registed."});
                return;
            }
        }
        this.props.setUsername(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Sign up</h1>
                <p>{this.state.warning}</p>
                < div className="form-group">
                    <label className="control-label">Username</label>
                    <input
                        value = {this.state.username}
                        onChange = {this.handleInput}
                        type = "text"
                        name = "username"
                        className = "form-control"
                    />
                    <label className="control-label">Email</label>
                    <input
                        value = {this.state.email}
                        onChange = {this.handleInput}
                        type = "text"
                        name = "email"
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
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    setUsername: React.PropTypes.func.isRequired,
    getUserlist: React.PropTypes.array.isRequired
};

export default SignupForm;
