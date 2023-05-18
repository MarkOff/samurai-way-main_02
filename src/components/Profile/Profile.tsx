import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {UserProfileType} from '../../types/commonTypes';

type Props = {
    profile: UserProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
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

