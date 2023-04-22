import React, {ChangeEvent, FC, Props} from 'react';
import s from './ProfileBlock.module.css';
import {ProfileStatusWithHooks} from 'components/Profile/ProfileInfo/ProfileBlock/ProfileStatus/ProfileStatusWithHooks';
import {Contacts} from 'components/Profile/ProfileInfo/ProfileBlock/Contacts/Contacts';
import defaultAva from 'avatars/765-default-avatar.png';
import {UsersProfilePropsType} from 'components/Profile/ProfileContainer';
import {Preloader} from 'components/common/Preloader/Preloader';
import {StatusJob} from 'components/Profile/ProfileInfo/ProfileBlock/StatusJob/StatusJob';
import {AboutMe} from 'components/Profile/ProfileInfo/ProfileBlock/AboutMe/AboutMe';
import {FullName} from 'components/Profile/ProfileInfo/ProfileBlock/FullName/FullName';
import {MainAvatar} from 'components/Profile/ProfileInfo/ProfileBlock/MainAvatar/MainAvatar';
import {UserProfileType} from 'redux/redux-store';
import {type} from '@testing-library/user-event/dist/type';

// type Props = Partial<Pick<UsersProfilePropsType,   'isOwner' | 'profile' | 'status' | 'updateStatus' | 'savePhoto'>>;

type ProfileBlockType = {
    profile: UserProfileType | null
    status: string
    isOwner: boolean
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    goToEditMode: () => void
}


export const ProfileBlock: FC<ProfileBlockType> = ({profile, isOwner, status, updateStatus, savePhoto, goToEditMode}) => {

    if (!profile) {
        return <Preloader/>
    }
    return (
        <>
            <div>{isOwner && <button onClick={goToEditMode}>edit</button> }  </div>
            {/*<div className={s.wallImg}>*/}
            {/*    <img src="https://i.pinimg.com/originals/b0/47/48/b047482b30fe60adac38bbfe05fbe7f2.jpg"/>*/}
            {/*</div>*/}

            <div className={s.profileContainer}>
                <MainAvatar profile={profile} isOwner={isOwner} savePhoto={savePhoto} />
                <div className={s.blockNameAndStatus}>
                    <FullName fullName={profile.fullName}/>
                    <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
                </div>


                <Contacts contacts={profile.contacts}/>
            </div>
            <AboutMe aboutMe={profile.aboutMe}/>
            <StatusJob lookingForAJob={profile.lookingForAJob}
                       lookingForAJobDescription={profile.lookingForAJobDescription}/>
        </>
    );
};


export const ProfileDataForm = () => {
return(
<div>
    Form
</div>
)
}
