import React from 'react';
import { Link } from 'react-router';
import './My_Styles.css';


class StartPage extends React.Component {
  render() {

    return (
      <div className="homeBG">
        <div className="container-fluid homeBanner" style={{ paddingTop: "185px" }}>
          <p id="textBanner"> <span style={{ color: "#FFC96D" }}>G</span>uide<span style={{ color: "#FFC96D" }}>P</span>ost</p>
          <Link to="input">
            <button className="button" style={{marginLeft:"46%" }}>
              Register
            </button>
          </Link>
        </div>
        <div className="container-fluid homeBG">
          <p style={{ color: "white", textAlign: "center", fontSize: "6em" }}>Traveling Made <span style={{ color: "#FFC96D" }}>Easier</span></p><br />

          <div className="container-fluid" style={{ padding: "20px" }}>
            <div className="row">
              <div className="col-sm-6 col-md-6">
                <p id="descBanner">Traveling just got easier. Hire a Tour Guide to help plan and navigate your journey! Or become a Tourguide yourself and show clients the best your City/Country has to offer!</p>
              </div>
              <div className="col-sm-6 col-md-6">
                <img src={require('./bannerIcon.png')} alt="BannerIcon" border="0" style={{ width: "75%" }} />
              </div>
            </div>
          </div>

          <footer>
            <p>GuidePost</p>
          </footer>

        </div>
      </div>
    );
  }
}

export default StartPage;