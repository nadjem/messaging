import React, { Component } from 'react';
/* import PropTypes from 'prop-types';
 */import Message from './Message/Message.jsx';
/* import {getMessages} from '../../../service/rest'
 */import allActions from "../../../store/actions";
import {connect} from "react-redux";
class ReaderChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:this.props.userReducer.user.value,
      messages : []
    };
  }
  componentDidMount(){
    //console.log(this.state.messages)
  }
  render() {
    //const {} = this.props;
    return (
      <div className={'reader'}>
        {
         this.props.messagesReducer.messages && this.props.messagesReducer.messages.values.length !== 0 ?
            this.props.messagesReducer.messages.values.map((m,i)=>{
              return <Message key={'message-'+i} user={this.state.user} message={m}/>   
            })
          : <p>no message</p>
        }
        
      </div>
    );
  }
}

ReaderChat.propTypes = {};
const mapStateToProps = ({userReducer,messagesReducer}) => ({
  userReducer,
  messagesReducer
});
const mapDispatchToProps = (dispatch, getState) => ({
  setUsers: (any) => allActions.userActions.setUsers(dispatch, any),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReaderChat);