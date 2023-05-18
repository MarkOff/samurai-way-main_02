import React, {FC} from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from '../../../types/commonTypes';




export const Message: FC<MessageType> = ({message,id}) => {
    return (
        <div className={s.messages} id={id}>
            {message}
        </div>
    )
}

