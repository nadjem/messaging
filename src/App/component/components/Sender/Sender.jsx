import React, { Component }  from 'react';
import styles from './Sender.scss'
import { Button} from 'react-materialize';
import allActions from "../../../store/actions";
import {connect} from "react-redux";
import {newMessage} from '../../../service/rest'
class Sender extends Component {
    constructor(props){
      super(props)
      this.state = {
          user:props.userReducer.user.value,
          message:"",
      }
    }
    componentDidMount(){

    }
    submitMessage = (e)=>{
       e.preventDefault()
       console.log('send')
       let obj ={message:this.state.message,user:this.props.userReducer.user.value._id}
       newMessage(obj,res =>{
            console.log(res);
            this.setState({message:""})
       })
    }
    render() {
        return(
            <div className='Sender'>
                <form onSubmit={this.submitMessage}>
                    
                <div className="row">
                    <div className="col s11"><input className="input" type="text" placeholder="message" value={this.state.message} onChange={e=>this.setState({message:e.target.value})}/></div>
                    <div className="col s1"><Button className='right btn-small'>envoyer</Button></div>
                </div>
                    
                </form>
            </div>
        )
    }
}


Sender.propTypes = {};
const mapStateToProps = ({userReducer}) => ({
    userReducer
  });
  const mapDispatchToProps = (dispatch, getState) => ({
    getUser: (any) => allActions.userActions.getUser(dispatch, any),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Sender);