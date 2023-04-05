import {AppStateType} from '../redux-store';

export const selectPost = (state: AppStateType) => state.profilePage.posts
export const selectProfile = (state: AppStateType) => state.profilePage.profile
export const selectStatus = (state: AppStateType) => state.profilePage.status
