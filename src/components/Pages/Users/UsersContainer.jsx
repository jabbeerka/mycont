import { connect } from 'react-redux';
import Users from './Users';
import {followAC, unFollowAC, getUsersAC} from '../../../Redux/users-page-reducer';


let mapStateToProps = (state) => {
    return {
        header: state.headers.imgs[5].bgimage,
        avatar: state.usersPage.imgs[1].avatar,
        users: state.usersPage.users
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;