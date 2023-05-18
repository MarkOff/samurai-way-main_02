import React, {FC} from 'react';
import s from './FullName.module.css'
import {UserProfileType} from '../../../../../types/commonTypes';

type Props = Partial<Pick<UserProfileType, 'fullName'>>;

export const FullName: FC<Props> = ({fullName}) => {
    return (
        <div className={s.FullName}>
            {fullName}
        </div>
    );
};

