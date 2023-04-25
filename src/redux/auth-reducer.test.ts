import {AuthType} from 'redux/redux-store';
import {followAccess, usersReducer} from 'redux/users-reducer';
import {authReducer, setAuthUserData} from 'redux/auth-reducer';


let state: AuthType = {
    userId: 'Test Id',
    email: 'Test Email',
    login: 'Test Login',
    isAuth: false,
    captchaUrl: null
}

beforeEach(() => {
    state
})


test('set Auth User Data', () => {

    let action = setAuthUserData(state.userId, state.email, state.login, state.isAuth)

    let newState = authReducer(state, action)

    expect(newState.isAuth).toBe(false)
    expect(newState.userId).toBe('Test Id')
    expect(newState.login).toBe('Test Login')
    expect(newState.email).toBe('Test Email')

})


