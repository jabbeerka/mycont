import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userLogin } from '../../../Redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import styles from './Login.module.sass';

const LoginContainer = ({ isAuth, userLogin, captchaUrl }) => {
    const onSubmit = (formData) => {
        userLogin(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return (
            <Redirect to={'/profile'} />)
    }
    return (
        <div className={styles.form__wrapper}>
            <h1 className={styles.form__title}>Login</h1>
            <Login onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose(connect(mapStateToProps, { userLogin }))(LoginContainer);