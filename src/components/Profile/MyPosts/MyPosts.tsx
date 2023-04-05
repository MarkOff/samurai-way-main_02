import React, {FC} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MyPostsType} from './MyPostsContainer';
import {PostFormType, PostReduxForm} from '../PostForm/AddNewPostForm';


export const MyPosts: FC<MyPostsType> = ({profilePost, addPost}) => {

    const postsElement = profilePost.map((e) => {
        return (
            <Post key={e.id} id={e.id} message={e.message} counterLike={e.counterLike}/>
        )
    })


    const createPost = (values: PostFormType) => {
        addPost(values.newPostTextBody)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={createPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    );
}

