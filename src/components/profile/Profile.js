import React, { Component } from 'react';
import Image from './Image';
import './Profile.css';
import Info from './Info';
import InfoBlock from './InfoBlock';

class Profile extends Component {
     render() {
         return(
            <div>
                <div id='pageContainer'>
                    <div id='profileContainer'>
                        <div className='profileBlock'>
                            <Image />
                            <Info/>
                        </div>                            
                            <InfoBlock />
                    </div>
                </div>
            </div>
         );
     }
}

export default Profile;