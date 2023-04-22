import React, {FC} from 'react';
import s from './AboutMe.module.css';
import {UsersProfilePropsType} from 'components/Profile/ProfileContainer';
import {UserProfileType} from 'redux/redux-store';

type Props = Partial<Pick<UserProfileType, 'aboutMe'>>;

export const AboutMe: FC<Props> = ({aboutMe}) => {
    const hasAboutMe = aboutMe !== null ? <><b>About me: </b>{aboutMe}</> : null
    return (
        <div className={s.aboutMe}>{hasAboutMe}</div>
    );
};

