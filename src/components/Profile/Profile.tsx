import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UsersProfilePropsType} from './ProfileContainer';


export const Profile = (props: UsersProfilePropsType) => {
    const {profile, setProfile, getStatus, updateStatus, status} = props

    return (
        <div>
            <ProfileInfo profile={profile} getStatus={getStatus}
                         setProfile={setProfile} updateStatus={updateStatus}
                         status={status}
            />
            <MyPostsContainer/>
        </div>
    );
};

