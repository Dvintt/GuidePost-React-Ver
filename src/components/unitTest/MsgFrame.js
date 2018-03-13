import React from 'react';
import ReactDOM from 'react-dom';
import './msgr.css';


class MsgFrame extends React.Component {

    render() {
        let userInputs = this.props.msg;
        let msgList = userInputs.map(msgInputs =>
            <div className="chatFrame">
                {msgInputs}            
            </div>
        );
        
        return (

            <div>
                
                {msgList}
            
      
            </div>

        );
    }
}

export default MsgFrame;

