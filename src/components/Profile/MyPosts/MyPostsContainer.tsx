import React from 'react';
import {AppStateType, PostsProps} from 'redux/redux-store';
import {addPostAC} from 'redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {selectPost} from 'redux/selectors/profile.selectors';

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType


type MapStateToPropsType = {
    profilePost: PostsProps[]
}

type MapDispatchToPropsType = {
    addPost: (postFormBody: string) => void
}

// ---------------------------------------------------------------------------------------

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePost: selectPost(state)
    }
}
let mapDispatchToProps: MapDispatchToPropsType = {
    addPost: addPostAC,
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)