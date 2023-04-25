import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UsersProfilePropsType} from './ProfileContainer';
import {type} from '@testing-library/user-event/dist/type';
import {UserProfileType} from 'redux/redux-store';
import {UpdateUserProfileType} from 'api/api';
import {setProfile} from 'redux/profile-reducer';

type Props = {
    profile: UserProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UpdateUserProfileType) => Promise<any>
}


export const Profile: FC<Props> = ({profile, saveProfile, savePhoto, updateStatus, status, isOwner}) => {
    return (
        <div>
            <ProfileInfo profile={profile} updateStatus={updateStatus} status={status} saveProfile={saveProfile}
                         isOwner={isOwner} savePhoto={savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
};

