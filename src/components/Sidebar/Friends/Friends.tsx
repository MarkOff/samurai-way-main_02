import React from 'react';
import s from './Friends.module.css'
import {NavLink} from 'react-router-dom';

export type FriendsPropsType = {
    id: string
    name: string
    ava: string
}

export const Friends = (props: FriendsPropsType) => {
    let path = `${props.id}`

    return (
        < div className={s.friends}>

            <div className={s.ava}>
                <NavLink to={path}><img src={props.ava}/> </NavLink>
            </div>

            <div className={s.name}>
                <NavLink  activeClassName={s.active} to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
};

