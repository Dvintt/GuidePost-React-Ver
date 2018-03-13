import expect from 'expect';
import React from 'react';

class MessageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArray: [
                "./Signin.png",
                "./SelectionGuide.jpg",
                "./shouldFail.jpg"
            ]
        };
    }

 
    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>

                    <div>
                        <h1> Picture Pass </h1>
                        <img src={require(this.state.testArray[0])} style ={{width:"50%"}} alt = "pass" />
                        <img src={require(this.state.testArray[1])} style ={{width:"50%"}} alt = "pass" />
                    </div>

                    <div>
                        <h1> Picture Fails </h1>
                        <img src={this.state.testArray[2]} alt = "FAIL" />

                    </div>

                </div>



            </div>
        );
    }



}

export default MessageTest;


