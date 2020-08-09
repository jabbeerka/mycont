import React from 'react'
import styles from './Users.module.sass'
import Preloader from '../../../elements/Preloader'
import Paginator from '../../../elements/Paginator/Paginator';
import header from '../../../images/users-header.png';
import User from './User';


const Users = ({ totalUsersCount, pageSize, users, isFollowingProgress, unfollow, avatar, follow, isFetching, currentPage, setCurrentPage }) => {
    return (
        <div>
            <img src={header} alt="header" className={styles.header} />
            <div className={styles.container}>
                {users.map((u) =>
                    <User user={u}
                        isFollowingProgress={isFollowingProgress}
                        key={u.id}
                        follow={follow}
                        unfollow={unfollow}
                        avatar={avatar} />)
                }
                <>
                    {isFetching ? <Preloader /> : null}
                </>
                <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
export default Users;