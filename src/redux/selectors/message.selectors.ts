import {AppStateType} from '../redux-store';

export const selectMessage = (state: AppStateType) => state.messagesPage.messages
export const selectDialogs = (state: AppStateType) => state.messagesPage.dialogs

