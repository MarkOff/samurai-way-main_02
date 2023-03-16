import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {PostFormType, PostReduxForm} from '../PostForm/AddNewPostForm';


export const MyPosts = (props: MyPostsType) => {

    const state = props.profilePage

    const postsElement = state.posts.map((e) => {
        return (
            <Post key={e.id} message={e.message} counterLike={e.counterLike}/>
        )
    })


    const addPost = (values: PostFormType) => {
        props.addPost(values.newPostTextBody)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    );
}

