import React from 'react';
import {AppStateType, DialogsType, MessagesPageType, MessagesType, RootActionsType} from 'redux/redux-store';
import {sendMessageAC} from 'redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from 'hok/withAuthRedirect';
import {selectDialogs, selectMessage} from 'redux/selectors/message.selectors';

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType


type MapStatePropsType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}

// ---------------------------------------------------------------------------------------


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: selectMessage(state),
        dialogs: selectDialogs(state),
    }
}

let mapDispatchToProps: MapDispatchPropsType = {
        sendMessage: sendMessageAC
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)