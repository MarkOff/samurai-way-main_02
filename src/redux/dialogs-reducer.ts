import {MessagesPageType} from './redux-store';


const SEND_MESSAGE = 'SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    messages: [
        {id: '1', message: 'Hello, where is my money?'},
        {id: '2', message: 'Hi, go to travel'},
        {id: '3', message: 'How are you?'},
        {id: '4', message: 'Im fine, you?'}
    ],
    dialogs: [
        {
            id: '1',
            name: 'Vlad',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdOOA5xjQZ0YRma-ynNFyV_FW2jRW2pw87g&usqp=CAU'
        },
        {
            id: '2',
            name: 'Sergey',
            ava: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma.jpg'
        },
        {
            id: '3',
            name: 'Ivan',
            ava: 'https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg'
        },
        {
            id: '4',
            name: 'Vasa',
            ava: 'https://abrakadabra.fun/uploads/posts/2021-12/1639902118_3-abrakadabra-fun-p-ugarnie-avatarki-dlya-ks-3.png'
        },
    ],
    newMessageText: '',

}

export const dialogsReducer = (state: MessagesPageType = initialState, action: UniversalTypeForMessagesPageType) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = state.newMessageText
            state.newMessageText = ''
            state.messages.push({id: '6', message: newMessage})
            return state
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText
            return state
        }
        default:
            return state
    }

}

export type UniversalTypeForMessagesPageType =
    | ReturnType<typeof sendMessageActionCreatorAC>
    | ReturnType<typeof onMessageChangeActionCreatorAC>

export const sendMessageActionCreatorAC = () => ({type: SEND_MESSAGE} as const)


export const onMessageChangeActionCreatorAC = (text: string) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    } as const
)