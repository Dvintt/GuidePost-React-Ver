import expect from 'expect';
import React from 'react';
import MsgFrame from './MsgFrame';

class MessageTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testArray: [
                "Thats pretty cool",
                "But whats cooler than cool?",
                "Ice cold",
                "hahahaahahahhaha"
            ]
        };
    }

 
    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>

                    <div>
                        <h1> Actual Output </h1>
                        <MsgFrame msg={this.state.testArray}/>
                    </div>

                    <div>
                        <h1> Expected Output </h1>
                        <div className="chatFrame">
                             {this.state.testArray[0]} 
                        </div>

                        <div className="chatFrame">
                           {this.state.testArray[1]} 
                        </div>

                        <div className="chatFrame">
                            {this.state.testArray[2]} 
                        </div>

                        <div className="chatFrame">
                            {this.state.testArray[3]} 
                        </div>

                    </div>

                </div>



            </div>
        );
    }



}

export default MessageTest;