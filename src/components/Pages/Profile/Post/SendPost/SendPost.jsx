import React from 'react';
import styles from './SendPost.module.sass';
// import {addPost} from '../../../../../Redux';


const SendPost = (props) => {
    let newSelector = React.createRef();
    const changeInput = () =>  {
    let text = newSelector.current.value;
    props.changeNewInput(text);
    }
    return (
      <section className= {styleMedia.prof__post}>
          <span className={styles.prof__post_header}>My Post</span> 
          <input onChange={changeInput} ref={newSelector} className={styles.prof__input} value={props.newTextArea.inputText} placeholder="your news..."/>
          <button onClick= { props.addPost } className={styles.prof__post_btn} type="button">Send</button>
      </section>
    )
}

export default SendPost;