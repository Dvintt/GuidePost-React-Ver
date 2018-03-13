import React, {Component} from 'react';
import './Profile.css';

class InfoBlock extends Component {
  openTab() {
      
  }
  render() {
      return(
        <div>
            <div className='infoBlock'>
                <div className='container' style={{marginTop:30, marginBottom:30}}>
                    <div className='tab' style={{backgroundColor:'#264d73'}}>
                        <button className='tablinks' onClick={this.openTab()}>Featured Adventures</button>
                        <button className='tablinks' onClick={this.openTab()}>Past Tours</button>
                        <button className='tablinks' onClick={this.openTab()}>Client Reviews</button>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}

export default InfoBlock;