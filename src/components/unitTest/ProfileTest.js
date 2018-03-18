import expect from 'expect';
import React from 'react';
import MsgFrame from './MsgFrame';

import { connect } from 'react-redux';
import * as types from '../../actions/actionTypes';
import * as profileAction from '../../actions/profileAction';
import { bindActionCreators } from 'redux';

class ProfileTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                location: 'English',
                language: 'San Diego',
                tour: true
        };
    }


    render() {
    
    this.props.profileAction.addLanguage('English');
    this.props.profileAction.addLocation('San Diego');
        
        return (
            <div>
                <div style={{ display: "flex" }}>

                    <div>
                        <h1> Actual Output </h1>
                        <p>Language: {this.props.profile.langauge}  </p>
                        <p>Location: {this.props.profile.location}  </p>
                    </div>

                    <div>
                        <h1> Expected Output </h1>
                        <div className="chatFrame">
                            <p>Language: {this.state.location}</p>
                            <p>Location: {this.state.langauge}</p>                     
                        </div>

                    </div>

                </div>

            </div>
        );
    }



}


const mapStateToProps = (state) => {
    return{
        profile: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      profileAction: bindActionCreators(profileAction, dispatch)
    };
  };

ProfileTest.propTypes = {
    courses: PropTypes.array.isRequired
  };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTest);


