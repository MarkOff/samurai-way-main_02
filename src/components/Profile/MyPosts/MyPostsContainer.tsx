import React, {ComponentType} from 'react';
import {AppStateType} from 'redux/redux-store';
import {addPost} from 'redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {selectPost} from 'redux/selectors/profile.selectors';
import { compose } from 'redux';


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


export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, void , AppStateType>(mapStateToProps, {addPost}))(MyPosts)