import React, {FC} from 'react';
import {UserProfileType} from 'redux/redux-store';
import s from './FullName.module.css'

type Props = Partial<Pick<UserProfileType, 'fullName'>>;

export const FullName: FC<Props> = ({fullName}) => {
    return (
        <div className={s.FullName}>
            {fullName}
        </div>
    );
};

