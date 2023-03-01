import {UserType, UsersPageType} from './redux-store';
import {v1} from 'uuid';
import {userApi} from '../api/api';
import {Dispatch} from 'react';

const STATUS_FOLLOW = 'STATUS_FOLLOW'
const STATUS_UNFOLLOW = 'STATUS_UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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
                users: state.users.map(el => el.id === action.userId ? {...el, followed: true} : el)
            }
        }
        case STATUS_UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userId ? {...el, followed: false} : el)
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


export const followAccess = (userId: string) => (
    {
        type: STATUS_FOLLOW,
        userId
    } as const
)

export const unfollowAccess = (userId: string) => (
    {
        type: STATUS_UNFOLLOW,
        userId
    } as const
)
export const setUsers = (users: UserType[]) => (
    {
        type: SET_USERS,
        users
    } as const
)
export const setCurrentPage = (currentPage: number) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)
export const setTotalUserCounts = (totalUsersCount: number) => (
    {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    } as const
)
export const setToggleIsFetch = (isFetching: boolean) => (
    {
        type: TOGGLE_IS_FETCH,
        isFetching
    } as const
)
export const statusFollowing = (userId: string, isFetching: boolean) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        userId,
        isFetching,
    } as const
)


// ThunkCreators ---------------------------------------------------------------------------------------------------------

export const getUser = (currentPage: number, pageSize: number) => {

    return (dispatch: Dispatch<UniversalTypeForUserActions>) => {

        dispatch(setToggleIsFetch(true))

        userApi.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setToggleIsFetch(false))
                dispatch(setUsers(response.data.items))
                dispatch(setTotalUserCounts(response.data.totalCount))
            })
    }
}


export const onFollowUser = (userId: string) => {

    return (dispatch: Dispatch<UniversalTypeForUserActions>) => {

        dispatch(statusFollowing(userId, true))

        userApi.followOnUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followAccess(userId))
                }
                dispatch(statusFollowing(userId, false))
            })
    }
}

export const onUnfollowUser = (userId: string) => {

    return (dispatch: Dispatch<UniversalTypeForUserActions>) => {

        dispatch(statusFollowing(userId, true))

        userApi.unfollowOnUser(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowAccess(userId))
                }
                dispatch(statusFollowing(userId, false))
            })
    }
}

export const forPageSwitch = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UniversalTypeForUserActions>) => {

        dispatch(setToggleIsFetch(true))
        dispatch(setCurrentPage(currentPage))

        userApi.getUsers(currentPage, pageSize)
            .then((response) => {
                dispatch(setToggleIsFetch(false))
                dispatch(setUsers(response.data.items))
            })
    }
}