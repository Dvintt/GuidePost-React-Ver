import React from 'react';
import ReactDOM from 'react-dom';




class PlanContent extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            userInput: [
                {
                    ID: 0,
                    Date: '',
                    Party: '',
                    Location: '',
                    Status: ''
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
                Party: '',
                Location: '',
                Status: ''
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
          
        this.clearTextField();
        e.preventDefault();
    }


    removeElement(e){
       this.state.schArray.splice(e);
       this.setState({schArray: this.state.schArray});  
    }


    render() {
        let userInputs = this.state.schArray;
        let schList = userInputs.map(schInputs =>
            <div id={schInputs.ID} className="chatFrame" key={schInputs.ID} style={{margin:"auto"}}>
                <p>Dates:{schInputs.Date}</p>
                <p>Party Size:{schInputs.Party}</p>
                <p>Location:{schInputs.Location}</p>
                <p>Status:{schInputs.Status}</p>
                <div style={{display:'flex'}}>
                    <button onClick={this.removeElement}>Remove</button>
                </div>
            </div>
        );
        return (
            <div>

                <h3 style={{ color: "black" }}>Schedule</h3>
                <div id="listBoard" style={{ height: "605px", overflow: "auto", backgroundColor: "white" }}>
                    {schList}    
                </div>

                <form id="inputField" onSubmit={this.submitMsg.bind(this)}>
                    <input name="Date" onChange={this.handleMsg} value={this.state.userInput.Date} type="text" placeholder="Date" style={{ width: "50%" }} />
                    <input name="Party" onChange={this.handleMsg} value={this.state.userInput.Time} type="text" placeholder="Time" style={{ width: "50%" }} />
                    <input name="Location" onChange={this.handleMsg} value={this.state.userInput.Location} type="text" placeholder="Location" style={{ width: "50%" }} />
                    <input name="Status" onChange={this.handleMsg} value={this.state.userInput.Description} type="text" placeholder="Description" style={{ width: "50%" }} />
                   <button type="button" onClick={this.submitMsg} style={{ margin: "auto" }}> Add </button>
                </form>
               
            </div>

        );
    }
}


export default PlanContent;
