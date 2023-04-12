import React, {FormEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from 'utils/validators/validators';
import {Textarea} from '../../common/FormsControl/FormsControl';

export type MessageForm = {
    newMessageBody: string
}

const max50symbols = maxLengthCreator(50)



const MessageForm: React.FC<InjectedFormProps<MessageForm>> = (props) => {
    const submit = (e:FormEvent<HTMLFormElement>) =>{
        props.handleSubmit(e)
        props.reset()
    }

    return (
        <form onSubmit={submit}>
            <div>
                <Field component={Textarea} name="newMessageBody"
                       placeholder="Enter your message" validate={[required, max50symbols]}/>
            </div>
            <div> <button>send message</button> </div>
        </form>
    )
}


export const MessageReduxForm = reduxForm<MessageForm>({form: 'addMessageForm'})(MessageForm)