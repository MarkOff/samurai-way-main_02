import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from 'utils/validators/validators';
import {createField, Input} from '../common/FormsControl/FormsControl';
import s from './../common/FormsControl/FormControl.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}




const LoginFrom: FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

            {createField(Input, null, 'email', 'email', [required], null)}
            {createField(Input, 'password', 'password', 'password', [required], null)}
            {createField(Input, 'checkbox', 'rememberMe', null, null, 'rememberMe')}

            {error && <div className={s.formSummeryError}>{error}</div>}

            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginFrom)