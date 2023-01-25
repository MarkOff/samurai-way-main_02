import React from 'react';
import {SidebarType} from '../../redux/redux-store';
import {Friends} from './Friends/Friends';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.css'

export type SidebarPropsType = {
    state: SidebarType
}

export const Sidebar = (props: SidebarPropsType) => {
   const friendsElement = props.state.friends.map((e) => {
        return (
            <Friends id={e.id} ava={e.ava} name={e.name}/>
        )
    })

    return (
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}> <h2>Friends</h2> </NavLink>
                {friendsElement}
            </div>
    );
};

