import React from 'react';
import s from './../Dialogs.module.css'
import {MessagesType} from 'redux/redux-store';


export const Message = (props: MessagesType) => {
    return (
        <div className={s.messages}>
            {props.message}
        </div>
    )
}

