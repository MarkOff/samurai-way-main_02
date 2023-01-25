import React, {useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsProps, ProfilePageType} from '../../../redux/redux-store';

export type MyPostsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (text: string) => void
}



export const MyPosts = (props: MyPostsType) => {

    const state = props.profilePage

    const postsElement = state.posts.map((e) => {
        return (
            <Post message={e.message} counterLike={e.counterLike}/>
        )
    })

    const newPostEl = useRef<HTMLTextAreaElement>(null)

    const addPost = () => {
        props.addPost()
    }


    const onPostChange = () => {
        let text = newPostEl.current?.value
        if(text){
            props.updateNewPostText(text)
            }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostEl} value={state.newPostText}/>

            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElement}
            </div>

        </div>
    );
}

