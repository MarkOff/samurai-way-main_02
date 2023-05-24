import React, {FC} from 'react';
import {User} from 'components/Users/User';
import {UserType} from '../../types/commonTypes';

type UsersListPropsType = {
    users: Array<UserType>;
    filter: string;
    onFollowUser: (userId: string) => void;
    onUnfollowUser: (userId: string) => void;
    followingInProgress: Array<string>;
};

export const UsersList: FC<UsersListPropsType> = (
    {
        users,
        filter,
        onFollowUser,
        onUnfollowUser,
        followingInProgress,
    }) => {

    const filteredUsers = users.filter((el) => el.name.indexOf(filter) > -1);

    return (
        <div>
            {filteredUsers.length === 0
                ? <div>User not found</div>
                : filteredUsers.map((el) => (
                    <User
                        key={el.id}
                        user={el}
                        onFollowUser={onFollowUser}
                        onUnfollowUser={onUnfollowUser}
                        followingInProgress={followingInProgress}
                    />
                ))}
        </div>
    );
};