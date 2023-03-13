import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type MessageForm = {
    newMessageBody: string
}


const MessageForm: React.FC<InjectedFormProps<MessageForm>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody"
                       placeholder="Enter your message"/>
            </div>
            <div> <button>send message</button> </div>
        </form>
    )
}


export const MessageReduxForm = reduxForm<MessageForm>({form: 'addMessageForm'})(MessageForm)