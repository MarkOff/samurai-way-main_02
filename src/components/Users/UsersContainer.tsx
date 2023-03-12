import React from 'react';
import {AppStateType, UserType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {forPageSwitch, getUser, onFollowUser, onUnfollowUser} from '../../redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hok/withAuthRedirect';
import {compose} from 'redux';


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}


type MapDispatchPropsType = {
    getUser: (currentPage: number, pageSize: number) => void
    onFollowUser: (userId: string) => void
    onUnfollowUser: (userId: string) => void
    forPageSwitch: (currentPage: number, pageSize: number) => void
}


// Server Call ----------------------------------------------------------------------------------------------------------------------
class UsersContainer extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onFollowHandler = (userId: string) => {
        this.props.onFollowUser(userId)
    }

    onUnfollowHandler = (userId: string) => {
        this.props.onUnfollowUser(userId)

    }
    onSwitchPageHandler = (currentPage: number) => {
        this.props.forPageSwitch(currentPage, this.props.pageSize)
    }

    render() {
        const {
            users,
            totalUserCount,
            currentPage,
            pageSize,
            isFetching,
            followingInProgress,
            getUser,
            onUnfollowUser,
            onFollowUser,
            forPageSwitch,
        } = this.props

        return <>
            {isFetching
                ? <Preloader/>
                : <Users
                    users={users}
                    isFetching={isFetching}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    totalUserCount={totalUserCount}
                    followingInProgress={followingInProgress}
                    getUser={getUser}
                    onUnfollowUser={onUnfollowUser}
                    onFollowUser={onFollowUser}
                    forPageSwitch={forPageSwitch}
                />}
        </>
    }
}


//Connect to Store for 'UsersPage' -----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

const mapDispatchToProps: MapDispatchPropsType = {
    getUser: getUser,
    onUnfollowUser: onUnfollowUser,
    onFollowUser: onFollowUser,
    forPageSwitch: forPageSwitch,
}

//HOK for UsersAPIComponent and next for Users(presentation component) --------------------------------------------------------------------------------------------------------------------------------------------------

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(UsersContainer)

// let mapDispatchToProps = (dispatch: Dispatch<RootActionsType>): MapDispatchPropsType => {
//     return {
//         followUser: (userId: string) => {
//             dispatch(followUser(userId))
//         },
//         unfollowUser: (userId: string) => {
//             dispatch(unfollowUser(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUserCounts: (totalCount: number) => {
//             dispatch(setTotalUserCounts(totalCount))
//         },
//         setToggleIsFetch: (isFetching: boolean) => {
//             dispatch(setToggleIsFetch(isFetching))
//         }
//     }
// }