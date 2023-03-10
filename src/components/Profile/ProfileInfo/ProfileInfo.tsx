import React from 'react';
import s from './ProfileInfo.module.css';
import {UsersProfilePropsType} from '../ProfileContainer';
import {Preloader} from '../../common/Preloader/Preloader';
import defaultAva from '../../../avatars/765-default-avatar.png'
import {ProfileStatus} from './ProfileStatus';

export const ProfileInfo = (props: UsersProfilePropsType) => {
    const {profile, getStatus, setProfile, updateStatus, status} = props

    if (!profile) {
        return <Preloader/>
    }

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
                        <ProfileStatus status={status} updateStatus={updateStatus}
                                              setProfile={setProfile} profile={profile}
                                              getStatus={getStatus}/>
                    </div>
                    <div className={s.aboutMe}>About me: {profile.aboutMe} </div>
                </div>


                <div className={s.contacts}>
                    <h3>My contacts:</h3>

                    <div>{profile.contacts.github && <a href={profile.contacts.github}>GitHub</a>}</div>

                    <div>{profile.contacts.vk && <a href={profile.contacts.vk}>Vk</a>}</div>

                    <div>{profile.contacts.instagram && <a href={profile.contacts.instagram}>instagram</a>}</div>

                    <div>{profile.contacts.facebook && <a href={profile.contacts.facebook}>facebook</a>}</div>

                    <div>{profile.contacts.twitter && <a href={profile.contacts.twitter}>twitter</a>}</div>

                    <div>{profile.contacts.mainLink && <a href={profile.contacts.mainLink}>mainLink</a>}</div>

                    <div>{profile.contacts.youtube && <a href={profile.contacts.youtube}>youtube</a>}</div>

                    <div>{profile.contacts.website && <a href={profile.contacts.website}>website</a>}</div>

                </div>
            </div>


            <div className={s.statusJob}>Status Job: {profile.lookingForAJobDescription}</div>


        </div>
    );
};

