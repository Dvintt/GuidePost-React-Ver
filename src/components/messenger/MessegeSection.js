import React from 'react';
import ReactDOM from 'react-dom';
import './msgr.css';
import MsgFrame from './MsgFrame';

class MessegeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            msgArray: []
        };
        this.handleMsg = this.handleMsg.bind(this);
        this.clearTextField = this.clearTextField.bind(this);
        this.submitMsg = this.submitMsg.bind(this);

    }

    clearTextField() {
        this.setState({
            userInput: ''
        });
    }

    handleMsg(e) {

        this.setState({
            userInput: e.target.value
        });

    }

    submitMsg(e) {

        const currentMsgs = this.state.msgArray;
        const newMsg = currentMsgs.concat(this.state.userInput);
        this.setState({ msgArray: newMsg });


        this.clearTextField();
        e.preventDefault();
    }

    render() {
        let userInputs = this.state.msgArray;
        let msgList = userInputs.map(msgInputs =>
            <div className="chatFrame">
                {msgInputs}            
            </div>
        );

        return (
            <div>

                <h3 style={{ color: "ghostwhite" }}>Messenger</h3>
                <div id="msgBoard" style={{ height: "605px", overflow: "auto", backgroundColor: "white" }}>
                    {msgList}
                </div>

                <form id="inputField" onSubmit={this.submitMsg.bind(this)}>
                    <div style={{ display: "flex" }}>
                        <input type="text" value={this.state.userInput} onChange={this.handleMsg} placeholder="Enter text here" style={{ width: "100%" }} />
                        <button type="button" onClick={this.submitMsg} > Submit  </button>
                    </div>
                </form>
            
            </div>

        );
    }
}


export default MessegeSection;
