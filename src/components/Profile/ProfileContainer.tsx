import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {setProfile} from '../../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: UserProfileType | null
}


type MapDispatchPropsType = {
    setProfile: (userId: string) => void
}

type PathParamType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamType> & UsersProfilePropsType

// type  CommonResponse = {
//     profile: UserProfileType
// }


class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '27651';
        }
        this.props.setProfile(userId)
    }

    render() {
        const {
            profile,
            setProfile,
        } = this.props


        return (
            <Profile profile={profile} setProfile={setProfile}/>
        )
    };
};


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


const mapDispatchToProps: MapDispatchPropsType = {
    setProfile,
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)