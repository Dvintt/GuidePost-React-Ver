import React from 'react';
import ReactDOM from 'react-dom';
import './msgr.css';
import {connect} from 'react-redux';
import * as ScheduleAction from '../../actions/ScheduleAction';


import * as types from '../../actions/actionTypes';
import { bindActionCreators } from 'redux';

class ScheduleSection extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            userInput: [
                {
                    ID: 0,
                    Date: '',
                    Time: '',
                    Location: '',
                    Description: ''
                }
            ],

            schArray: []
        };
        this.handleMsg = this.handleMsg.bind(this);
        this.clearTextField = this.clearTextField.bind(this);
        this.submitMsg = this.submitMsg.bind(this);
        this.numberGen = this.numberGen.bind(this);
        this.removeElement = this.removeElement.bind(this);
    }

    clearTextField() {     
        this.setState({
            userInput: Object.assign({},this.state.userInput,{
                Date: '',
                Time: '',
                Location: '',
                Description: ''
            })
        });
        
       document.getElementById("inputField").reset();
    }

    numberGen(){
        const rand = 1 + Math.random() * (99);
        
        let newID = this.state.userInput;
        newID.ID = rand;

        this.setState({userInput: newID});

    }

    handleMsg(e) {       
        this.setState({
            userInput: Object.assign({},this.state.userInput,{
                [e.target.name]: e.target.value
            })
        });

    }

    submitMsg(e) {
        this.numberGen();
        const currentMsgs = this.state.schArray;
        const newMsg = currentMsgs.concat(this.state.userInput);
   
        this.setState({ schArray: newMsg });

        this.props.createSch(this.state.userInput);
          
        this.clearTextField();
        e.preventDefault();
    }


    removeElement(e){
       this.state.schArray.splice(e);
       this.setState({schArray: this.state.schArray});  
    }


/* */

    render() {
        let userInputs = this.state.schArray;
        let schList = userInputs.map(schInputs =>
            <div id={schInputs.ID} className="chatFrame" key={schInputs.ID}>
                <p>ID : {schInputs.ID}</p>
                <p>Date:{schInputs.Date}</p>
                <p>Time:{schInputs.Time}</p>
                <p>Location:{schInputs.Location}</p>
                <p>Description:{schInputs.Description}</p>
                <div style={{display:'flex'}}>
                    <button onClick={this.removeElement}>Remove</button>
                    
                </div>
            </div>
        );
        return (
            <div>

                <h3 style={{ color: "ghostwhite" }}>Schedule</h3>
                <div id="listBoard" style={{ height: "605px", overflow: "auto", backgroundColor: "white" }}>
                    {schList}    
                </div>

                <form id="inputField" onSubmit={this.submitMsg.bind(this)}>
                    <input name="Date" onChange={this.handleMsg} value={this.state.userInput.Date} type="text" placeholder="Date" style={{ width: "50%" }} />
                    <input name="Time" onChange={this.handleMsg} value={this.state.userInput.Time} type="text" placeholder="Time" style={{ width: "50%" }} />
                    <input name="Location" onChange={this.handleMsg} value={this.state.userInput.Location} type="text" placeholder="Location" style={{ width: "50%" }} />
                    <input name="Description" onChange={this.handleMsg} value={this.state.userInput.Description} type="text" placeholder="Description" style={{ width: "50%" }} />
                   <button type="button" onClick={this.submitMsg} style={{ margin: "auto" }}> Add </button>
                </form>
               
            </div>

        );
    }
}


ScheduleSection.propTypes = {
    createSch: React.PropTypes.func.isRequired
  };

export default ScheduleSection;
