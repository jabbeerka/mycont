import React from 'react';
import styles from './Posts.module.sass';
import likePng from '../../../../images/like-heart.png'


const Posts = (props) => {
    return (
        <div className={styles.wrap}>
            <img src="https://image.flaticon.com/icons/svg/326/326020.svg" alt="news" className={styles.prof__news_img}/>
            <div className={styles.prof__news_title}> {props.message} </div>
            <img src={likePng} alt="like" className={styles.prof__like_img}/>
            <div className={styles.prof__likes}>likes: {props.likes}</div>
        </div>
        
    )
}
export default Posts;