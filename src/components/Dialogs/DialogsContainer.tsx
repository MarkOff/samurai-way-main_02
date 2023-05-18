import React from 'react';
import {AppStateType} from 'redux/redux-store';
import {sendMessage} from 'redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from 'hok/withAuthRedirect';
import {selectDialogs} from 'redux/selectors/message.selectors';

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) => void
}


let mapStateToProps = (state: AppStateType) => {
    return {
        mainDialogs: selectDialogs(state)
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs)