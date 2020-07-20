import React from 'react';
import MyInfo from './MyInfo';
import { connect } from 'react-redux';
import {setUserProfile} from '../../../../Redux/profile-page-reducer';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class MyInfoContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId,
        {
            withCredentials: true
        })
        .then (response => {
                this.props.setUserProfile(response.data)
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