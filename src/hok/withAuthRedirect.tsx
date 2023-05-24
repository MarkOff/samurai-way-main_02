import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {selectIsAuth} from 'redux/selectors/auth.selectors';


type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: selectIsAuth(state)
    }
}


export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component  {...restProps as T}/>
    }

    return connect<MapStateToPropsType, void, void, AppStateType>(mapStateToProps)(RedirectComponent)
};