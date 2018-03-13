import React, {component} from 'react';

class Logout extends Component {  
    loggingOut = () => {
        var currentUser = localStorage.getItem("stUser");
        console.log(currentUser);
        localStorage.removeItem("stUser");

    }   
    render() {

        {this.loggingOut};
        return(
            <p>Logout</p>
        );
    }
}