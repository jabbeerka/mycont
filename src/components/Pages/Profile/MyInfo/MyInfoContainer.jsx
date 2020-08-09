import React, { PureComponent } from 'react';
import MyInfo from './MyInfo';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../../../Redux/profile-page-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class MyInfoContainer extends PureComponent {
    componentDidMount() {
        const {getProfile, getStatus, autorizhedId} = this.props
        let id = this.props.match.params.userId;
        if (!id) id = autorizhedId;
        if (!id) this.props.history.push('/login');
        getProfile(id);
        getStatus(id);
    }
    render() {
        const {profile, status, updateStatus} = this.props
        return (
            <MyInfo {...this.props} profile={profile} status={status} updateStatus={updateStatus} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        autorizhedId: state.auth.userId
    }

}
export default compose(connect(mapStateToProps, { getProfile, getStatus, updateStatus }), withRouter)(MyInfoContainer);