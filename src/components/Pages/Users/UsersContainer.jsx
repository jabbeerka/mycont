import React from 'react'
import { connect } from 'react-redux';
import {follow, unFollow, getUsers, setPage, setTotalUsers, toggleIsFetching} from '../../../Redux/users-page-reducer';
import header from '../../../images/users-header.png';
import userAvatar from '../../../images/users-avatar.png';
import Users from './Users';
import { getRequestAPI, followRequest } from '../../../API/API';



class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getRequestAPI(this.props.currentPage, this.props.pageSize)
        .then (data => {
                this.props.toggleIsFetching(false)
                this.props.getUsers(data.items);
                this.props.setTotalUsers(data.totalCount)
            })
    }
    setCurrentPage = (p) => {
        this.props.setPage(p);
        this.props.toggleIsFetching(true);
        getRequestAPI(p, this.props.pageSize).then (data => {
                this.props.toggleIsFetching(false)
                this.props.getUsers(data.items)
            })
    }
    render() {
            return (
                <Users {...this.props} setCurrentPage={this.setCurrentPage} followRequest={this.props.followRequest}/>
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
    }
}
const UsersContainer = connect(mapStateToProps,
    {follow, unFollow, getUsers, setPage, setTotalUsers, toggleIsFetching, followRequest})
    (UsersAPIContainer)
export default UsersContainer;