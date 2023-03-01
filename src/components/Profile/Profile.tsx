import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UsersProfilePropsType} from './ProfileContainer';



export const Profile = (props: UsersProfilePropsType) => {
    const {profile, setProfile, isAuth} = props

    return (
        <div>
            <ProfileInfo isAuth={isAuth} profile={profile} setProfile={setProfile} />
            <MyPostsContainer/>
        </div>
    );
};

