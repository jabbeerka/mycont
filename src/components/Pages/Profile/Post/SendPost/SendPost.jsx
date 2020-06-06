import React from 'react';
import styles from './SendPost.module.sass';


const SendPost = () => {
    return (
      <section className= {styleMedia.prof__post}>
          <span className={styles.prof__post_header}>My Post</span> 
          <input className={styles.prof__input} placeholder="your news..." type="text" name="text" id="posts"/>
          <button className={styles.prof__post_btn} type="button">Send</button>
      </section>
    )
}

export default SendPost;