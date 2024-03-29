import {v1} from 'uuid';
import {DialogType, MessageType} from '../types/commonTypes';


const SEND_MESSAGE = 'DIALOGS/SEND_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

const initialState = {
    messages: [
        {id: v1(), message: 'Hello, where is my money?'},
        {id: v1(), message: 'Hi, go to travel'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Im fine, you?'}
    ] as MessageType[],
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
    ] as DialogType[]
}

export const dialogsReducer = (state = initialState, action: UniversalTypeForMessagesPageType): MessagesPageType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessageBody}],
            }
        }
        default:
            return state
    }

}
export const sendMessage = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)

// Types------------------------------------------------------------------------------
export type MessagesPageType = typeof initialState

export type UniversalTypeForMessagesPageType =
    | ReturnType<typeof sendMessage>

