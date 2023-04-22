import React, {FC} from 'react';
import s from './StatusJob.module.css';
import {UsersProfilePropsType} from 'components/Profile/ProfileContainer';
import {UserProfileType} from 'redux/redux-store';

type Props = Partial<Pick<UserProfileType, 'lookingForAJobDescription' | 'lookingForAJob'>>;

export const StatusJob: FC<Props> = ({lookingForAJob, lookingForAJobDescription}) => {

    const hasStatusJob = lookingForAJobDescription !== null ?
        <><b>Status Job: </b>{lookingForAJobDescription}</> : null
    const onLookingForAJob = lookingForAJob ? 'yes' : 'no'
    const onStatusForAJob = lookingForAJob && <div className={s.statusJob}>{hasStatusJob}</div>
    return (
        <>
            <div className={s.statusJob}><b>Looking for a job: </b> {onLookingForAJob}</div>
            {onStatusForAJob}
        </>
    );
};

