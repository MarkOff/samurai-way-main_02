import React from 'react';
import s from './Users.module.css';
import defaultAva from '../../avatars/765-default-avatar.png';
import {NavLink} from 'react-router-dom';
import {UserType} from 'redux/redux-store';


type UserPropsType = {
    user: UserType
    followingInProgress: Array<string>
    onFollowUser: (userId: string) => void
    onUnfollowUser: (userId: string) => void
}


export const User = (props: UserPropsType) => {
    const {
        user,
        followingInProgress,
        onFollowUser,
        onUnfollowUser
    } = props


    return (
        <div key={user.id} className={s.userBlock}>
                <span className={s.line}>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small !== null ? user.photos.small : defaultAva}
                                 className={s.img} alt={'ava'}/>
                            </NavLink>

                        </div>
                        <div className={s.button}>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          className={s.buttonUnfollowed}
                                          onClick={() => onUnfollowUser(user.id)}>Unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          className={s.buttonFollowed}
                                          onClick={() => onFollowUser(user.id)}>Follow</button>
                            }
                        </div>
                    </span>

            <span>
                        <span>
                           <div className={s.urlName}>
                               <NavLink to={`/profile/${user.id}`}>{user.name}</NavLink>
                           </div>
                        <div>{user.status && `status: ${user.status}`}</div>
                    </span>
                        <span>
                            {/*<div>{'el.location.country'}</div>*/}
                            {/*<div>{'el.location.city'}</div>*/}
                    </span>
                    </span>
        </div>
    );
};

