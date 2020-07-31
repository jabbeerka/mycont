import React from 'react';
import MyInfo from './MyInfo';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../../../Redux/profile-page-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class MyInfoContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
        this.props.getStatus(this.props.match.params.userId);
    }
    render() {
        return (
            <MyInfo {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
    
}
export default compose(connect(mapStateToProps, {getProfile, getStatus, updateStatus}),withRouter)(MyInfoContainer);