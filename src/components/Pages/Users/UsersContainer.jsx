import React from 'react'
import { connect } from 'react-redux';
import {requestUsers,toggleIsFetching,toggleIsFollowed, follow, unfollow} from '../../../Redux/users-page-reducer';
import header from '../../../images/users-header.png';
import userAvatar from '../../../images/users-avatar.png';
import Users from './Users';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getToggleIsFetching, getIsFollowingProgress } from '../../../Redux/selectors/users-selector';


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }
    setCurrentPage = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
    }
    render() {
            return (
                <Users {...this.props} setCurrentPage={this.setCurrentPage} toggleIsFollowed={this.props.toggleIsFollowed}/>
            )
        }
}
let mapStateToProps = (state) => {
    return {
        header: header,
        avatar: userAvatar,
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getToggleIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
} 
export default compose(
    connect(mapStateToProps,
        {requestUsers,toggleIsFetching, toggleIsFollowed, follow, unfollow}),
    withAuthRedirect
)(UsersAPIContainer);
// const UsersContainer = connect(mapStateToProps,
//     {getUsers,toggleIsFetching, toggleIsFollowed, getUsersThunk, currentPage, follow, unfollow})
//     (withAuthRedirect(UsersAPIContainer));