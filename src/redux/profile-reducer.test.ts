import {addPostAC, deletePostAC, getUserStatus, profileReducer, setUserProfile} from 'redux/profile-reducer';
import {v1} from 'uuid';
import {ProfilePageType, UserProfileType} from 'redux/redux-store';


let state: ProfilePageType = {posts: [], profile: null, status: ''}

beforeEach(() => {
    state = {
        posts: [
            {id: v1(), message: 'Hi, it\'s  my first post', counterLike: '12'},
            {id: v1(), message: 'Hola, howe are you?', counterLike: '24'},
            {id: v1(), message: 'Yo!', counterLike: '11'},
            {id: v1(), message: 'GG', counterLike: '1'},
        ],
        profile: null,
        status: ''
    }
})


test('add new Post', () => {

    let action = addPostAC('New post done')

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
    expect(newState.posts[0].message).toBe('New post done')
    expect(newState.posts[0].counterLike).toBe('0')
})


test('delete new Post', () => {

    let action = deletePostAC(state.posts[0].id)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[0].message).toBe('Hola, howe are you?')
})

test('set User profile', () => {
    const profile: UserProfileType = {
        aboutMe: 'Im User',
        contacts: {
            facebook: 'https://facebook.com/',
            website: 'https://random.com/',
            vk: 'https://vk.com/id135086996',
            twitter: 'https://twitter.com/',
            instagram: 'https://instagram.com/',
            youtube: 'https://youtube.com/',
            github: 'https://github.com/MarkOff',
            mainLink: 'https://mainLink.com/'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'test job',
        fullName: 'Test User',
        userId: +v1(),
        photos: {
            small: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            large: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'
        }
    }


    let action = setUserProfile(profile)

    let newState = profileReducer(state, action)

    expect(newState.profile?.aboutMe).toBe('Im User')
    expect(newState.profile?.contacts.github).toBe('https://github.com/MarkOff')
    expect(newState.profile?.lookingForAJob).toBe(true)
    expect(newState.profile?.lookingForAJobDescription).toBe('test job')
    expect(newState.profile?.fullName).toBe('Test User')
})

test('set Status', () => {

    let action = getUserStatus('Hello test')

    let newState = profileReducer(state, action)

    expect(newState.status).toBe('Hello test')
    expect(newState.status.length).toBe(10)
})




