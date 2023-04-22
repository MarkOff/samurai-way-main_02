import React, {ChangeEvent, FC} from 'react';
import s from './MainAvatar.module.css';
import defaultAva from 'avatars/765-default-avatar.png';
import {UsersProfilePropsType} from 'components/Profile/ProfileContainer';

type Props = Partial<Pick<UsersProfilePropsType, 'profile' | 'isOwner' | 'savePhoto'>>;

export const MainAvatar: FC<Props> = ({profile,isOwner, savePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            if (savePhoto) {
                savePhoto(e.target.files[0])
            }
        }
    }

    const hasAvatar = profile?.photos.large !== null ? profile?.photos.large : defaultAva
    const onChangeAvatar = isOwner && <input type="file" onChange={onMainPhotoSelected} className={s.inputPhoto}/>

    return (
        <label className={isOwner ? s.labelPhoto : ''}>
            <img className={s.avatar} alt={'Main avatar'} aria-label="updload photo"
                 src={hasAvatar}/>
            {onChangeAvatar}
        </label>
    );
};

