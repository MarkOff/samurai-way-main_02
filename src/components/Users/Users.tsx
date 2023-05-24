import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {UsersPropsType} from './UsersContainer';
import {Paginator} from '../common/Paginator/Paginator';
import {UsersList} from './UserList';
import {Debounce as SearchUsers} from '../common/Debounce/Debounce';

export const Users: FC<UsersPropsType> = (
    {
        users,
        totalUserCount,
        currentPage,
        pageSize,
        forPageSwitch,
        followingInProgress,
        onFollowUser,
        onUnfollowUser,
        filter,
        setFilter,
    }) => {


    return (
        <div>
            <Paginator
                currentPage={currentPage}
                forPageSwitch={forPageSwitch}
                totalItemsCount={totalUserCount}
                pageSize={pageSize}
            />

            <SearchUsers filter={filter} setFilter={setFilter}/>

            <UsersList
                users={users}
                filter={filter}
                onFollowUser={onFollowUser}
                onUnfollowUser={onUnfollowUser}
                followingInProgress={followingInProgress}
            />
        </div>
    );
};