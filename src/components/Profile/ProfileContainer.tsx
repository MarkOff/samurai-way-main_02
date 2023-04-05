import React from 'react';
import {AppStateType, UserProfileType} from 'redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserStatusTC, setProfileTC, updateStatusTC} from 'redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {selectProfile, selectStatus} from 'redux/selectors/profile.selectors';
import {selectIsAuth, selectUserId} from 'redux/selectors/auth.selectors';


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: UserProfileType | null
    status: string
    autorizedUserId: string | null
    isAuth: boolean
}


type MapDispatchPropsType = {
    setProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType



class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.autorizedUserId) {
            userId = this.props.autorizedUserId;
            if (!userId ) {
                this.props.history.push('/login')
            }

        }
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        const {
            profile,
            setProfile,
            getStatus,
            updateStatus,
            status,
            autorizedUserId,
            isAuth
        } = this.props

        return (
            <Profile profile={profile} setProfile={setProfile}
                     getStatus={getStatus} updateStatus={updateStatus}
                     status={status} autorizedUserId={autorizedUserId}
                     isAuth={isAuth}
            />
        )
    };
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: selectProfile(state),
        status: selectStatus(state),
        autorizedUserId: selectUserId(state),
        isAuth: selectIsAuth(state),
    }
}


const mapDispatchToProps: MapDispatchPropsType = {
    setProfile: setProfileTC,
    getStatus: getUserStatusTC,
    updateStatus: updateStatusTC,
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)