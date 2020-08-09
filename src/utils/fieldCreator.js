import React from 'react';
import { Field } from 'redux-form';

const fieldCreator = (className = "", placeholder = "", name = "", component, required = "", type = "type", props ) => {
    return (
        <Field
        {...props}
        className={className} 
        placeholder={placeholder} 
        name={name} 
        component={component} 
        validate={required}
        type={type}
         />
    )
}
export default fieldCreator;