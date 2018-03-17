import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Working on</IndexLink>
      {" | "}
      <Link to="/home" activeClassName="active">Home</Link>
      {" | "}
      <Link to="/messenger" activeClassName="active">Messenger</Link>
      {" | "}
      <Link to="/start" activeClassName="active">Start</Link>
      {" | "}
      <Link to="/tour" activeClassName="active">TourSelection</Link>
      {" | "}
      <Link to="/tourFinal" activeClassName="active">TourFinal</Link>
      {" | "}
      <Link to="/profile" activeClassName="active">Profile</Link>
      {" | "}
      <Link to="/input" activeClassName="active">Login</Link>
      {" | "}
      <Link to="/unitTest" activeClassName="active">UnitTEST</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">courses</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
