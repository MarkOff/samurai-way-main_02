import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import {SidebarType} from '../../redux/redux-store';
import {Sidebar} from '../Sidebar/Sidebar';

type NavbarPropsType = {
    friend: SidebarType
}


export const Navbar = (props: NavbarPropsType) => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile" activeClassName={s.active}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialog" activeClassName={s.active}> Message </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.active}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.active}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}> Settings </NavLink>
            </div>
            <div className={s.item}>
                 <Sidebar state={props.friend}/>
            </div>

        </nav>
    );
};

