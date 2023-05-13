import React from 'react';
import {AppStateType} from 'redux/redux-store';
import {DialogsType, MessagesPageType, MessagesType, sendMessageAC} from 'redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from 'hok/withAuthRedirect';
import {selectDialog, selectMessage} from 'redux/selectors/message.selectors';

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
        dialogs: selectDialog(state),
    }
}

let mapDispatchToProps: MapDispatchPropsType = {
        sendMessage: sendMessageAC
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)