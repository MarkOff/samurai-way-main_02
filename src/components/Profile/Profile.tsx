import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StorePropsType} from '../../redux/redux-store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    store: StorePropsType
    // profilePage: ProfilePageType
    // dispatch: (action: RootActionsType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPosts*/}
            {/*    posts={props.profilePage.posts}*/}
            {/*    newPostText ={props.profilePage.newPostText}*/}
            {/*    // dispatch={props.dispatch}*/}
            {/*/>*/}
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};

