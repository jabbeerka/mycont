import React from 'react'
import { addPost } from '../../../../../Redux/profile-page-reducer';
import SendPost from './SendPost';
import { connect } from 'react-redux';
import { required, maxLengthCreator } from '../../../../../utils/validator';
import { Element } from '../../../../../elements/Forms';
import { reduxForm } from 'redux-form';
import styles from './SendPost.module.sass';
import fieldCreator from '../../../../../utils/fieldCreator';

let maxLength30 = maxLengthCreator(30);
const Input = Element("input");

const NewPostForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} name="NewPost">
      {fieldCreator(styles.prof__input, null, "newPostBody", Input, [required, maxLength30])}
      <button className={styles.prof__post_btn}>Send</button>
    </form>
  )
}
export const NewPostReduxForm = reduxForm({ form: "addPost" })(NewPostForm);

const SendPostContainer = (props) => {
  return (
    <SendPost {...props} />
  )
}
let mapStateToProps = (state) => {
  return {
    newTextArea: state.profilePage.inputArea
  }
}
export default connect(mapStateToProps, { addPost })(SendPostContainer);
