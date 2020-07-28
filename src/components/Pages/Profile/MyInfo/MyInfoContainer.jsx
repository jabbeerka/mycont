import React from 'react';
import MyInfo from './MyInfo';
import { connect } from 'react-redux';
import { getProfile } from '../../../../Redux/profile-page-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class MyInfoContainer extends React.Component {
    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId);
    }
    render() {
        return (
            <MyInfo {...this.props} profile={this.props.profile}/>
            )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
    
}
export default compose(connect(mapStateToProps, {getProfile}),withRouter)(MyInfoContainer);