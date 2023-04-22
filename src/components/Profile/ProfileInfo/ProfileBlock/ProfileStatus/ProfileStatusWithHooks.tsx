import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './ProfileStatusWithHooks.module.css'


type Props = {
    status: string | undefined
    updateStatus: ((status: string) => void) | undefined
}

export const ProfileStatusWithHooks: FC<Props> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    useEffect(() => {
        setNewStatus(status)
    },[status])


    const onActiveEditMode = () => {
        setEditMode(true)
    }

    const onDeactivateEditeMode = () => {
        setEditMode(false)
        if (updateStatus) {
            updateStatus(newStatus!)
        }
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    const onHasStatus = !status && 'No status' || status && <><b>Status:</b> {status}</>

    return (
        <div className={s.status}>
            {!editMode &&
                <div title={'On double click change status'}>
                    <span onDoubleClick={onActiveEditMode}> {onHasStatus} </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={onDeactivateEditeMode} className={s.statusInput}
                           value={newStatus} placeholder={'change you status'} minLength={0} maxLength={30}/>
                </div>
            }
        </div>
    );
}

