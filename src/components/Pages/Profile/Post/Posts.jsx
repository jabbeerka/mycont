import React from 'react';
import styles from './Posts.module.sass';


const Posts = (props) => {
    return (
        <div>
            <img src="https://image.flaticon.com/icons/svg/326/326020.svg" alt="news" className={styles.prof__news_img}/>
            <div className={styles.prof__news_title}> {props.message} </div>
            <div className={styles.prof__likes}>likes: {props.likes}</div>
        </div>
        
    )
}
export default Posts;