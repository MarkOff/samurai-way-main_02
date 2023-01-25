import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesPageType} from '../../redux/redux-store';

export type DialogsPropsType = {
    messagesPage: MessagesPageType
    sendMessage: () => void
    onMessageChange: (text: string) => void
    // messagePage: MessagesPageType
    // newMessageText: string
    // dispatch: (action: any) => void
}


export const Dialogs = (props: DialogsPropsType) => {

    const state = props.messagesPage

    const dialogsElements = state.dialogs.map((e) => {
        return (
            <DialogItem ava={e.ava} id={e.id} name={e.name}/>
        )
    })

    const messageElements = state.messages.map((e) => {
        return (
            <Message id={e.id} message={e.message}/>
        )
    })


    const onClickSendMessage = () => {
        props.sendMessage()
        // props.store.dispatch(sendMessageActionCreatorAC())
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onMessageChange(text)
        // props.store.dispatch(onMessageChangeActionCreatorAC(text))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'}
                                   onChange={onMessageChange}
                                   value={state.newMessageText}/></div>
                    <div>
                        <button onClick={onClickSendMessage}>send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


