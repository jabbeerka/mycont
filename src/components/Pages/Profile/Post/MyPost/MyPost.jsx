import React from 'react';
import styles from './MyPost.module.sass';
import Posts from '../Posts';


const MyPost = ({posts}) => {
    let post = posts.map(m => <Posts message={m.message} likes={m.likes}/>)
    return (
        <section className={styles.prof__news}>
            { post }
        </section>
    )
}
export default MyPost;
