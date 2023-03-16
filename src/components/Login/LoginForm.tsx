import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {Input} from '../common/FormsControl/FormsControl';
import s from './../common/FormsControl/FormControl.module.css'

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginFrom: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name="email" placeholder="email"
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} type="password" name="password" placeholder="password"
                       validate={[required]}
                />
            </div>
            <div>
                rememberMe:<Field component={Input} name="rememberMe" type="checkbox"/>
            </div>

            {props.error && <div className={s.formSummeryError}>{props.error}</div>}

            <div>
                <button>login</button>
            </div>
        </form>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginFrom)