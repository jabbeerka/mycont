import React from 'react';
import styles from './Posts.module.sass';
import likePng from '../../../../images/like-heart.png'
import newsIcon from '../../../../images/post-icon.svg'


const Posts = (props) => {
    return (
        <div className={styles.wrap}>
            <img src={newsIcon} alt="news" className={styles.prof__news_img}/>
            <div className={styles.prof__news_title}> {props.message} </div>
            <img src={likePng} alt="like" className={styles.prof__like_img}/>
            <div className={styles.prof__likes}>likes: {props.likes}</div>
        </div>
        
    )
}
export default Posts;