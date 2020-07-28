import React from 'react'
import { connect } from 'react-redux';
import {getUsers,toggleIsFetching,toggleIsFollowed, getUsersThunk, currentPage, follow, unfollow} from '../../../Redux/users-page-reducer';
import header from '../../../images/users-header.png';
import userAvatar from '../../../images/users-avatar.png';
import Users from './Users';
import withAuthRedirect from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }
    setCurrentPage = (page) => {
        this.props.currentPage(page, this.props.pageSize);
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
} 
export default compose(
    connect(mapStateToProps,
        {getUsers,toggleIsFetching, toggleIsFollowed, getUsersThunk, currentPage, follow, unfollow}),
    withAuthRedirect
)(UsersAPIContainer);
// const UsersContainer = connect(mapStateToProps,
//     {getUsers,toggleIsFetching, toggleIsFollowed, getUsersThunk, currentPage, follow, unfollow})
//     (withAuthRedirect(UsersAPIContainer));