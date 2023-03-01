import React from 'react';
import {AppStateType, FriendsType, SidebarType} from '../../redux/redux-store';
import {FriendRender, Friends} from './Friends/Friends';
import {NavLink} from 'react-router-dom';
import s from './Sidebar.module.css'
import {useSelector} from 'react-redux';

export type SidebarPropsType = {
    // state: SidebarType
}

export const Sidebar = () => {

    // const friends = useSelector<AppStateType,FriendsType[]>(state => state.sidebar.friends)
    //
    // const friendsElement = friends.map((e) => {
    //     return (
    //         <Friends key={e.id} id={e.id} ava={e.ava} name={e.name}/>
    //     )
    // })

    return (
            <div className={s.item}>
                <FriendRender/>
            </div>
    );
};

