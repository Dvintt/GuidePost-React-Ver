import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Style from '../../Style';

const Header = ({loading}) => {
  return (
    <nav style={Style.navFrame} >
      <IndexLink to="/" style={Style.navElement} activeClassName="active">Working on</IndexLink>
      {/* {" | "} */}
      <Link to="/home" style={Style.navElement} activeClassName="active">Home</Link>
      {/* {" | "} */}
      <Link to="/messenger" style={Style.navElement} activeClassName="active">Messenger</Link>
      {/* {" | "} */}
      <Link to="/start" style={Style.navElement} activeClassName="active">Start</Link>
      {/* {" | "} */}
      <Link to="/tour" style={Style.navElement} activeClassName="active">TourSelection</Link>
      {/* {" | "} */}
      <Link to="/tourFinal" style={Style.navElement} activeClassName="active">TourFinal</Link>
      {/* {" | "} */}
      <Link to="/profile" style={Style.navElement} activeClassName="active">Profile</Link>
      {/* {" | "} */}
      <Link to="/input" style={Style.navElement} activeClassName="active">Login</Link>
      {/* {" | "} */}
      <Link to="/unitTest" style={Style.navElement} activeClassName="active">UnitTEST</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
