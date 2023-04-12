import React, {FormEvent} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from 'utils/validators/validators';
import {Textarea} from '../../common/FormsControl/FormsControl';

export type PostFormType = {
    newPostTextBody: string
}

const maxSymbols = maxLengthCreator(41)

const AddNewPostForm: React.FC<InjectedFormProps<PostFormType>> = React.memo((props) => {



    const submit = (e: FormEvent<HTMLFormElement>) => {
        props.handleSubmit(e)
        props.reset()
    }


    return (
        <form onSubmit={submit}>
            <div>
                <Field
                    name="newPostTextBody"
                    component={Textarea}
                    minLength={0}
                    maxLength={40}
                    placeholder="Enter you text"
                    validate={[required, maxSymbols]
                    }/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
})
export const PostReduxForm = reduxForm<PostFormType>({
    form: 'addPostForm',
    initialValues: {newPostTextBody: ''}


})(AddNewPostForm)