import React from 'react';


class SelectionTour extends React.Component {
    render() {
        return (
            <div className="container-fluid homeBG">
                <img src={require("./SelectionHome.jpg")} style={{ width: "100%" }} alt="mainPic" />
                <p style={{ color: "white", textAlign: "center", fontSize: "3em" }}>You're almost there!</p>


                <div className="container-fluid" style={{ display: "flex" }} >
                    <div className="textLeft">
                        <span style={{ fontSize: "5em", color: "white" }}> Your guide will be contacting you soon! </span> <br />
                        <span style={{ color: "white", fontSize: "1.5em" }}> You're almost done booking your experience with GuidePost! A representative from our selection of guides will be in contact with you soon. We believe in true communication and as a result you will be choosing your dates as well as activites with your guide directly! Thank you and enjoy your trip!  </span>
                    </div>

                    <img src={require("./SelectionGuide.jpg")} alt="almost" class="imgRight" style={{ width: "50%", height: "50%" }} />
                </div>


                <footer className="container-fluid footerBg">
                    <p style={{ textAlign: "center" }}>GuidePost</p>
                </footer>
            </div>

        );
    }
}

export default SelectionTour;
