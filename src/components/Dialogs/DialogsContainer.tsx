import React, {ChangeEvent} from 'react';
import {StorePropsType} from '../../redux/redux-store';
import {onMessageChangeActionCreatorAC, sendMessageActionCreatorAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';

export type DialogsPropsType = {
    store: StorePropsType
    // messagePage: MessagesPageType
    // newMessageText: string
    // dispatch: (action: any) => void
}


export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState().messagesPage


    const onClickSendMessage = () => {
        props.store.dispatch(sendMessageActionCreatorAC())
    }

    const onMessageChange = (text: string) => {
        props.store.dispatch(onMessageChangeActionCreatorAC(text))
    }


    return (<Dialogs sendMessage={onClickSendMessage}
                     onMessageChange={onMessageChange}
                     messagesPage= {state}

        />
)
};


