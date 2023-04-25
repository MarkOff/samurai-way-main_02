import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from 'redux-form';
import {required} from 'utils/validators/validators';
import {createField, Input} from '../common/FormsControl/FormsControl';
import s from './../common/FormsControl/FormControl.module.css'
import {UserProfileType} from 'redux/redux-store';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type Props = {
    captchaUrl: string | null
}


const LoginForm: FC<InjectedFormProps<FormDataType> & Props> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>

            {createField(Input, 'text', 'email', 'email', [required], null)}
            {createField(Input, 'password', 'password', 'password', [required], null)}
            {createField(Input, 'checkbox', 'rememberMe', null, null, 'rememberMe')}

            {captchaUrl && <img src={captchaUrl} alt={'captcha-bot'}/>}
            {captchaUrl && createField(Input, 'text', 'captcha', 'enter text from image', [required], null)}

            {error && <div className={s.formSummeryError}>{error}</div>}

            <div>
                <button>login</button>
            </div>
        </form>
    )
}

// @ts-ignore
export const LoginReduxForm = reduxForm<FormDataType, Props>({form: 'login'})(LoginForm)