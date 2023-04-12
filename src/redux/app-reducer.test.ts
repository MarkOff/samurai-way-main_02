import {AppType} from 'redux/redux-store';
import {appReducer, initializedSuccess} from 'redux/app-reducer';


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

let state: AppType = {
    initialized: false,
}

beforeEach(() => {
    state
})


test('follow Access', () => {

    let action = initializedSuccess()

    let newState = appReducer(state, action)

    expect(newState.initialized).toBe(true)

})

