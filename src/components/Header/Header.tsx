import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';
import {HeaderPropsType} from './HeaderContainer';
import defaultAva from '../../avatars/765-default-avatar.png';

export const Header: React.FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <div className={s.header}>
            <header>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The-punisher-logo-png-transparent.png/762px-The-punisher-logo-png-transparent.png"/>

                {/*<div className={s.avatar}><img src={photos.large !== null ? photos.large :  defaultAva} />*/}
                {/*</div>*/}

                <div className={s.loginBlock}>
                    {isAuth ?
                        <div> {login} <button onClick={logout}>Log out</button> </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </div>
    );
};

