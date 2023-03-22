import {AppType} from './redux-store';
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {getAuthUserDataTC} from './auth-reducer';


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
    initialized: false,
}

export const appReducer = (state: AppType = initialState, action: UniversalTypeForAppType) => {

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

export type UniversalTypeForAppType =
    | ReturnType<typeof initializedSuccess>



export const initializedSuccess = () => (
    {type: INITIALIZED_SUCCESS,} as const
)


export const initializeApp = () => (dispatch: ThunkDispatch<AppType, any, UniversalTypeForAppType | Action>) => {
    dispatch(getAuthUserDataTC())
        .then(() => {
            dispatch(initializedSuccess())
        })
}


