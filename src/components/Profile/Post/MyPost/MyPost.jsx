import React from 'react';
import styles from './MyPost.module.sass';


const MyPost = (props) => {
    return (
        <section className={styles.prof__news}>
            <img src="https://image.flaticon.com/icons/svg/326/326020.svg" alt="news" className={styles.prof__news_img}/>
            <div className={styles.prof__news_title}> {props.message} </div>
        </section>
    )
}
export default MyPost;
