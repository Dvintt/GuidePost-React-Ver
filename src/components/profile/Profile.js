import React, { Component } from 'react';
import Image from './Image';
import './Profile.css';
import Info from './Info';
import InfoBlock from './InfoBlock';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import profileReducer from '../../reducers/profileReducer';
import * as profileAction from '../../actions/profileAction';
import { bindActionCreators } from 'redux';

class Profile extends Component {
     render() {
         return(
            <div>
                <div id='pageContainer'>
                    <div id='profileContainer'>
                        <div className='profileBlock'>
                            <Image />
                            <Info profileAction={this.props.profileAction} profileInfo={this.props.profile}/>
                        </div>                            
                            <InfoBlock />
                    </div>
                </div>
            </div>
         );
     }
}


Profile.propTypes = {
    profileAction: React.PropTypes.object.isRequired,
    profile: React.PropTypes.object.isRequired
};


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

export default connect(mapStateToProps,mapDispatchToProps)(Profile);