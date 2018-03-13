import React, {Component} from 'react';
import './Profile.css';

class Image extends Component{
  render(){
      return(
        <div>
            <div id='profilePic'></div>
            <div style={{color:'dimgray'}}></div>
        </div>
      );
  }
}

export default Image;