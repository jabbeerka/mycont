import React from 'react';
import MyInfo from './MyInfo';
import { connect } from 'react-redux';
import {setUserProfile} from '../../../../Redux/profile-page-reducer';
import { withRouter } from 'react-router-dom';
import { getProfileRequestAPI } from '../../../../API/API';

class MyInfoContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        getProfileRequestAPI(userId).then (data => {
                this.props.setUserProfile(data)
            })
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
let MyInfoContainerUrl = withRouter(MyInfoContainer)

export default connect(mapStateToProps, {setUserProfile})(MyInfoContainerUrl);