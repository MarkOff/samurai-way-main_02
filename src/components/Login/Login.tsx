import React from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {loginTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType, AuthType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';


export const Login = (props: LoginContainerPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}

export type LoginContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    login: loginTC,
}
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)