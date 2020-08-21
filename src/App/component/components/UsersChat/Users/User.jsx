import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.scss'
const User = (props) => {
   let clikedUser = (e)=>{
        console.log(e)
    }
//console.log(props.user)
    return(
    <li onClick={clikedUser} className={'clickableUser'}><i className="fas fa-user-ninja"></i>{props.user.nickname}({props.user.name})</li>
    )
};

User.propTypes = {};

export default User;
