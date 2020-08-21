import React, { Component } from 'react';
import styles from "./Login.scss";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router'; 
import 'materialize-css';
import { Button} from 'react-materialize';
import {userLogin} from '../../../service/rest'
import allActions from "../../../store/actions";
import {connect} from "react-redux";
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
        email:"",
        password:""
    }
  }
  submitForm = (e) =>{
        e.preventDefault()
          //console.log('%c submit form!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
       // console.log(this.state)
        if(this.state.email && this.state.password){
          userLogin({email:this.state.email,password:this.state.password},res=>{
            console.log(res)
            if(res.status == "ok"){
              this.props.setUser({type: 'SET_USER', value: res.data});
              this.props.history.push(`/tchat`)
            }
            
          })
        }else return
   }
  
  render() {
    
    return (
      <div>
          <div className="containerForm">
            <h1>Login</h1>
            <hr/>
              <form onSubmit={this.submitForm}>
                <div className="row">
                <input className="input" type="text" placeholder="email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})}/>
                </div>
                <div className="row">
                <input className="input" type="password" placeholder="password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})}/>
                </div>
            
                <Button small type="submit" waves="light" > Login </Button>
              </form>
          </div>
      </div>
    );
  }
}


const mapStateToProps = ({userReducer}) => ({
  userReducer
});
const mapDispatchToProps = (dispatch, getState) => ({
  setUser: (any) => allActions.userActions.setUser(dispatch, any),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

