import {MessagesPageType} from './redux-store';
import {v1} from 'uuid';


const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    messages: [
        {id: v1(), message: 'Hello, where is my money?'},
        {id: v1(), message: 'Hi, go to travel'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Im fine, you?'}
    ],
    dialogs: [
        {
            id: v1(),
            name: 'Vlad',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdOOA5xjQZ0YRma-ynNFyV_FW2jRW2pw87g&usqp=CAU'
        },
        {
            id: v1(),
            name: 'Sergey',
            ava: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg'
        },
        {
            id: v1(),
            name: 'Ivan',
            ava: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg'
        },
        {
            id: v1(),
            name: 'Vasa',
            ava: 'https://abrakadabra.fun/uploads/posts/2021-12/1639902118_3-abrakadabra-fun-p-ugarnie-avatarki-dlya-ks-3.png'
        },
    ],
    newMessageText: '',
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: UniversalTypeForMessagesPageType) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state
    }

}

export type UniversalTypeForMessagesPageType =
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof onMessageChangeAC>

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const)


export const onMessageChangeAC = (text: string) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    } as const
)