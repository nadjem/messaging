import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeInfo from './HomeInfo/HomeInfo.jsx';
import ReaderChat from './ReaderChat/ReaderChat.jsx';
import UsersChat from './UsersChat/UsersChat.jsx';
import Sender from './Sender/Sender';
import styles from './RootChat.scss'
import {getUsers,getMessages} from '../../service/rest';
import allActions from "../../store/actions";
import {connect} from "react-redux";
class RootChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    getUsers(res=>{
      //console.log(res)
      this.props.setUsers({type: 'SET_USERS', values: res.data});

      let autoPullingIntervalDescriptor = undefined;
 const stopAutoPulling = () => {
    if (undefined !== autoPullingIntervalDescriptor) {
        clearInterval(autoPullingIntervalDescriptor);
    }
}
 const startAutoPulling = () => {
   // const _store=store;
    autoPullingIntervalDescriptor=setInterval(monComponent => {
        let lastID = 0;
        //console.log(this.props)
        getMessages(res =>{
          this.props.setMessages({type: 'SET_MESSAGES', values: res.data});
        })
    }, 1000);
}
startAutoPulling()
    })
    
  }
  render() {
    const {} = this.props;
    return (
      <div>
        <HomeInfo />
        <div className="row center">
          <div className="col s9 reader">
            <ReaderChat />
          </div>
          <div className="col s3 users">
            <UsersChat />
          </div>
        </div>
        <div className="row">
        <Sender />
        </div>
      </div>
    );
  }
}

RootChat.propTypes = {};
const mapStateToProps = ({userReducer,messageReducer}) => ({
  userReducer,
  messageReducer
});
const mapDispatchToProps = (dispatch, getState) => ({
  setUsers: (any) => allActions.userActions.setUsers(dispatch, any),
  setMessages: (any) => allActions.messageAction.setMessages(dispatch, any),
});
export default connect(mapStateToProps, mapDispatchToProps)(RootChat);
