import {AppStateType} from '../redux-store';

export const selectUserId = (state: AppStateType) => state.auth.userId
export const selectIsAuth = (state: AppStateType) => state.auth.isAuth
export const selectLogin = (state: AppStateType) => state.auth.login
export const selectEmail = (state: AppStateType) => state.auth.email

