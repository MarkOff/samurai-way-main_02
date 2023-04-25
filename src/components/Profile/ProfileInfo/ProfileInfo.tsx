import React, {FC, useState} from 'react';
import {UsersProfilePropsType} from '../ProfileContainer';
import {ProfileBlock} from 'components/Profile/ProfileInfo/ProfileBlock/ProfileBlock';
import ProfileDataFormReduxForm from 'components/Profile/ProfileInfo/ProfileBlock/ProfileDataForm';
import {FormSubmitHandler} from 'redux-form';
import {Preloader} from 'components/common/Preloader/Preloader';
import {UserProfileType} from 'redux/redux-store';
import {UpdateUserProfileType} from 'api/api';


type Props = {
    profile: UserProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UpdateUserProfileType) => Promise<any>
}

export const ProfileInfo: FC<Props> = ({profile, saveProfile, savePhoto, updateStatus, status, isOwner}) => {

    const [editMode, setEditMode] = useState(false);

    const onSubmit = (formData: UserProfileType) => {
        saveProfile(formData).then((res: any) => {
                if (res) {
                    setEditMode(false)
                }
            }
        )
    }

    if (!profile) {
        return <Preloader/>
    }

    return (
        <>

            {editMode
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileBlock profile={profile} isOwner={isOwner} status={status}
                                updateStatus={updateStatus} savePhoto={savePhoto}
                                goToEditMode={() => {
                                    setEditMode(true)
                                }}
                />
            }
        </>
    );
};

