import {ProfilePageType, UserProfileType} from './redux-store';
import {v1} from 'uuid';
import {profileApi} from 'api/api';
import {Dispatch} from 'react';
import {ResultCode} from 'components/common/Enums/common.enums';

const UPDATE_NEW_POST_TEXT = 'PROFILE/UPDATE_NEW_POST_TEXT'
const UPDATE_STATUS = 'PROFILE/UPDATE_STATUS'
const ADD_POST = 'PROFILE/ADD_POST'
const SET_USER_PROFILE = 'PROFILE/SET_USER_PROFILE'
const GET_USER_STATUS = 'PROFILE/GET_USER_STATUS'
const DELETE_POST = 'PROFILE/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'PROFILE/SAVE_PHOTO_SUCCESS'

const initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'Hi, it\'s  my first post', counterLike: '12'},
        {id: v1(), message: 'Hola, howe are you?', counterLike: '24'},
        {id: v1(), message: 'Yo!', counterLike: '11'},
        {id: v1(), message: 'GG', counterLike: '1'},
    ],
    profile: null,
    status: '',
    isOwner: false,
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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as UserProfileType

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
    | ReturnType<typeof savePhotoSuccess>


export const addPostAC = (postFormBody: string) => ({type: ADD_POST, postFormBody} as const)

export const deletePostAC = (postId: string) => ({type: DELETE_POST, postId} as const)

export const setUserProfile = (profile: UserProfileType) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserStatus = (status: string) => ({type: GET_USER_STATUS, status} as const)
export const savePhotoSuccess = (photos: { small: string, large: string }) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
} as const)


export const setProfileTC = (userId: string) =>
    async (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        const response = await profileApi.setProfile(userId)
        dispatch(setUserProfile(response.data))
    }


export const getUserStatusTC = (userId: string) =>
    async (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        const response = await profileApi.getStatus(userId)
        dispatch(getUserStatus(response.data))
    }


export const updateStatusTC = (status: string) =>
    async (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        const response = await profileApi.updateStatus(status)
        if (response.data.resultCode === ResultCode.Success) {
            dispatch(getUserStatus(status))
        }
    }
export const savePhoto = (file: File) =>
    async (dispatch: Dispatch<UniversalTypeForProfileActions>) => {
        const response = await profileApi.savePhoto(file)

        if (response.data.resultCode === ResultCode.Success) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
