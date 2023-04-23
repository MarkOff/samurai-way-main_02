import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UsersProfilePropsType} from './ProfileContainer';


export const Profile = (props: UsersProfilePropsType) => {
    const {profile, setProfile, getStatus, updateStatus, status, isAuth, autorizedUserId, isOwner, savePhoto, saveProfile} = props

    return (
        <div>
            <ProfileInfo profile={profile} getStatus={getStatus} setProfile={setProfile}
                         updateStatus={updateStatus} status={status} isAuth={isAuth} saveProfile={saveProfile}
                         autorizedUserId={autorizedUserId} isOwner={isOwner} savePhoto = {savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
};

