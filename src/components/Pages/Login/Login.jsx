import React from 'react';
import styles from './Login.module.sass';
import { reduxForm } from 'redux-form';
import { Element } from '../../../elements/Forms';
import { required, maxLengthCreator } from '../../../utils/validator';
import fieldCreator from '../../../utils/fieldCreator';

const maxLength15 = maxLengthCreator(30);
const Input = Element("input");


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
                {fieldCreator(styles.form__input, "login", "email", Input, [required, maxLength15])}
                {fieldCreator(styles.form__input, "password", "password", Input, [required, maxLength15], "password")}
                <div className={styles.form__input_checkbox}>
                    {fieldCreator(null, null, "rememberMe", Input, null, "checkbox")}<span>Remember me</span>
                </div>
                {captchaUrl && <img src={captchaUrl} alt="captcha"/> }
                {captchaUrl && fieldCreator(styles.form__input, "write symbols", "captcha", Input, [required]) }
                {error && <div className={styles.form__error} >{error}</div>}
                <button className={styles.form__button}>Sign in</button>
            </form>
    )
}
const Login = reduxForm({ form: "login" })(LoginForm)



export default Login;