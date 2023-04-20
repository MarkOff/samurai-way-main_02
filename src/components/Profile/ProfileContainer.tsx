import React from 'react';
import {AppStateType, UserProfileType} from 'redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserStatusTC, savePhoto, setProfileTC, updateStatusTC} from 'redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {selectOwner, selectProfile, selectStatus} from 'redux/selectors/profile.selectors';
import {selectIsAuth, selectUserId} from 'redux/selectors/auth.selectors';


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: UserProfileType | null
    status: string
    autorizedUserId: string | null
    isAuth: boolean
    isOwner: boolean

}


type MapDispatchPropsType = {
    setProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType


class ProfileContainer extends React.Component <PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.autorizedUserId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }

        }
        this.props.setProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        const {
            profile,
            setProfile,
            getStatus,
            updateStatus,
            status,
            autorizedUserId,
            isAuth,
            savePhoto
        } = this.props

        return (
            <Profile profile={profile} setProfile={setProfile} savePhoto={savePhoto}
                     getStatus={getStatus} updateStatus={updateStatus}
                     status={status} autorizedUserId={autorizedUserId}
                     isAuth={isAuth} isOwner={!this.props.match.params.userId}
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
        isOwner: selectOwner(state),

    }
}


const mapDispatchToProps: MapDispatchPropsType = {
    setProfile: setProfileTC,
    getStatus: getUserStatusTC,
    updateStatus: updateStatusTC,
    savePhoto: savePhoto
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)