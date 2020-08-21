import React from 'react';
/* import PropTypes from 'prop-types';
import styles from './HomeInfo.scss'
import store from '../../../store/reducers'
import { getUser,getMessages} from '../../../service/rest'; */
import allActions from "../../../store/actions";
import {connect} from "react-redux";
const HomeInfo = (props) =>{
let user = props.userReducer.user.value;


    return (
    <div className="HomeInfo">
            <h1>welcome <span>{user.nickname}</span></h1>
      </div>
    )
};

HomeInfo.propTypes = {};


const mapStateToProps = ({userReducer,messsagesReducer}) => ({
  userReducer,
  messsagesReducer
});
const mapDispatchToProps = (dispatch, getState) => ({
  getUser: (any) => allActions.userActions.getUser(dispatch, any),
  getMessages: (any) => allActions.messageAction.getMessages(dispatch, any),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeInfo);