import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profileReducer, UniversalTypeForProfileActions} from './profile-reducer';
import {dialogsReducer, UniversalTypeForMessagesPageType} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {UniversalTypeForUserActions, usersReducer} from './users-reducer';
import {authReducer, UniversalTypeForAuthType} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './app-reducer';
import { composeWithDevTools } from '@redux-devtools/extension';
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: RootActionsType) => void
}

export type RootActionsType = UniversalTypeForMessagesPageType
    | UniversalTypeForProfileActions
    | UniversalTypeForUserActions
    | UniversalTypeForAuthType

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
    usersPage: UsersPageType
    header: HeaderType
}

export type ProfilePageType = {
    posts: PostsProps[]
    profile: UserProfileType | null
    status: string
    isOwner: boolean,
}

export type HeaderType = {
    auth: AuthType
}

export type AuthType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
    isFetching?: boolean
}

export type MessagesPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export type SidebarType = {
    friends: FriendsType[]
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

export type UserType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
    location: { city: string, country: string }
}

export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: null |string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: { small: string, large: string }
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


export type FriendsType = {
    id: string
    name: string
    ava: string
}

export type AppType = {
    initialized: boolean
}

//-------------------------------------------------------------------------
let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
);
export const store = createStore(reducer, enhancer)

// @ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof reducer>


