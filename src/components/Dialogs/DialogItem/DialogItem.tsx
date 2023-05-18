import React, {FC} from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogType} from '../../../types/commonTypes';




export const DialogItem: FC<DialogType> = ({id, name, ava}) => {
    let path = `/dialog/${id}`

    return (
        <div className={s.dialogsItem}>
            <NavLink to={path} className={s.text}>
                <img src={ava} alt="ava"/>
                {name}
            </NavLink>
        </div>
    )
}



