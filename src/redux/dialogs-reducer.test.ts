import {v1} from 'uuid';
import {dialogsReducer, MessagesPageType, sendMessage} from 'redux/dialogs-reducer';


let state: MessagesPageType = {
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
    ]
}

beforeEach(() => {
    state
})


test('send Message', () => {

    let action = sendMessage('Test message')

    let newState = dialogsReducer(state, action)

    expect(newState.messages.length).toBe(5)
    expect(newState.messages[4].message).toBe('Test message')

})


