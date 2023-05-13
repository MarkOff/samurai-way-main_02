import {Action, Dispatch} from 'redux';
import {authAPI, securityAPI} from 'api/api';
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from 'redux-form';
import {ResultCode} from 'components/common/Enums/common.enums';


const SET_USER_DATA = 'AUTH/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS'


const initialState = {
    userId: null as string | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}

export const authReducer = (state = initialState, action: UniversalTypeForAuthType): AuthType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }


        default:
            return state
    }

}


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

export const getCaptchaUrlSuccess = (captchaUrl: string | null) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
} as const)


export const getAuthUserDataTC = () =>
    async (dispatch: Dispatch<UniversalTypeForAuthType>) => {
        const response = await authAPI.me()
        if (response.data.resultCode === ResultCode.Success) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }


export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) =>
    async (dispatch: ThunkDispatch<AuthType, any, UniversalTypeForAuthType | Action>) => {
        const response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === ResultCode.Success) {
            dispatch(getAuthUserDataTC())
        } else {
            if (response.data.resultCode === ResultCode.Captcha) {
                return dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
export const logout = () =>
    async (dispatch: Dispatch) => {
        const response = await authAPI.logout()
        if (response.data.resultCode === ResultCode.Success) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }

export const getCaptchaUrl = () =>
    async (dispatch: Dispatch) => {
        const response = await securityAPI.captcha()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }

//Types -------------------------------------------------------------------------------------------------
export type AuthType = typeof initialState

export type UniversalTypeForAuthType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>