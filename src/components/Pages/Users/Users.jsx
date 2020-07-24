import React from 'react'
import styles from './Users.module.sass'
import Perloader from './UsersBlock/Perloader';
import { NavLink } from 'react-router-dom';


const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i<= pageCount; i++) {
            if (i<10) {
                pages.push(`0${i}`)
            } 
            else {
                pages.push(i)
            }
        }
    return <div>
    <img src={props.header} alt="header" className={styles.header}/>
    <div className={styles.container}>
        {
            props.users.map((u)=> 
                <div key={u.id} className={styles.user}>
                    <div></div>
                    <div className={styles.left_wrap}>
                        <NavLink to={/profile/ + u.id}>
                        <img src={ u.photos.small != null ? u.photos.small : props.avatar } alt="avatar" className={styles.avatar}/>
                        </NavLink>
                        {u.follow ? 
                    <button disabled={props.isFollowingProgress.some(id => id === u.id)} 
                            onClick={()=> {
                                props.unfollow(u.id)
                                }
                            }
                            className={styles.follow_btn}>Unfollow</button>
                  : <button disabled={props.isFollowingProgress.some(id => id === u.id)} 
                            onClick={()=> {
                                props.follow(u.id)
                                }
                            }
                            className={styles.follow_btn}>Follow</button> 
                        }
                    </div>
                    <div className={styles.right_wrap}>
                        <div>
                            <div className={styles.user__name}>{u.name}</div>
                            <div className={styles.user__status}> <span>status:</span> {u.status}</div>
                        </div>
                        <div>
                            {/* <div className={styles.user__country}>{u.location.country} <hr/></div> */}
                            {/* <div className={styles.user__city}>{u.location.city}</div> */}
                        </div>
                    </div>
                </div>
            )
        }
        <div>
            {props.isFetching? <Perloader/> : null}
        </div>
        <div className={styles.current_page}>
            {pages.map((p)=>{return(<span 
                onClick={()=> props.setCurrentPage(p)}
                key={p.id}
                className={props.currentPage === p ? styles.current_page_active : styles.current_page_b }>
                {p}
                </span>)})}
        </div>
    </div>
</div>
}
export default Users;