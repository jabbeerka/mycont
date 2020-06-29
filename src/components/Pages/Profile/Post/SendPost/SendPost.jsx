import React from 'react';
import styles from './SendPost.module.sass';



const SendPost = (props) => {
  console.log(props.newInput)
    let newSelector = React.createRef();
    let newPost = () => {
      props.newPost();
    }
    let changeInput = () =>  {
    let text = newSelector.current.value;
    props.newInput(text);
    }
    return (
      <section className= {styleMedia.prof__post}>
          <span className={styles.prof__post_header}>My Post</span> 
          <input onChange={changeInput} ref={newSelector} className={styles.prof__input} value={props.newTextArea}></input>
          <button onClick= { newPost } className={styles.prof__post_btn} type="button">Send</button>
      </section>
    )
}

export default SendPost;