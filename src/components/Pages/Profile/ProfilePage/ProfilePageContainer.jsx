import React, { PureComponent } from 'react';
import ProfilePage from './ProfilePage';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, setPhoto, saveProfileInfo } from '../../../../Redux/profile-page-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfilePageContainer extends PureComponent {

    reloadProfilePage() {
        const { getProfile, getStatus, autorizhedId } = this.props
        let id = this.props.match.params.userId;
        if (!id) id = autorizhedId;
        if (!id) this.props.history.push('/login');
        getProfile(id);
        getStatus(id);
    }
    componentDidMount() {
        this.reloadProfilePage()
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.reloadProfilePage()
        }
    }
    render() {
        const { profile, status, updateStatus, setPhoto, saveProfileInfo } = this.props
        return (
            <ProfilePage {...this.props} profile={profile} status={status} updateStatus={updateStatus} savePhoto={setPhoto} isOwner={!this.props.match.params.userId} saveProfileInfo={saveProfileInfo} />
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
export default compose(connect(mapStateToProps, { getProfile, getStatus, updateStatus, setPhoto, saveProfileInfo }), withRouter)(ProfilePageContainer);