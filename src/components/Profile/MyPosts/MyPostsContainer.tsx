import React from 'react';
import {AppStateType} from 'redux/redux-store';
import {addPost} from 'redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {selectPost} from 'redux/selectors/profile.selectors';

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType


type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    addPost: (postFormBody: string) => void
}

// ---------------------------------------------------------------------------------------

let mapStateToProps = (state: AppStateType) => {
    return {
        profilePost: selectPost(state)
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)