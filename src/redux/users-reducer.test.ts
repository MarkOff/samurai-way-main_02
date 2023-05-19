import {
    followAccess,
    setCurrentPage,
    setToggleIsFetch,
    setTotalUserCounts,
    setUsers,
    statusFollowing,
    unfollowAccess, UsersPageType,
    usersReducer
} from 'redux/users-reducer';


let user = {
    user: [{
        name: 'Test user',
        id: '23233',
        uniqueUrlName: '2222',
        photos: {
            small: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            large: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'
        },
        status: 'Status test',
        followed: false,
        location: {city: 'test city', country: 'test country'}
    }
    ]
}

let state: UsersPageType = {
    users: user.user,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    filter: '',
    followingInProgress: []
}

beforeEach(() => {
    state
})


test('follow Access', () => {

    let action = followAccess('23233')

    let newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(true)

})

test('unfollow Access', () => {

    let action = unfollowAccess('23233')

    let newState = usersReducer(state, action)

    expect(newState.users[0].followed).toBe(false)

})

test('set Users', () => {

    let action = setUsers(state.users)

    let newState = usersReducer(state, action)

    expect(newState.users.length).toBe(1)
    expect(newState.users[0].name).toBe('Test user')
    expect(newState.users[0].id).toBe('23233')
    expect(newState.users[0].status).toBe('Status test')
    expect(newState.users[0].location.city).toBe('test city')
})

test('set Current Page', () => {

    let action = setCurrentPage(state.currentPage)

    let newState = usersReducer(state, action)

    expect(newState.currentPage).toBe(1)
})

test('set Total User Counts', () => {

    let action = setTotalUserCounts(state.totalUserCount)

    let newState = usersReducer(state, action)

    expect(newState.totalUserCount).toBe(0)
})

test('set Toggle Is Fetch', () => {

    let action = setToggleIsFetch(state.isFetching)

    let newState = usersReducer(state, action)

    expect(newState.isFetching).toBe(false)
})

test('status Following', () => {

    let action = statusFollowing(state.users[0].id, state.isFetching)

    let newState = usersReducer(state, action)

    expect(newState.isFetching).toBe(false)
})

