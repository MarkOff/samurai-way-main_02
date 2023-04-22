import React, {useState} from 'react';
import {UsersProfilePropsType} from '../ProfileContainer';
import {ProfileBlock, ProfileDataForm} from 'components/Profile/ProfileInfo/ProfileBlock/ProfileBlock';

export const ProfileInfo = (props: UsersProfilePropsType) => {
    const {profile, updateStatus, status, isOwner, savePhoto} = props

    const [editMode, setEditMode] = useState(false);

    return (
        <>

            {editMode
                ? <ProfileDataForm/>
                : <ProfileBlock profile={profile} isOwner={isOwner} status={status}
                                updateStatus={updateStatus} savePhoto={savePhoto}
                                goToEditMode={() => {setEditMode(true)}}
                />
            }
        </>
    );
};

