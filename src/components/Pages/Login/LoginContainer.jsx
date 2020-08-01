import React from 'react';
import ReduxLoginForm from './Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userLogin } from '../../../Redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const LoginContainer = (props) => {
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <ReduxLoginForm onSubmit={props.userLogin}/>
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default compose(connect(mapStateToProps,{userLogin}))(LoginContainer);