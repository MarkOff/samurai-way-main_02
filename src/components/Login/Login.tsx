import React, {FC} from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {login} from 'redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {Redirect} from 'react-router-dom';
import {selectCaptcha, selectIsAuth} from 'redux/selectors/auth.selectors';


export const Login: FC<LoginContainerPropsType> = ({login, isAuth, captcha}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captcha}/>
        </div>
    );
};


type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void

}
type MapStateToPropsType = {
    isAuth: boolean
    captcha: string | null
}

export type LoginContainerPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: selectIsAuth(state),
        captcha: selectCaptcha(state),
    }
}
const mapDispatchToProps: MapDispatchToPropsType = {
    login: login,
}
export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)