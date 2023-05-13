import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../redux/dialogs-reducer';



export const DialogItem = (props: DialogsType) => {
    let path = `/dialog/${props.id}`

    return (
        <div className={s.dialogsItem}>
            <img src={props.ava} alt="ava"/>
            <NavLink to={path} className={s.text}>{props.name}</NavLink>
        </div>
    )
}



