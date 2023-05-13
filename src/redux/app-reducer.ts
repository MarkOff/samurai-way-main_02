import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {getAuthUserDataTC} from './auth-reducer';


const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS'


const initialState = {
    initialized: false as boolean,
}

export const appReducer = (state = initialState, action: UniversalTypeForAppType): AppType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }

}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS,} as const)


export const initializeApp = () =>
    async (dispatch: ThunkDispatch<AppType, any, UniversalTypeForAppType | Action>) => {
        await dispatch(getAuthUserDataTC())
        dispatch(initializedSuccess())
    }


// Types-------------------------------------------------------------------------------------------
export type AppType = typeof initialState

export type UniversalTypeForAppType =
    | ReturnType<typeof initializedSuccess>