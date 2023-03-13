import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type PostFormType = {
    postFormBody: string
}

const AddNewPostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostTextBody" component="textarea" placeholder="Enter you text"/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

export const PostReduxForm = reduxForm<PostFormType>({form: 'addPostForm'})(AddNewPostForm)