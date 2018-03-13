import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {
    
    
    
    
    
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:"#FFF",marginTop:"30px",marginBottom:"30px"}}>

                <div className="tab" style={{backgroundColor:"#37383E"}}>

                    <button className="tablinks" onClick="openTab(event, 'popularTours')" id="defaultOpen">Popular Tours</button>

                    <button className="tablinks" onClick="openTab(event, 'yourTours')">Your Tours </button>

                </div>
            </div>




        

    );
    }
}

export default HomeReg;
