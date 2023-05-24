import React, {ComponentType, FC} from 'react';
import {FormDataType, LoginReduxForm} from './LoginForm';
import {login} from 'redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {Redirect} from 'react-router-dom';
import {selectCaptcha, selectIsAuth} from 'redux/selectors/auth.selectors';
import {compose} from 'redux';


export const Login: FC<LoginContainerPropsType> = ({login, isAuth, captcha}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <p>
                To log in get registered{' '}
                <a href={'https://social-network.samuraijs.com/'} target={'_blank'} rel="noreferrer">
                    here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p> Email: free@samuraijs.com</p>
            <p>Password: free</p>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captcha}/>
        </div>
    )
        ;
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
export const LoginContainer = compose<ComponentType>( connect<MapStateToPropsType, MapDispatchToPropsType, void, AppStateType>(mapStateToProps, mapDispatchToProps))(Login)