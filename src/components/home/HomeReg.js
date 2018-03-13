import React from 'react';
import { Link } from 'react-router';
import TabContents from './TabContents';
import './My_Styles.css';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import PlanContent from './PlanContent';



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


class HomeReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        };
    }




    render() {

        return (

            <div>
                <div className="jumbotron container-fluid" style={{backgroundColor:"#397B9E",margin:"0px"}}  >
                    <h1 style={{color:"white"}}> Ready to <span style={{ color: "#FFC96D" }}>travel?</span> </h1>
                    <Link to="tour" className="btn btn-primary btn-lg">Click here to see all available tours </Link>
                </div>

                <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs}>
                    <div style={{ backgroundColor: "#585858", color: "white" }}>
                        <TabLink to="tab1" default style={styles.tabLink}>Popular Tours</TabLink>
                        <TabLink to="tab2" style={styles.tabLink}>Your Tours</TabLink>
                    </div>

                    <div style={styles.content}>
                        <TabContent for="tab1">
                            <TabContents />
                        </TabContent>
                        <TabContent for="tab2">
                            <h3 style={{ marginBottom: "50px", fontSize: "70px", fontStyle: "oblique" }}>Plan your future tours here!</h3>
                            <PlanContent />
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default HomeReg;
