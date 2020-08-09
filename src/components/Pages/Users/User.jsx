import React from 'react'
import styles from './Users.module.sass'
import { NavLink } from 'react-router-dom';
import avatar from '../../../images/users-avatar.png';


const User = ({ user, isFollowingProgress, follow, unfollow }) => {
    return (
        <div key={user.id} className={styles.user}>
            <div></div>
            <div className={styles.left_wrap}>
                <NavLink to={/profile/ + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : avatar} alt="avatar" className={styles.avatar} />
                </NavLink>
                {user.followed ?
                    <button disabled={isFollowingProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }
                        }
                        className={styles.follow_btn}>Unfollow</button>
                    : <button disabled={isFollowingProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }
                        }
                        className={styles.follow_btn}>Follow</button>
                }
            </div>
            <div className={styles.right_wrap}>
                <div>
                    <div className={styles.user__name}>{user.name}</div>
                    <div className={styles.user__status}> <span>status:</span> {user.status}</div>
                </div>
                <div>
                    <div className={styles.user__country}>country:<hr /></div>
                    <div className={styles.user__country}>city:</div>
                </div>
            </div>
        </div>
    )
}
export default User;