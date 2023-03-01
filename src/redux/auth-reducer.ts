import {AuthType, MessagesPageType, UserType} from './redux-store';
import {v1} from 'uuid';
import {Dispatch} from 'react';
import {authAPI, userApi} from '../api/api';
import {setCurrentPage, setToggleIsFetch, setUsers, UniversalTypeForUserActions} from './users-reducer';


const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: AuthType = initialState, action: UniversalTypeForAuthType) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.dataUser,
                isAuth: true,
            }
        }
        default:
            return state
    }

}

export type UniversalTypeForAuthType =
    | ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: number, email: string, login: string) => (
    {
        type: SET_USER_DATA,
        dataUser: {
            userId,
            email,
            login,

        }
    } as const
)



export const getAuthUserData = () => {
    return (dispatch: Dispatch<UniversalTypeForAuthType>) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}