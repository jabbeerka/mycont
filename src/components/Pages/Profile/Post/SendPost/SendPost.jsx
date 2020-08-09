import React from 'react';
import styles from './SendPost.module.sass';
import { NewPostReduxForm } from './SendPostContainer';

const SendPost = React.memo(({ addPost }) => {
  let addNewPost = (value) => {
    addPost(value.newPostBody);
  }
  return (
    <section className={styleMedia.prof__post}>
      <span className={styles.prof__post_header}>My Post</span>
      <NewPostReduxForm onSubmit={addNewPost} />
    </section>
  )
});



export default SendPost;