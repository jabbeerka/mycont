import React from 'react'
import { connect } from 'react-redux';
import {followAC, unFollowAC, getUsersAC, setPageAC, setTotalUsersAC} from '../../../Redux/users-page-reducer';
import header from '../../../images/users-header.png';
import userAvatar from '../../../images/users-avatar.png';
import * as axios from 'axios';
import Users from './Users';


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then (response => {
                this.props.getUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    setCurrentPage = (p) => {
        this.props.setPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then (response => {
                this.props.getUsers(response.data.items)
            })
    }
    render() {
        return <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        header={this.props.header}
        users={this.props.users}
        avatar={this.props.avatar}
        unFollow={this.props.unFollow}
        follow={this.props.follow}
        setCurrentPage={this.setCurrentPage}
        currentPage={this.props.currentPage}
         />
        }
}
let mapStateToProps = (state) => {
    return {
        header: header,
        avatar: userAvatar,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        getUsers: (users) => {
            dispatch(getUsersAC(users));
        },
        setPage: (currentPage) => {
            dispatch(setPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersAC(totalUsersCount))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)
export default UsersContainer;