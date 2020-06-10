import React from 'react';
import styles from './SendPost.module.sass';
// import {addPost} from '../../../../../Redux';


const SendPost = (props) => {
  let newSelector = React.createRef();

    const addNewPost = () =>  {
      debugger
    let newPost = newSelector.current.value;
    props.addPost(newPost);
    newSelector.current.value = ""
    }
    
  
    return (
      <section className= {styleMedia.prof__post}>
          <span className={styles.prof__post_header}>My Post</span> 
          <input ref={newSelector} className={styles.prof__input} placeholder="your news..."></input>
          <button onClick= { addNewPost } className={styles.prof__post_btn} type="button">Send</button>
      </section>
    )
}

export default SendPost;