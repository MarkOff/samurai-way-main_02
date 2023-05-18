import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './app-reducer';
import {composeWithDevTools} from '@redux-devtools/extension';


let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

const enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
);
export const store = createStore(reducer, enhancer)

// @ts-ignore
window.store = store

export type AppStateType = ReturnType<typeof reducer>


