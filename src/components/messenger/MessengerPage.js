import React from 'react';
import { Link } from 'react-router';
import MessegeSection from './MessegeSection';
import './msgr.css';
import ScheduleSection from './ScheduleSection';
import * as ScheduleAction from '../../actions/ScheduleAction';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';


class MessengerPage extends React.Component {

    render() {
        return (
            <div className="msgContainer container-fluid">
                <div className="row" style={{ minHeight: "100%" }}>

                    <div className="col-sm-2 col-md-2 cList">
                        <h3 style={{ color: "ghostwhite" }}>Notifications</h3>
                    </div>

                    <div className="col-sm-6 col-md-6 msg">
                        <MessegeSection />       
                    </div>

                    <div className="col-sm-4 col-md-4 sch">        
                                  
                        <ScheduleSection createSch={this.props.ScheduleAction.createSchedule}/>
                    </div>

                </div>


            </div>
        );
    }
}



  function mapDispatchToProps(dispatch) {
    return {
      ScheduleAction: bindActionCreators(ScheduleAction, dispatch)
    };
  }

export default connect(mapDispatchToProps)(MessengerPage);

