import {AuthType} from './redux-store';
import {Action, Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';


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
                ...action.payload,
            }
        }
        default:
            return state
    }

}

export type UniversalTypeForAuthType =
    | ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => (
    {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
)


export const getAuthUserDataTC = () => (dispatch: Dispatch<UniversalTypeForAuthType>) => {
   return  authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) =>
    (dispatch: ThunkDispatch<AuthType, any, UniversalTypeForAuthType | Action>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}