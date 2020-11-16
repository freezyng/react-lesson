import React from 'react';
import './FormsControls.css';

const FormComponent = Element => ({input, meta, ...props}) => {
const hasError = meta.touched && meta.error;

    return (
        <div className={`form-control ${hasError ? 'error' : '' }`}>
            <Element {...props} {...input} />
            {hasError ? <div>{meta.error}</div> : ''}
        </div>
    )
}

export {FormComponent}