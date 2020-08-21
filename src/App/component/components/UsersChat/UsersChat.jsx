import React from 'react';
import PropTypes from 'prop-types';
import User from './Users/User.jsx';
import store from '../../../store/reducers'
import allActions from "../../../store/actions";
import {connect} from "react-redux";
const UsersChat = (props) => {

let users = props.userReducer.users.values;
return (

  <div>
    <h5 style={{padding:0,margin:0}}>Users</h5>
  
    <ul style={{padding:0,margin:0}}>
      {
        users.length ? 
      users.map((e,i)=><User key={`user-${i}`} user={e}/>)
      : 
      <p>no users</p>
      }
    </ul>
  </div>
);
}
UsersChat.propTypes = {};
const mapStateToProps = ({userReducer}) => ({
  userReducer
});
const mapDispatchToProps = (dispatch, getState) => ({
  setUsers: (any) => allActions.userActions.setUsers(dispatch, any),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersChat);