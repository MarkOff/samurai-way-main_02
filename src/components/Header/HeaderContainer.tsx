import React, {ComponentType} from 'react';
import {AppStateType} from 'redux/redux-store';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logout} from 'redux/auth-reducer';
import {selectEmail, selectIsAuth, selectLogin, selectUserId} from 'redux/selectors/auth.selectors';
import {compose} from 'redux';


export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = ReturnType<typeof mapStateToProps>


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

const mapStateToProps = (state: AppStateType) => {
    return {
        userId: selectUserId(state),
        email: selectEmail(state),
        login: selectLogin(state),
        isAuth: selectIsAuth(state),
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, void, AppStateType>(mapStateToProps, {logout}))(HeaderContainer)


