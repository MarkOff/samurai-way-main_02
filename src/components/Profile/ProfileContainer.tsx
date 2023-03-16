import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserStatusTC, setProfileTC, updateStatusTC} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';


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
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
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