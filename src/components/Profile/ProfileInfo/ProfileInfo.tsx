import React from 'react';
import s from './ProfileInfo.module.css';
import {UsersProfilePropsType} from '../ProfileContainer';
import {Preloader} from '../../common/Preloader/Preloader';
import defaultAva from '../../../avatars/765-default-avatar.png'
import {ProfileStatus} from './ProfileStatus';
import {ProfileStatusWithHooks} from 'components/Profile/ProfileInfo/ProfileStatusWithHooks';

export const ProfileInfo = (props: UsersProfilePropsType) => {
    const {profile, getStatus, setProfile, updateStatus, status, isAuth, autorizedUserId} = props

    if (!profile) {
        return <Preloader/>
    }
    const hasContacts = Object.values(profile.contacts).some(contact => contact !== null && contact !== '')
    const hasAboutMe = profile.aboutMe !== null ? `About me: ${profile.aboutMe}` : ''
    const hasStatusJob = profile.lookingForAJobDescription !== null? `Status Job:${profile.lookingForAJobDescription}` : ''

    return (
        <div>
            {/*<div className={s.wallImg}>*/}
            {/*    <img src="https://i.pinimg.com/originals/b0/47/48/b047482b30fe60adac38bbfe05fbe7f2.jpg"/>*/}
            {/*</div>*/}

            <div className={s.profileContainer}>
                <img className={s.avatar}
                     src={profile.photos.large !== null ? profile.photos.large : defaultAva}/>

                <div className={s.name}>
                    {profile.fullName}
                    <div className={s.status}>
                        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}
                                       setProfile={setProfile} profile={profile}
                                       getStatus={getStatus} autorizedUserId={autorizedUserId}
                                       isAuth={isAuth}
                        />
                    </div>
                    <div className={s.aboutMe}>{hasAboutMe}</div>
                </div>


                {hasContacts && <div className={s.contacts}>
                    <h3>My contacts: </h3>

                    {profile.contacts.github && <a href={profile.contacts.github}>GitHub</a>}

                    {profile.contacts.vk && <a href={profile.contacts.vk}>Vk</a>}

                    {profile.contacts.instagram && <a href={profile.contacts.instagram}>instagram</a>}

                    {profile.contacts.facebook && <a href={profile.contacts.facebook}>facebook</a>}

                    {profile.contacts.twitter && <a href={profile.contacts.twitter}>twitter</a>}

                    {profile.contacts.mainLink && <a href={profile.contacts.mainLink}>mainLink</a>}

                    {profile.contacts.youtube && <a href={profile.contacts.youtube}>youtube</a>}

                    {profile.contacts.website && <a href={profile.contacts.website}>website</a>}

                </div>}
            </div>

            <span className={s.statusJob}>{hasStatusJob}</span>

        </div>
    );
};

