import {AuthType} from './redux-store';
import {Action, Dispatch} from 'redux';
import {authAPI} from 'api/api';
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';
import {ResultCode} from 'components/common/Enums/common.enums';


const SET_USER_DATA = 'AUTH/SET_USER_DATA'

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


export const getAuthUserDataTC = () =>
    async (dispatch: Dispatch<UniversalTypeForAuthType>) => {
        const response = await authAPI.me()
        if (response.data.resultCode === ResultCode.Success) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }


export const loginTC = (email: string, password: string, rememberMe: boolean) =>
    async (dispatch: ThunkDispatch<AuthType, any, UniversalTypeForAuthType | Action>) => {
        const response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === ResultCode.Success) {
            dispatch(getAuthUserDataTC())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
export const logoutTC = () =>
    async (dispatch: Dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === ResultCode.Success) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }