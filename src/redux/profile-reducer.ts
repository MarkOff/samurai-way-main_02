import {ProfilePageType} from './redux-store';

const ADD_POST = 'ADD_POST'
 const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: '1', message: 'Hi, it\'s  my first post', counterLike: '12'},
        {id: '2', message: 'Hola, howe are you?', counterLike: '24'},
        {id: '3', message: 'Yo!', counterLike: '11'},
        {id: '4', message: 'GG', counterLike: '1'},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: UniversalTypeForProfileActions) => {
     switch (action.type) {
        case ADD_POST :{
            let newPost = {
                id: '5',
                message: state.newPostText,
                counterLike: '0'
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        }

        case UPDATE_NEW_POST_TEXT : {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }

}

export type UniversalTypeForProfileActions =
    | ReturnType<typeof addPostActionCreatorAC>
    | ReturnType<typeof updateNewPostTextActionCreatorAC>



export const addPostActionCreatorAC = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreatorAC = (text: string) => (
    {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    } as const
)
