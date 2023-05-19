import {AppStateType} from '../redux-store';
import {createSelector} from 'reselect';

 const selectUsers = (state: AppStateType) => state.usersPage.users

export const getUsersSelect = createSelector(selectUsers, (users) => {
    return users.filter(u => true)
})

export const selectPageSize = (state: AppStateType) => state.usersPage.pageSize
export const selectCurrentPage = (state: AppStateType) => state.usersPage.currentPage
export const selectIsFetching = (state: AppStateType) => state.usersPage.isFetching
export const selectFollowingInProgress = (state: AppStateType) => state.usersPage.followingInProgress
export const selectTotalCount = (state: AppStateType) => state.usersPage.totalUserCount
export const selectFilter = (state: AppStateType) => state.usersPage.filter
