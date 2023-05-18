import React from 'react';
import {FriendRender} from './Friends/Friends';
import s from './Sidebar.module.css'
import {useSelector} from 'react-redux';
import {selectIsAuth} from '../../redux/selectors/auth.selectors';

export type SidebarPropsType = {
    // state: SidebarType
}

export const Sidebar = () => {

    return (
            <div className={s.item}>
                <FriendRender/>
            </div>
    );
};

