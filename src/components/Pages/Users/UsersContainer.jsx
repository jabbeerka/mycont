import React from 'react'
import { connect } from 'react-redux';
import { requestUsers, toggleIsFetching, toggleIsFollowed, follow, unfollow } from '../../../Redux/users-page-reducer';
import userAvatar from '../../../images/users-avatar.png';
import Users from './Users';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getToggleIsFetching, getIsFollowingProgress } from '../../../Redux/selectors/users-selector';


class UsersAPIContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }
    setCurrentPage = (page) => {
        this.props.requestUsers(page, this.props.pageSize);
    }
    render() {
        const { toggleIsFollowed} = this.props
        return (
            <Users {...this.props} 
            setCurrentPage={this.setCurrentPage} 
            toggleIsFollowed={toggleIsFollowed} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        avatar: userAvatar,
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getToggleIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state)
    }
}
export default compose(connect(mapStateToProps,{ requestUsers, toggleIsFetching, toggleIsFollowed, follow, unfollow }))(UsersAPIContainer);