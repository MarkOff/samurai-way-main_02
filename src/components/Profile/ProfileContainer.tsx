import React from 'react';
import {AppStateType, UserProfileType} from '../../redux/redux-store';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {setProfile} from '../../redux/profile-reducer';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


export type UsersProfilePropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    profile: UserProfileType | null
    isAuth: boolean
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
        if (!userId){
            userId = '27651';
        }
        this.props.setProfile(userId)
     }

    render() {
        const {
            profile,
            setProfile,
            isAuth
        } = this.props

        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile isAuth={isAuth} profile={profile} setProfile={setProfile}  />
    )
    };
};



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}


const mapDispatchToProps: MapDispatchPropsType = {
    setProfile,
}

let urlProfile = withRouter(ProfileContainer)

export default connect (mapStateToProps, mapDispatchToProps) (urlProfile)