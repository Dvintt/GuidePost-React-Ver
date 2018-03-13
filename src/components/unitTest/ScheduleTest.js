import expect from 'expect';
import React from 'react';
import MsgFrame from './MsgFrame';

class ScheduleTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: [
                {
                    ID: 1,
                    Date: '6/7/8',
                    Time: '5:43',
                    Location: 'My House',
                    Description: 'Its a pretty cool place'
                },

                {
                    ID: 2,
                    Date: '1/3/18',
                    Time: '4:51',
                    Location: 'Your House',
                    Description: 'Its a pretty ok place'
                },

                {
                    ID: 3,
                    Date: '8/12/41',
                    Time: '6:16',
                    Location: 'Over there',
                    Description: 'Looks neat!'
                }
            ]

        };

    }


    render() {
        let userInputs = this.state.userInput;
        let schList = userInputs.map(schInputs =>
            <div  className="chatFrame" key={schInputs.ID}>
                <p>ID : {schInputs.ID}</p>
                <p>Date:{schInputs.Date}</p>
                <p>Time:{schInputs.Time}</p>
                <p>Location:{schInputs.Location}</p>
                <p>Description:{schInputs.Description}</p>
                <div style={{ display: 'flex' }}>
                </div>
            </div>
        );
        return (
            <div>
                <div style={{ display: "flex" }}>

                    <div>
                        <h1> Actual Output </h1>
                        {schList}
                    </div>

                    <div>
                        <h1> Expected Output </h1>
                        <div className="chatFrame">
                            <p>ID : {userInputs[0].ID}</p>
                            <p>Date:{userInputs[0].Date}</p>
                            <p>Time:{userInputs[0].Time}</p>
                            <p>Location:{userInputs[0].Location}</p>
                            <p>Description:{userInputs[0].Description}</p>                        
                        </div>

                         <div className="chatFrame">
                            <p>ID : {userInputs[1].ID}</p>
                            <p>Date:{userInputs[1].Date}</p>
                            <p>Time:{userInputs[1].Time}</p>
                            <p>Location:{userInputs[1].Location}</p>
                            <p>Description:{userInputs[1].Description}</p>                        
                        </div>

                         <div className="chatFrame">
                            <p>ID : {userInputs[2].ID}</p>
                            <p>Date:{userInputs[2].Date}</p>
                            <p>Time:{userInputs[2].Time}</p>
                            <p>Location:{userInputs[2].Location}</p>
                            <p>Description:{userInputs[2].Description}</p>                        
                        </div>

                    </div>

                </div>



            </div>
        );
    }



}

export default ScheduleTest;


