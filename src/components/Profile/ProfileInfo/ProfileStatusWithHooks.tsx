import React, {ChangeEvent, FC, useState} from 'react';
import {UsersProfilePropsType} from '../ProfileContainer';

export const ProfileStatusWithHooks: FC<UsersProfilePropsType> = ({status, updateStatus}) => {
    const [editMode, setEditMode] = useState(false)
    const [newStatus, setNewStatus] = useState(status)

    const onActiveEditMode = () => {
        setEditMode(true)
    }

    const onDeactivateEditeMode = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStatus(e.currentTarget.value)
    }

    const onHasStatus = !status && 'No status' || status && `status: ${status}`

    return (
        <div>
            {!editMode &&
                <div>
                    {/*<span onDoubleClick={this.activateEditeMode}> {`status: ${this.props.status}` || 'No status'}</span>*/}
                    <span onDoubleClick={onActiveEditMode}> {onHasStatus} </span>

                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={onDeactivateEditeMode}
                           value={newStatus} placeholder={'change you status'}/>
                </div>
            }
        </div>
    );
}

