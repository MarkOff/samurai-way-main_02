import React from 'react';
import s from './Friends.module.css'
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {FriendsType} from '../../../types/commonTypes';
import {selectIsAuth} from '../../../redux/selectors/auth.selectors';

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

export const FriendRender = () =>{
    const isLoggedIn = useSelector(selectIsAuth)

    const friends = useSelector<AppStateType,FriendsType[]>(state => state.sidebar.friends)

    const friendsElement = friends.map((e) => {
        if(isLoggedIn) {
            return (
                <Friends key={e.id} id={e.id} ava={e.ava} name={e.name}/>
            )
        }

    })
    return (
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.active}> <h2>Friends</h2> </NavLink>
            {friendsElement}
        </div>
    );
}
