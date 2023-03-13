import React from 'react';
import {AppStateType, ProfilePageType, RootActionsType} from '../../../redux/redux-store';
import {addPostAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType


type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: (postFormBody: string) => void
}

// ---------------------------------------------------------------------------------------

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch: Dispatch<RootActionsType>): MapDispatchToPropsType => {

    return {
        addPost: (postFormBody: string) => {
            dispatch(addPostAC(postFormBody))
        },

    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)