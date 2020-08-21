import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import styles from './Message.scss'
import Moment from 'react-moment';
//import 'moment-timezone';
import 'moment/locale/fr';

const Message = (props) => {
    //console.log(props)
    return (
        <div>
            <div className="messageLine">
                <div className="row rowBulle">
                    <div className={`message_bulle ${props.user._id===props.message.user._id ? "bluebulle" :"greybulle"}`}>
                    <span className='nameSay'>
                        {props.message.user.nickname} dit:
                        </span>
                        {props.message.message}
                        </div>  
         
                </div>
                <div className="row rowBulle">
                    <div className={`infobulle ${props.user._id===props.message.user._id ? "right" :"left"}`}>
                        <Moment locale="fr" format="DD-MMMM-YYYY HH:mm">
                            {props.message.date}
                        </Moment>
                    </div>
                </div>
                
            </div>
        
        </div>
        )
} ;

Message.propTypes = {};

export default Message;
