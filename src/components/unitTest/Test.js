import React from 'react';
import { Link } from 'react-router';
import './My_Styles.css';
import{Tabs, TabLink,TabContent} from 'react-tabs-redux';
import MessageTest from './MessageTest';
import ScheduleTest from './ScheduleTest';
import PictureTest from './PictureTest';
import LoginTest from './LoginTest';
// import Login from '../input/Login';


const styles = {
    tabs: {
        overflow: 'hidden',
        backgroundColor: '#f1f1f1',
        textAlign: 'center'
    },
    links: {
        margin: 0,
        padding: 0
    },
    tabLink: {
        height: '30px',
        lineHeight: '30px',
        padding: '0 15px',
        cursor: 'pointer',
        borderBottom: '2px solid transparent',
        display: 'inline-block'
    },
    activeLinkStyle: {
        borderBottom: '2px solid #333'
    },
    visibleTabStyle: {
        display: 'inline-block'
    },
    content: {
        padding: '0 15px'
    }
};


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        };
    }

    render() {

        return (
        
            <div>
           
            <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs}>
                <div style={{backgroundColor:"#585858",color:"white"}}>
                    <TabLink to="tab1" default style={styles.tabLink}>Messeage TEST</TabLink>
                    <TabLink to="tab2" style={styles.tabLink}>Schedule TEST</TabLink>
                    <TabLink to="tab3" style={styles.tabLink}>Picture TEST</TabLink>

                    <TabLink to="tab4" style={styles.tabLink}>Login TEST</TabLink>
                </div>
    
                <div style={styles.content}>
                    <TabContent for="tab1">
                        <MessageTest/>
                    </TabContent>
                    <TabContent for="tab2">
                        <ScheduleTest/>
                
                    </TabContent>
                    <TabContent for="tab3">
                        <PictureTest/>
                
                    </TabContent>

                    <TabContent for="tab4">
                        <LoginTest/>

                    </TabContent>
                </div>
            </Tabs>
        </div>
        );
    }
}

export default Test;
