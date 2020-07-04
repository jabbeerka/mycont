import React from 'react';
import styles from './Users.module.sass';
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.length ===0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then (response => {
            props.getUsers(response.data.items)
        });
    }
        return (
                <div>
                    <img src={props.header} alt="header" className={styles.header}/>
                    <div className={styles.container}>
                        {
                            props.users.map((u)=> 
                                <div key={u.id} className={styles.user}>
                                    <div></div>
                                    <div className={styles.left_wrap}> 
                                        <img src={props.avatar} alt="avatar" className={styles.avatar}/>
                                        {u.follow 
                                        ? <button onClick={()=> props.unFollow(u.id)} className={styles.follow_btn} >Follow</button> 
                                        : <button onClick={()=>props.follow(u.id)} className={styles.follow_btn} >Unfollow</button>}
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
                    </div>
                </div>
                )
}
export default Users;