// import expect from 'expect';
// import React, {PropTypes} from 'react';
// import MsgFrame from './MsgFrame';
// import LoginForm from '../input/LoginForm';

// import { connect } from 'react-redux';
// // import { userSignupRequest } from '../../actions/signupActions';
// import * as types from '../../actions/actionTypes';
// import * as inputActions from '../../actions/inputActions';
// import { bindActionCreators } from 'redux';

// class LoginTest extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <div style={{ display: "flex" }}>
//                     <div>
//                         <h1> Login Test</h1>
//                         <LoginForm setUsername={this.props.inputActions.updateUserList} 
//                                     getUserlist={this.props.userlist}/>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// LoginTest.propTypes = {
//     inputActions: PropTypes.object.isRequired,
//     userlist: PropTypes.array.isRequired
// };

// const mapStateToProps = (state) => {
//     return{
//         user: state.user,
//         userlist: state.userlist
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//       inputActions: bindActionCreators(inputActions, dispatch)
//     };
//   };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginTest);



