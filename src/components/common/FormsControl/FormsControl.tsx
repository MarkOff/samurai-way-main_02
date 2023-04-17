import React, {ReactNode} from 'react';
import {WrappedFieldProps} from 'redux-form/lib/Field';
import s from './FormControl.module.css'
import {Field} from 'redux-form';


const FormControl = ({meta: {touched, error}, children}: WrappedFieldProps & { children: ReactNode }) => {
    const hasError = touched && error

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>

}


export const Input = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

export const createField = (component: (props: WrappedFieldProps) => JSX.Element, type: string | null,
                            name: string, placeholder: string | null, validate: any | null,
                            text: string | null) => {
    return <div className={s.input}>
        <Field component={component} type={type} name={name}
               placeholder={placeholder} validate={validate}

        /> {text}
    </div>
}