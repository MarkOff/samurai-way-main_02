import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUserDataTC, logoutTC} from '../../redux/auth-reducer';


export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching?: boolean
}


type MapDispatchPropsType = {
    authMe: () => void
    logout: () => void
}


// Server Call ----------------------------------------------------------------------------------------------------------------------
class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        // this.props.setToggleIsFetch(true)
        this.props.authMe()

    }


    render() {
        const {
            login,
            isAuth,
            authMe,
            email,
            userId,
            logout,
        } = this.props
        return <Header authMe={authMe}
                       login={login}
                       isAuth={isAuth}
                       email={email}
                       userId={userId}
                       logout={logout}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps: MapDispatchPropsType = {
    authMe: getAuthUserDataTC,
    logout: logoutTC
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

