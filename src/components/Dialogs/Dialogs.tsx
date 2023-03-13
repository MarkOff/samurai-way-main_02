import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';
import {MessageForm, MessageReduxForm} from './DialogForm/MessageForm';


export const Dialogs = (props: DialogsPropsType) => {

    const state = props.messagesPage


    const dialogsElements = state.dialogs.map((e) => {
        return (
            <DialogItem key={e.id} ava={e.ava} id={e.id} name={e.name}/>
        )
    })

    const messageElements = state.messages.map((e) => {
        return (
            <Message key={e.id} id={e.id} message={e.message}/>
        )
    })


    const addMessage = (values:MessageForm) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <MessageReduxForm onSubmit={addMessage}/>

            </div>
        </div>
    );
};


