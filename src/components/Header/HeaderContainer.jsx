import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { authRequestAPI } from '../../API/API';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authRequestAPI().then (data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login);
            }
        })
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);