import React from 'react';
import styles from './MyPost.module.sass';

const MyPost = ({ posts }) => {
    return (
        <section
            className={styles.prof__news}>
            {posts}
        </section>
    )
}
export default MyPost;
