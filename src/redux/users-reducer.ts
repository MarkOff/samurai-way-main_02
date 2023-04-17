import {UsersPageType, UserType} from './redux-store';
import {userApi} from '../api/api';
import {Dispatch} from 'react';
import {updateObjectInArray} from 'utils/object-helpers';
import {ResultCode} from 'components/common/Enums/common.enums';

const STATUS_FOLLOW = 'USER/STATUS_FOLLOW'
const STATUS_UNFOLLOW = 'USER/STATUS_UNFOLLOW'
const SET_USERS = 'USER/SET_USERS'
const SET_CURRENT_PAGE = 'USER/SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'USER/SET_TOTAL_COUNT'
const TOGGLE_IS_FETCH = 'USER/TOGGLE_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USER/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UniversalTypeForUserActions) => {
    switch (action.type) {
        case STATUS_FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray<UserType>(state.users, action.userId,'id',{followed:true})

            }
        }
        case STATUS_UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray<UserType>(state.users, action.userId,'id',{followed:false})
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }

        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }

        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCH: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        }

        default:
            return state
    }

}

// ActionCreators ---------------------------------------------------------------------------------------------------------
export type UniversalTypeForUserActions =
    | ReturnType<typeof followAccess>
    | ReturnType<typeof unfollowAccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCounts>
    | ReturnType<typeof setToggleIsFetch>
    | ReturnType<typeof statusFollowing>


export const followAccess = (userId: string) => ({type: STATUS_FOLLOW, userId} as const)
export const unfollowAccess = (userId: string) => ({type: STATUS_UNFOLLOW, userId} as const)
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCounts = (totalUsersCount: number) => ({type: SET_TOTAL_COUNT, totalUsersCount} as const)
export const setToggleIsFetch = (isFetching: boolean) => ({type: TOGGLE_IS_FETCH, isFetching} as const)
export const statusFollowing = (userId: string, isFetching: boolean) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    userId,
    isFetching,
} as const)


// ThunkCreators ---------------------------------------------------------------------------------------------------------

export const getUser = (page: number, pageSize: number) => {

    return async (dispatch: Dispatch<UniversalTypeForUserActions>) => {

        dispatch(setToggleIsFetch(true))
        dispatch(setCurrentPage(page))
        const response = await userApi.getUsers(page, pageSize)
        dispatch(setToggleIsFetch(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUserCounts(response.data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<UniversalTypeForUserActions>, userId: string,
                                  apiMethod: (userId: string) => Promise<any>, actionCreator: (userId: string) => UniversalTypeForUserActions) => {
    dispatch(statusFollowing(userId, true))
    const response = await apiMethod(userId)
    if (response.data.resultCode === ResultCode.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(statusFollowing(userId, false))
}


export const onFollowUser = (userId: string) =>
    async (dispatch: Dispatch<UniversalTypeForUserActions>) => {
        const apiMethod = userApi.followOnUser.bind(userApi)
        followUnfollowFlow(dispatch, userId, apiMethod, followAccess)
    }


export const onUnfollowUser = (userId: string) =>
    async (dispatch: Dispatch<UniversalTypeForUserActions>) => {
        const apiMethod = userApi.unfollowOnUser.bind(userApi)
        followUnfollowFlow(dispatch, userId, apiMethod, unfollowAccess)
    }


export const forPageSwitch = (currentPage: number, pageSize: number) =>
    async (dispatch: Dispatch<UniversalTypeForUserActions>) => {

        dispatch(setToggleIsFetch(true))
        dispatch(setCurrentPage(currentPage))

        const response = await userApi.getUsers(currentPage, pageSize)
        dispatch(setToggleIsFetch(false))
        dispatch(setUsers(response.data.items))
    }
