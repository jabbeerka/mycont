import React from 'react';
import styles from './MyPost.module.sass';

const MyPost = (props) => {
    return (
        <section 
        className={styles.prof__news}>
            { props.posts }
        </section>
    )
}
export default MyPost;
