import React, {FC} from 'react';
import {UserProfileType} from 'redux/redux-store';
import {createField, Input, Textarea} from 'components/common/FormsControl/FormsControl';
import {required} from 'utils/validators/validators';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from './ProfileDataForm.module.css'

// type Props = Partial<Pick<UsersProfilePropsType,   'isOwner' | 'profile' | 'status' | 'updateStatus' | 'savePhoto'>>;

type PropsType = {
    profile: UserProfileType
}

const ProfileDataForm: FC<InjectedFormProps<UserProfileType, PropsType> & PropsType> = ({
                                                                                            handleSubmit,
                                                                                            profile,
                                                                                            error
                                                                                        }) => {


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
                {error && <div className={s.formSummeryError}>{error}</div>}
            </div>

            <div>
                <b>Full Name: </b> {createField(Input, 'text', 'fullName', 'Enter you name', [required], null)}
            </div>


            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts)
                .map(key => {
                    return (
                        <div key={key}>
                            <b>{key}: {createField(Textarea, 'text', 'contacts.' + key, null, null, null)}</b>
                        </div>
                    )
                })}

            </div>

            <div><b>About me: </b> {createField(Textarea, 'text', 'aboutMe', 'Write about yourself', null, null)}</div>
            <div><b>Looking for a job: </b> {createField(Input, 'checkbox', 'lookingForAJob', null, null, null)}</div>
            <div><b>My professional
                skills: </b> {createField(Textarea, 'text', 'lookingForAJobDescription', 'Enter you skills', null, null)}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<UserProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm
