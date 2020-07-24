import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logined } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.logined();
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

export default connect(mapStateToProps, {logined})(HeaderContainer);