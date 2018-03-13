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
                "hahahaahahahhahahah"
            ]
        };
    }

    testing() {
        return (
            <MsgFrame msg={this.state.testArray} />
        );
    }


    render() {
        return (
            <div>
                <div style={{ display: "flex" }}>

                    <div>
                        <h1> Actual Output </h1>
                        {this.testing}
                    </div>

                    <div>
                        <h1> Expected Output </h1>
                        <div className="chatFrame">
                            <p> {this.state.testArray[0]} </p>
                        </div>

                        <div className="chatFrame">
                            <p> {this.state.testArray[1]} </p>
                        </div>

                        <div className="chatFrame">
                            <p> {this.state.testArray[2]} </p>
                        </div>

                        <div className="chatFrame">
                            <p> {this.state.testArray[3]} </p>
                        </div>

                    </div>

                </div>



            </div>
        );
    }



}

export default MessageTest;


