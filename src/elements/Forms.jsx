import React from 'react';
import styles from './Elements.module.sass';

export const Element = (Element) => ({ input, className, placeholder, type, meta: { touched, error, warning }}) => {
    return (
        <>
            <Element className={className + " " + (touched && error ? className+"_error" : "")} {...input} placeholder={placeholder} type={type}/>
            {touched && ((error && <span className={styles.field__message_error}>{error}</span>) 
            || 
            (warning && <span className={styles.field__message_warning}>{warning}</span>))}
        </>
    )
}