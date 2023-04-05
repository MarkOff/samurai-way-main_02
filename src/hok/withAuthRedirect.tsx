import React, {ComponentType} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from 'redux/redux-store';
import {selectIsAuth} from 'redux/selectors/auth.selectors';

// export const withAuthRedirect = (Component: any) => {
// class RedirectComponent extends React.Component {
//     render() {
//         if (!this.props.isAuth)
//             return <Redirect to={'/login'}/>
//             return <Component {...this.props}/>
//
//     }
// }
//
// };


type MapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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

    return connect(mapStateToProps)(RedirectComponent)
};