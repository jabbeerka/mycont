import React from 'react';
import styles from './Login.module.sass';
import { reduxForm, Field } from 'redux-form';
import { Element } from '../../../elements/Forms';
import { required, maxLengthCreator } from '../../../utils/validator';

const maxLength15 = maxLengthCreator(15);
const Input = Element("input")

const Login = (props) => {
    return (<div className={styles.form__wrapper}>
            <h1 className={styles.form__title}>Login</h1>
            <form onSubmit={props.handleSubmit} className={styles.form}>
                <div>
                    <Field className={styles.form__input} placeholder="login" name="login" component={Input} validate={[required, maxLength15]}/>
                </div>
                <div>
                    <Field className={styles.form__input} placeholder="password" name="password" component={Input} validate={[required, maxLength15]} />
                </div>
                <div className={styles.form__input_checkbox}>
                    <Field name="rememberMe" component={Input} type="checkbox"/> <span>Remember me</span>
                </div>
                <button className={styles.form__button}>Sign in</button>
            </form>
            </div>
        )
}
const ReduxLoginForm = reduxForm({form: "login"})(Login)

export default ReduxLoginForm;