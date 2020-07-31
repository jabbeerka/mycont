import React from 'react';
import styles from './SendPost.module.sass';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator} from '../../../../../utils/validator';
import { Element } from '../../../../../elements/Forms';

let maxLength30 = maxLengthCreator(30);
const Input = Element("input")
const SendPost = (props) => {
    let addNewPost = (value) => {
      props.addPost(value.newPostBody);
    }
    return (
      <section className= {styleMedia.prof__post}>
          <span className={styles.prof__post_header}>My Post</span>
          <NewPostReduxForm onSubmit={addNewPost} />
      </section>
    )
}

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} name="NewPost">
        <Field component={Input} className={styles.prof__input} name="newPostBody" validate={[ required, maxLength30]}/>
        <button className={styles.prof__post_btn}>Send</button>
    </form>
  )
}
const NewPostReduxForm = reduxForm({form: "addPost"})(NewPostForm)


export default SendPost;