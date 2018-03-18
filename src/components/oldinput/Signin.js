import React, {Component} from 'react';

class Signin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            user_list:[],
            warning:''
        }

        console.log(this.props);

        this.onSetResult = this.onSetResult.bind(this);
        this.whenChangeEmail = this.whenChangeEmail.bind(this);
        this.whenChangePassword = this.whenChangePassword.bind(this);
        this.whenChangeUsername = this.whenChangeUsername.bind(this);
    }
    
    whenChangeUsername (event) {
        this.setState({
            username: event.target.value
        })
    }
    whenChangePassword (event)  {
        this.setState({
            password: event.target.value
        })
    } 
    whenChangeEmail (event) {
        this.setState({
            email: event.target.value
        })
    }

    // onSearch = (event) => {
    //     event.preventDefault();

    //     const { value } = this.input;

    //     if(value === ''){
    //         return;
    //     }
        
    //     const cachedName = localStorage.getItem("Users");
    //     if(cachedName) {
    //         this.setState({username: JSON.parse(cachedName) });
    //         return;
    //     }
    // }

    onSetResult(event){
        var newuser = {name:"", email:"", pwd:"", location:"", language:"", tg:"" };
        // var newuser = new Object();
        
        newuser.name = this.state.username;
        newuser.email = this.state.email;
        newuser.pwd = this.state.password;

        for( var i = 0; i<this.state.user_list.length; i++){
            if(this.state.user_list[i].name === newuser.name){
                this.setState({warning:"The username have been used."});
                return;
            }
            else if(this.state.user_list[i].email === newuser.email ){
                this.setState({warning:"The email have been registed."});
                return;
            }
        }

        this.state.user_list.push(newuser);

        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("Users", JSON.stringify(this.state.user_list));
            // this.setState({username: result.username});
            window.scrollTo(0,document.body.scrollHeight);
            this.setState({warning: "Ready to login"});
            var getU = JSON.parse(localStorage.getItem("Users"));
            console.log(getU);
        }

        // var List = this.state.user_list;
        // console.log(List);
        // console.log(this.props);
        // console.log(this.props.test);
        // console.log(this.props.passUsersIn);
        this.props.setUser(this.state.user_list);
    }
    
    render() {
        return(
            <div>
                {/* <form> */}
                <p>{this.state.warning}</p> 
                <h2> Sign Up </h2>
                <span>User Name: </span><br/>
                <input type="text" onChange = {this.whenChangeUsername} /><br/><br/>
                {/* <p>{this.state.username}</p> */}
                {/* <button type="button" onClick={this.onSetResult}>Sign In</button> */}
                {/* </form> */}
                
                <span>Email: </span><br/>
                <input type="text" onChange = {this.whenChangeEmail} value={this.state.email} /><br/><br/>
                {/* <p>{this.state.email}</p> */}

                <span>Password: </span><br/>
                <input type="text" onChange = {this.whenChangePassword} value={this.state.password} /><br/><br/>
                {/* <p>{this.state.password}</p> */}

                <button type="button" onClick={this.onSetResult}>Sign Up</button>
            </div>
        );
    }
}

export default Signin;