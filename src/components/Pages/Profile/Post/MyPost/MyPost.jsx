import React from 'react';
import styles from './MyPost.module.sass';
import Posts from '../Posts';


const MyPost = (props) => {
    let messagesArr = [
        { message: "Hello, Are you watch me ?", likes: 5},
        { message: "I'm start learning to React!", likes: 6}
    ]
    let messages = messagesArr.map(m => <Posts message={m.message} likes={m.likes}/>)
    
    return (
        <section className={styles.prof__news}>
            { messages }
        </section>
    )
}
export default MyPost;
