import React from 'react';
import styles from './SendPost.module.sass';



const SendPost = (props) => {
    let newSelector = React.createRef();
    let addNewPost = () => {
      props.dispatch({type: "ADD-POST"});
    }
    let changeInput = () =>  {
    let text = newSelector.current.value;
    props.dispatch({type: "CHANGE-NEW-INPUT", text: text});
    }
    return (
      <section className= {styleMedia.prof__post}>
          <span className={styles.prof__post_header}>My Post</span> 
          <input onChange={changeInput} ref={newSelector} className={styles.prof__input} value={props.newTextArea}></input>
          <button onClick= { addNewPost } className={styles.prof__post_btn} type="button">Send</button>
      </section>
    )
}

export default SendPost;