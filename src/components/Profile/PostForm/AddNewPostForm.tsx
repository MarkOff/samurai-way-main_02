import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControl/FormsControl';

export type PostFormType = {
    newPostTextBody: string
}

const max10symbols = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostTextBody" component={Textarea}
                       placeholder="Enter you text" validate={[required, max10symbols]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

export const PostReduxForm = reduxForm<PostFormType>({form: 'addPostForm'})(AddNewPostForm)