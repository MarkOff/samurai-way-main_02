import {ProfilePageType, UserProfileType} from './redux-store';
import {v1} from 'uuid';
import {profileApi} from '../api/api';
import {Dispatch} from 'react';

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_USER_STATUS = 'GET_USER_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'
const DELETE_POST = 'DELETE_POST'

const initialState = {
    posts: [
        {id: v1(), message: 'Hi, it\'s  my first post', counterLike: '12'},
        {id: v1(), message: 'Hola, howe are you?', counterLike: '24'},
        {id: v1(), message: 'Yo!', counterLike: '11'},
        {id: v1(), message: 'GG', counterLike: '1'},
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: UniversalTypeForProfileActions) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [{id: v1(), message: action.postFormBody, counterLike: '0'}, ...state.posts]}
        }

        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(el => el.id !== action.postId)
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case GET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }

}

export type UniversalTypeForProfileActions =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof getUserStatus>
    | ReturnType<typeof deletePostAC>


export const addPostAC = (postFormBody: string) => ({type: ADD_POST, postFormBody} as const)

export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)

export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserStatus = (status: string) => ({type: GET_USER_STATUS, status} as const)


export const setProfileTC = (userId: string) => {
    return (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        profileApi.setProfile(userId)
            .then(response => dispatch(setUserProfile(response.data))
            )
    }

}

export const getUserStatusTC = (userId: string) => {
    return (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        profileApi.getStatus(userId)
            .then(response => dispatch(getUserStatus(response.data))
            )
    }
}

export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        profileApi.updateStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getUserStatus(status))
                    }
                }
            )
    }
}