import React from 'react';
import {StorePropsType} from '../../../redux/redux-store';
import {addPostActionCreatorAC, updateNewPostTextActionCreatorAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';
import {useDispatch} from 'react-redux';

export type MyPostsType = {
    store: StorePropsType
    // dispatch: (action: RootActionsType) => void
    // posts: PostsProps[]
    // newPostText: string
}


export const MyPostsContainer = (props: MyPostsType) => {

    const state = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostActionCreatorAC())
    }


    const onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreatorAC(text)
        props.store.dispatch(action)
    }

    return (

        <MyPosts profilePage={state}
                 addPost={addPost}
                 updateNewPostText={onPostChange}
        />
    );
}

