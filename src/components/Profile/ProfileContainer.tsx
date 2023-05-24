import React, {ComponentType} from 'react';
import {AppStateType} from 'redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {savePhoto, saveProfile, setProfile, setUserStatus, updateStatus} from 'redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AnyAction, compose} from 'redux';
import {selectOwner, selectProfile, selectStatus} from 'redux/selectors/profile.selectors';
import {selectIsAuth, selectUserId} from 'redux/selectors/auth.selectors';
import {withAuthRedirect} from 'hok/withAuthRedirect';
import {UserProfileType} from '../../types/commonTypes';
import {ThunkDispatch} from 'redux-thunk';


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamType>

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    setProfile: (userId: string) => void
    setUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: UserProfileType) => Promise<any>
}

type PathParamType = {
    userId: string
}

class ProfileContainer extends React.Component<UsersProfilePropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }

        }
        this.props.setProfile(userId)
        this.props.setUserStatus(userId)
    }

    componentDidMount() {

        this.refreshProfile()
    }

    componentDidUpdate(prevProps: UsersProfilePropsType) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        const {profile, updateStatus, status, savePhoto, saveProfile} = this.props

        return (
            <Profile profile={profile} savePhoto={savePhoto} updateStatus={updateStatus}
                     status={status} isOwner={!this.props.match.params.userId}
                     saveProfile={saveProfile}
            />
        )
    };
}


const mapStateToProps = (state: AppStateType) => {
    return {
        profile: selectProfile(state),
        status: selectStatus(state),
        authorizedUserId: selectUserId(state),
        isAuth: selectIsAuth(state),
        isOwner: selectOwner(state),

    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<AppStateType, void, AnyAction>): MapDispatchPropsType => {
    return {
        saveProfile: (profile: UserProfileType) => dispatch(saveProfile(profile)),
        setProfile: (userId: string | null) => dispatch(setProfile(userId)),
        setUserStatus: (userId: string) => dispatch(setUserStatus(userId)),
        updateStatus: (status: string) => dispatch(updateStatus(status)),
        savePhoto: (file: File) => dispatch(savePhoto(file))
    };
};

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, void, AppStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)

