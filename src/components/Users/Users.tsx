import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {UsersPropsType} from './UsersContainer';
import {Paginator} from '../common/Paginator/Paginator';
import {UsersList} from './UserList';

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
    const [value, setValue] = useState(filter);
    const [timerId, setTimerId] = useState<number | undefined>(undefined);

    // Обработчик изменения значения фильтра
    const onChangeHandleFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    // Установка фильтра с задержкой в 1 секунду после изменения значения
    useEffect(() => {
        clearTimeout(timerId);
        const setTimeoutFilteredId = window.setTimeout(() => {
            setFilter(value);
        }, 400);
        setTimerId(setTimeoutFilteredId);
    }, [value]);

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                forPageSwitch={forPageSwitch}
                portionSize={pageSize}
                totalItemsCount={totalUserCount}
                pageSize={pageSize}
            />

            <input
                type="text"
                placeholder="search"
                value={value}
                onChange={onChangeHandleFilter}
            />

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