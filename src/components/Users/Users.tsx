import React from 'react';
import {UsersPropsType} from './UsersContainer';
import {Paginator} from 'components/common/Paginator/Paginator';
import {User} from 'components/Users/User';

export const Users = (props: UsersPropsType) => {
    const {
        users,
        totalUserCount,
        currentPage,
        pageSize,
        forPageSwitch,
        followingInProgress,
        onFollowUser,
        onUnfollowUser
    } = props


    return (
        <div>
            <Paginator currentPage={currentPage} forPageSwitch={forPageSwitch} totalUserCount={totalUserCount}
                       pageSize={pageSize}/>
            <div>
                {users.map(el => <User key={el.id} user={el} onFollowUser={onFollowUser}
                                       onUnfollowUser={onUnfollowUser} followingInProgress={followingInProgress}/>)}
            </div>
        </div>
    );
};

