import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
    console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};




const LoginFrom: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="login" placeholder="login"/>
            </div>
            <div>
                <Field component="input" type='password' name="password" placeholder="password"/>
            </div>
            <div>
               rememberMe: <Field component="input" name="rememberMe" type="checkbox"/>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginFrom)