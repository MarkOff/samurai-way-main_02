import React, {ReactElement, ReactNode} from 'react';
import {WrappedFieldProps} from 'redux-form/lib/Field';
import s from './FormControl.module.css'


// type TextareaPropsType = WrappedFieldProps & {
// }

const FormControl =  ({input, meta, ...props}: WrappedFieldProps& {children:ReactNode}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formControl} ${hasError? s.error : ''}`}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>

}


export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return  <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}