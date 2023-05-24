import React, {ComponentType} from 'react';
import {AppStateType} from 'redux/redux-store';
import {connect} from 'react-redux';
import {forPageSwitch, getUser, onFollowUser, onUnfollowUser, setFilter} from 'redux/users-reducer';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getUsersSelect,
    selectCurrentPage, selectFilter,
    selectFollowingInProgress,
    selectIsFetching,
    selectPageSize,
    selectTotalCount,
} from 'redux/selectors/user.selectors';


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = ReturnType<typeof mapStateToProps>


type MapDispatchPropsType = {
    getUser: (currentPage: number, pageSize: number) => void
    onFollowUser: (userId: string) => void
    onUnfollowUser: (userId: string) => void
    forPageSwitch: (currentPage: number, pageSize: number) => void
    setFilter: (filter: string) => void
}


// Server Call ----------------------------------------------------------------------------------------------------------------------
class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUser(currentPage, pageSize)
    }

    onSwitchPageHandler = (currentPage: number) => {
        const {pageSize} = this.props
        this.props.forPageSwitch(currentPage, pageSize)
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
            filter,
            setFilter
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
                    filter={filter}
                    setFilter={setFilter}
                />}
        </>
    }
}


//Connect to Store for 'UsersPage' -----------------------------------------------------------------------------------------------------------------------
const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSelect(state),
        filter: selectFilter(state),
        pageSize: selectPageSize(state),
        totalUserCount: selectTotalCount(state),
        currentPage: selectCurrentPage(state),
        isFetching: selectIsFetching(state),
        followingInProgress: selectFollowingInProgress(state),
    }
}
//HOK for UsersAPIComponent and next for Users(presentation component) --------------------------------------------------------------------------------------------------------------------------------------------------

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, void, AppStateType>(mapStateToProps, {
        getUser,
        onUnfollowUser,
        onFollowUser,
        forPageSwitch,
        setFilter
    }),
    // withAuthRedirect
)(UsersContainer)

