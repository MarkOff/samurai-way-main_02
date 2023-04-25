import React from 'react';
import {AppStateType} from 'redux/redux-store';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logout} from 'redux/auth-reducer';
import {selectEmail, selectIsAuth, selectLogin, selectUserId} from 'redux/selectors/auth.selectors';


export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching?: boolean
}


type MapDispatchPropsType = {
    logout: () => void
}


// Server Call ----------------------------------------------------------------------------------------------------------------------
class HeaderContainer extends React.Component<HeaderPropsType> {

    render() {
        const {
            login,
            isAuth,
            email,
            userId,
            logout,
        } = this.props
        return <Header login={login}
                       isAuth={isAuth}
                       email={email}
                       userId={userId}
                       logout={logout}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: selectUserId(state),
        email: selectEmail(state),
        login: selectLogin(state),
        isAuth: selectIsAuth(state),
    }
}

const mapDispatchToProps: MapDispatchPropsType = {
    logout: logout
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

