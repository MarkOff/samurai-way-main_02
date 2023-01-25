import React from 'react';
import {combineReducers, createStore} from 'redux';
import {profileReducer, UniversalTypeForProfileActions} from './profile-reducer';
import {dialogsReducer, UniversalTypeForMessagesPageType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type StorePropsType = {
    _state: StatePropsType
    getState: () => StatePropsType
    _callSubscriber: (state: StatePropsType) => void
    subscribe: (observer: (state: StatePropsType) => void) => void
    dispatch: (action: RootActionsType) => void
}

export type RootActionsType =  UniversalTypeForMessagesPageType | UniversalTypeForProfileActions

export type StatePropsType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType

}

export type ProfilePageType = {
    posts: PostsProps[]
    newPostText: string


}
export type MessagesPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}

export type PostsProps = {
    id: string
    message: string
    counterLike: string
}

export type MessagesType = {
    id: string
    message: string
}

export type  DialogsType = {
    id: string
    name: string
    ava: string
}

export type SidebarType = {
    friends: FriendsType[]
}

export type FriendsType = {
    id: string
    name: string
    ava: string
}


//-------------------------------------------------------------------------
let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store:StorePropsType = createStore(reducer)